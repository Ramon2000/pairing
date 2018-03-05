'use strict';

describe('app.view1 module', function() {

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function() {

        it('should ....', inject(function($controller, $rootScope) {
            //spec body
            var $scope = $rootScope.$new(),
                ctrl = $controller('View1Ctrl', {
                    $scope: $scope
                });

            expect(ctrl).toBeDefined();
        }));

    });
});