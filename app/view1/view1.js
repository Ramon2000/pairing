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
            { name: "Table", price: 5 },
            { name: "Chair" , price: 2}
        ];

        $scope.addProduct = function(name, price) {
            $scope.products.push( {'name': name,'price': price} );
        };

        $scope.addToBasket = function(product) {
            var _index =$scope.basket.indexOf(product);
            if(_index == -1){
                $scope.basket.push(product);
                $scope.basket[$scope.basket.length-1].quantity=1;
            }
            else{
                $scope.basket[_index].quantity++;  
            }
            console.log($scope.basket);
        };

        $scope.removeFromBasket = function(item){
            var _index =$scope.basket.indexOf(item);
            $scope.basket[_index].quantity--;  
            if($scope.basket[_index].quantity == 0){
                $scope.basket.splice(_index,1);
            }
        }
        $scope.getTotalPrice = function(){
            var _total = 0;
            for(var i = 0 ; i < $scope.basket.length ; i++){
                var _item = $scope.basket[i];
                _total += (_item.quantity * _item.price);
            }
            return _total;
        }

        /** CODING FINISH **/
    }]);