# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuScheduledLambda <a name="GuScheduledLambda" id="cdk-v2.GuScheduledLambda"></a>

#### Initializers <a name="Initializers" id="cdk-v2.GuScheduledLambda.Initializer"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

new GuScheduledLambda(scope: GuStack, id: string, props: GuScheduledLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.GuScheduledLambda.Initializer.parameter.scope">scope</a></code> | <code><a href="#cdk-v2.GuStack">GuStack</a></code> | *No description.* |
| <code><a href="#cdk-v2.GuScheduledLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuScheduledLambda.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-v2.GuScheduledLambdaProps">GuScheduledLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-v2.GuScheduledLambda.Initializer.parameter.scope"></a>

- *Type:* <a href="#cdk-v2.GuStack">GuStack</a>

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-v2.GuScheduledLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-v2.GuScheduledLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-v2.GuScheduledLambdaProps">GuScheduledLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-v2.GuScheduledLambda.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-v2.GuScheduledLambda.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-v2.GuScheduledLambda.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#cdk-v2.GuScheduledLambda.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#cdk-v2.GuScheduledLambda.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#cdk-v2.GuScheduledLambda.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#cdk-v2.GuScheduledLambda.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#cdk-v2.GuScheduledLambda.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#cdk-v2.GuScheduledLambda.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#cdk-v2.GuScheduledLambda.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#cdk-v2.GuScheduledLambda.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |

---

##### `toString` <a name="toString" id="cdk-v2.GuScheduledLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-v2.GuScheduledLambda.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-v2.GuScheduledLambda.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="cdk-v2.GuScheduledLambda.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the @aws-cdk/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from '@aws-cdk/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="cdk-v2.GuScheduledLambda.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="cdk-v2.GuScheduledLambda.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="cdk-v2.GuScheduledLambda.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-v2.GuScheduledLambda.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addPermission` <a name="addPermission" id="cdk-v2.GuScheduledLambda.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="cdk-v2.GuScheduledLambda.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="cdk-v2.GuScheduledLambda.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="cdk-v2.GuScheduledLambda.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-v2.GuScheduledLambda.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="cdk-v2.GuScheduledLambda.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="cdk-v2.GuScheduledLambda.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `grantInvoke` <a name="grantInvoke" id="cdk-v2.GuScheduledLambda.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-v2.GuScheduledLambda.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="cdk-v2.GuScheduledLambda.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-v2.GuScheduledLambda.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="cdk-v2.GuScheduledLambda.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="cdk-v2.GuScheduledLambda.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="cdk-v2.GuScheduledLambda.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="cdk-v2.GuScheduledLambda.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addEnvironment` <a name="addEnvironment" id="cdk-v2.GuScheduledLambda.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="cdk-v2.GuScheduledLambda.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-v2.GuScheduledLambda.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-v2.GuScheduledLambda.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="cdk-v2.GuScheduledLambda.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="cdk-v2.GuScheduledLambda.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-v2.GuScheduledLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-v2.GuScheduledLambda.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-v2.GuScheduledLambda.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#cdk-v2.GuScheduledLambda.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#cdk-v2.GuScheduledLambda.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#cdk-v2.GuScheduledLambda.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-v2.GuScheduledLambda.isConstruct"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-v2.GuScheduledLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="cdk-v2.GuScheduledLambda.isResource"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-v2.GuScheduledLambda.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="cdk-v2.GuScheduledLambda.classifyVersionProperty"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="cdk-v2.GuScheduledLambda.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="cdk-v2.GuScheduledLambda.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="cdk-v2.GuScheduledLambda.fromFunctionArn"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-v2.GuScheduledLambda.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-v2.GuScheduledLambda.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-v2.GuScheduledLambda.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="cdk-v2.GuScheduledLambda.fromFunctionAttributes"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-v2.GuScheduledLambda.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-v2.GuScheduledLambda.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-v2.GuScheduledLambda.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `metricAll` <a name="metricAll" id="cdk-v2.GuScheduledLambda.metricAll"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-v2.GuScheduledLambda.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="cdk-v2.GuScheduledLambda.metricAllConcurrentExecutions"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="cdk-v2.GuScheduledLambda.metricAllDuration"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="cdk-v2.GuScheduledLambda.metricAllErrors"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="cdk-v2.GuScheduledLambda.metricAllInvocations"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="cdk-v2.GuScheduledLambda.metricAllThrottles"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="cdk-v2.GuScheduledLambda.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { GuScheduledLambda } from 'cdk-v2'

GuScheduledLambda.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-v2.GuScheduledLambda.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.GuScheduledLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#cdk-v2.GuScheduledLambda.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#cdk-v2.GuScheduledLambda.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#cdk-v2.GuScheduledLambda.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-v2.GuScheduledLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-v2.GuScheduledLambda.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-v2.GuScheduledLambda.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-v2.GuScheduledLambda.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-v2.GuScheduledLambda.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-v2.GuScheduledLambda.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="cdk-v2.GuScheduledLambda.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="cdk-v2.GuScheduledLambda.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="cdk-v2.GuScheduledLambda.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="cdk-v2.GuScheduledLambda.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-v2.GuScheduledLambda.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-v2.GuScheduledLambda.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="cdk-v2.GuScheduledLambda.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-v2.GuScheduledLambda.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ associated with this Lambda Function (this is an optional attribute).

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-v2.GuScheduledLambda.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-v2.GuScheduledLambda.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-v2.GuScheduledLambda.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


### GuStack <a name="GuStack" id="cdk-v2.GuStack"></a>

- *Implements:* <a href="#cdk-v2.IStackStageIdentity">IStackStageIdentity</a>

#### Initializers <a name="Initializers" id="cdk-v2.GuStack.Initializer"></a>

```typescript
import { GuStack } from 'cdk-v2'

new GuStack(app: App, id: string, props: GuStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.GuStack.Initializer.parameter.app">app</a></code> | <code>aws-cdk-lib.App</code> | *No description.* |
| <code><a href="#cdk-v2.GuStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuStack.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-v2.GuStackProps">GuStackProps</a></code> | *No description.* |

---

##### `app`<sup>Required</sup> <a name="app" id="cdk-v2.GuStack.Initializer.parameter.app"></a>

- *Type:* aws-cdk-lib.App

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-v2.GuStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-v2.GuStack.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-v2.GuStackProps">GuStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-v2.GuStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-v2.GuStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#cdk-v2.GuStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#cdk-v2.GuStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#cdk-v2.GuStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#cdk-v2.GuStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#cdk-v2.GuStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#cdk-v2.GuStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#cdk-v2.GuStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#cdk-v2.GuStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#cdk-v2.GuStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |

---

##### `toString` <a name="toString" id="cdk-v2.GuStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk-v2.GuStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="cdk-v2.GuStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="cdk-v2.GuStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="cdk-v2.GuStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="cdk-v2.GuStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="cdk-v2.GuStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="cdk-v2.GuStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-v2.GuStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="cdk-v2.GuStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="cdk-v2.GuStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="cdk-v2.GuStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="cdk-v2.GuStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `renameLogicalId` <a name="renameLogicalId" id="cdk-v2.GuStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="cdk-v2.GuStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="cdk-v2.GuStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="cdk-v2.GuStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="cdk-v2.GuStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="cdk-v2.GuStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-v2.GuStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="cdk-v2.GuStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-v2.GuStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="cdk-v2.GuStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="cdk-v2.GuStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-v2.GuStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="cdk-v2.GuStack.toJsonString.parameter.space"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-v2.GuStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-v2.GuStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#cdk-v2.GuStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-v2.GuStack.isConstruct"></a>

```typescript
import { GuStack } from 'cdk-v2'

GuStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-v2.GuStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdk-v2.GuStack.isStack"></a>

```typescript
import { GuStack } from 'cdk-v2'

GuStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk-v2.GuStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk-v2.GuStack.of"></a>

```typescript
import { GuStack } from 'cdk-v2'

GuStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-v2.GuStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.GuStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-v2.GuStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#cdk-v2.GuStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#cdk-v2.GuStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#cdk-v2.GuStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#cdk-v2.GuStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#cdk-v2.GuStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#cdk-v2.GuStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#cdk-v2.GuStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#cdk-v2.GuStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#cdk-v2.GuStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#cdk-v2.GuStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#cdk-v2.GuStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#cdk-v2.GuStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#cdk-v2.GuStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#cdk-v2.GuStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#cdk-v2.GuStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#cdk-v2.GuStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#cdk-v2.GuStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#cdk-v2.GuStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#cdk-v2.GuStack.property.stack">stack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuStack.property.stage">stage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-v2.GuStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="cdk-v2.GuStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concerete account (e.g. `585695031111`) or the
    `Aws.accountId` token.
3. `Aws.accountId`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="cdk-v2.GuStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="cdk-v2.GuStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk-v2.GuStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-v2.GuStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.account` or `Aws.region`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="cdk-v2.GuStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="cdk-v2.GuStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="cdk-v2.GuStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="cdk-v2.GuStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="cdk-v2.GuStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="cdk-v2.GuStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.region`
    token.
3. `Aws.region`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="cdk-v2.GuStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-v2.GuStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.stackName` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdk-v2.GuStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-v2.GuStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="cdk-v2.GuStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="cdk-v2.GuStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="cdk-v2.GuStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="cdk-v2.GuStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-v2.GuStack.property.stack"></a>

```typescript
public readonly stack: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="cdk-v2.GuStack.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### GuLambdaErrorPercentageMonitoringProps <a name="GuLambdaErrorPercentageMonitoringProps" id="cdk-v2.GuLambdaErrorPercentageMonitoringProps"></a>

#### Initializer <a name="Initializer" id="cdk-v2.GuLambdaErrorPercentageMonitoringProps.Initializer"></a>

```typescript
import { GuLambdaErrorPercentageMonitoringProps } from 'cdk-v2'

const guLambdaErrorPercentageMonitoringProps: GuLambdaErrorPercentageMonitoringProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.GuLambdaErrorPercentageMonitoringProps.property.tolerated5xxPercentage">tolerated5xxPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-v2.GuLambdaErrorPercentageMonitoringProps.property.numberOfMinutesAboveThresholdBeforeAlarm">numberOfMinutesAboveThresholdBeforeAlarm</a></code> | <code>number</code> | *No description.* |

---

##### `tolerated5xxPercentage`<sup>Required</sup> <a name="tolerated5xxPercentage" id="cdk-v2.GuLambdaErrorPercentageMonitoringProps.property.tolerated5xxPercentage"></a>

```typescript
public readonly tolerated5xxPercentage: number;
```

- *Type:* number

---

##### `numberOfMinutesAboveThresholdBeforeAlarm`<sup>Optional</sup> <a name="numberOfMinutesAboveThresholdBeforeAlarm" id="cdk-v2.GuLambdaErrorPercentageMonitoringProps.property.numberOfMinutesAboveThresholdBeforeAlarm"></a>

```typescript
public readonly numberOfMinutesAboveThresholdBeforeAlarm: number;
```

- *Type:* number

---

### GuScheduledLambdaProps <a name="GuScheduledLambdaProps" id="cdk-v2.GuScheduledLambdaProps"></a>

#### Initializer <a name="Initializer" id="cdk-v2.GuScheduledLambdaProps.Initializer"></a>

```typescript
import { GuScheduledLambdaProps } from 'cdk-v2'

const guScheduledLambdaProps: GuScheduledLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#cdk-v2.NoMonitoring">NoMonitoring</a> \| <a href="#cdk-v2.GuLambdaErrorPercentageMonitoringProps">GuLambdaErrorPercentageMonitoringProps</a></code> | *No description.* |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.rules">rules</a></code> | <code><a href="#cdk-v2.ScheduleRule">ScheduleRule</a>[]</code> | *No description.* |
| <code><a href="#cdk-v2.GuScheduledLambdaProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="cdk-v2.GuScheduledLambdaProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-v2.GuScheduledLambdaProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="cdk-v2.GuScheduledLambdaProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="cdk-v2.GuScheduledLambdaProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="cdk-v2.GuScheduledLambdaProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="cdk-v2.GuScheduledLambdaProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-v2.GuScheduledLambdaProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="cdk-v2.GuScheduledLambdaProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="cdk-v2.GuScheduledLambdaProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-v2.GuScheduledLambdaProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="cdk-v2.GuScheduledLambdaProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-v2.GuScheduledLambdaProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-v2.GuScheduledLambdaProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="cdk-v2.GuScheduledLambdaProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `events`<sup>Optional</sup> <a name="events" id="cdk-v2.GuScheduledLambdaProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="cdk-v2.GuScheduledLambdaProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="cdk-v2.GuScheduledLambdaProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="cdk-v2.GuScheduledLambdaProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="cdk-v2.GuScheduledLambdaProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="cdk-v2.GuScheduledLambdaProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-v2.GuScheduledLambdaProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="cdk-v2.GuScheduledLambdaProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="cdk-v2.GuScheduledLambdaProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="cdk-v2.GuScheduledLambdaProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="cdk-v2.GuScheduledLambdaProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="cdk-v2.GuScheduledLambdaProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="cdk-v2.GuScheduledLambdaProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-v2.GuScheduledLambdaProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-v2.GuScheduledLambdaProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-v2.GuScheduledLambdaProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="cdk-v2.GuScheduledLambdaProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-v2.GuScheduledLambdaProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-v2.GuScheduledLambdaProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

Only used if 'vpc' is supplied. Note: internet access for Lambdas
requires a NAT gateway, so picking Public subnets is not allowed.

---

##### `app`<sup>Required</sup> <a name="app" id="cdk-v2.GuScheduledLambdaProps.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="cdk-v2.GuScheduledLambdaProps.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="cdk-v2.GuScheduledLambdaProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="cdk-v2.GuScheduledLambdaProps.property.monitoringConfiguration"></a>

```typescript
public readonly monitoringConfiguration: NoMonitoring | GuLambdaErrorPercentageMonitoringProps;
```

- *Type:* <a href="#cdk-v2.NoMonitoring">NoMonitoring</a> | <a href="#cdk-v2.GuLambdaErrorPercentageMonitoringProps">GuLambdaErrorPercentageMonitoringProps</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="cdk-v2.GuScheduledLambdaProps.property.rules"></a>

```typescript
public readonly rules: ScheduleRule[];
```

- *Type:* <a href="#cdk-v2.ScheduleRule">ScheduleRule</a>[]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-v2.GuScheduledLambdaProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

### GuStackProps <a name="GuStackProps" id="cdk-v2.GuStackProps"></a>

#### Initializer <a name="Initializer" id="cdk-v2.GuStackProps.Initializer"></a>

```typescript
import { GuStackProps } from 'cdk-v2'

const guStackProps: GuStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.GuStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#cdk-v2.GuStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#cdk-v2.GuStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#cdk-v2.GuStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#cdk-v2.GuStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#cdk-v2.GuStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#cdk-v2.GuStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#cdk-v2.GuStackProps.property.stack">stack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuStackProps.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.GuStackProps.property.cloudFormationStackName">cloudFormationStackName</a></code> | <code>string</code> | The AWS CloudFormation stack name (as shown in the AWS CloudFormation UI). |
| <code><a href="#cdk-v2.GuStackProps.property.withoutTags">withoutTags</a></code> | <code>boolean</code> | Set this to true to stop the GuStack from tagging all of your AWS resources. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="cdk-v2.GuStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-v2.GuStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="cdk-v2.GuStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `stackName`<sup>Optional</sup> <a name="stackName" id="cdk-v2.GuStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="cdk-v2.GuStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-v2.GuStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="cdk-v2.GuStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-v2.GuStackProps.property.stack"></a>

```typescript
public readonly stack: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="cdk-v2.GuStackProps.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `cloudFormationStackName`<sup>Optional</sup> <a name="cloudFormationStackName" id="cdk-v2.GuStackProps.property.cloudFormationStackName"></a>

```typescript
public readonly cloudFormationStackName: string;
```

- *Type:* string
- *Default:* the `GU_CFN_STACK_NAME` environment variable

The AWS CloudFormation stack name (as shown in the AWS CloudFormation UI).

---

##### `withoutTags`<sup>Optional</sup> <a name="withoutTags" id="cdk-v2.GuStackProps.property.withoutTags"></a>

```typescript
public readonly withoutTags: boolean;
```

- *Type:* boolean

Set this to true to stop the GuStack from tagging all of your AWS resources.

This should only be turned on as part of an initial migration from CloudFormation.

---

### NoMonitoring <a name="NoMonitoring" id="cdk-v2.NoMonitoring"></a>

#### Initializer <a name="Initializer" id="cdk-v2.NoMonitoring.Initializer"></a>

```typescript
import { NoMonitoring } from 'cdk-v2'

const noMonitoring: NoMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.NoMonitoring.property.disabled">disabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="cdk-v2.NoMonitoring.property.disabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* boolean

---

### ScheduleRule <a name="ScheduleRule" id="cdk-v2.ScheduleRule"></a>

#### Initializer <a name="Initializer" id="cdk-v2.ScheduleRule.Initializer"></a>

```typescript
import { ScheduleRule } from 'cdk-v2'

const scheduleRule: ScheduleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.ScheduleRule.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |
| <code><a href="#cdk-v2.ScheduleRule.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="cdk-v2.ScheduleRule.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-v2.ScheduleRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IStackStageIdentity <a name="IStackStageIdentity" id="cdk-v2.IStackStageIdentity"></a>

- *Implemented By:* <a href="#cdk-v2.GuStack">GuStack</a>, <a href="#cdk-v2.IStackStageIdentity">IStackStageIdentity</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-v2.IStackStageIdentity.property.stack">stack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-v2.IStackStageIdentity.property.stage">stage</a></code> | <code>string</code> | *No description.* |

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-v2.IStackStageIdentity.property.stack"></a>

```typescript
public readonly stack: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="cdk-v2.IStackStageIdentity.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

