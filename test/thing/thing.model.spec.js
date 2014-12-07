var mongoose  = require("mongoose"),
    dbUri     = 'mongodb://localhost/MEAN_stack_test',
    Thing      = require("../../app/models/thing"),
    chai      = require("chai"),
    expect    = chai.expect;

//tell Mongoose to use our test DB
mongoose.connect(dbUri);  

describe("Thing", function(){  
  var currentThing = null;  

  beforeEach(function(done){    
    //add some test data   
    var table = new Thing({ name: 'Table' }); 
    table.save(function(err, table) {
      if (err) return console.error(err);
      currentThing = table;      
      done();    
    });
  });  

  afterEach(function(done){    
    Thing.remove({}, function() {      
      done();    
    });  
  });

  it("count is equal to one", function(done){   
    Thing.count({}, function(err, c) {
      if (err) return console.error(err);
      expect(c).to.equal(1);
      done();
    })
  });  

  it("can be found by name", function(done){    
    Thing.findOne({ name: currentThing.name }, function(err, thing) {
      if (err) return console.error(err);
      expect(thing.name).to.equal(currentThing.name);
      done();
    });
  });  
});