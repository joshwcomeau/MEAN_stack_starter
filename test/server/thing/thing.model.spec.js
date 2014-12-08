var mongoose  = require("mongoose"),
    dbUri     = 'mongodb://localhost/MEAN_stack_test',
    Thing      = requireFromRoot("app/models/thing"),
    chai      = require("chai"),
    expect    = chai.expect;

describe("Thing", function(){  
  var currentThing = null;  


  before(function(done){    
    mongoose.connect(dbUri);      
    //add some test data   
    var table = new Thing({ name: 'Table' }); 
    table.save(function(err, table) {
      if (err) return console.error(err);
      currentThing = table;      
      done();    
    });
  });  

  after(function(done){    
    Thing.remove({}, function() {    
      mongoose.disconnect();
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