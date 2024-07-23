const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const StudentBusiness = new Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
      required: true,
    },
    business_name: {
      type: String,
      required: true,
    },
    business_level: {
      type: String,
      required: true,
    },
    business_ceo: {
      type: String,
      required: true,
    },
    business_part: {
      type: String,
      required: true,
    },
    business_spot: {
      type: String,
      required: true,
    },
    business_number: {
      type: Number,
      required: true,
    },
    business_address: {
      type: Stirng,
      required: true,
    },
  },
  { timestamps: true }
);

const StudentBusinessModel = mongoose.model("StudentBusiness", StudentBusiness);
module.exports = StudentBusinessModel;
