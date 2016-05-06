# particles-lambda

# particles-vpc

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]


## Summary

[Condensation][condensation-url] particles that create AWS Lambda resources.

## Particles

### cftemplates

#### function

A stack that will create a AWS Lambda function.The stack points to a file in S3 bucket for the source code.

#### function.eventsource

A stack that will create a AWS Lambda function and maps it to an Amazon Kensis stream or Amazon DynamoDB stream.

#### function.permission

A stack that will create a AWS Lambda function and associates a policy statement with the function's access policy.


[condensation-image]:
https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-vpc.svg
[npm-url]: https://npmjs.org/package/particles-vpc
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]:
https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge





