const express = require('express');
const router = express.Router();
router.get('/',function (req,res) {
	res.send('we will start to study base node');
});
// 模块
const module_test = require('./module');
router.get('/module',module_test.test);
module.exports = router;