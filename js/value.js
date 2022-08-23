alert(a);
a();
var a = 3;
function a() {
    alert(10);
};
alert(a);
a = 6;
a();


// 'function a(){ alert(10) }'
// 10
// 3
// typeError: a is not a function 

// var和函数声明均有变量提升


function test(m) {
    m = { v: 5 };
}

var m = { K: 30 };
test(m);
console.log(m.v);   // undefined 访问不到



function a(b) {
    console.log(b);
    b = function () {
        console.log(b);
    };
    b();
}
a();
// undefined
// function(){console.log(b)}


function fn(b) {
    console.log(b);
    function b() {
        console.log(b);
    }
    b();
}
fn(10);  // 先参数赋值，在提升
// function(){console.log(b)}
// function(){console.log(b)}


function t(a) {
    var a = 'hello';
    console.log(a);
    function a() {
        console.log(null);
    }
    console.log(a);
}
t(null);
//hello
//hello

var a = 2;
function foo() {
    console.log(a);
}
function bar() {
    var a = 3;
    foo();
}
bar();
// 2



