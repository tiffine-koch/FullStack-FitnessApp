'use strict';

var express = require('express');
var router = express.Router();

router.post('/register', function(req, res, next) {
  res.send(req.body);
});

router.post('/login', function(req, res, next) {
  res.send(req.body);
});

module.exports = router;
