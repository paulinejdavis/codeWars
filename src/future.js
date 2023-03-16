function yourFutureCareer(){
	var career = Math.random()
		if (career <= 0.32) {
			return "FrontEnd Developer"
		} else if (career <= 0.65)  {
			return "BackEnd Developer"
		} else {
			return "Full-Stack Developer"
		}
  
  }


console.log(yourFutureCareer());

// function yourFutureCareer() {
//   const career = Math.random();
//   return career <= 0.32 ? "FrontEnd Developer" : career <= 0.65 ? "BackEnd Developer" : "Full-Stack Developer";
// }

// console.log(yourFutureCareer());

// function yourFutureCareer() {
//   const careerProbabilities = {
//     0.32: "FrontEnd Developer",
//     0.65: "BackEnd Developer",
//     1.0: "Full-Stack Developer"
//   };
//   const career = Math.random();
//   return Object.entries(careerProbabilities).find(([prob, _]) => career <= prob)[1];
// }

// console.log(yourFutureCareer());