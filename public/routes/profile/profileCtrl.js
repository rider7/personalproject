angular.module('myApp')
  .controller('profileCtrl', function($scope, user){
    $scope.user = user;
  });
