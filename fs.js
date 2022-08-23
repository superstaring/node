var fs = require("fs");

var data = fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log('data.toString()'+data.toString());
});

console.log("程序执行结束!");