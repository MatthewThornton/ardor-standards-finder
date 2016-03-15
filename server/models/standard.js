var _ = require('lodash');
var Domain = require('./domain');
var Course = require('./course');
var standards = [
  {
    "id": 1, "courseId": 7, "domainId": 3,
    "title": "Use properties of operations to generate equivalent expressions.",
    "standardId": "CCSS.MATH.CONTENT.7.EE.A.1",
    "description": "Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions with rational coefficients."
  },
  {
    "id": 2, "courseId": 7, "domainId": 3,
    "title": "Use properties of operations to generate equivalent expressions.",
    "standardId": "CCSS.MATH.CONTENT.7.EE.A.2",
    "description": "Understand that rewriting an expression in different forms in a problem context can shed light on the problem and how the quantities in it are related. For example, a + 0.05a = 1.05a means that 'increase by 5%' is the same as 'multiply by 1.05'."
  },
  {
    "id": 3, "courseId": 7, "domainId": 1,
    "title": "Analyze proportional relationships and use them to solve real-world and mathematical problems.",
    "standardId": "CCSS.MATH.CONTENT.7.RP.A.1",
    "description": "Compute unit rates associated with ratios of fractions, including ratios of lengths, areas and other quantities measured in like or different units. For example, if a person walks 1/2 mile in each 1/4 hour, compute the unit rate as the complex fraction 1/2/1/4 miles per hour, equivalently 2 miles per hour."
  },
  {
    "id": 4, "courseId": 7, "domainId": 4,
    "title": "Draw construct, and describe geometrical figures and describe the relationships between them.",
    "standardId": "CCSS.MATH.CONTENT.7.G.A.1",
    "description": "Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing and reproducing a scale drawing at a different scale."
  },
  {
    "id": 5, "courseId": 7, "domainId": 2,
    "title": "Apply and extend previous understandings of operations with fractions.",
    "standardId": "CCSS.MATH.CONTENT.7.NS.A.1",
    "description": "Apply and extend previous understandings of addition and subtraction to add and subtract rational numbers; represent addition and subtraction on a horizontal or vertical number line diagram."
  }
];
var lastId = 5;

var buildStandards = function() {
  // Make a deep copy so we don't change the main standards array
  var rawStandards = JSON.parse(JSON.stringify(standards));
  var builtStandards = [];
  var standard;

  for(var i=0, l=rawStandards.length; i < l; i++) {
    standard = rawStandards[i];
    standard.course = Course.get(standard.courseId);
    standard.domain = Domain.get(standard.domainId);
    builtStandards.push(standard);
  }
  return builtStandards
};

module.exports = {
  get: function(id) {
    return _.find(buildStandards(), function(standard){
      return standard.id === id;
    });
  },
  all: function() {
    return buildStandards();
  },
  update: function(standard) {
    var updateStandard;
    for(var i=0, l=standards.length; i < l; i++) {
      if(standards[i].id === standard.id){
        _.assign(standards[i], standard);
        updateStandard = standards[i];
        break;
      }
    }
    return updateStandard;
  },
  delete: function(id) {
    var deleteStandard;
    for(var i=0, l=standards.length; i < l; i++) {
      if(standards[i].id === id){
        deleteStandard = standards[i];
        standards.splice(i, 1);
        break;
      }
    }
    return deleteStandard;
  },
  create: function(standard) {
    lastId += 1;
    standard.id = lastId;
    standards.push(standard);
    return standard;
  }
};