angular.module('MathFinder').factory('Standard', function($resource){
  console.log("The Standards Service is reporting for duty...");
  return $resource('/standards/:id');
});