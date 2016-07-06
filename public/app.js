angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
  .state('home', {
    templateUrl: './views/home.html',
    url: '/'
  })

  .state('tma-2', {
    templateUrl: './views/tma2tmpl.html',
    url: '/headphones/tma-2',
    controller: 'productCtrl'
  })

  .state('order', {
    templateUrl: './views/order.html',
    url: '/order'
  })

  .state('cart', {
    templateUrl: './views/cart.html',
    url: '/cart',
    controller: 'userCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: './routes/login/loginTmpl.html',
    controller: 'loginCtrl'
  })

  .state('profile', {
    templateUrl: './routes/profile/profileTmpl.html',
    url: '/profile',
    controller: 'profileCtrl',
    resolve: {
      user: function(authService, $state){
        return authService.getCurrentUser().then(function(response){
          if(!response.date)
          $state.go('login');
          return response.data;
        })
        .catch(function(err){
          $state.go('login');
        })
      }
    }
  })

$urlRouterProvider
  .otherwise('/')

});
