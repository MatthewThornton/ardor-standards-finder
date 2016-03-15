var _ = require('lodash');

var Course = require('../models/course');

module.exports = function(app){
  app.get('/course', function(req, res){
    res.json(Course.all());
  });

  app.get('/course/:id', function(req, res){
    var courseId = parseInt(req.params.id, 10);

    res.json(Course.get(courseId) || {});
  });
};
