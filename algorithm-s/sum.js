// 求整数1～100的累加值，但要求跳过所有个位为3的数
var num = 0;
for (var i = 1; i < 100; i++) {
    if (i % 10 === 3) {
        continue;
    }
    console.log(i);
    num += i;
}
console.log(num);