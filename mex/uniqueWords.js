function removeDuplicateWords(str) {
    const words = str.split(' ');
    const uniqueWords = [];
    for (let word of words) {
      if (!uniqueWords.includes(word)) {
        uniqueWords.push(word);
      }
    }
    return uniqueWords.join(' ');
  }

  console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

// Instead of using a for loop with an index, we can use a for...of loop to 
// iterate through the words array and assign each value to a variable called
// word.
// Instead of using indexOf to check if the word is already in the 
// uniqueWords array, we can use the includes method, which returns a boolean 
// value indicating whether an array includes a certain element.
// We use the ! operator to invert the boolean value returned by includes, 
// so that we can enter the if block when the word is not in the uniqueWords 
// array.
// Other than that, the function works the same way as before.