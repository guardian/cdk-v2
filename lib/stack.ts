import { Stack } from 'aws-cdk-lib';

// TODO add stage/stack/app tags
export class GuStack extends Stack {
	s3Prefix(): string {
		return 'TODO';
	}
	ssmPrefix(): string {
		return 'TODO';
	}
}
