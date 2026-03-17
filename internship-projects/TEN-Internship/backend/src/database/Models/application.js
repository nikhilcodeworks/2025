const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  internship: { type: mongoose.Schema.Types.ObjectId, ref: "Internship", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending", required: true },
  rejectedAt: { type: Date }
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;