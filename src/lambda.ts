import { CfnParameter, Duration, Tags } from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Function, FunctionProps, Runtime, RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { GuStack } from './core';

export interface NoMonitoring {
  noMonitoring: true;
}

interface GuLambdaErrorPercentageMonitoringProps {
  tolerated5xxPercentage: number;
  numberOfMinutesAboveThresholdBeforeAlarm?: number;
}

interface AppIdentity {
  app: string;
}

// TODO this feels messy! Should default based on stack/stage/app OR pass in
// full value. Not half and half.
interface Artifact {
  fileName: string;
}

interface GuScheduledLambdaProps extends Omit<FunctionProps, 'code'>, AppIdentity, Artifact {
  rules: Array<{
    schedule: Schedule;
    description?: string;
  }>;
  monitoringConfiguration: NoMonitoring | GuLambdaErrorPercentageMonitoringProps;
}

export class GuScheduledLambda extends Function {
  public constructor(scope: GuStack, id: string, props: GuScheduledLambdaProps ) {
    const { app, fileName, runtime, memorySize } = props;

    const defaultEnvironmentVariables = {
      STACK: scope.stack,
      STAGE: scope.stage,
      APP: app,
    };

    const defaultProps: Partial<GuScheduledLambdaProps> = {
      memorySize: defaultMemorySize(runtime, memorySize),
      timeout: Duration.seconds(30),
      environment: {
        ...props.environment,
        ...defaultEnvironmentVariables,
      },
    };

    const bucket = Bucket.fromBucketName(
      scope,
      `${id}-bucket`,
      new CfnParameter(scope, 'DistributionBucketName', {
        type: 'AWS::SSM::Parameter::Value<String>',
        description: 'SSM parameter containing the S3 bucket name holding distribution artifacts',
        default: '/account/services/artifact.bucket',
      }).valueAsString,
    );

    const objectKey = distKey(scope.stack, scope.stage, app, fileName);
    const code = Code.fromBucket(bucket, objectKey);

    super(scope, id, {
      code,

      ...defaultProps,
      ...props,
    });

    Tags.of(this).add('App', props.app);

    bucket.grantRead(this);

    this.addToRolePolicy(new PolicyStatement({
      actions: ['ssm:GetParametersByPath'],
      resources: [`arn:aws:ssm:${scope.region}:${scope.account}:parameter/${scope.stage}/${scope.stack}/${props.app}`],
    }));

    this.addToRolePolicy(new PolicyStatement({
      actions: ['ssm:GetParameters', 'ssm:GetParameter'],
      resources: [`arn:aws:ssm:${scope.region}:${scope.account}:parameter/${scope.stage}/${scope.stack}/${props.app}/*`],
    }));

    props.rules.forEach((rule, index) => {
      const target = new LambdaFunction(this);
      new Rule(this, `${id}-${rule.schedule.expressionString}-${index}`, {
        schedule: rule.schedule,
        targets: [target],
        ...(rule.description && { description: rule.description }),
        enabled: true,
      });
    });
  }
}

const defaultMemorySize = (runtime: Runtime, memorySize?: number): number => {
  if (memorySize) {
    return memorySize;
  } else {
    switch (runtime.family) {
      case RuntimeFamily.JAVA:
        return 1024;
      default:
        return 512;
    }
  }
};

const distKey = (stack: string, stage: string, app: string, fileName: string) => {
  return [stack, stage, app, fileName].join('/');
};