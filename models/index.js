/**
 * mongoose 链接
 */
var mongoose = require('mongoose');
var config = require('../config/config');
var logger = require('../common/logger');

mongoose.connect(config.db, {
    server: {poolSize: 20}
  }, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  } else {
    logger.info('connect to %s success: ', config.db);
  }
});

// models
require('./user');
require('./digest');

exports.User = mongoose.model('User');
exports.Digest = mongoose.model('Digest');
