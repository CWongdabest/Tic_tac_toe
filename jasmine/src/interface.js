$(document).ready(function() {

  var game = new Game(new Player('X'), new Player('O'))


  $('#box1').click(function() {
    $('#box1').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(1);
  });

  $('#box2').click(function() {
    $('#box2').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(2);
  });

  $('#box3').click(function() {
    $('#box3').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(3);
  });

  $('#box4').click(function() {
    $('#box4').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(4);
  });

  $('#box5').click(function() {
    $('#box5').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(5);
  });

  $('#box6').click(function() {
    $('#box6').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(6);
  });

  $('#box7').click(function() {
    $('#box7').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(7);
  });

  $('#box8').click(function() {
    $('#box8').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(8);
  });

  $('#box9').click(function() {
    $('#box9').text(game.currentPlayer().name());
    game.currentPlayerTakeStep(9);
  });



});
