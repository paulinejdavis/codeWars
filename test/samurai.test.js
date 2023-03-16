const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
  var ninja = new Warrior('Ninja')
  var samurai = new Warrior('Samurai')
  
  samurai.strike(ninja, 4);
  
  Test.expect(ninja.health == 60, "Ninja's health is not correct")
  
    });
  });