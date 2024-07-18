// 递归

var data = [
    {
        id: '1',
        name: '家电',
        goods: [{
            id: '11',
            name: '冰箱',
            goods: [
                { id: '111', name: '冰箱1' },
                { id: '112', name: '冰箱2' }
            ]
        }, {
            id: '12',
            name: '洗衣机',
            goods: [
                { id: '121', name: '洗衣机1' },
                { id: '122', name: '洗衣机2' }
            ]
        }]
    },
    {
        id: '2',
        name: '服饰'
    }
]

function getId(items, id) {
    var o = null;
    items.forEach(function (item) {
        if (item.id === id) {
            o = item;
        } else if (item.goods && item.goods.length > 0) {
            var result = getId(item.goods, id);
            if (result) {
                o = result;
            }
        }
    });

    return o;
}

console.log(getId(data, '1'));
console.log(getId(data, '12'));
console.log(getId(data, '112'));
console.log(getId(data, '121'));