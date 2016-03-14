angular.module('MathFinder').factory('Standard', function($resource){
  console.log("The Standards Service is running...");
  return $resource('/standard/:id');
});