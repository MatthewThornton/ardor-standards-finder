angular.module('MathFinder').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/standards'
    })

    .when('/standards', {
      templateUrl: "assets/templates/standards/index.html",
      controller: "StandardsIndexController"
    })

});