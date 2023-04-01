describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      nextFiveDays(new Date(2012, 2, 14)),
      "3/15/2012, 3/16/2012, 3/17/2012, 3/18/2012, 3/19/2012"
    );

    Test.assertEquals(
      nextFiveDays(new Date(2012, 4, 30)),
      "5/31/2012, 6/1/2012, 6/2/2012, 6/3/2012, 6/4/2012"
    );

    Test.assertEquals(
      nextFiveDays(new Date(2012, 11, 30)),
      "12/31/2012, 1/1/2013, 1/2/2013, 1/3/2013, 1/4/2013"
    );

    Test.assertEquals(
      nextFiveDays(new Date(2012, 1, 27)),
      "2/28/2012, 2/29/2012, 3/1/2012, 3/2/2012, 3/3/2012"
    );

    Test.assertEquals(
      nextFiveDays(new Date(2100, 1, 27)),
      "2/28/2100, 3/1/2100, 3/2/2100, 3/3/2100, 3/4/2100"
    );

    Test.assertEquals(
      nextFiveDays(new Date(2000, 1, 27)),
      "2/28/2000, 2/29/2000, 3/1/2000, 3/2/2000, 3/3/2000"
    );
  });
});
