var _ = require('lodash');
var Standard = require('../models/standard')

module.exports = function(app) {
  app.get('/standards', function(req, res) {
    res.json(Standard.all());
  });

  app.post('/standards', function(req, res) {
      res.json(Standard.create(req.body));

  });

  app.put('/standards/:id', function(req, res) {
      res.json(Standard.update(req.body));

  });

  app.get('/standards/:id', function(req, res) {
    var noteId = parseInt(req.param('id'), 10);
    res.json(Standard.get(noteId) || {});
  });

  app.delete('/standards/:id', function(req, res) {
    res.json(Standard.delete(parseInt(req.param('id'), 10)) || {});
  });
};
