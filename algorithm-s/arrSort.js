// 冒泡排序：数组排列，从小到大

var arr = [7, 3, 66, 34, 13, 41, 24, 4, 1, 10];
console.log("原始数据：" + arr);
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            console.log('j: ' + j + ' ' + 'j+1: ' + (j + 1));
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    console.log("第" + i + "次排序" + arr);
}
console.log("最终排序：" + arr);