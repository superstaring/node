// 冒泡排序如何实现，时间复杂度是多少，还可以如何改进

// 挨着的两个进行比较，如果前一个比后一个大，那么交换位置

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log('i' + i);
        for (let j = 0; j < arr.length - i - 1; j++) {
            console.log('j' + j);
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort([4, 1, 8, 0, 10, 20]);  // [ 0, 1, 4, 8, 10, 20 ]


function bubbleSort1(arr) {
    let i = arr.length - 1;

    while (i > 0) {
        console.log('i' + i);
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i = pos;

    }

    console.log(arr);
}

bubbleSort1([4, 1, 8, 0, 10, 20]);  // [ 0, 1, 4, 8, 10, 20 ]