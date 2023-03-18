function an(pieces) { //Let's make n pieces of Pizza ;-)
    let result = "";
    while ( pieces-- ){
      let needSteps = 5;
      while ( needSteps-- ) result += testmake( needSteps );
    }
    return result;
  }
  function testmake(step){
    switch ( step+1 ){
      case 5: return "P";
      case 4: return "i";
      case 3: 
      case 2: return "z";
      case 1: return "a";
    }
  }