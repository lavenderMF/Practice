var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

//life.setMaxListeners(11);设置最大值

life.on('test', function(who) {
	console.log(who + 'testestsetet');
});


var hasConforListener = life.emit('test', 'nimei');

//removelistener移除事件

console.log(hasConforListener);

console.log(life.listeners('test').length);
console.log(EventEmitter.listenerCount(life, 'test'));
