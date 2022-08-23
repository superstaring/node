// 实现(5).add(3).minus(2)功能
// 5+3-2，结果为6

Number.prototype.add = function (i = 0) {
    return this.valueOf() + i;
};
Number.prototype.minus = function (i = 0) {
    return this.valueOf() - i;
};

console.log((5).add(3).minus(2));

// this和this.valueOf()都可以

console.log([1, 4, 3].valueOf()); // [1,4,3]