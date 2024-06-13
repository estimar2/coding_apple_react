const express = require("express");
const app = express();
const path = require("path");

app.listen(8080, function () {
  console.log("📌server start post : 8080");
});

// 10~12 번줄 추가해야 ajax잘됨
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// DB에 있던 상품명을 보여주려면?
// 리액트 파일에서 상품데이터 필요하면 /product로 GET요청하면 끝
app.get("/product", (req, res) => {
  res.json({ name: "black shoes" });
});

// react-router-dom 사용할 경우 (최하단에 입력)
// user 가 주소창에 입력한 주소가 서버에 기능 개발이 되어있지 않다 -> 리액트 페이지를 그대로 그냥 다시 보여줌
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
