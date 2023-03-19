function collatz(n, count = 0) {
    if (n <= 1) {
      return count + 1;
    } else {
      const res = (n % 2 === 0) ? n / 2 : n * 3 + 1
    
    return collatz(res, count + 1);
  }
    
    }
  
  
  // function collatz(n, count) {
  //   if (n < 1) return count;
  //   n = (n % 2 = 0) ? n / 2 : n * 3 + 1;
  //   collatz(n, count + 1);
  // }