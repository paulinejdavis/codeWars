const Test = require('@codewars/test-compat');

function _collatz_(n, count) {
  count = count || 1;
  if (n <= 1) return count;
  n = (n % 2 == 0) ? n / 2 : n * 3 + 1;
  return _collatz_(n, count + 1);
}
describe("collatz()", function() {
    it ("Simple tests", function() {
        Test.assertEquals(collatz(2), 2);
        Test.assertEquals(collatz(4), 3);
        Test.assertEquals(collatz(6), 9);
        Test.assertEquals(collatz(1), 1);
    });
    it ("Random tests", function() {
        for (let i = 0; i < 10; i++) {
            let r = 2 + Math.floor(123456789 * Math.random());
            Test.assertEquals(collatz(r), _collatz_(r));
        }
    });
});