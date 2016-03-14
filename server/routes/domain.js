var Domain = require('../models/domain');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/domain', function(req, res) {
    res.json(Domain.all());
  });

  app.get('/domain/:id', function(req, res) {
    var domainId = parseInt(req.param('id'), 10);
    res.json(Domain.get(domainId) || {});
  });
};