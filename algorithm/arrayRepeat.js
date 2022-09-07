// 数组去重

// 方法一：
function arrayRepeat(arr) {
    let newArr = [];
    let obj = {};

    for (let i of arr) {
        if (!obj[i]) {
            newArr.push(i);
            obj[i] = i;
        }
    }

    return newArr;
}

console.log(arrayRepeat([1, 3, 10, 5, 10, 3, 2]));

// 方法二：
function arrayRepeat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log('i:' + i + 'j:' + j)
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }

    return arr;
}

console.log(arrayRepeat([1, 3, 10, 5, 10, 3, 2]));
