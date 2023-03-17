for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

//   In this code, we're using a for loop to iterate over the numbers 
//   from 1 to 100. For each number, we check whether it is divisible 
//   by 3, 5, or both. If it is divisible by both, we print 'FizzBuzz'. 
//   If it is only divisible by 3, we print 'Fizz'. If it is only divisible 
//   by 5, we print 'Buzz'. Otherwise, we simply print the number itself.

for (let i = 1; i <= 100; i++) {
    const output = (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i;
    console.log(output);
  }