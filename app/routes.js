// Grab models here
var Nerd = require('./models/nerd');


module.exports = function(app) {
  // Server routes =========================================
  // Handles things like API calls and authentication

  // GET: INDEX
  app.get('/api/nerds', function(req, res) {
    Nerd.find(function(err, nerds) {
      
      // Nothing after 'res.send(err)' executes. It returns.
      if (err)
        res.send(err);

      res.json(nerds);
    });
  });

  // Next up: Put app.post, app.delete, etc.


  // Client routes =========================================

  // Angular will handle all front-end routes, SPA-style. Just send it there.
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });
};