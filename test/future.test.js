///Test.assertSimilar(yourFutureCareer(), yourFutureCareer(), 'true')

describe( "Should return 1 of 3 possible careers", () => {
    let possibles = {'FrontEnd Developer':0, 'BackEnd Developer':0, 'Full-Stack Developer':0},
        career;
    for( let t=0; t<9; t++ ){
      career = yourFutureCareer();
      Test.expect( career in possibles, `${career} is not a valid career` )
    }
  })
  
  describe("On many tests should return each career at least 1 time", () => {
    let possibles = {'FrontEnd Developer':0, 'BackEnd Developer':0, 'Full-Stack Developer':0},
        career, wrong = {};
    for( let times = 0; times < 999; times ++ ){
      career = yourFutureCareer();
      if( career in possibles ){ 
        possibles[career]++;
      }else{
        if( ! ( career in wrong ) ){
          Test.expect( false, `${times} : ${career} is not a valid career`);
          wrong[career] = 1;
        }
      }
    }
    for( career in possibles ){
      it( `Is ${career} possible ?`, ()=>{
        Test.expect( possibles[career] > 0, `no ${career} on 999 rolls ?`);
      });
    }
  })