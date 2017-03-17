var express = require('express');
var router = express.Router();
var models = require('../models/index');
var logger = require('../common/logger');

/**
 * 获取所有文摘
 */
router.get('/', function(req, res, next) {
  models.Digest.find(function(err, digests){
    if (err) {
      res.json(err);
      return logger.error(err);
    }
    res.json(digests);
  });
});

/**
 * 创建一条文摘
 */
router.post('/', function(req, res, next) {
  var digest = req.body;
  console.log(req.body);
  var Digest = new models.Digest(digest);
  Digest.save(function (err, digest) {
    if (err) {
      return logger.error(err);
    }
    res.json(digest);
  });
});

/* GET users listing. */
router.get('/ha', function(req, res, next) {
  res.send('ha');
});

module.exports = router;
