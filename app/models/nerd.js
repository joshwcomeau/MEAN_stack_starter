var mongoose   = require('mongoose');

var nerdSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Nerd', nerdSchema);