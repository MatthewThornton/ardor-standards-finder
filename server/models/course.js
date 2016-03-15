var _ = require('lodash');

var courses = [
  {"id": 1,  "name": "Grade 1", "description": " " },
  {"id": 2,  "name": "Grade 2", "description": " "},
  {"id": 3,  "name": "Grade 3", "description": " "},
  {"id": 4,  "name": "Grade 4", "description": " "},
  {"id": 6,  "name": "Grade 6", "description": " "},
  {"id": 7,  "name": "Grade 7", "description": " "},
  {"id": 8,  "name": "Grade 8", "description": " "}

];

module.exports = {
  get: function(id) {
    return _.find(courses, function(course){
      return course.id === id;
    });
  },
  all: function() {
    return courses;
  }
};