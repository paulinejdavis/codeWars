
const assert = require("assert");
const evalobject = require("./evalobject.js");



describe('Fixed Tests', () => {
    Test.assertEquals(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
    Test.assertEquals(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
    Test.assertEquals(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
    Test.assertEquals(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
    Test.assertEquals(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
    Test.assertEquals(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');
  });
  
  describe('Random Tests', () => {
    let ops = ['+','-','/','*','%','^'];
    it('+ Tests', () => {
      for(let i4839rf8u = 0; i4839rf8u<5;i4839rf8u++){
        let a = Math.floor(Math.random()*1000)+1, b = Math.floor(Math.random()*1000)+1, value = {a:a,b:b,operation:ops[0]};
        Test.assertEquals(evalObject(value), solve(value), 'Return the evaluated string as a number!');
      }
    });
    
    it('- Tests', () => {
      for(let i4839rf8u = 0; i4839rf8u<5;i4839rf8u++){
        let a = Math.floor(Math.random()*1000)+1, b = Math.floor(Math.random()*1000)+1, value = {a:a,b:b,operation:ops[1]};
        Test.assertEquals(evalObject(value), solve(value), 'Return the evaluated string as a number!');
      }
    });
    
    it('/ Tests', () => {
      for(let i4839rf8u = 0; i4839rf8u<5;i4839rf8u++){
        let a = Math.floor(Math.random()*1000)+1, b = Math.floor(Math.random()*1000)+1, value = {a:a,b:b,operation:ops[2]};
        Test.assertEquals(evalObject(value), solve(value), 'Return the evaluated string as a number!');
      }
    });
    
    it('* Tests', () => {
      for(let i4839rf8u = 0; i4839rf8u<5;i4839rf8u++){
        let a = Math.floor(Math.random()*1000)+1, b = Math.floor(Math.random()*1000)+1, value = {a:a,b:b,operation:ops[3]};
        Test.assertEquals(evalObject(value), solve(value), 'Return the evaluated string as a number!');
      }
    });
    
    it('% Tests', () => {
      for(let i4839rf8u = 0; i4839rf8u<5;i4839rf8u++){
        let a = Math.floor(Math.random()*1000)+1, b = Math.floor(Math.random()*1000)+1, value = {a:a,b:b,operation:ops[4]};
        Test.assertEquals(evalObject(value), solve(value), 'Return the evaluated string as a number!');
      }
    });
    
    it('^ Tests', () => {
      for(let i4839rf8u = 0; i4839rf8u<5;i4839rf8u++){
        let a = Math.floor(Math.random()*1000)+1, b = Math.floor(Math.random()*10)+1, value = {a:a,b:b,operation:ops[5]};
        Test.assertEquals(evalObject(value), solve(value), 'Return the evaluated string as a number!');
      }
    });
    
    it('Random Tests', () => {
      for(let i4839rf8u = 0; i4839rf8u<14;i4839rf8u++){
        let a = Math.floor(Math.random()*10000)+1, b = Math.floor(Math.random()*10)+1, op = Math.floor(Math.random()*ops.length), value = {a:a,b:b,operation:ops[op]};
        console.log(`<strong><font color="gray">${ops[op]} Test</font></strong>`)
        Test.assertEquals(evalObject(value), solve(value), 'Return the evaluated string as a number!');
      }
    });
    
  });
  
  
  function solve(value){
    switch(value.operation){
      case'+': return value.a + value.b;
      case'-': return value.a - value.b;
      case'/': return value.a / value.b;
      case'*': return value.a * value.b;
      case'%': return value.a % value.b;
      case'^': return Math.pow(value.a, value.b);
    }
  }
  
  