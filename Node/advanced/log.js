var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
module.exports = function (req,res) {
	logger.debug('some debug message');
	res.send("welcome to use log4js");
}