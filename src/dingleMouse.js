class Dinglemouse{

    constructor( firstName, lastName ){
      this.first = firstName;
      this.last = lastName;
    }
    
    getFullName(){
      return `${this.first} ${this.last}`.trim();
    }
    
  }