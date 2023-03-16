// In JavaScript, mutable means that an object or data type can be modified, while immutable means that it cannot be modified once it has been created.

// Primitive data types such as strings, numbers, and booleans are immutable in JavaScript. This means that once a variable is assigned a value, it cannot be changed. For example, if you have a variable let num = 5, you cannot change its value to 10. Instead, you would need to create a new variable and assign it a new value.

// Objects and arrays in JavaScript are mutable, meaning that their values can be changed even after they have been created. For example, if you have an array let arr = [1, 2, 3], you can modify its contents by adding or removing elements, changing existing elements, or reassigning the entire array.

// Here's an example that demonstrates the difference between mutable and immutable data types:

// Immutable example
let num1 = 5;
let num2 = num1;
num1 = 10;
console.log(num1); // Output: 10
console.log(num2); // Output: 5

// Mutable example
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]