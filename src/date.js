var nextFiveDays = function (date) {
  var dates = [];
  var nextDay = new Date(date);

  for (var i = 0; i < 5; i++) {
    nextDay.setDate(nextDay.getDate() + 1);
    dates.push(
      nextDay.getMonth() +
        1 +
        "/" +
        nextDay.getDate() +
        "/" +
        nextDay.getFullYear()
    );
  }

  return dates.join(", ");
};

// var nextFiveDays = function(date){
//     var dates = [];
//     var nextDay = new Date(date);

//     for (var i = 0; i < 5; i++) {
//       nextDay.setDate(nextDay.getDate() + 1);
//       dates.push((nextDay.getMonth() + 1) + '/' + nextDay.getDate()+ '/' + nextDay.getFullYear());
//     }

//     return dates.join(', ');
// }
