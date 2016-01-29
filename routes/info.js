var express = require('express');
var router = express.Router();

// var authMiddleware = require('../config/auth');

// router.use(authMiddleware);

router.get('/', function(req, res, next) {
  console.log('cookies:', req.cookies);

  res.render('info');
});
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // show my pokemon
// });
//
// router.post('/', function(req, res, next) {
//   // add pokemon to user
// });

module.exports = router;
