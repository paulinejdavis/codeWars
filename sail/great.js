function greatestNumber(numbers) {
    let greatest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > greatest) {
        greatest = numbers[i];
      }
    }
    return greatest;
  }

// let numbers = [4, 8, 2, 10, 3];
// let result = greatestNumber(numbers);
// console.log(result); // Output: 10

// function greaterNumber(num1, num2) {
//     if (num1 > num2) {
//       return num1;
//     } else {
//       return num2;
//     }
//   }

//   let result = greaterNumber(5, 10);
// console.log(result); // Output: 10