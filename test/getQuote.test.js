const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(getQuotes('"Computers are useless. They can only give you answers." - Pablo Picasso, "Never trust a computer you can\'t throw out a window." - Steve Wozniak')
,["\"Computers are useless. They can only give you answers.\"","\"Never trust a computer you can't throw out a window.\""]);
Test.assertSimilar(getQuotes("var re = new RegExp(\"Hello\", \"g\");")
, ["\"Hello\"","\"g\""],'("var re = new RegExp(\"Hello\", \"g\");")');
  });
});