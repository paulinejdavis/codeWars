const past = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;

// function past(h, m, s){
//   //#Happy Coding! ^_^
//   return ((h * 60 + m) * 60 + s) * 1000;
// }

// define the past() function in a more concise and readable way. 
// The function takes three parameters (h, m, and s) and calculates 
// the total number of milliseconds by multiplying the input values 
// by the appropriate conversion factors (i.e., 60 
// for minutes and 1000 for seconds) and adding them up. The 
// result is returned by the function.

// To demonstrate the usage of the past() function, we log the total
// number of milliseconds for the input values (1, 30, 0) to the 
// console using a template literal. The output of the program 
// will be: Total milliseconds: 5400000.