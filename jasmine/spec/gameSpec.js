describe('Game', function() {

  var game;
  var player1;
  var player2;

  beforeEach(function() {
    player1 = new Player('X');
    player2 = new Player('O');
    game = new Game(player1, player2);
  });

    it("stores the current player", function() {
      expect(game.currentPlayer()).toEqual('X');
    });

    it("let the player take a step", function() {
      game.currentPlayerTakeStep(6);
      expect(player1.steps()).toEqual([6]);
    });

    it("alternates the current player", function() {
      game.currentPlayerTakeStep(6);
      expect(game.currentPlayer()).toEqual('O');
    });



});
