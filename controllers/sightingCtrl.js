var Sighting = require('../models/Sighting');

module.exports = {

  create: function(req, res) {
    Sighting.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) {
    Sighting.find(req.query)
    .populate('user')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.query.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.query.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
