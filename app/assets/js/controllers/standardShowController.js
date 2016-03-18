angular.module('MathFinder').controller('StandardShowController', function(Standard, $scope, $routeParams, $location){
    $scope.standard = Standard.get({id: $routeParams.id});
    $scope.deleteStandard = function(standard){
        standard.$remove().then(function(){
            $location.path('/standards');
        });
    }
});