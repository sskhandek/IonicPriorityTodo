angular.module('starter.controllers', [])

.controller('MyListCtrl', function($scope) {

        $scope.items = [
            {
                name: "Watch Sherlock",
                priority: ""
            },
            {
                name: "Watch House of Cards",
                priority: ""
            }
        ];

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