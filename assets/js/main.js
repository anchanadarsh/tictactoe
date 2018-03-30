var xo = angular.module("tictactoe", []);
xo.controller("xoController", ['$scope', function ($scope) {

    $scope.tttTiles = ['', '', '', '', '', '', '', '', ''];
    //array of X's and O's
    $scope.xoArr = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    $scope.tileNo;
    $scope.getTurn;

    // creating 8 different array to check values of rows and columns and diagonals
    $scope.r1 = new Array(3);
    $scope.r2 = new Array(3);
    $scope.r3 = new Array(3);
    $scope.c1 = new Array(3);
    $scope.c2 = new Array(3);
    $scope.c3 = new Array(3);
    $scope.d1 = new Array(3);
    $scope.d2 = new Array(3);

    $scope.tileClick = function (tileNo) {
        //getting the tile number that has been clicked
        $scope.tileNo = tileNo;
        //        alert($scope.tileNo);

        //        turn valid only if the clicked tile has no value(i.e X or O)
        if ($scope.tttTiles[$scope.tileNo] == '') {
            //getting the turn ( X or O) 
            $scope.getTurn = $scope.xoArr.shift();
            //displaying the turn ( X or O)
            $scope.tttTiles[$scope.tileNo] = $scope.getTurn;

            //copying the values from main array to set-arrays
            for (l = 0; l < 3; l++) {
                $scope.r1[l] = $scope.tttTiles[l];
                $scope.r2[l] = $scope.tttTiles[l + 3];
                $scope.r3[l] = $scope.tttTiles[l + 6];
                $scope.c1[l] = $scope.tttTiles[l * 3];
                $scope.c2[l] = $scope.tttTiles[(l * 3) + 1];
                $scope.c3[l] = $scope.tttTiles[(l * 3) + 2];
                $scope.d1[l] = $scope.tttTiles[(l * 3) + l];
                $scope.d2[l] = $scope.tttTiles[l * 2];
                console.log("r1 : " + $scope.r1);
                console.log("r2 : " + $scope.r2);
                console.log("r3 : " + $scope.r3);
                console.log("c1 : " + $scope.c1);
                console.log("c2 : " + $scope.c2);
                console.log("c3 : " + $scope.c3);
                console.log("d1 : " + $scope.d1);
                console.log("d2 : " + $scope.d2);
                console.log($scope.d2[1]);

                if ($scope.r1[1] == $scope.r1[2] == $scope.r1[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.r2[1] == $scope.r2[2] == $scope.r2[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.r3[1] == $scope.r3[2] == $scope.r3[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.c1[1] == $scope.c1[2] == $scope.c1[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.c2[1] == $scope.c2[2] == $scope.c2[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.c3[1] == $scope.c3[2] == $scope.c3[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.d1[1] == $scope.d1[2] == $scope.d1[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.d2[1] == $scope.d2[2] == $scope.d2[0] == 'X') {
                    alert("X Wins");
                } else if ($scope.r1[1] == $scope.r1[2] == $scope.r1[0] == 'O') {
                    alert("O Wins");
                } else if ($scope.r2[1] == $scope.r2[2] == $scope.r2[0] == 'O') {
                    alert("O Wins");
                } else if ($scope.r3[1] == $scope.r3[2] == $scope.r3[0] == 'O') {
                    alert("O Wins");
                } else if ($scope.c1[1] == $scope.c1[2] == $scope.c1[0] == 'O') {
                    alert("O Wins");
                } else if ($scope.c2[1] == $scope.c2[2] == $scope.c2[0] == 'O') {
                    alert("O Wins");
                } else if ($scope.c3[1] == $scope.c3[2] == $scope.c3[0] == 'O') {
                    alert("O Wins");
                } else if ($scope.d1[1] == $scope.d1[2] == $scope.d1[0] == 'O') {
                    alert("O Wins");
                } else if ($scope.d2[1] == $scope.d2[2] == $scope.d2[0] == 'O') {
                    alert("O Wins");
                }
            }


        } else {
            alert("You Can't Override");
        }
    }

}]);
