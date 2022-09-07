function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3));    // 6


function add(...args) {
    return args.reduce((a, b) => a + b);
}

function currying(fn) {
    let args = [];
    return function temp(...newArgs) {
        console.log('newArgs:' + [...newArgs]);
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ];
            return temp;
        } else {
            let val = fn.apply(this, args);
            args = [];
            return val;
        }
    };
}

let addCurry = currying(add);

console.log(addCurry(1)(2)(3)());
console.log(addCurry(1, 2)(3, 4)());


// const curry = (fn) => (judge = (...args) => args.length === fn.length ? fn(...args) : (...args) => judge(...args, ...arg));
// const add1 = (a, b, c) => a + b + c;
// const curryAdd = curry(add1);

// console.log(curryAdd(1)(2)(3));
// console.log(curryAdd(1, 2)(3));
// console.log(curryAdd(1)(2, 3));