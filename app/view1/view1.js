'use strict';
angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', [ '$scope', function($scope) {

        /** CODING START **/

        $scope.basket = {};
        $scope.products = {
          Table: 1,
          Chair: 2
        };
        $scope.net = 0;

        $scope.addProduct = function(name, price) {
            if (!name || !price) {
              alert("Please add a valid data");
              return;
            }
            $scope.products[name] = price;
        };

        $scope.addToBasket = function(name) {
            if ($scope.basket[name] == undefined) {
              $scope.basket[name] = 1;
            } else {
              $scope.basket[name] += 1;
            }
            $scope.net += Number($scope.products[name]);
            return true;
            // console.log($scope.basket);
        };
        $scope.removeFromBasket = function(name) {
            if ($scope.basket[name] == undefined) {
              alert("something went wrong");
            } else if($scope.basket[name] == 1) {
              $scope.basket[name] = 0;
            } else {
              $scope.basket[name] -= 1;
            }
            console.log($scope.basket);
        };


    }]);