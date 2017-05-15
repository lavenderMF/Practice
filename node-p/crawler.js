var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/search/?words=node';

function filterChapters(html) {
	var $ = cheerio.load(html);

	var chapters = $('.course-item-title');

//	[{
//		chapterTitle: '',
//		videos: [
//		title: '',
//		id: ''
//		]
//	}]
	var courseData = [];
	
	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('a').text();
		var chapterTap = chapter.find('span').text();
		var chapterData = {
			chapterTitle: chapterTitle,
			chapterTap: chapterTap
		}
		courseData.push(chapterData);
	})
	return courseData;
}

function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle + '\n');
	})
}

http.get(url, function(res) {
	var html = '';
	res.on('data', function(data) {
		html += data;
	});
	res.on('end', function() {
		var courseData = filterChapters(html);
		
		printCourseInfo(courseData);
	});
}).on('error', function() {
	console.log('出错');
});