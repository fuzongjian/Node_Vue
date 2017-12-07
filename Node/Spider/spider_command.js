const express = require('express');
const router = express.Router();
router.get('/',function (req,res) {
	res.send('we will start to study how to spider');
});
// nodejs中文网
var node = require('./cnode');
router.get('/cnode',node);
module.exports = router;