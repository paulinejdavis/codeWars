// In Object-Oriented Programming (OOP) in JavaScript, mutable and immutable concepts still apply to objects, but they are implemented slightly differently.

// In OOP, objects are typically created using constructor functions or classes. When an object is created, it can be either mutable or immutable, depending on how it is implemented.

// Mutable objects in OOP are objects whose properties can be changed after the object is created. For example, if you have a Person class that has a name property, you can change the value of the name property of an instance of the class.

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  let person = new Person("John");
  person.name = "Jane"; // Mutable

//   Immutable objects in OOP are objects whose properties cannot be changed after the object is created. In JavaScript, this is typically achieved by using the Object.freeze() method, 
//   which prevents any changes to the object or its properties.

let person = Object.freeze({name: "John"}); // Immutable
person.name = "Jane"; // Error: Cannot assign to read only property 'name'

// Note that Object.freeze() only makes the object itself immutable. If the object has properties that are objects, those objects 
// are still mutable unless they are also frozen.

let person = Object.freeze({name: "John", address: {city: "New York"}});
person.address.city = "Boston"; // Mutable

// To make all nested objects immutable, you can use a library like Immutable.js 
// or write your own deep freeze function.