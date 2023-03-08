const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(correctTail("Fox", "x"), true);
    assert.strictEqual(correctTail("Rhino", "o"), true);
    assert.strictEqual(correctTail("Meerkat", "t"), true);
    assert.strictEqual(correctTail("Emu", "t"), false);
    assert.strictEqual(correctTail("Badger", "s"), false);
    assert.strictEqual(correctTail("Giraffe", "d"), false);
  })
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  const solTail=(b,t)=>b.slice(-1)[0]==t;
  let base="abcdefghijklmnopqrstuvwxyz";

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      let b=[], len=randint(1,35);
      for (let qu=0;qu<len;qu++){
        b.push(base[randint(0,base.length-1)]);
      }
      b=[b[0].toUpperCase()].concat(b.slice(1)).join("");
      let t=randint(0,1) ? b[b.length-1] : base[randint(0,base.length-1)];
      assert.strictEqual(correctTail(b,t),solTail(b,t),`Testing for '${b}' and '${t}'`);
    }
  })
})