var request   = require('supertest'),
    mongoose  = require('mongoose'),
    Nerd      = require("../../app/models/nerd"),    
    express   = require('express'),
    dbUri     = 'mongodb://localhost/MEAN_stack_test',
    app       = express();


// Load up our routes
require('../../app/routes')(app);


describe('Server-side routes', function(){
  var seed_data;

  before(function(done) {
    mongoose.connect(dbUri);  
    mongoose.connection.on('open', function() {
      seed_data = new Nerd({ name: 'James' });
      seed_data.save(function(err, data) {
        if (err) return console.error(err);     
        done();    
      });
    });
  });

  after(function(done) {
    Nerd.remove({}, function() {      
      done();    
    });  
  })

  describe('GET /api/nerds', function() {
    it('respond with json', function(done){
      request(app)
        .get('/api/nerds')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(correctIndexContents)
        .end(done);
    });
  });

  describe('POST /api/nerds', function() {
    it('')
  });

  function correctIndexContents(res) {
    console.log(res.body);
    if ( res.body.constructor !== Array )   
      throw new Error("Constructor was expected to be Array, but was " + res.body.constructor);
    if ( res.body.length < 1)                   
      throw new Error("Array length expected to be 1, but was " + res.body.length);
    if ( typeof res.body[0] !== 'object' )      
      throw new Error("First element expected to be an object, but was " + typeof res.body[0]); 
    if ( res.body[0].name !== seed_data.name )     
      throw new Error("First name expected to be " + seed_data.name + ", but was " + res.body[0].name)
  }
});


