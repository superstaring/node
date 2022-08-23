// 数组中某个值出现的次数

function count(array, number) {
    var arrayCount = array.reduce((prev, cur) => {
        prev[cur] ? prev[cur]++ : prev[cur] = 1;
        return prev;
    }, {});

    return arrayCount[number] || 0;
}

console.log(count([1, 1, 2, 3, 3, 3, 3, 4, 6, 3], 3));