// 基于web服务，开发提供网页资源的功能

const http = require('http');
const server = http.createServer();
const fs = require('fs');
const path = require('path');

server.on('request', (req, res) => {
    if (req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index-gzip.html'), (err, data) => {
            if (err) console.log(err)
            else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data.toString())
            }
        })
    } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('您要访问的资源路径不存在')
    }
})

server.listen(8080, () => {
    console.log('web 服务启动成功')
})
