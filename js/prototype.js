function A() { };
const a = new A();
console.log(a.constructor === A);   //true


function A() { };
A.prototype = { n: 20 };
const a = new A();
console.log(a.constructor === A);   //false


function A() { };
A.prototype = { n: 20 };
const a = new A();
a.n = 21;
console.log(A.prototype.n); //20


function fn() {
  setTimeout(function () { }, 300);
}
fn();     // 没有打印


var a;
function fn() {
  a = function () { };
  console.log(a);  // function(){}
};
console.log(a);  // undefined
fn();
