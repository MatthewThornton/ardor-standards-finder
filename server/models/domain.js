var _ = require('lodash');

var domains = [
  {"id": 1, "name": "Ratios & Proportional Relationships"},
  {"id": 2, "name": "The Number System"},
  {"id": 3, "name": "Expressions and Equations"},
  {"id": 4, "name": "Geometry"},
  {"id": 5, "name": "Statistics and Probability"}
];

module.exports = {
  get: function(id) {
    return _.find(domains, function(domain){
      return domain.id === id;
    });
  },
  all: function() {
    return domains;
  }
}