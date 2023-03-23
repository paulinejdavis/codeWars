describe("Basic Tests",() =>{
    Test.assertEquals(isItBugged("01-09-2016 01:20"), true);
    Test.assertEquals(isItBugged("01-09-2016 01;20"), false);
    Test.assertEquals(isItBugged("01_09_2016 01:20"), false);
    Test.assertEquals(isItBugged("14-10-1066 12:00"), true);
    Test.assertEquals(isItBugged("Tenth of January"), false);
    });
    describe("Random Tests",() =>{
    function isItBugged1(code){
     return /^(\d\d-){2}\d{4} \d\d:\d\d$/.test(code)
    }
    
    for(let i=0;i<95;i++)
    
    { let a=Math.floor(Math.random()*31)+"";
     let b="----------_ ";
     let c=b[Math.floor(Math.random()*9)]+"";
     let d=Math.floor(Math.random()*12)+"";
     let e=Math.floor(Math.random()*9999)+"";
     let f=Math.floor(Math.random()*25)+"";
     let g=Math.floor(Math.random()*60)+"";
     let h=a+c+"0"+d+c+e+" "+f+":"+g;
    console.log(h)
    Test.assertEquals(isItBugged(h),isItBugged1(h))}
    
      
    });
     