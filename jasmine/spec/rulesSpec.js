describe('Rules', function() {

  var rules;


  beforeEach(function() {
    rules = new Rules();
  });

    it("stores the winning combinations for rows", function() {
      expect(rules.winningCombinationsforRows()).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });

    it("stores the winning combinations for columns", function() {
      expect(rules.winningCombinationsforColumns()).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    });

    it("stores the winning combinations for diagonal", function() {
      expect(rules.winningCombinationsforDiagonal()).toEqual([[1, 5, 9], [3, 5, 7]]);
    });



});
