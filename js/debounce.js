// 防抖和节流如何用js实现

// 防抖：是指事件触发后在延迟一定的时间再去执行，若在延迟时间内再次触发则重新计算延迟时间。（debounce）

// 防抖的应用场景：
// 输入框中频繁的输入内容，搜索或者提交信息；
// 频繁的点击按钮，触发某个事件
// 监听浏览器滚动事件，完成某些特定操作；
// 用户缩放浏览器的resize事件；

function debounce(fn, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay)
    }
}

debounce(function (...args) { console.log('debounce: ' + [...args]) }, 2000)('1');

// 节流：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。（throttle）

// 节流的使用场景：
// 图片懒加载
// ajax数据请求加载

function throttle(fn, delay) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                timer = null;
            }, delay)
        }
    }
}

// function throttle(fn, delay) {
//     let timer = null;
//     return function () {
//         let that = this;
//         let args = arguments;
//         if (!timer) {
//             timer = setTimeout(function () {
//                 fn.apply(that, args);
//             }, delay)
//         }
//     }
// }

throttle(function (...args) { console.log('throttle: ' + [...args]) }, 2000)('2');