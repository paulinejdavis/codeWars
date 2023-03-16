class Warrior {
    constructor(name) {
      this.name = name;
      this.health = 100;
    }
    
    strike(enemy, swings) {
      enemy.health = Math.max(0, enemy.health - (swings * 10));
    }
  }
  
  
  
  // var Warrior = function(name){
  //   this.name = name;  
  //   this.health = 100;
  // }
  
  // Warrior.prototype.strike = function(enemy, swings){
  //   enemy.health = Math.max(0, enemy.health - (swings * 10));   
  // }