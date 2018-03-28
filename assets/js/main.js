var xo = angular.module("tictactoe", []);
xo.controller("xoController", ['$scope', function ($scope) {

    $scope.tttTiles = ['', '', '', '', '', '', '', '', ''];

    $scope.tileClick = function () {
        $scope.getTileIndex = jQuery(this);
        console.log($scope.getTileIndex);
    }

}]);
