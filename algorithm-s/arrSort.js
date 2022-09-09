// 冒泡排序：数组排列，从小到大
// 得出最大值,冒泡到最右边.第二轮循环依次得出第二大值,以此类推.

var arr = [7, 3, 66, 34, 13, 41, 24, 4, 1, 10];
console.log("原始数据：" + arr);
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        console.log('j: ' + j + ' ' + 'j+1: ' + (j + 1));
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    console.log("第" + i + "次排序" + arr);
}
console.log("最终排序：" + arr + " 循环： " + i);  // 9

// 冒泡排序优化
var _arr = [7, 3, 66, 34, 13, 41, 24, 4, 1, 10];
var exchange; // 交换标志    
for (var i = 0; i < _arr.length - 1; i++) {  // 最多做n-1趟排序
    exchange = false;
    for (var j = _arr.length - 1; j > i; j--) {
        console.log('i: ' + i + '; j: ' + j);
        if (_arr[j] < _arr[j - 1]) {
            exchange = true;
            var tmp = _arr[j - 1];
            _arr[j - 1] = _arr[j];
            _arr[j] = tmp;
        }
    }
    // 若本趟排序未发生交换，提前终止算法
    if (!exchange) {
        break;
    }
}
console.log("最终排序：" + _arr + " 循环： " + i);   // 7

// sort排序
var a = [7, 3, 66, 34, 13, 41, 24, 4, 1, 10];
a.sort(function (a, b) {
    return a - b;
})
console.log(a);