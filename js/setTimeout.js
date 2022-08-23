//  setTimeout 输出0-9

// 10个10
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    });
}

// 方法一  0-9  let
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    });
}

// 方法二 立即执行函数
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        });
    })(i);
}

for (var i = 0; i < 10; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i);
        });
    })(i);
}

// 方法三 
// setTimeout的第三个参数，会作为回调函数的第一个参数传入
for (var i = 0; i < 10; i++) {
    setTimeout((i) => {
        console.log(i);
    }, 0, i);
}


