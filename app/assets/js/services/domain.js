angular.module('MathFinder').factory('Domain', function($resource){
  console.log("The Domain Service is running...");
  return $resource('/domain/:id');
});