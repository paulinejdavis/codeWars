const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed Tests", () => {
  it("Should pass fixed tests", () => {

    assert.strictEqual(mango(3, 3), 6)
    assert.strictEqual(mango(9, 5), 30)
    assert.strictEqual(mango(2, 3), 6)
    assert.strictEqual(mango(7, 3), 15)
    assert.strictEqual(mango(31, 11), 231)
    assert.strictEqual(mango(14, 2), 20)
    
  });
});
    

describe("Random Tests:", function(){
  function mangoCheck(quantity, price){
    return ~~(quantity/3)*2*price + (quantity%3)*price
  }
  for (let i=1; i<100; i++){
    let q1 = Math.floor((Math.random()*100)+1);
    let p1 = Math.floor((Math.random()*100)+1);
    it(`Testing with ${q1} mangoes and price = ${p1}`, () => {
      assert.strictEqual(mango(q1, p1), mangoCheck(q1,p1));
    });
  }
});