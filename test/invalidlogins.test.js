const Test = require('@codewars/test-compat');

describe("Validate the Inputs", function() {
  it("Fixed Tests", function() {
    Test.assertEquals(validate('Timmy','password'),'Successfully Logged in!',"Should successfully login!")
    Test.assertEquals(validate('Timmy','h4x0r'),'Wrong username or password!',"The password was wrong")
    Test.assertEquals(validate('Alice','alice'),'Successfully Logged in!',"Should successfully login!")
    Test.assertEquals(validate('Timmy','password"||""=="'),'Wrong username or password!',"Should fail to login because of injected code")
    Test.assertEquals(validate('Admin','gs5bw"||1==1//'),'Wrong username or password!',"Should fail to login because of injected code")
  });
});