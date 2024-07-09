// 压缩前端html
// 把回车符（\r）和换行符（\n）去掉后，写入到新html文件中

const fs = require('fs');
const path = require('path');

// 1.1 读取文件
fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) console.log(err)
    else {
        const htmlStr = data.toString();
        // 1.2 正则替换字符串
        const resultStr = htmlStr.replace(/[\r\n]/g, '');
        console.log(resultStr);
        // 1.3 写入到新的html文件中
        fs.writeFile(path.join(__dirname, 'index-gzip.html'), resultStr, (err) => {
            if (err) console.log(err)
            else console.log('写入成功')
        })
    }
})


