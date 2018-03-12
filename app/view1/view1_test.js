'use strict';

describe('app.view1 module', function() {

    var $controller, scope;

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function() {
        beforeEach(inject(function(_$rootScope_, _$controller_){
            scope = _$rootScope_.$new();
            $controller = _$controller_;
            $controller('View1Ctrl', {
                $scope: scope
            });
            scope.basket = [];
            scope.products = [
                { name: "Table" },
                { name: "Chair" }
            ]
        }));

        it('controller should be defined', inject(function($controller) {
            expect($controller).toBeDefined();
        }));

        it('scope.basket should be empty on load', inject(function() {
            expect(scope.basket.length).toBe(0);
        }));

        it('scope.basketz should be defined', inject(function() {
            expect(scope.undefinedBasket).not.toBeDefined();
        }));

        it('Lodash test', inject(function() {
            expect(_.find(scope.products, { name: "Table" })).toEqual({ name: "Table" });
        }));

        /** TESTING START
            JASMINE DOCS: https://jasmine.github.io/2.9/introduction
            LODASH DOCS: https://lodash.com/docs/4.17.5
         **/




        /** TESTING FINISH **/
    });
});