var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var url = "http://cnodejs.org";
var pages,current_page = 1,num=0;
function start(url){
	http.get(url,function(res){
		var html = '';        //用来存储请求网页的整个html内容
        var titles = [];
        var category = []
		res.setEncoding('utf-8'); //防止中文乱码
		//监听data事件，每次取一块数据
        res.on('data', function (chunk) {   
            html += chunk;
        });
        res.on('end',function(){
        	dealHTML(html)
        })
	});
}
function dealHTML(html){
    var $ = cheerio.load(html); //采用cheerio模块解析html
    var category = $('#content').find('.panel').find('.header')
    category.find('a').each(function (i,ele) {
        var category = {
            title: $(this).text(),
            category_url: url+$(this).attr('href')
        }
        // console.log(category)
    })
    $('#topic_list').find('.cell').each(function (i,ele) {
        var item = {
            item_index: i,
            item_title: $(this).find('.topic_title_wrapper').find('a').text().trim(),  // tirm()可以帮助去掉 \n
            item_url: url+$(this).find('.topic_title_wrapper').find('a').attr('href'),
            put_top: $(this).find('.topic_title_wrapper').find('span').text(),
            lastTime: $(this).find('.last_active_time').text(),
            replies: $(this).find('.reply_count').find('.count_of_replies').text().trim(),
            clicks: $(this).find('.reply_count').find('.count_of_visits').text().trim(),
        }
        console.log(item)
        ++num
        console.log('已经爬取'+num+'条数据')
    })
   var all_pages = $('.inner').find('.pagination').find('ul').find('li')
   all_pages.each(function (i,ele) {
       if(i+1 == all_pages.length){
            var last_url = $(this).find('a').attr('href')
            pages = last_url.split('&')[1].split('=')[1]
       }
   })
   if(++current_page < pages){
        var next_url = 'http://cnodejs.org?tab=all&page='+current_page
        start(next_url)
   }
};
module.exports = function (req,res) {
    start(url);
    res.send("开始爬取node中文网数据");
}