// 连字符转成驼峰
let str = 'get-element-by-id';
let arr = str.split('-');
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
}
console.log(arr.join(''));   // getElementById
