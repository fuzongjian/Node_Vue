# Node.js学习
## 基础


## [爬虫](#爬虫)

* [Nodejs中文练习](#Nodejs中文练习)

## 爬虫
* Nodejs中文练习

```
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
```
