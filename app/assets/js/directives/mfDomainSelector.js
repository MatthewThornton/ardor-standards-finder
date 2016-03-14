angular.module('MathFinder').directive("mfDomainSelector", function(Domain){
  return {
    replace: true,
    restrict: "E",
    require: "?ngModel",
    templateUrl: '/assets/templates/directives/mfDomianSelector.html',
    link: function(scope, element, attrs, ngModelCtrl){
      var activeDomain = {};
      scope.domain = Domain.query();

      scope.isActive = function(domain){
        return activeDomain && activeDomain.id === domain.id;
      }

      scope.toggleCategory = function(domain){
        if(domain === activeDomain) {
          activeDomain = {};
        } else {
          activeDomain = domain;
        }

        ngModelCtrl.$setViewValue(activeDomian);
      }

      ngModelCtrl.$render = function() {
        activeDomain = ngModelCtrl.$viewValue;
      }
    }
  };
});