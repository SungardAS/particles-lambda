var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("function", function() {

    it("creates an empty function", function() {
      cTests.testParticle(
        "resource",
        "function",
        require('./fixtures/resource_function_output_1'),
        {logicalId: "LambdaFunction"}
      );
    });

    it("can set the timeout property", function() {
      cTests.testParticle(
        "resource",
        "function",
        require('./fixtures/resource_function_output_2'),
        {
          logicalId: "LambdaFunction",
          hArgs: {
            timeout: 30
          }
        }
      );
    });

    it("can set the handler property", function() {
      cTests.testParticle(
        "resource",
        "function",
        require('./fixtures/resource_function_output_3'),
        {
          logicalId: "LambdaFunction",
          hArgs: {
            handler: "index.handler"
          }
        }
      );
    });

    it("can set the handler property as a ref", function() {
      cTests.testParticle(
        "resource",
        "function",
        require('./fixtures/resource_function_output_4'),
        {
          logicalId: "LambdaFunction",
          hArgs: {
            handler: '{"Ref": "Handler"}'
          }
        }
      );
    });

  });
});
