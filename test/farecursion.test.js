Test.assertEquals(facRecursion(0), 1, "Should return 1");
Test.assertEquals(facRecursion(1), 1, "Should return 1");
Test.assertEquals(facRecursion(2), 2, "Should return 2");
Test.assertEquals(facRecursion(3), 6, "Should return 6");
Test.assertEquals(facRecursion(4), 24, "Should return 24");
Test.assertEquals(facRecursion(5), 120, "Should return 120");
Test.assertEquals(facRecursion(6), 720, "Should return 720");
Test.assertEquals(facRecursion(-1), 0, "Should return 0");


let number;

for(let i = 0;i<100;++i){
  number = Math.floor((Math.random() * 35) -10); 
  Test.assertEquals(facRecursion(number), factorial(number), "Result is wrong");
}


describe('enforcement tests', () => {
  Sloth.isRecursive(facRecursion);
});