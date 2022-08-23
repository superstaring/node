setTimeout(() => {
    console.log('定时器');
}, 1000);

Promise.resolve().then((result) => {
    console.log('Promise');
});

console.log('console');

// console
// Promise
// 定时器