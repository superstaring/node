// 深拷贝和浅拷贝

// 浅拷贝：只复制指向某个对象的引用，而不复制对象本身，新旧对象共享一块内存
// 深拷贝：复制并创建一个一摸一样的对象，不共享内存，修改新对象，旧对象保持不变

// 浅拷贝
var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = obj1;
obj2.b = 40;
console.log(obj1);  // { a: 10, b: 40, c: 30 }
console.log(obj2);  // { a: 10, b: 40, c: 30 }

// 深拷贝
var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = { a: obj1.a, b: obj1.b, c: obj1.c };
obj2.b = 40;
console.log(obj1); // { a: 10, b: 20, c: 30 }
console.log(obj2); // { a: 10, b: 40, c: 30 }

// 浅拷贝的实现
var json1 = { a: 'name', arr1: [1, 2, 3] };
function copy(obj1) {
    var obj2 = {};
    for (var i in obj1) {
        obj2[i] = obj1[i];
    }
    return obj2;
}

var json2 = copy(json1);
json2.arr1.push(4);
console.log(json1.arr1); // [ 1, 2, 3, 4 ]
console.log(json2.arr1); // [ 1, 2, 3, 4 ]

// Object.assign()是一种对非嵌套对象进行深拷贝的方法，如果对象中出现嵌套情况，那么其对被嵌套对象的行为就成了普通的浅拷贝
let foo = { a: 1, b: 2, c: { d: 1 } };
let bar = {};
Object.assign(bar, foo);
foo.a++;
console.log(foo.a);  // 2
console.log(bar.a); // 1

foo.c.d++;
console.log(foo.c.d); // 2
console.log(bar.c.d); // 2


