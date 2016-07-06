angular.module('myApp')
.service('userSvc', function($http){

  this.getUser = function( user) {
    return $http.get('/api/user/577d272a0a85cf5902b2e0e2')
        .then(function(response) {
          return response.data;
        })
  }

  this.createUser = function( user ) {
    return $http.post('/api/user/', user)
  }
});
