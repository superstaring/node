// const { EventEmitter } = require('events');
// 实现 EventEmitter 类

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        // 如果不存在该事件，则进行数组初始化
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        // 存在对应的数组继续订阅收集，则把事件推入收集数组
        this.events[eventName].push(callback)
        // 返回自身 方便链式调用
        return this
    }

    // 事件触发，触发的过程就是发布，也就是通知订阅者
    emit(eventName, ...args) {
        // 不存在该事件，则不触发
        if (!this.events[eventName]) {
            return this
        }
        // 存在则对收集的订阅者一一通知(函数一一执行)
        const fns = this.events[eventName]
        // 执行的时候绑定自身this
        fns.forEach(fn => fn.apply(this, args))
        // 返回自身 方便链式调用
        return this
    }

    // 解绑事件，取消订阅，将订阅者从订阅者数组中移除
    remove(eventName, callback) {
        if (!this.events[eventName]) {
            return this;
        }
        // 没有指定解绑事件? 就是没有指定对应的订阅者，那么移除所有订阅者
        if (!callback) {
            this.events[eventName] = null
            return this
        }
        // 否则找到该事件, 就是对应的订阅者，将其移除
        const index = this.events[eventName].indexOf(callback);
        this.events[eventName].splice(index, 1);
        return this;
    }

    // 单次绑定事件,执行完后解绑
    once(eventName, callback) {
        const only = () => {
            callback.apply(this, arguments);
            this.remove(eventName, only);
        };
        this.on(eventName, only);
        return this;
    }

}


const events = new EventEmitter();

events.on('connection', function (arg1, arg2) {
    console.log('已连接', arg1, arg2);
})
events.on('connection', function (arg1, arg2) {
    console.log('已连接2', arg1, arg2);
})

events.on('data', function (arg1, arg2) {
    console.log('接收成功', arg1, arg2);
})

events.emit('connection', '参数1', '参数2');

// events.remove('data');

events.emit('data', '参数1', '参数2');
events.emit('data', '参数3', '参数4');

events.once('one', function () {
    console.log('once');
});
events.emit('one');
events.emit('one');