// 文件 路径

const fs = require("fs");

const path = require("path");

// 写入文件，没有文件会创建文件
// fs.writeFile('文件路径', '写入内容', (err) => { })

// 读取文件
// fs.readFile('文件路径', (err, data) => { })

fs.writeFile(path.join(__dirname, '../test.txt'), 'hello, Node.js', (err) => {
    if (err) console.log(err)
    else console.log('写入成功')
})

fs.readFile(path.join(__dirname, '../test.txt'), (err, data) => {
    console.log(data.toString())
})