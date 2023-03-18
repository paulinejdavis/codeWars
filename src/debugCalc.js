var calculate = function calculate(a, o, b) {
    var result = null;
    
    if(o === "+") { 
      return a + b;
    } else if(o === "-") {
      return a - b;
    } else if(o === "/") { 
      result = (b === 0 ? null : a/b)
    } else if(o === "*")  {
      return a * b;
     }
    
    return result; 
   }