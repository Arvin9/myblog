var config = require('../config/config');

var env = process.env.NODE_ENV || "development"


var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: '../logs/debug.log', category: 'debug' }
  ]
});

var logger = log4js.getLogger('debug');
logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR')

module.exports = logger;
