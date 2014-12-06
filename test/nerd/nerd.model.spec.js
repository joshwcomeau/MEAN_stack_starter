var mongoose  = require("mongoose"),
    dbUri     = 'mongodb://localhost/MEAN_stack_test',
    Nerd      = require("../../app/models/nerd"),
    chai      = require("chai"),
    expect    = chai.expect;

//tell Mongoose to use our test DB
mongoose.connect(dbUri);  

describe("Nerd", function(){  
  var currentNerd = null;  

  beforeEach(function(done){    
    //add some test data   
    var sheldon = new Nerd({ name: 'Sheldon' }); 
    sheldon.save(function(err, sheldon) {
      if (err) return console.error(err);
      currentNerd = sheldon;      
      done();    
    });
  });  

  afterEach(function(done){    
    Nerd.remove({}, function() {      
      done();    
    });  
  });

  it("count is equal to one", function(done){   
    Nerd.count({}, function(err, c) {
      if (err) return console.error(err);
      expect(c).to.equal(1);
      done();
    })
  });  

  it("can be found by name", function(done){    
    Nerd.findOne({ name: currentNerd.name }, function(err, nerd) {
      if (err) return console.error(err);
      expect(nerd.name).to.equal(currentNerd.name);
      done();
    });
  });  
});