'use strict';

(function(exports) {

  exports.Rules = function() {


    function winningCombinationsforRows() {
      return [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    }

    function winningCombinationsforColumns() {
      return [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
    }

    function winningCombinationsforDiagonal() {
      return [[1, 5, 9], [3, 5, 7]];
    }

    return {
      winningCombinationsforRows: winningCombinationsforRows,
      winningCombinationsforColumns: winningCombinationsforColumns,
      winningCombinationsforDiagonal: winningCombinationsforDiagonal
    };

  };

})(this);
