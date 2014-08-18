angular.module('starter.controllers', [])

.controller('MyListCtrl', function($scope) {

    $scope.items = ["Pick up groceries", "Watch Sherlock"];

})

.controller('AccountCtrl', function($scope) {

})

.controller('SignInCtrl', function($scope, $state) {
        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('tab.mylist');
        };
});