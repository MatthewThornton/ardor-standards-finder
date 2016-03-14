angular.module("MathFinder").filter('domainFilter', function(){
  return function(collection, domain){
    var newCollection = [];

    if(domain && domain.id) {
      for(var i=0, l=domain.length; i < l; i++){
        if(collection[i].domianID === domain.id) {
          newCollection.push(collection[i]);
        }
      }

      return newCollection;
    } else {
      return collection;
    }
  }
});