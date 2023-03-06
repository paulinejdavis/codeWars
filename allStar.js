function strCount(str, letter){  
    return str.split ('').reduce((count,character) => character === letter ? count + 1 : count, 0);
  //   let count = 0
    
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === letter) {
  //      count ++;
  //       }
  //     }
  //     return count;
    }