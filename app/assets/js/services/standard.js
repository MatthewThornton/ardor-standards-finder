angular.module('MathFinder').factory('Standard', function($resource){
  return $resource('/standard/:id');
});