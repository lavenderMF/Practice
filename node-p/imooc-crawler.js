var http = require('http');
var url = 'http://www.imooc.com/search/?words=node';

http.get(url, function(res) {
	var html = '';
	res.on('data', function(data) {
		html += data;
	});
	res.on('end', function() {
		console.log(html);
	});
}).on('error', function() {
	console.log('出错');
});