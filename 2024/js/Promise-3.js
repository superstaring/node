// 手写Promise的实现
// queueMicrotask执行微任务

const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise {
    // 创建一个变量用来存储Promise的结果 私有属性
    #result
    // 创建一个变量来记录Promise的状态 pending 0 fulfilled 1 rejected 2
    #state = PROMISE_STATE.PENDING
    // 创建一个变量来存储回调函数
    #callback

    // 形参
    constructor(executor) {
        executor(this.#resolve.bind(this), this.#reject);
    }

    // 私有的resolve()
    #resolve(value) {
        // 使用bind绑定this，否则this为undefined

        // 禁止值被重复修改
        if (this.#state !== PROMISE_STATE.PENDING) return
        this.#result = value;
        this.#state = PROMISE_STATE.FULFILLED;  // 数据填充成功

        // 当resolve执行时，说明数据已经进来了，需要调用then的回调函数
        queueMicrotask(() => {
            this.#callback && this.#callback(this.#result)
        })
    }

    // 私有的reject()
    #reject(reason) {

    }

    // 添加一个用来读取数据的then方法
    then(onFulfilled, onRejected) {
        if (this.#state === PROMISE_STATE.PENDING) {
            // 进入判断说明数据还没有进入Promise，将回调函数设置为callback的值
            this.#callback = onFulfilled;
        } else if (this.#state === PROMISE_STATE.FULFILLED) {
            // 目前来讲，then只能读取已经存储进Promise的数据，而不能读取异步存储的数据
            queueMicrotask(() => {
                onFulfilled(this.#result);
            })
        }
    }
}

// 实参
const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');
        resolve('hello');
    }, 1000)
})

mp.then((result) => {
    console.log('读取数据：' + result);
})


