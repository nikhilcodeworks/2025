const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    desc: {
      type: String,
      required: true,
      trim: true
    },
    img: {
      type: String,
      trim: true
    },
    video: {
      type: String,
      trim: true
    },
    links: {
      github: {
        type: String,
        trim: true,
        required: false
      },
      liveDemo: {
        type: String,
        trim: true,
        required: false
      }
    },
    techstack: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
        required: true
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
