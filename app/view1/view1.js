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
            { name: "Table", price: 50 },
            { name: "Chair" , price: 12 }
        ];

        $scope.addProduct = function(name, price) {
            if (price < 0) {
                return null;
            }

            return $scope.products.push( {'name': name, 'price': price} );
        };

        $scope.addToBasket = function(product) {
            $scope.basket.push(product);
            console.log($scope.basket);
        };

        $scope.getPrice = function() {
            if ($scope.basket.length === 0) {
                return 0;
            }

            return $scope.basket.reduce((prev, curr) => {
                const price = prev.price + curr.price;
                return {price};
            })['price'];
        };

        $scope.getBasketTable = function() {
            const table = [];

            $scope.basket.forEach((item) => {
                const alreadyExistItem = table.find((fItem) => {
                    return fItem.name === item.name;
                });

                if (alreadyExistItem) {
                    alreadyExistItem.price += item.price;
                    alreadyExistItem.count += 1;
                } else {
                    table.push(Object.assign({count: 1}, item));
                }
            });

            return table;
        };

        /** CODING FINISH **/
    }]);