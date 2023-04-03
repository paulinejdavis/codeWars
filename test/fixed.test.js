const Test = require("@codewars/test-compat");

var assert = require("chai").assert;

describe("checking syntax and function integrity", function () {
  it("should check if myFunction exists", function () {
    assert.isFunction(myFunction);
  });

  it("should return 'string' when myFunction is called", function () {
    Test.assertEquals(
      myFunction().objMethod(),
      "string",
      'myFunction did not return "string"'
    );
  });
});
