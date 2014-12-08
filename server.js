// Modules ==========================================================
var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    mongoose        = require('mongoose');


// Configuration ====================================================
var db    = require("./config/db"),
    port  = process.env.PORT || 3000;

mongoose.connect(db.url);  

// BodyParser lets us use POST parameters as JS objects.
app.use(bodyParser.json());   
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Simulate DELETE/PUT, since HTTP only handles GET/POST
app.use(methodOverride('X-HTTP-Method-Override'));  

// turns paths like /img into /public/img
app.use(express.static(__dirname + '/public'));   


// routes ===========================================================
require('./app/routes')(app);


// start app ========================================================
app.listen(port);
console.log('Green for go on port ' + port);

// Exposes our app
exports = module.exports = app;