angular.module('starter.controllers', [])

.controller('MyListCtrl', function($scope) {

        $scope.items = [
            {
                name: "Watch Sherlock"
            },
            {
                name: "Watch House of Cards"
            }
        ];

        $scope.moveItem = function(item, fromIndex, toIndex) {
            //Move the item in the array
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        };

        $scope.colorItems = function(){

        };

})

.controller('AccountCtrl', function($scope) {

})

.controller('SignInCtrl', function($scope, $state) {

        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('tab.mylist');
        };

});