// routes/home.js

var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res){
  res.render('home/home');
});
router.get('/photo', function(req, res){
  res.render('home/photo');
});
router.get('/video', function(req, res){
  res.render('home/video');
});
router.get('/contact', function(req, res){
  res.render('home/contact');
});

module.exports = router;