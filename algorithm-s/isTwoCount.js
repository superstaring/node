// 判断数组中是否有两数之和
function sumFind(arr, num) {
    if (!arr || arr.length < 2) {
        return;
    };
    let differ = {};
    for (let i = 0; i < arr.length; i++) {
        let subStract = num - arr[i];
        if (differ[subStract]) {
            return true;
        } else {
            differ[arr[i]] = true;
        }
    }
    return false;
}
console.log(sumFind([6, 4, 3, 2, 1, 7], 3));  // true
