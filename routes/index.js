var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Digest.find(function(err, digests){
    if (err) {
      res.render('index', { title: 'Express',err: err});
      return logger.error(err);
    }
    res.render('index', { title: 'Express',digests: digests});
  });
});

module.exports = router;
