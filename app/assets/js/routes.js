angular.module('MathFinder').config(function($routeProvider){
  $routeProvider
      .when('/', {
        redirectTo: '/standards'
      })

      .when('/standards', {
        templateUrl: "assets/templates/standards/index.html",
        controller: "StandardsIndexController"
      })

      .when('/standard/new', {
        templateUrl: "assets/templates/standards/new.html",
        controller: "StandardsCreateController"
      })

      .when('/standards/:id', {
        templateUrl: "assets/templates/standards/show.html",
        controller: "StandardsShowController"
      })

      .when('/standards/:id/edit', {
        templateUrl: "assets/templates/standards/edit.html",
        controller: "StandardsEditController"
      })

      .when('/courses', {
        templateUrl: "assets/templates/courses/index.html",
        controller: "CoursesIndexController"
      })

      .when('/courses/:id', {
        templateUrl: "assets/templates/courses/show.html",
        controller: "CoursesShowController"
      });
});