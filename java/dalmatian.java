// function howManyDalmations(numer :
  
//   var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
//   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
// return respond

function howManyDalmatians(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2];
  return respond;
  
//   const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
//   let respond = dogs[2]; // default response
//   if (number <= 10) {
//     respond = dogs[0];
//   } else if (number <= 50) {
//     respond = dogs[1];
//   } else if (number === 101) {
//     respond = dogs[3];
//   }
//   return respond;
}