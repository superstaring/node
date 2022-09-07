// 删除相邻相同的字符串
// charAt(i): 返回索引i处的字符
function delStr(str) {
    let res = [], nowStr;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != nowStr) {
            res.push(str.charAt(i));
            nowStr = str.charAt(i);
        }
    }
    return res.join('');
}

console.log(delStr('aabcc11'));