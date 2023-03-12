
function validate(username, password){
  var database = new Database();
  if(password.includes('||') ||password.includes('//')){
    return "Wrong username or password!"
  } else {
    return database.login(username, password);
    return "Successfully Logged in!"
  }
}

// function validate(username, password){
//   var database = new Database();
//   return database.login(username, password);
// }