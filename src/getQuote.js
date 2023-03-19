var reg = /".+?"/g;
function getQuotes(string) {
  return string.match(reg);
}

// var reg = /".+"/g;
// function getQuotes(string) {
//   return string.match(reg);
// }