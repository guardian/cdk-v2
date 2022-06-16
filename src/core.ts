import { App, LegacyStackSynthesizer, Stack, StackProps, Tags } from 'aws-cdk-lib';

export interface GuStackProps extends Omit<StackProps, 'stackName'> {
  stack: string;
  stage: string;

  /**
     * The AWS CloudFormation stack name (as shown in the AWS CloudFormation UI).
     * @defaultValue the `GU_CFN_STACK_NAME` environment variable
     */
  cloudFormationStackName?: string;

  /**
     * Set this to true to stop the GuStack from tagging all of your AWS resources.
     * This should only be turned on as part of an initial migration from CloudFormation.
     */
  withoutTags?: boolean;
}

export interface StackStageIdentity {
  stack: string;
  stage: string;
}

export class GuStack extends Stack implements StackStageIdentity {
  private readonly _stack: string;
  private readonly _stage: string;

  get stage(): string {
    return this._stage;
  }

  get stack(): string {
    return this._stack;
  }

  constructor(app: App, id: string, props: GuStackProps) {
    const { cloudFormationStackName = process.env.GU_CFN_STACK_NAME } = props;

    super(app, id, {
      ...props,
      stackName: cloudFormationStackName,
      synthesizer: new LegacyStackSynthesizer(),
    });

    this._stack = props.stack;
    this._stage = props.stage.toUpperCase();

    if (!props.withoutTags) {
      this.addTag('gu:cdk:version', 'TEST');
      this.addTag('gu:repo', 'guardian/cdk');
      this.addTag('Stack', this.stack);
      this.addTag('Stage', this.stage);
    }
  }

  protected addTag(key: string, value: string, applyToLaunchedInstances: boolean = true): void {
    Tags.of(this).add(key, value, { applyToLaunchedInstances });
  }
}
