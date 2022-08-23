// 链式调用的核心就在于调用完的方法将自身实例返回。

var obj = {
    a: function () {
        console.log('a');
        return this;
    },
    b: function () {
        console.log('b');
        return this;
    }
};

console.log(obj.a().b());   // a  b



function Class1() {
    console.log('初始化');
}
Class1.prototype.method = function (param) {
    console.log(param);
    console.log(this === cl);  //true   this指向实例对象
    return this;
}

let cl = new Class1();

console.log(cl.method('第一次调用').method('第二次调用').method('第三次调用'));