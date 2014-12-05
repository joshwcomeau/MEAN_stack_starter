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
      currentNerd = sheldon;      
      done();    
    });
  });  

  afterEach(function(done){    
    Nerd.remove({}, function() {      
      done();    
    });  
  });

  // it("registers a new customer", function(done){    
  //   customer.register("test2@test.com", "password", "password", function(doc){      
  //     doc.email.should.equal("test2@test.com");      
  //     doc.crypted_password.should.not.equal("password");      
  //     done();    
  //   }, function(message){      
  //     message.should.equal(null);      
  //     done();    
  //   }); 
  // }); 



  it("count is equal to one", function(done){   
    Nerd.count({}, function(err, c) {
      expect(c).to.equal(1);
      done();
    })
  });  

  it("can be found by name", function(done){    
    Nerd.findOne({ name: currentNerd.name }, function(err, nerd) {
      expect(nerd.name).to.equal(currentNerd.name);
      done();
    });

    // Nerd.findByName(currentNerd.name, function(doc){      
    //   doc.email.should.equal("test@test.com");       
    //   done();    
    // });  
  });  
});