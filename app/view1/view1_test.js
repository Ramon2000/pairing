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
            scope.basket = {};
            scope.net = 0;
            scope.products = {
              Table: 1,
              Chair: 2
            };
        }));

        it('controller should be defined', inject(function($controller) {
            expect($controller).toBeDefined();
        }));

        it('scope.basket should be empty on load', inject(function() {
            expect(scope.basket.length).toBe(undefined);
        }));

        it('scope.basketz should be defined', inject(function() {
            expect(scope.undefinedBasket).not.toBeDefined();
        }));

        it("scope.net should ne Number", inject(function() {
          expect(scope.net).toEqual(jasmine.any(Number));
        }));

        it("Adds a quantity correctly", inject(function() {
          expect(scope.addToBasket("itemX")).toBe(true);
        }));


        // it('Lodash test', inject(function() {
        //     expect(_.find(scope.products, "Table")).toEqual(1);
        // }));

        /** TESTING START
            JASMINE DOCS: https://jasmine.github.io/2.9/introduction
            LODASH DOCS: https://lodash.com/docs/4.17.5
         **/




        /** TESTING FINISH **/
    });
});