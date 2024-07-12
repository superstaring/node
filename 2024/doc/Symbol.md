## Symbol 符号

1.不能使用new:

```
let s1 = Symbol();
let s2 = Symbol();

s1 === s2;  //false
```

2.传递参数：

```
let s3 = Symbol('abc');
let s4 = Symbol('abc');

s3 === s4;  // false
```

3.开发中的使用：

```
let id = Symbol();
let obj = {
    id: 1,
    [id]: 888,
}

obj[id];  // 888
obj.id;  // 1
Obejct.getOwnPropertySymbols(obj); // [Symbol()]
```

4.遍历不方便：for in 和 Object.keys出不来，Obejct.getOwnPropertySymbols(obj)

5.修改: 分别为不会覆盖和覆盖的两种情况

```
let obj2 = {};
let k1 = Symbol();
let k2 = Symbol();

obj2[k1] = 123;
obj2[k2] = 456;
obj2; // { Symbol(): 123, Symbol(): 456 }
```

```
let k3 = Symbol.for('Green');
let k4 = Symbol.for('Green');

obj2[k3] = 888;
obj2[k4] = 999;  // 会覆盖 { Symbol.for('Green'): 999}
```


