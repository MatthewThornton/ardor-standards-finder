var _ = require('lodash');
var Standard = require('../models/standard')

module.exports = function(app) {
  app.get('/standards', function(req, res) {
    res.json(Standard.all());
  });

  app.post('/standards', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Standard.create(req.body));
    }, 1000);
  });

  app.put('/standards/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Standard.update(req.body));
    },1000)
  });

  app.get('/standards/:id', function(req, res) {
    var standardId = parseInt(req.param('id'), 10);
    res.json(Standard.get(standardId) || {});
  });

  app.delete('/standards/:id', function(req, res) {
    res.json(Standard.delete(parseInt(req.param('id'), 10)) || {});
  });
};
