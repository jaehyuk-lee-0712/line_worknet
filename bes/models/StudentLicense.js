const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const StudentLicense = new Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
      required: true,
    },
    license_name: {
      type: String,
      required: true,
    },
    licnese_publisher: {
      type: String,
      required: true,
    },
    license_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const StudentLicenseModel = mongoose.model("StudentLicense", StudentLicense);
module.exports = StudentLicenseModel;
