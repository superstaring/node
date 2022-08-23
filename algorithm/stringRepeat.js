var str = "fsfssgsgsngmshj";
//1 先将字符串转换成数组
var newArr = str.split("");
//2 创建一个对象
var obj = {};
//3  遍历数组,判断对象中是否存在数组中的值,如果存在值+1,不存在赋值为1
for (var i = 0; i < newArr.length; i++) {
    if (obj[newArr[i]]) {
        obj[newArr[i]] += 1;
    } else {
        obj[newArr[i]] = 1;
    }
}
//4 定义两个变量存储字符串,字符串出现的字数
var num = 0;
var number = "";
for (var k in obj) {
    if (obj[k] > num) {
        num = obj[k];
        number = k;
    }
}
console.log("出现次数：" + num + "最多的字符:" + number);

// 字符串中出现最多的字符和次数