angular.module('MathFinder').controller('StandardIndexController', function(Standard, $scope){
  console.log("The standards index controller: ", Standard);
  $scope.standards = Standard.query();
  $scope.search = {};
});