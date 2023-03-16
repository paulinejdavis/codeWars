// This function checks whether two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

// The isAnagram function takes two parameters, test and original, which are the two strings to compare. The function first converts both strings to lowercase using 
// the toLowerCase() method. It then splits each string into an array of characters 
// using the split('') method, sorts the array using the sort() method, and joins the sorted array back into a string using the join('') method.

// The function then compares the two sorted and joined strings using the == operator. If they are equal, the function returns true, indicating that the two strings 
// are anagrams of each other. Otherwise, the function returns false.

// Note that this implementation of isAnagram assumes that the input strings contain only letters and no punctuation or whitespace. If the input strings can contain 
// punctuation or whitespace, you may need to modify the function to remove these characters before comparing the sorted strings.



var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };