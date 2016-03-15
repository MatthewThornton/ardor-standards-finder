angular.module('MathFinder').config(function($routeProvider){
  $routeProvider
      .when('/', {
        redirectTo: '/standards'
      })

      .when('/standards', {
        templateUrl: "assets/templates/standards/index.html",
        controller: "StandardIndexController"
      })

      .when('/standards/:id', {
        templateUrl: "assets/templates/standards/show.html",
        controller: "StandardShowController"
      })

      .when('/courses', {
        templateUrl: "assets/templates/courses/index.html",
        controller: "CourseIndexController"
      })

      .when('/courses/:id', {
        templateUrl: "assets/templates/courses/show.html",
        controller: "CourseShowController"
      });
});