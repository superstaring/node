var { EventEmitter } = require('events');

var event = new EventEmitter();

event.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

event.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

// 对于每个事件，EventEmitter 支持 若干个事件监听器。

event.emit('someEvent', 'arg1 参数', 'arg2 参数'); 