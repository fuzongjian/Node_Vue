const express = require('express');
const router = express.Router();
router.get('/',function (req,res) {
	res.send('we will start to study base node');
});
module.exports = router;