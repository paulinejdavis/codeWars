//  super keyword refers to the parent class of an object, 
// and is used to call its parent's methods or constructors.

// In object-oriented programming, the concept of inheritance allows a class 
// to inherit properties and methods from a parent class. When a subclass 
// is created, it can override the parent class's methods or properties, 
// or add new ones of its own. The super keyword is used to call the 
// corresponding method or constructor in the parent class, allowing 
// the subclass to reuse and build upon the functionality of its parent.

// In this example, super(name) is used to call the constructor method of the
//  Animal class from within the Cat class, passing in the name argument. 
//  This allows the Cat class to inherit the name property from its 
//  parent class. Similarly, super.speak() is used to call the speak method 
//  of the Animal class from within the Cat class, allowing the Cat class to 
//  reuse and extend the functionality of its parent class.

class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  let fluffy = new Cat('Fluffy');
  fluffy.speak(); // Output: "Fluffy meows."
  