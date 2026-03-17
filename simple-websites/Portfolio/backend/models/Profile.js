const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  aboutMe: {
    type: String,
    required: true,
    trim: true,
  },
  cv: {
    type: String, // URL or file path to the CV
    required: false,
  },
  profilePicture: {
    type: String, // URL or file path to profile picture
    required: true,
  },
  socialLinks: {
    linkedin: {
      type: String,
      trim: true,
    },
    github: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
  },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
