const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  description: { type: String, required: true },
  requirements: { type: [String] },
  responsibilities: { type: [String] },
  stipend: { type: String, required: true },
  duration: { type: String, required: true }, // 3 months, 6 months
  location: { type: String, enum: ['Remote', 'Hybrid', 'On-Site'], required: true },
  applicationDeadline: { type: Date },
  skills: { type: [String], required: true }, 
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

const Internship = mongoose.model("Internship", InternshipSchema);

module.exports = Internship; 