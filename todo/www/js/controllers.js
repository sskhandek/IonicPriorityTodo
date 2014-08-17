angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope) {
  $scope.friends = [];
})

.controller('FriendDetailCtrl', function($scope) {
  $scope.friend = {};
})

.controller('AccountCtrl', function($scope) {
});
