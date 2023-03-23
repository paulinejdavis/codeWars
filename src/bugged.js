const isItBugged = (date) => (/\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date))

// const isItBugged: declares a constant variable named isItBugged.
// = (date) =>: assigns an arrow function with one parameter date to the
// isItBugged variable.
// (/\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date)): returns the result of testing 
// whether the regular expression pattern matches date.


// function isItBugged(date){
//  return /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date);
// } 

// function isItBugged(date): declares a function named isItBugged with one 
//parameter date.
// return /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date);: returns the result of
//testing whether 
// the regular expression pattern matches date.

// function isItBugged(date) {
//   const regex = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/;
//   return regex.test(date);
// }

// function isItBugged(date): declares a function named isItBugged with one parameter date.
// const regex = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/;: declares a constant variable named regex 
// and assigns a regular expression pattern to it.
// return regex.test(date);: returns the result of testing whether the regular expression 
// pattern stored in regex matches date

// function isItBugged(code){
// //hmm, Looks like its bugged man!
//  return this./^(\d{2}\d-){
// }\d{2} \d\d;:;\d\d/".test[date];
// }