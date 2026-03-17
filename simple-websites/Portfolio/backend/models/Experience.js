const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  experienceType: {
    type: String,
    enum: ['job', 'internship'], 
    required: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  companyLogo: {
    type: String,
    trim: true
  },
  duration: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    // enum:['hybrid'],
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);
