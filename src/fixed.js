const myFunction = () => ({
  objProperty: `string`,
  objMethod() {
    return this.objProperty;
  },
});

// function myFunction() {
//   var myObject = {
//     objProperty: "string",
//     objMethod: function objMethod() {
//       return myObject.objProperty;
// 		}
//   }

//   return myObject;
// };

// function myFunction() {
//   var MyObject = {
//     objProperty: "string"
//     objMethod: function() {
//       return myObject.objProperty;
// 		}
//   }

//   return myObject.Objmethod();
// };
