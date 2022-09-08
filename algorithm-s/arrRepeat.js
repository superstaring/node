// 数组去重
function uniqArr(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) < 0) {
            temp.push(arr[i]);
        }
    }

    return temp;
}

console.log(uniqArr(['1', '3', 'a', 'a', '3', 'by', 'lidysun']));

// es6中利用Array.from 和 Set去重
function uniqArr(arr) {
    return Array.from(new Set(arr));
}
console.log(uniqArr(['1', '3', 'a', 'a', '3', 'by', 'lidysun']));

