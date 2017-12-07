const express = require('express');
var bodyParser = require("body-parser");
var mutipart = require('connect-multiparty');
var moment = require('moment');
const app = express();
// 处理图片上传，图像保存在public/images下
app.use(mutipart({uploadDir:'./public/images'}));
// 解析请求体 （json）
app.use(bodyParser.json());
// 设置http服务监听的端口号
app.set('port',1122);
// 设置局域网访问
app.set('host','0.0.0.0');
app.listen(app.get('port'),function(){
	console.log("express started on http://" + app.get('host') + ":" + app.get('port') + ';press Ctrl-C to terminate');
});
app.get('/',function (req,res) {
	res.send("welcome node study");
})
// 爬虫模块
const spider = require('./spider/spider_command');
app.use('/spider',spider);