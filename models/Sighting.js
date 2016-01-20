var mongoose = require('mongoose');
var birdSchema = require('./Bird');

var sightingSchema = new mongoose.Schema ({
  bird: [birdSchema],
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 },
  user: { type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Sighting', sightingSchema);
