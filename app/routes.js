var path = require('path');

// Grab models here
var Nerd = require('./models/nerd');


module.exports = function(app) {
  // Server routes =========================================
  // Handles things like API calls and authentication

  // GET: INDEX
  app.get('/api/nerds', function(req, res) {
    console.log("GET /api/nerds");
    Nerd.find(function(err, nerds) {
      
      // Nothing after 'res.send(err)' executes. It returns.
      if (err)
        res.json(err);

      res.json(nerds);
    });
  });

  app.post('/api/things', function(req, res) {
    console.log("POST /api/nerds");
    
    var nerd = new Nerd({
      name: req.body.name
    });

    nerd.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });

    return res.json(nerd);
  });


  // Client routes =========================================

  // Angular will handle all front-end routes, SPA-style. Just send it there.
  app.get('*', function(req, res) {
    console.log(__dirname);
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
  });
};