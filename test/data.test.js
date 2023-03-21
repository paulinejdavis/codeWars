describe("Let's check...", function()
{
  it ("...I hope it will start to work!", function()
  {
    Test.expect(JSON.stringify(data) === JSON.stringify(__data) 
      && JSON.stringify(["what's", "next"]) === "[\"what's\",\"next\"]")
  });
 });
