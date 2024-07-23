const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Students = new Schema(
  {
    student_name: {
      type: String,
      required: true,
    },

    // education model 생성 후 변경 예정
    education_id: {
      type: String,
      required: true,
    },
    resident_number: {
      type: Number,
      required: true,
    },
    phome_number: {
      type: Number,
      required: true,
    },
    home_number: {
      type: Number,
      required: false,
    },
    student_desc: {
      type: String,
      required: false,
    },

    student_reason: {
      type: String,
      required: false,
    },
    deleteYn: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const StudentsModel = mongoose.model("Students", Students);
module.exports = StudentsModel;
