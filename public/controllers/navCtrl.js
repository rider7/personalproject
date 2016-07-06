angular.module('myApp')
.controller('navCtrl', function($scope, authService, $state){
  $scope.logout = function(){
    authService.logout().then(function(response){
      $state.go('login');
    });
  };
});
