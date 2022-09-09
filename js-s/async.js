// 循环打印红黄绿
// 红灯3s亮一次，绿灯1s亮一次，黄灯2s亮一次；如何让三灯不断交替重复亮灯

// (1) callback 实现
// 三个亮灯函数
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

const task = (timer, light, callback) => {
    setTimeout(() => {
        if (light === 'red') { red() };
        if (light === 'green') { green() };
        if (light === 'yellow') { yellow() };

        callback();
    }, timer)
}

// task(3000, 'red', () => {
//     task(2000, 'green', () => {
//         task(1000, 'yellow', Function.prototype);
//     })
// })

// 递归交替重复
const step = () => {
    task(3000, 'red', () => {
        task(2000, 'green', () => {
            task(1000, 'yellow', step);
        })
    })
}
step();

// (2) 用promise实现
// 三个亮灯函数
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

const task2 = (timer, light) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') { red() }
            if (light === 'green') { green() }
            if (light === 'yellow') { yellow() }
            resolve();
        }, timer)
    })
}

const step2 = () => {
    task2(3000, 'red').then(() => {
        task2(2000, 'green');
    }).then(() => {
        task2(1000, 'yellow');
    })
    // .then(step2)           // 循环
}

step2();

