const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
  key: '1',
  value: '数据',
});

const options = {
    protocol: 'http:',
    hostname: 'localhost',
    port: 3000,
    path: '/data',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
};

const server = http.createServer((req, res) => {
    const request = http.request(options, (result) => {

    });
    request.write(postData); 
    request.end();

    res.end();
})

server.listen(4000, () => {
    console.log('localhost: 4000');
})