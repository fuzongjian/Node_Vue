const express = require('express');
const router = express.Router();
router.get('/',function (req,res) {
	res.send('we will start to study advanced node');
});
const log = require('./log');
router.get('/log',log);
module.exports = router;