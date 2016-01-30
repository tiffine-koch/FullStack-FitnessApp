var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user')

var authMiddleware = require('../config/auth');

router.use(authMiddleware);

// render page
router.get('/', function(req, res, next) {
  console.log('cookies:', req.cookies);
  User.findById(req.user._id, function(err, user) {
    console.log(user);
    var arr = [];
    arr.push(user);
    res.render('info', {arr: arr});
  });
});
// router.get('/', function(req, res, next) {
//   res.render('info', {user: user});
// });

// router.get('/', function(req, res) {
//   User.findById(req.body.user, function(err, user) {
//     res.status(err ? 400 : 200).send(err || user);
//     res.render('info', {user: user});
//   });
// });

//post new user log
router.post('/', function(req, res) {
  console.log('ffffffffff: ',req.body.user);
  console.log('inside post');
  var user = new User ({
    uid: req.body.uid,
    date: req.body.date,
    mileage: req.body.mileage,
    location: req.body.location,
    weather: req.body.weather
  });
  console.log(user);
//save log
  user.save(function(err, savedUser) {
    if (err) return res.status(400).send(err);
    console.log('savedUser:', savedUser);
    res.send(savedUser);
  });
});

router.delete('/info/:userId', function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    User.remove(function(err) {
      res.status(err ? 400 : 200).send(err || null);
    });
  });
});

module.exports = router;
