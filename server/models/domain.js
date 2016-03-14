var _ = require('lodash');

var domian = [
  {"id": 1, "name": "Ratios & Proportional Relationships"},
  {"id": 2, "name": "The Number System"},
  {"id": 3, "name": "Expressions and Equations"},
  {"id": 4, "name": "Geometry"},
  {"id": 5, "name": "Statistics and Probability"},
]

module.exports = {
  get: function(id) {
    return _.find(domain, function(domain){
      return domain.id === id;
    });
  },
  all: function() {
    return domain;
  }
}