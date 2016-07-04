angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
  .state('home', {
    templateUrl: './views/home.html',
    url: '/'
  })

  .state('tma-2', {
    templateUrl: './views/tma2tmpl.html',
    url: '/headphones/tma-2'
  })

  .state('order', {
    templateUrl: './views/order.html',
    url: '/order'
  })

  .state('cart', {
    templateUrl: './views/cart.html',
    url: '/cart'
  })

$urlRouterProvider
  .otherwise('/')

});
