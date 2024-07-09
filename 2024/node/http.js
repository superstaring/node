// http模块-创建web服务

const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    // 设置响应头-内容类型-普通文本以及中文编码格式
    res.setHeader('Content-type', 'text/plain;charset=utf-8');
    // 设置响应体内容
    res.end('您好，欢迎使用node.js创建的web服务');
})

server.listen(3000, () => {
    console.log('web服务已经启动');
})
