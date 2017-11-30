'use strict';

(function(exports) {

  exports.Game = function(player1, player2) {

    var playersTurn = player1

    function currentPlayer() {
      return playersTurn;
    }

    function currentPlayerTakeStep(num) {
      player1.addStep(num);
      _changeCurrentPlayer();
    }

    function _changeCurrentPlayer() {
      (playersTurn === player1) ? (playersTurn = player2) : (playersTurn = player1);
    }

    return {
      currentPlayer: currentPlayer,
      currentPlayerTakeStep: currentPlayerTakeStep
    };

  };

})(this);
