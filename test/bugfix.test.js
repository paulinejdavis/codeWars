const Test = require('@codewars/test-compat');

let ojuh = Object.freeze(Math);

describe("Fix Timmys Regex", function() {
  it("Fixed Tests", function() {
    Test.assertEquals(filterWords("You're Bad! timmy!"),"You're awesome! timmy!");
    Test.assertEquals(filterWords("You're MEAN! timmy!"),"You're awesome! timmy!");
    Test.assertEquals(filterWords("You're UGLY!! timmy!"),"You're awesome!! timmy!");
    Test.assertEquals(filterWords("You're horrible! timmy!"),"You're awesome! timmy!");
    Test.assertEquals(filterWords("You're HiDeOuS!! timmy!"),"You're awesome!! timmy!");
    Test.assertEquals(filterWords("You're Meanish!! timmy!"),"You're awesomeish!! timmy!");
  });
  
   it("Random Tests", function() {
    for(let i=0;i<50;i++){
      let p = Math.floor(Math.random()*5);
      Test.assertEquals(filterWords(genPhrase(p)),genPhrase(p,true))
    }
  });
});

function genPhrase(n,a){
  let mw = a==null?[
  'bad','mean','ugly','horrible','hideous',
  'Bad','MEaN','UglY','HorrIbLe','HiDeOuS',
  'BAD','MEAN','UGLY','HORRIBLE','HIDEOUS',
  'baD','MeaN','UglY','HoRRiBlE','HideouS'
  ]:['awesome'];
  
  let w1 = Math.floor(Math.random()*mw.length), w2 = Math.floor(Math.random()*mw.length), w3 = Math.floor(Math.random()*mw.length), w4 = Math.floor(Math.random()*mw.length);

  let phrases = [
  `Man timmy you really are ${mw[w1]}`,
  `You're Soo ${mw[w1]} and ${mw[w3]}!`,
  `You ${mw[w1]} and ${mw[w2]} and ${mw[w3]} and ${mw[w4]}!!`,
  `Go on timmy you ${mw[w3]} person!`,
  `Go on timmy you ${mw[w3]}ish person!`
  ];
  return phrases[n];
}