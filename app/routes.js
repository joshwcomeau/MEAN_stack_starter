var path = require('path');

// Grab models here
var Thing = require('./models/thing');


module.exports = function(app) {
  // Server routes =========================================
  // Handles things like API calls and authentication

  // GET: INDEX
  app.get('/api/things', function(req, res) {
    console.log("GET /api/things");
    Thing.find(function(err, things) {
      
      // Nothing after 'res.send(err)' executes. It returns.
      if (err)
        res.json(err);

      res.json(things);
    });
  });

  app.post('/api/things', function(req, res) {
    console.log("POST /api/things");
    
    var thing = new Thing({
      name: req.body.name
    });
    
    console.log(req.body);

    thing.save(function (err) {
      if (err) {
        return console.log(err);
      }
    });

    return res.json(thing);
  });


  // Client routes =========================================

  // Angular will handle all front-end routes, SPA-style. Just send it there.
  app.get('*', function(req, res) {
    console.log(__dirname);
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
  });
};