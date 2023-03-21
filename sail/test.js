// test/stringCalculator.js

const stringCalculator = require("../src/stringCalculator");

describe("given a string", () => {
  it("should return the string, plus expected output using addition", () => {
    expect(stringCalculator("1 + 1")).toEqual(["1 + 1", 2.0]);
  });

})

// src/add.js

const add = (str) => {
    const addition = (acc, num) => acc + num;
    const splitStr = str.split("+").map(Number).reduce(addition);
    const fixed = splitStr.toFixed(2);
    return [str, parseFloat(fixed)];
  };
  
  module.exports = add;

  //src/stringCalculator.js
const add = require("./add");
const minus = require("./minus");
const multiply = require("./multiply");
const divide = require("./divide");

const stringCalculator = (str) => {
  if (str.includes("+")) {
    return add(str);
  }
  if (str.includes("-")) {
    return minus(str);
  }
  if (str.includes("*")) {
    return multiply(str);
  }
  if (str.includes("/")) {
    return divide(str);
  }
};

module.exports = stringCalculator;