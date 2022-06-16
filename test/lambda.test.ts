import { App, Duration } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { GuStack, GuStackProps } from '../src/core';
import { GuScheduledLambda, NoMonitoring } from '../src/lambda';

describe('GuScheduledLambda', () => {
  it('should match the snapshot', () =>{
    const stack = simpleGuStackForTesting();
    const noMonitoring: NoMonitoring = { noMonitoring: true };
    const props = {
      fileName: 'lambda.zip',
      functionName: 'my-lambda-function',
      handler: 'my-lambda/handler',
      runtime: Runtime.NODEJS_12_X,
      rules: [{ schedule: Schedule.rate(Duration.minutes(1)) }],
      monitoringConfiguration: noMonitoring,
      app: 'testing',
    };
    new GuScheduledLambda(stack, 'my-lambda-function', props);

    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
  });
});

const simpleGuStackForTesting =( props?: Partial<GuStackProps>) => {
  return new GuStack(new App(), 'Test', {
    stack: props?.stack ?? 'test-stack',
    stage: props?.stage ?? 'TEST',
    ...props,
  });
};
