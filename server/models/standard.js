var _ = require('lodash');
var Domain = require('./domain')

var std = [
  {"id":1, "domainId": 1, "description": "NgModel Best Practice", "content" : "Always use dot syntax when using NgModel! Treat Scope as read-only in templates & write-only in controllers. The purpose of the scope is to refer to the model, not be the model. The model is your javascript objects. When doing bidirectional binding with ngModel make sure you don't bind directly to the scope properties. This will cause unexpected behavior in the child scopes.", "title" : "NgModel BP"},
  {"id":2, "domainId": 3, "description" : "Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element.", "title" : "Directives", "content": "Markers on a **DOM element**"},
  {"id":3, "domainId": 2, "description" : "Clarify the confusion between Service the term and `service` the angular method and to explain the 5 different Service recipes in Angular.", "title" : "Service Service? Really Angular?","content": "There are 5 Recipes used to create a Service. One of those *was* unfortunately named, Service. So yes, amongst its fellow peers such as Provider Service and Factory Service, there is in fact a Service Service."},
  {"id":4 , "domainId": 2, "description" : "QUESTIONABLE DESCRIPTION GOES HERE", "title" : "TEST TEST TEST", "content": "QUESTIONABLE CONTENT GOES HERE"},
  {"id":5 ,"domainId": 4, "description" : "Define Service", "title" : "What is a Service", "content": "Service: Angular services are objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app."},
  {"id":6 ,"domainId": 5,  "description" : "Steps for Creating a Service", "title" : "How do you create a Service?", "content": "You can register a service to our Angular module `app` with a one of the following 5 recipes: \\n 	- **factory**  \\n 	- **provider**  \\n 	- **service**  \\n 	- **value**  \\n 	- **constant** "}
]
var lastId = 6;

var buildStandards = function() {
  // Make a deep copy so we don't change the main standards array
  var rawStandards = JSON.parse(JSON.stringify(std));
  var builtStandard = [];
  var standard;

  for(var i=0, l=rawStandards.length; i < l; i++) {
    standard = rawStandards[i];
    standard.domain = std.get(standard.domainId);
    builtStandard.push(standard);
  }
  return builtStandard
}

module.exports = {
  get: function(id) {
    return _.find(buildStandards(), function(std){
      return std.id === id;
    });
  },
  all: function() {
    return buildStandards();
  },

}