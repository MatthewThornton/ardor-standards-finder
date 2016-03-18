angular.module('MathFinder').controller('StandardShowController', function(Standard, $scope, $routeParams, $location){
    $scope.standard = Standard.get({id: $routeParams.id});
});