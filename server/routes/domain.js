var Category = require('../models/domain');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/domain', function(req, res) {
    res.json(Category.all());
  });

  app.get('/domain/:id', function(req, res) {
    var categoryId = parseInt(req.param('id'), 10);
    res.json(Category.get(categoryId) || {});
  });
};