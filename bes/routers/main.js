const express = require("express");
const router = express.Router();

// 라우터 기본설정
router.get("/", (req, res) => {
  res.send("test main route");
});

// main router : 홈페이지 기본적인 메인 메뉴 API 설정
module.exports = router;
