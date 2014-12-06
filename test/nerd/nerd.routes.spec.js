var request   = require('supertest'),
    mongoose  = require('mongoose'),
    express   = require('express'),
    dbUri     = 'mongodb://localhost/MEAN_stack_test',
    app       = express();


// Load up our routes
require('../../app/routes')(app);


describe('GET /api/nerds', function(){
  before(function (done) {
    mongoose.connect(dbUri);  
    mongoose.connection.on('open', done);
  });

  it('respond with json', function(done){
    request(app)
      .get('/api/nerds')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
