var Domain = require('../models/domain');

module.exports = function(app) {
  app.get('/domains', function(req, res) {
    res.json(Domain.all());
  });

  app.get('/domains/:id', function(req, res) {
    var domainId = parseInt(req.param('id'), 10);
    res.json(Domain.get(domainId) || {});
  });
};