function aliasGen(a, b){
    if (a[0].match(/\d/) || b[0].match(/\d/)) {
      return 'Your name must start with a letter from A - Z.'
    }
     else return firstName[a[0].toUpperCase()]+' '+surname[b[0].toUpperCase()];
  }
  
  // declares the aliasGen function that takes two parameters: a and b.
  // checks whether the first character of a or b is a digit. If so, 
  // it returns a string that indicates that the name must start with a letter 
  // from A to Z.
  // f the first character of a and b are not digits, this line returns a string 
  // that concatenates the value of the firstName object at the key corresponding 
  // to the uppercase of the first character of a, a space character, and the 
  // value of the surname object at the key corresponding to the uppercase 
  // of the first character of b.
  
  // In summary, the aliasGen function takes two parameters, checks if they 
  // start with a letter, and returns a string that combines a value from 
  // firstName and surname objects based on the first letters of the parameters.
  
  
  // function aliasGen(firstName, surname) {
  //   const firstInitial = firstName[0];
  //   const surnameInitial = surname[0];
  
  //   if (!/^[a-zA-Z]$/.test(firstInitial) || !/^[a-zA-Z]$/.test(surnameInitial)) {
  //     return 'Your name must start with a letter from A - Z.';
  //   }
  
  //   const firstWord = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  //   const surnameWord = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
  
  //   const firstNameAlias = firstNameDict[firstInitial] || 'Your name must start with a letter from A - Z.';
  //   const surnameAlias = surnameDict[surnameInitial] || 'Your name must start with a letter from A - Z.';
  
  //   return `${firstNameAlias} ${surnameAlias}`;
  // }
  
  
  
  
  // function aliasGen(){
  //     // Code Here
  // }