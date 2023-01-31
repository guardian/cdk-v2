# @guardian/cdk-v2

Experimental v2. Aims are:

## 'Intent-based' abstractions

Constructs should be opinionated. This means they should have narrow interfaces
and must not expose props for any underlying constructs. It also means that, as
a rule of thumb, they should not extend other constructs as this also indicates
a lack of intent. Avoid thin wrappers.

Sometimes even individual props can be too broad. For example, 'userData' is
wide open, which burdens consumers, and compromises standardisation and best
practice. v2 aims to avoid this kind of prop.

Occasionally it will be necessary for teams to customise the underlying AWS
constructs. To support this, v2 continues the helpful pattern of returning
underlying constructs in the response.

## AWS Style

AWS CDK has an opinionated style:

https://github.com/aws/aws-cdk/blob/main/docs/DESIGN_GUIDELINES.md

v1 does not match this guide in several ways, for example:

* **prop nesting:** AWS [require props to be
'flat'](https://github.com/aws/aws-cdk/blob/main/docs/DESIGN_GUIDELINES.md#flat)
but we
[frequently](https://github.com/guardian/cdk/blob/main/src/patterns/ec2-app/base.ts#L139)
[nest](https://github.com/guardian/cdk/blob/main/src/patterns/ec2-app/base.ts#L143)
* **inheritance:** v1 makes significant use of inheritance but AWS recommend
  that constructs only implement `Construct` and not higher-level constructs
  (the rationale is at least in part to achieve the 'intent-based' abstractions
  discussed above)

Given that Guardian CDK and AWS CDK are always used together, and because AWS
style is well-considered, v2 aims to be largely consistent with AWS style.
Custom lint rules are provided and enforced in CI to ensure this. (AWS do not
publish their own lint rules unfortunately.)

## Everything documented

Any exported functions, classes, and properties, MUST be documented in a
consistent way.

## Dashboards

All constructs should come with dashboards for monitoring. Perhaps a shared
dashboard for the stack?

## Corresponding Riffraff deployment types

Mapping @guardian/cdk output to Riffraff deployment types is tricky, despite
some excellent work by @akash! To make things easier, let's modify RR to better
match our CDK constructs.

To illustrate, the `LambdaTask` construct would have a corresponding deployment
type:

```
myLambda
  type: guardian-cdk
  app: my-app
  stack: my-stack
  templates:
    CODE: cfn-CODE.json
    PROD: cfn-PROD.json
  constructs:
    - type: LambdaTask
      parameters:
        file: "my-lambda.zip"


  dependencies: [myCloudFormation]
  app: my-app
  parameters:
    file: "my-lambda.zip"
```

A new deployment type - `LambdaTask` - ensures things such as file S3 location
automatically match. Unlike the curent lambda model it uploads the S3 file and
then updates the lambda, so it works whether th Note, `app` is required here as
it is a point of confusion in the current RR model.