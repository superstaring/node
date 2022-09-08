// 1~n 相加求和
function add(num) {
    if (num == 1) {
        return 1;
    }
    return add(num - 1) + num;
}

console.log(add(2));