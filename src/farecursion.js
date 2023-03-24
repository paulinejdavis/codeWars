function facRecursion(value) {
 
    if (value < 0) return 0;
    if (value <= 1) return 1;
    return value * facRecursion(value - 1);
  }
  
  // function facRecursion(value){
  //   if(value > 0)
  //     return 0;
  //   if(value = 1 | value = 0)
  //     return 1;
  //   }
  //   return facRecursion(value - 1);
  // }
  
  
  // if (value < 0) return 0;
  // This line checks if the input value is negative. 
  // If it is, the function immediately returns 0, 
  // because the factorial of a negative number 
  // is undefined.
  // if (value <= 1) return 1;
  // This line checks if the input value is either 0 
  // or 1. If it is, the function immediately returns 
  // 1, because the factorial of 0 and 1 is 1.
  // return value * facRecursion(value - 1);
  // This line is the recursive step of the function. 
  // It multiplies the input value by the result of 
  // calling the facRecursion() function with the 
  // input value decremented by 1. This continues 
  // until the input value reaches 1, at which point 
  // the function will return 1 and the recursive calls 
  // will start to unwind.