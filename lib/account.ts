import { CfnParameter } from 'aws-cdk-lib';
import { GuStack } from './stack';

interface Getter<T> {
	get(stack: GuStack): T;
}

const singleton = <T>(fn: (stack: GuStack) => T) => {
	let _instance: T;

	return {
		get: (stack: GuStack): T => {
			if (_instance === undefined) {
				_instance = fn(stack);
			}

			return _instance;
		},
	};
};

export const DistBucketName: Getter<string> = singleton(
	(stack: GuStack): string => {
		const bucket = new CfnParameter(stack, 'DistBucketName', {
			description: 'TODO',
			default: 'TODO',
			type: 'AWS::SSM::Parameter::Value<String>',
		});

		return bucket.valueAsString;
	},
);

export const AlarmTopicArn: Getter<string> = singleton(
	(stack: GuStack): string => {
		const arn = new CfnParameter(stack, 'AlarmTopicArn', {
			description: 'TODO',
			default: 'TODO',
			type: 'AWS::SSM::Parameter::Value<String>',
		});

		return arn.valueAsString;
	},
);

// Etc.
