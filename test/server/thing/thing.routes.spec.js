var request   = require('supertest'),
    mongoose  = require('mongoose'),
    Thing     = require("../../../app/models/thing"),    
    express   = require('express'),
    dbUri     = 'mongodb://localhost/MEAN_stack_test',
    app       = express();


// Load up our routes
require('../../../app/routes')(app);


describe('Server-side routes', function(){
  var seed_data;

  before(function(done) {
    mongoose.connect(dbUri);  
    mongoose.connection.on('open', function() {
      seed_data = new Thing({ name: 'Table' });
      seed_data.save(function(err, data) {
        if (err) return console.error(err);     
        done();    
      });
    });
  });

  after(function(done) {
    Thing.remove({}, function() {      
      mongoose.disconnect();
      done();    
    });  
  });

  describe('GET /api/things', function() {
    it('respond with all our things', function(done){
      request(app)
        .get('/api/things')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function(res) {
          if ( res.body.constructor !== Array )   
            throw new Error("Constructor was expected to be Array, but was " + res.body.constructor);
          if ( res.body.length !== 1)                   
            throw new Error("Array length expected to be 1, but was " + res.body.length);
          if ( typeof res.body[0] !== 'object' )      
            throw new Error("First element expected to be an object, but was " + typeof res.body[0]); 
          if ( res.body[0].name !== seed_data.name )     
            throw new Error("First name expected to be " + seed_data.name + ", but was " + res.body[0].name)
        })
        .end(done);
    });
  });

  describe('POST /api/things', function() {
    it('posts and persists a new thing', function(done) {
      var new_name = 'Umbrella';
      request(app)
        .post('/api/things')
        .send({ name: new_name })
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function(res) {
          Thing.find({ name: seed_data.name }, function(err, data) {
            if (err)
              throw new Error("Error: " + err);
            if (!data)
              throw new Error("Query didn't find any record with name of " + new_name);
          });
        })
        .end(done);
    });
  });
});


