const { assert } = require('chai');

describe("Tests", () => {
  it("One and only test", () => assert.strictEqual(ifChuckSaysSo(), false));
});

describe("Cheat test", () => {
  function checkCode() {
    const code = require('fs').readFileSync('/workspace/solution.txt', 'utf-8');
    if(code.match(/false/g))
      assert.fail("You've been punched! Stop Cheating!");
    else {
      console.log('Chuck loves you');
      assert.notMatch(code, /false/g, "No roundhouse necessary");
    }
  }
 it("scare the truth", () => checkCode());
})
