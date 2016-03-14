angular.module("MathFinder").directive('mfPageNav', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "assets/templates/directives/mfPageNav.html",
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});