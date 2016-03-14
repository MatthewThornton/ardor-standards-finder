var _ = require('lodash');
var Note = require('../models/standard')

module.exports = function(app) {
  app.get('/standards', function(req, res) {
    res.json(Note.all());
  });

  app.post('/standards', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Note.create(req.body));
    }, 1000);
  });

  app.put('/standards/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Note.update(req.body));
    },1000)
  });

  app.get('/standards/:id', function(req, res) {
    var noteId = parseInt(req.param('id'), 10);
    res.json(Note.get(noteId) || {});
  });

  app.delete('/standards/:id', function(req, res) {
    res.json(Note.delete(parseInt(req.param('id'), 10)) || {});
  });
};
