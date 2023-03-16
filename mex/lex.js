function sortString(str) {
    return str.split('').sort().join('');
  }
  
  const result = sortString('banana');
  console.log(result); // outputs: "aaabnn"

//   This refactored code produces the same result as the previous example, but it uses method chaining to simplify the code. The split('') method converts the string into an array of characters, the sort() method sorts the characters in lexicographical order, and the join('')
//    method converts the sorted array back into a string.

// The above code can be simplified by chaining the 
// split(), sort(), and join() methods together, as follows:

// function sortString(str) {
//     const chars = str.split(''); // convert string to array of characters
//     chars.sort(); // sort characters in lexicographical order
//     return chars.join(''); // convert array back to string
//   }
  
//   const result = sortString('banana');
//   console.log(result); // outputs: "aaabnn"

// In this example, the sortString function takes a string as input and returns a new string with the characters sorted in lexicographical order. The function splits the input string into an array of characters using the split() method, sorts the array in lexicographical order using the sort() method, and then joins the sorted array back into a string
//  using the join() method. The resulting string is returned by the function.