(function(){
  describe("Gigasecond: Get the future, a Gigasecond away at time 00:00:00", function() {

    it("Should get a Gigasecond from 2011-3-25 00:00 in year 2043", function() {
      var gs = new Gigasecond(new Date(2011, 3, 25));
      var expectedDate = new Date(2043, 0, 1);
      expect(gs.date()).toEqual(expectedDate);
    });

    it("Should get a Gigasecond from 1977-05-13 00:00 in year 2009", function() {
      var gs = new Gigasecond(new Date(1977, 5, 13));
      var expectedDate = new Date(2009, 1, 19);
      expect(gs.date()).toEqual(expectedDate);
    });

    it("Should get a Gigasecond from 1959-06-19 00:00 in year 1991", function() {
      var gs = new Gigasecond(new Date(1959, 6, 19));
      var expectedDate = new Date(1991, 2, 27);
      expect(gs.date()).toEqual(expectedDate);
    });

  });
})();