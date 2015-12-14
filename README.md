# particles-lambda

Particles for [condensation](https://github.com/SungardAS/condensation) that help build an AWS Lambda.

## Use

    > npm install
    > gulp

Templates will be created in the `dist` directory

To upload to S3 create `config/local.js` with bucket configuation and
run `gulp deploy`

## Particles

### cftemplates

#### function

A stack that will create a AWS Lambda function.The stack points to a file in S3 bucket for the source code.

#### function.eventsource

A stack that will create a AWS Lambda function and maps it to an Amazon Kensis stream or Amazon DynamoDB stream.

#### function.permission

A stack that will create a AWS Lambda function and associates a policy statement with the function's access policy.
