describe( "none ?", function(){

    list = [0,1,2,3,5,8,13]
    Test.assertEquals(none(list.slice(),function(item){ return item > 100 }), true, "no items are over 100")
    Test.assertEquals(none(list.slice(),function(item){ return item > 9 }), false, "last item is over 9")
    Test.assertEquals(none(list.slice(),function(item){ return item % 2 > 0 }), false, "some items are even")
    Test.assertEquals(none(list.slice(),function(item){ return item % 2 != 0 }), false, "some items are odd")
  
    Test.assertEquals(none([],function(item){ return item % 2 > 0 }), true, "empty list should return true")
  
  });