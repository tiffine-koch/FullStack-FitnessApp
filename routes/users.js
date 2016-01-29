'use strict';

var express = require('express');
var router = express.Router();

var Firebase = require('firebase');

var ref = new Firebase('https://sillylogintest.firebaseio.com/');

router.post('/register', function(req, res, next) {
  ref.createUser(req.body, function(err, userData) {
    if(err) return res.status(400).send(err);
    res.send();
  });
});

router.post('/login', function(req, res, next) {
  ref.authWithPassword(req.body, function(err, authData) {
    if(err) return res.status(400).send(err);
    console.log('authData:', authData);
    
    res.cookie('mytoken', authData.token).send();
  });
});

module.exports = router;
