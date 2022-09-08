// 计算数组内最大最小值
function arrMaxMin(arr) {
    var max = arr[0];
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {
        var item = parseFloat(arr[i]);
        if (item > max) {
            max = arr[i];   // arr[i]
        }

        if (item < min) {
            min = arr[i];
        }
    }

    return {
        max: max,
        min: min,
    }
}

console.log(arrMaxMin([888, 999, 66, 'wechat:', 820262236, 0]));
// parseFloat() 函数可解析一个字符串，并返回一个浮点数。
// 该函数指定字符串中的首个字符是否是数字。如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。
// parseFloat('wechat')    // NaN

// 借助Math.max.apply()函数
function arr_max_min(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    return {
        max: max,
        min: min
    }
}
console.log(arr_max_min([888, 999, 66, 820262236, 0]));

