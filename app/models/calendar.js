var mongoose = require('mongoose');

module.exports = mongoose.model('Calendar', {
   name: {type: String, default: ''} 
});