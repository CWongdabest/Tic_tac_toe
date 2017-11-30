describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player('X');
  });

    it("stores the player's name", function() {
      expect(player.name()).toEqual('X');
    });

    it("stores the player's steps", function() {
      player.addStep(1);
      player.addStep(4);
      expect(player.steps()).toEqual([1, 4]);
    });
    
});
