import { Duration } from 'aws-cdk-lib';
import {
	Alarm,
	ComparisonOperator,
	IAlarm,
	MathExpression,
	TreatMissingData,
} from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import {
	Code,
	Function,
	IFunction,
	Runtime as CdkRuntime,
	IEventSource,
	LayerVersion,
} from 'aws-cdk-lib/aws-lambda';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';
import { AlarmTopicArn, DistBucketName } from './account';
import { GuStack } from './stack';

declare enum Runtime {
	Go1,
	Node14,
	Node16,
	Java11,
}

type RuntimeMapping = {
	[Property in Runtime]: CdkRuntime;
};

// TODO document these
export interface LambdaTaskProps {
	readonly runtime: Runtime;
	readonly handler: string;
	readonly timeout?: Duration;
	readonly memorySize?: number;
	readonly errorAlarmEnabled?: boolean;
	readonly errorAlarmThresholdPercentage?: number;
	readonly errorAlarmWindowDuration?: Duration;
}

/**
 * LambdaTask is a Guardian lambda that performs a task. Use the static
 * `addEventSource` and `addSchedule` methods to add triggers.
 *
 * Logs are automatically sent to Cloudwatch and then on to logs.gutools.co.uk.
 *
 * Use devx-config to set configuration, which is made available as env vars to
 * the lambda.
 *
 * Make sure the .zip containing your lambda is uploaded to the standard dist
 * bucket for your account, and with the expected prefix.
 *
 * If required, you can access and customise the underlying function via the
 * `function` property.
 */
export class LambdaTask extends Construct {
	readonly scope: GuStack;
	readonly id: string;
	readonly function: IFunction;
	readonly errorAlarm: IAlarm;

	public constructor(scope: GuStack, id: string, props: LambdaTaskProps) {
		super(scope, id);

		const fullProps: Required<LambdaTaskProps> = {
			timeout: Duration.minutes(5),
			memorySize: 128,
			errorAlarmEnabled: true,
			errorAlarmThresholdPercentage: 5,
			errorAlarmWindowDuration: Duration.minutes(5),
			...props,
		};

		const distBucket = Bucket.fromBucketName(
			scope,
			'TODO',
			DistBucketName.get(scope),
		);

		const runtimes: RuntimeMapping = {
			[Runtime.Go1]: CdkRuntime.GO_1_X,
			[Runtime.Java11]: CdkRuntime.JAVA_11,
			[Runtime.Node14]: CdkRuntime.NODEJS_14_X,
			[Runtime.Node16]: CdkRuntime.NODEJS_16_X,
		};

		const configLayer = LayerVersion.fromLayerVersionArn(
			scope,
			'TODO',
			'TODO-arn',
		);
		const lambda = new Function(scope, `function-${id}`, {
			runtime: runtimes[fullProps.runtime],
			handler: fullProps.handler,
			code: Code.fromBucket(distBucket, `${scope.s3Prefix()}/${id}.zip`),
			environment: {
				AWS_LAMBDA_EXEC_WRAPPER: '/opt/ssm-to-env.sh',
				SSM_PATH_PREFIX: scope.ssmPrefix(),
			},
			layers: [configLayer],
			timeout: fullProps.timeout,
			memorySize: fullProps.memorySize,
		});

		const mathExpression = new MathExpression({
			expression: '100*m1/m2',
			usingMetrics: {
				m1: lambda.metricErrors(),
				m2: lambda.metricInvocations(),
			},
			label: 'TODO',
			period: Duration.minutes(1),
		});

		const errorAlarm = new Alarm(scope, `error-alarm-${id}`, {
			alarmName: 'TODO',
			alarmDescription: 'TODO',
			comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
			evaluationPeriods: 1,
			metric: mathExpression,
			threshold: fullProps.errorAlarmThresholdPercentage,
			treatMissingData: TreatMissingData.NOT_BREACHING,
		});

		const anghammaradTopic = Topic.fromTopicArn(
			scope,
			'TODO',
			AlarmTopicArn.get(scope),
		);
		errorAlarm.addAlarmAction(new SnsAction(anghammaradTopic));

		this.id = id;
		this.scope = scope;
		this.function = lambda;
		this.errorAlarm = errorAlarm;

		return this;
	}

	public addSchedule(schedule: Schedule): void {
		new Rule(this.scope, `schedule-${this.id}`, {
			schedule: schedule,
			targets: [new LambdaFunction(this.function)],
		});
	}

	public addEventSource(source: IEventSource): void {
		this.function.addEventSource(source);
	}

	public addToRolePolicy(statement: PolicyStatement): void {
		this.function.addToRolePolicy(statement);
	}
}
