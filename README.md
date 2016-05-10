# particles-lambda

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]


## Summary

[Condensation][condensation-url] particles that create AWS Lambda resources.

## Particles

### cftemplates

#### event\_source

A stack that will map an existing Lambda Function to an Amazon Kensis or Amazon DynamoDB stream.

#### function

A stack that will create a AWS Lambda function.  The stack requires the source to exist as a zip file on S3.


#### permission

A stack that will associate a policy statement with an existing Lambda Function.


[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-lambda.svg
[npm-url]: https://npmjs.org/package/particles-lambda
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-lambda.svg?branch=develop
[travis-url]: https://travis-ci.org/SungardAS/particles-lambda
