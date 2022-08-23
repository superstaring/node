// 方法一：

var arr = [1, [4, 3, [2, 5]]];

function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten(arr));  // [ 1, 4, 3, 2, 5 ]

// 方法二：

var arr = [1, [4, 3, [2, 5]]];

function flatten(arr) {
    return arr.reduce(function (prev, next) {
        return prev.concat(Array.isArray(next) ? flatten(next) : next);
    }, []);
}

console.log(flatten(arr));  // [ 1, 4, 3, 2, 5 ]


// 方法三：

var arr = [1, [4, 3, [2, 5]]];
var newArr = arr.flat(2).sort(function (a, b) { return a - b });
console.log(newArr);   // [ 1, 2, 3, 4, 5 ]


// 二维数组转换成一维数组

