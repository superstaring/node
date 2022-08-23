// 找出两个数组的交集元素

// 方法一：
let a = new Set([1, 2, 3, 4, 5, 6]);
let b = new Set([4, 5, 6, 7, 8]);
let same = new Set([...a].filter((x) => b.has(x)));
console.log([...same]);

// 方法二：
function getIntersection(arr1, arr2) {
    let arr = [];
    if (arr1.length > arr2.length) {
        for (let i = 0; i < arr1.length; i++) { // 循环长度大的
            if (arr2.includes(arr1[i])) {
                arr.push(arr1[i]);
            }
        }

    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1.includes(arr2[i])) {
                arr.push(arr2[i]);
            }
        }

    }

    return Array.from(new Set(arr));
}

console.log(getIntersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8]));

// 方法三：
function intersection(arr1, arr2) {
    arr1 = new Set(arr1);
    arr2 = new Set(arr2);

    let res = [];
    for (let item of arr1) {
        if (arr2.has(item)) {
            res.push(item);
        }
    }
    return res;
}
console.log(intersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8]));