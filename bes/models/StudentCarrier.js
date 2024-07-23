const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const StudentCarrier = new Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
      required: true,
    }, //학생 정보
    company_name: {
      type: String,
      required: false,
    }, //회사명
    work_date: {
      type: String,
      required: false,
    }, //근무 기간
    work_part: {
      type: String,
      required: true,
    }, //부서명
    work_level: {
      type: String,
      required: false,
    }, //직급
    work_do: {
      type: String,
      required: false,
    }, //담당업무
  },
  { timestamps: true } //정보
);

const StudentCarrierModel = mongoose.model("StudentCarrier", StudentCarrier);
module.exports = StudentCarrierModel;
