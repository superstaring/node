// 使用js生成1-1000的数组
let arr = Array.from({ length: 1000 }, (node, i) => i + 1);
console.log(arr);

let _arr = Array.from(new Array(1001).keys()).slice(1);
console.log(_arr);

// 如何判断一个对象是否为空对象
function checkNullObj(obj) {
    return Object.keys(obj).length === 0;
}
console.log(checkNullObj({}));   // true
console.log(checkNullObj({ a: '1' }));  // false

// a==1 && a==2 && a==3 可能为true吗？
const a = {
    value: 1,
    toString: function () {
        return a.value++;
    }
}
console.log(a == 1 && a == 2 && a == 3) // true