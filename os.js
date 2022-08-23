var os = require("os");

// 主机名
console.log('hostname:' + os.hostname());

// 操作系统名
console.log('type:' + os.type());

// 字节序
console.log('endianness:' + os.endianness());