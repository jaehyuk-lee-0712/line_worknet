const express = require("express");
const router = express.Router();

// Mongo DB Setting

const mongoose = require("mongoose");
const Students = require("../models/Students");
const StudentLicense = require("../models/StudentLicense");
const StudentCarrier = require("../models/StudentCarrier");

// 각자 생성한 데이터베이스 정보에 맞게 수정
mongoose.connect(
  "mongodb+srv://rhthrck12:8810@cluster0.u6vcq85.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// 라우터 기본설정
router.get("/", (req, res) => {
  res.send("test main route");
});

// 임시 학생정보 생성 - 추후 삭제
router.get("/testStudents", async (req, res) => {
  const temp_students = new Students({
    student_name: "강서연",
    education_id: "1259125913581fweolewf912r",
    resident_numbr: "0107121234567",
    phome_number: "01084987357",
    home_number: "",
    deleteYn: false,
  });

  try {
    const resStuendt = await temp_students.save();
    res.json(resStuendt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 테스트용 학생 자격증 정보 입력 - 추후 변경
router.get("/testLicense", async (req, res) => {
  const studentName = "강서연";

  try {
    const studentInfo = await Students.findOne({ student_name: studentName });
    if (!studentInfo) {
      res.status(400).json({ message: "올바르지 않은 정보입니다." });
    }

    const studentLicenseInfo = new StudentLicense({
      student_id: studentInfo._id,
      license_name: "정보처리산업기사",
      licnese_publisher: "한국산업인력공단",
      license_date: "2024-06-18",
    });

    const resLicenseInfo = await studentLicenseInfo.save();
    res.json(resLicenseInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// 학생 자격증 정보 데이터 불러오기
router.get("/getLicenseInfo", async (req, res) => {
  try {
    // license의 학생 정보는 Student schema 의 _id로 저장되었기 때문에 먼저 _id 를 가져와야함
    const studentInfo = await Students.findOne({ student_name: "이재혁" });

    // 지금은 `이재혁`이란 다이렉트 문자열로 학생이름을 설정했지만 ,
    // 나중엔 req.body에서 변수로 받아올 예정임
    // 그래서 정보를 찾지 못할 수도 있으니 에러 처리
    if (!studentInfo) {
      res.status(400).json({ message: "올바르지 않은 학생 정보입니다." });
    }

    const licenseInfo = await StudentLicense.findOne({
      student_id: studentInfo._id,
    });
    res.status(200).json(licenseInfo);
    // 자격증 정보는 반드시 존재하는 정보가 아니기에 Null 처리 X
    // 대신 프론트 단에서 null 값을 리턴 받아도 에러가 안 나도록 처리 해줘야함
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//학생 회사정보 불러오기
router.get("/getCarrierInfo", async (req, res) => {
  try {
    const studentInfo = await Students.findOne({ student_name: "강서연" });
    const carrierInfo = await StudentCarrier.findOne({
      student_id: studentInfo._id,
    });
    if (!carrierInfo) {
      res.status(400).json({ message: "올바르지않은 정보입니다." });
    }
    res.status(200).json(carrierInfo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//회사정보 입력
router.get("/testCarrier", async (req, res) => {
  const studentName = "강서연";

  try {
    const studentInfo = await Students.findOne({ student_name: studentName });
    if (!studentInfo) {
      res.status(400).json({ message: "올바르지 않은 정보입니다." });
    }

    const StudentCarrierInfo = new StudentCarrier({
      student_id: studentInfo._id,
      company_name: "가가회사",
      work_date: "2021.01.01 - 2022.01.01",
      work_part: "영업부",
      work_level: "대리",
      work_do: "영업관리",
    });
    const resCarrierInfo = await StudentCarrierInfo.save();
    res.json(resCarrierInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// main router : 홈페이지 기본적인 메인 메뉴 API 설정
module.exports = router;
