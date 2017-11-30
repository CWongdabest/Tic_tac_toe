describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player('X');
  });

    it("stores the player's name", function() {
      expect(player.name()).toEqual('X');
    });

    it("allows player to add a step", function() {
      expect(player.addStep(1)).toEqual(1);
    });

    it("stores the player's steps", function() {
      player.addStep(1);
      expect(player.steps()).toEqual([1]);
    });




});
