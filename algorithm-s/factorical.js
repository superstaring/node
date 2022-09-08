// 20以内的阶乘
// 一个正整数的阶乘是所有小于及等于该数的正整数的积，并且0的阶乘为1。自然数n的阶乘写作n!
var sum = 1;
for (var i = 1; i <= 20; i++) {
    sum *= i;
}
console.log('sum: ' + sum);