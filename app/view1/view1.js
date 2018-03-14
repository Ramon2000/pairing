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

        $scope.basket = [];
        $scope.products = [
            { name: "Table" },
            { name: "Chair" }
        ];

        $scope.addProduct = function(name) {
            $scope.products.push( {'name': name} );
        };

        $scope.addToBasket = function(product) {
            $scope.basket.push(product);
            console.log($scope.basket);
        };

        /** CODING FINISH **/
    }]);