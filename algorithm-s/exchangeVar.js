// 不用第三个变量，交换a和b的值

var a = 18;
var b = 55;

a = a + b;
console.log("新的a:" + a);
b = a - b;
console.log('交换后的b: ' + b);
a = a - b;
console.log('交换后的a: ' + a);