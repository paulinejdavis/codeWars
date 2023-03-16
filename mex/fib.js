// The Fibonacci sequence is a series of numbers that starts with
//  0 and 1, and every number after that is the sum of the two
//   numbers before it. So, it goes like this:
//    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. 
// It's like a special pattern that keeps going on and on forever! 
   
// It's named after a man named Fibonacci who was really good at math a 
// long, long time ago.

function fibonacciSequence(n) {
    let [a, b] = [0, 1];
    for (let i of Array(n).keys()) {
      [a, b] = [b, a + b];
    }
    return a;
  }

  console.log(fibonacciSequence(10));

//   One possible way to refactor the Fibonacci function to make it more readable and concise is to use destructuring assignment 
//   and a for...of loop instead of a for loop. Here's the refactored code:


//   In this version of the function, we first declare two variables a and b and set them to 0 and 1, respectively. We then use a for...of loop to iterate over an array of n elements and on each iteration, we update a and b to be the next pair of Fibonacci numbers. Finally, we return a, which will contain the nth number in the Fibonacci sequence. This version of the function is more 
//   concise and uses destructuring assignment to make the code easier to read.

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  console.log(fibonacci(10));

//   This function takes an integer n as input and returns the nth number in the Fibonacci sequence. 
//It uses a loop to calculate the Fibonacci sequence up to the nth number, storing the previous two 
//numbers in variables a and b and adding them together to get the next number in the sequence. Finally, 
//   it returns the b variable, which contains the nth number in the sequence.

//Start by defining a function called fibonacci that takes an integer n as an input.
// Check if the input n is less than or equal to 1. If it is, return n.
// Declare three variables a, b, and c. Initialize a to 0, b to 1, and c to undefined.
// Use a for loop to iterate from 2 to n inclusive, with a variable i that increments 
// by 1 on each iteration.
// In the loop body, calculate the sum of a and b, and store the result in c.
// Set a to the current value of b.
// Set b to the current value of c.
// After the loop is done, return the value of b, which should contain the nth number in 
// the Fibonacci sequence.
// This is just one example of how to break down the code into pseudo code on 
// a whiteboard. The actual syntax and structure of the pseudo code may vary depending 
// on the audience and the level of detail you want to include.