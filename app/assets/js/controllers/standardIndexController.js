angular.module('MathFinder').controller('StandardIndexController', function(Standard, $scope){
  console.log("The standards index controller reporting for duty... ");
  $scope.standards = Standard.query();
  console.log($scope.standards);

});
