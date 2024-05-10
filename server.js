const express = require("express");
const app = express();
const Mock = require("mockjs");
const Random = Mock.Random;

//设置跨域
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

//分页查询列表
app.get("/posts", (req, res) => {
  let numbers = 100;
  let posts = [];
  for (var i = 0; i < numbers; i++) {
    posts.push(Mock.mock({
      id: i,
      title: Random.cparagraph(1),
      content: Random.cparagraph(2, 5),
      time: Random.datetime("yyyy-MM-dd hh:mm:ss"),
      author: Random.cname(),
      'like|1-1000': 1, // 有几个数值
    }))
  }

  let perPageNumber = Number(req.query.perPageNumber ? req.query.perPageNumber : 10); //每页显示条数
  let currentPage = Number(req.query.currentPage ? req.query.currentPage : 1);//当前页数
  let totalPage = Math.floor(posts.length / perPageNumber);  //总页数

  let start = (currentPage - 1) * perPageNumber;
  let end = currentPage * perPageNumber <= posts.length ? currentPage * perPageNumber : posts.length
  posts = posts.slice(start, end);
  res.json({ content: posts, currentPage, totalPage });
});

app.listen(3000, () => {
  console.log("示例应用正在监听 3000 端口 !");
});

// http://localhost:3000/posts
// http://localhost:3000/posts?perPageNumber=10&currentPage=2