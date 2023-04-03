function buildFun(n) {
  var res = [];

  for (var i = 0; i < n; i++) {
    (function (num) {
      res.push(function () {
        return num;
      });
    })(i);
  }
  return res;
}

// function buildFun(n){

//     var res = []

//     for (var i = 0; i< n; i++){
//         (function(number){
//             res.push(function(){

//                 return number;
//             })
//         })(i)
//     }
//     return res
// }
