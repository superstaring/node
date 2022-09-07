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
        if (timer) {
            clearTimeout(timer);
        }
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

// 因为是固定时间内执行一次时间，所以我们有两种实现方法，一用时间戳，二用定时器

// 时间戳
// 使用时间戳虽然能实现节流，但是最后一次事件不会执行 

function throttle(fn, delay) {
    // 1.记录上一次的开始时间
    let lastTime = 0;

    // 2.事件触发时, 真正执行的函数
    return function () {
        // 2.1.获取当前事件触发时的时间
        const nowTime = new Date().getTime();

        // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
        if (nowTime - lastTime > delay) {
            console.log('nowTime:  ' + nowTime + 'lastTime: ' + lastTime + 'delay: ' + delay);
            console.log('nowTime - lastTime: ' + (nowTime - lastTime));
            fn.apply(this, arguments);
            // 2.4.保留上次触发的时间
            lastTime = nowTime;
        }
    }
}

throttle(function (...args) { console.log('throttle: ' + [...args]) }, 2000)('2');

// 定时器
// 使用定时器实现节流，虽然最后一次能触发，但是第一次不会触发
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

throttle(function (...args) { console.log('throttle: ' + [...args]) }, 2000)('2');

// 时间戳 + 定时器
// 为解决第一次和最后一次都可以触发，把两者结合起来

function throttle(fn, delay) {
    let pre = 0, timer = null;
    return function (...args) {
        if (new Date() - pre > delay) {
            clearTimeout(timer);
            timer = null;
            pre = new Date();
            fn.apply(this, args)
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }
}

// 节流场景
// scroll 滚动
window.addEventListener('scroll', throttle(handleScroll, 200))
// input 动态搜索
throttle(fetchInput, 300)