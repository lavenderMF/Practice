var http = require('http');
var cheerio = require('cheerio');
//var Promise = require('Promise');
var Promise = require('bluebird');
var url = 'http://www.imooc.com/search/?words=node';
var baseurl = 'http://www.imooc.com/learn/';
var videoIds = ['637','348','277'];

//处理页面需要的数据
function filterChapters(html) {
	var $ = cheerio.load(html);

	var chapters = $('.auto-wrap');
	var title = $('.first');
	var number = $('.meta-value');
	
	//	[{
	//		chapterTitle: '',
	//		videos: [
	//		title: '',
	//		id: ''
	//		]
	//	}]
	var courseData = {
		videos: chapters,
		number: number,
		title: title
	};

//	chapters.each(function(item) {
//		var chapter = $(this);
//		var chapterTitle = chapter.find('a').text();
//		var chapterTap = chapter.find('span').text();
//		var chapterData = {
//			chapterTitle: chapterTitle,
//			chapterTap: chapterTap
//		}
//		courseData.push(chapterData);
//	})
	return courseData;
}

function printCourseInfo(courseData) {
	courseData.forEach(function(item) {
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle + '\n');
	})
}

//爬取所有
function getPageAsync(url) {
	return new Promise(function(resolve, reject) {
		console.log('正在爬取' + url);
		
		http.get(url, function(res) {
			var html = '';
			
			res.on('data', function(data) {
				html += data;
			});
			
			res.on('end', function() {
				resolve(html);
//				var courseData = filterChapters(html);

//				printCourseInfo(courseData);
			});
		}).on('error', function(e) {
			reject(e);
			console.log('出错');
		});
	})
}

var fetchCourseArray = [];
//遍历传参爬取
videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseurl + id));
})

//将爬取的数据传filterChapters处理
Promise.all(fetchCourseArray).then(function(pages){
	var coursesData = [];
	
	pages.forEach(function(html){
		var courses = filterChapters(html);
		coursesData.push(courses);
	})
	console.log(coursesData);
})
