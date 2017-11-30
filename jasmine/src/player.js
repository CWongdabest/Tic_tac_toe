'use strict';

(function(exports) {

  exports.Player = function(player_name) {

    var player_steps = []

    function name() {
      return player_name;
    }

    function addStep(num) {
      player_steps.push(num);
    }

    function steps() {
      return player_steps;
    }

    return {
      name: name,
      addStep: addStep,
      steps: steps
    };

  };

})(this);
