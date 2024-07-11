// for循环

// 1.用户输入几行几列的五角星
let row = +prompt('请输入行数：');
let col = +prompt('请输入列数：');
// 外层循环打印行数
for (let i = 1; i <= row; i++) {
    // 里层循环打印几个星星
    for (let j = 1; j <= col; j++) {
        document.write('☆')
    }
    // 进行换行显示
    document.write('<br>')
}

// 2.一个两个三个四个五个显示
// 外层循环控制行数
for (let i = 1; i <= 5; i++) {
    // 里层循环控制列数（几个星星）
    for (let j = 1; j <= i; j++) {
        document.write('☆')
    }
    // 进行换行显示
    document.write('<br>')
}

// 3.乘法表
// 行数
for (let i = 1; i <= 9; i++) {
    // 列数
    for (let j = 1; j <= i; j++) {
        document.write(`<span>${j} X ${i} = ${j * i}</span>`)
    }
    document.write('<br>')
}
