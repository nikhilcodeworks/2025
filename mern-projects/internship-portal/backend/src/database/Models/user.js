const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String, default: null, unique: true },
  phone: { type: String },
  role: { type: String, enum: ["student", "recruiter", "admin"], required: true },
  profilePic: { type: String, default: "" }, 
  resume: { type: String, default: "" },
  skills: { type: [String], default: null },
  education: [{
    organisation: { type: String, default: null },
    degree: { type: String, default: null },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null }
  }],
  projects: [{
    name: { type: String, default: null },
    description: { type: String, default: null },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },
  }],
  experience: [{
    name: { type: String, default: null },
    title: { type: String, default: null },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },
    description: { type: String, default: null }
  }],
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", default: null },
  dob: { type: Date, default: null },
  gender: { type: String, default: null },
  address: { type: String, default: null },
  forgotPasswordToken: { type: String, default: null },
  forgotPasswordTokenExpiry: { type: Date, default: null }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) return next();
  try {
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(user.password, salt);
      user.password = hashPass;
      next();
  } catch(err) {
      return next(err);
  }
});

userSchema.methods.comparePassword = async function(givenPassword) {
  try {
      const isMatch = await bcrypt.compare(givenPassword, this.password);
      console.log(isMatch);
      return isMatch;
  } catch(err) {
      throw err;
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;