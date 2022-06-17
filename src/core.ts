import { App, LegacyStackSynthesizer, Stack, StackProps, Tags } from 'aws-cdk-lib';

export interface GuStackProps extends StackProps {
  readonly stack: string;
  readonly stage: string;

  /**
     * The AWS CloudFormation stack name (as shown in the AWS CloudFormation UI).
     * @defaultValue the `GU_CFN_STACK_NAME` environment variable
     */
  readonly cloudFormationStackName?: string;

  /**
     * Set this to true to stop the GuStack from tagging all of your AWS resources.
     * This should only be turned on as part of an initial migration from CloudFormation.
     */
  readonly withoutTags?: boolean;
}

export interface IStackStageIdentity {
  readonly stack: string;
  readonly stage: string;
}

export class GuStack extends Stack implements IStackStageIdentity {
  readonly stack: string;
  readonly stage: string;

  constructor(app: App, id: string, props: GuStackProps) {
    const { cloudFormationStackName = process.env.GU_CFN_STACK_NAME } = props;

    super(app, id, {
      ...props,
      stackName: cloudFormationStackName,
      synthesizer: new LegacyStackSynthesizer(),
    });

    this.stack = props.stack;
    this.stage = props.stage.toUpperCase();

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
