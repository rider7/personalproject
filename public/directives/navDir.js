angular.module('myApp')
  .directive('navDir', function(){
    return {
      restrict: 'EA',
      templateUrl: './directives/navTmpl.html',
      controller: 'navCtrl'
    };
  });
