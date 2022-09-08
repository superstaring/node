// 篮球从5米高的地方掉下来，每次弹起的高度是原来的30%，经过几次弹起，篮球的高度小于0.1米
var height = 5;
var times = 0;
for (var i = 1; true; i++) {
    height = height * 0.3;
    if (height < 0.1) {
        break;
    }
    times = i;
}
console.log(times);