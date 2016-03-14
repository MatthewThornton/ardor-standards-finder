angular.module('MathFinder').factory('Domain', function($resource){
  return $resource('/domain/:id');
});