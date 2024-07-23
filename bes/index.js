const path = require("path");
const express = require("express");
// const serverStatic = require("server-static");
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

const expressSession = require("express-session");

var mainRouter = require("./routers/main"); // main router 생성

const app = express(); // express

// 포트 설정
app.set("port", process.env.PORT || 9000);

// 라우터 설정
var router = express.Router();
app.use("/", router);
app.use("/main", mainRouter);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}에서 서버 실행 중`);
});

// 오류페이지 라우터 설정 예정
