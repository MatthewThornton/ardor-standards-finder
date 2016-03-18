/**
 * Created by matthewthornton on 3/18/16.
 */
angular.module('MathFinder').factory('Course', function($resource){
    return $resource('/courses/:id');
});