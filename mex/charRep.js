function findRepeatedChars(str) {
    const freq = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1;
    }
    const repeatedChars = [];
    for (const char in freq) {
      if (freq[char] > 1) {
        repeatedChars.push(char);
      }
    }
    return repeatedChars;
  }
  
  const str = 'hello world';
  const repeatedChars = findRepeatedChars(str);
  console.log(repeatedChars); // Output: ['l', 'o']

//   In this code, we first declare an empty object freq to keep track of 
//   the frequency of each character in the string. We then loop through 
//   each character of the string using a for loop and update the frequency 
//   of the character in the freq object. We do this by first getting the 
//   current character char, then using the || operator to set the current 
//   frequency of the character to 0 if it doesn't exist in the object yet. 
//   We then increment the frequency by 1.

// After iterating through all characters of the string, we loop through the 
// freq object again and push any characters that have a frequency greater 
// than 1 to an array repeatedChars. Finally, we return this array of 
// repeated characters.

// In this example, the input string is "hello world", and the output is an 
// array containing the characters 'l' and 'o', since they appear more than 
// once in the string.

// function findRepeatedChars(str) {
//     const freq = str.split('').reduce((freq, char) => {
//       freq[char] = (freq[char] || 0) + 1;
//       return freq;
//     }, {});
//     const repeatedChars = Object.keys(freq).filter(char => freq[char] > 1);
//     return repeatedChars;
//   }
  
//   const str = 'hello world';
//   const repeatedChars = findRepeatedChars(str);
//   console.log(repeatedChars); // Output: ['l', 'o']
  

// In this refactored code, we first split the input string into an array of
//  characters using the split('') method. We then use the reduce() method 
//  to compute the frequency of each character in the array. The reduce() 
//  method takes an initial object {} as the starting value of the frequency 
//  object, and then updates the frequency of each character as it iterates 
//  through the array of characters.

// After computing the frequency of each character, we use the filter() method 
// on the Object.keys(freq) array to select the characters that have a frequency
//  greater than 1. We then return this array of repeated characters.

// This refactored code has fewer lines of code and uses more functional 
// programming methods, which can make it easier to understand and maintain.