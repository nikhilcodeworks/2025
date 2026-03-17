const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    foundedYear: { type: Number, default: null },
    website: { type: String, default: null },
    logo: { type: String, default: null },
    location: { type: String, default: null },
    industry: { type: String, default: null },
    employees: { type: Number },
    recruiters: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;