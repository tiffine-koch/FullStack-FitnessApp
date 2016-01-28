var express = require('express');
var router = express.Router();

var Clog = require('../models/clog');

router.get('/', function(req, res, next) {
  Clog.find({}, function(err, clogs) {
    res.send(clogs);
  });
});

router.post('/', function(req, res, next) {
  Clog.create(req.body, function(err) {
    res.send();
  });
});

module.exports = router;
