var mongoose = require('mongoose');

var userSchema = new mongoose.Schema ({
  email: { type: String, lowercase: true },
  username: { type: String, lowercase: true, maxlength: 20 },
  level: { type: Number },
  location: { type: String },
  member: { type: Boolean},
  updatedAt: {type: Date, default: Date.now}
});

userSchema.pre('save', function(next) {
  var user = this;
  user.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('User', userSchema);
