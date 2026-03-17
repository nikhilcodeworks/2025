const express = require("express");
const Company = require("../database/Models/company");
const Internship = require("../database/Models/internship");
const User = require("../database/Models/user");

const { jwtAuthMiddleware } = require("../middleware/jwt");
const { sendEmail } = require("../helpers/mailer");

const connectToDatabase = require("../database/db");

const router = express.Router();

router.get("/search_companies", async (req, res) => {
  try {
    await connectToDatabase();
    const { search_term } = req.query;
    if (!search_term) {
      console.log("Search Term not present");
      return res.status(400).json({
        success: false,
        message: "Search Term cannot be empty",
      });
    }

    const companies = await Company.find({
      name: { $regex: search_term, $options: "i" },
    }).limit(5);

    if (!companies) {
      console.log("No companies found");
      return res.status(200).json({
        success: true,
        message: "No companies found",
      });
    }

    return res.status(200).json({
      success: true,
      companies,
    });
  } catch (err) {
    console.log("An error occured during signup =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/internships", async (req, res) => {
  try {
    await connectToDatabase();
    const internshipData = await Internship.find()
      .populate("company", "name logo")
      .sort({ createdAt: -1 });
    if (!internshipData) {
      return res.status(404).json({
        success: false,
        message: "No Internship Data found",
      });
    }
    return res.status(200).json({
      success: true,
      internshipData,
    });
  } catch (err) {
    console.log("An error occured while fetching internships =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get('/featured_internships', async (req, res) => {
  try {
    await connectToDatabase();
    const company = await Company.findOne({ name: "The Entrepreneurship Network" });
    if(!company) {
      console.log("TEN company not found!");
      return res.status(404).json({
        success: false,
        message: "Failed to fetch featured internships"
      })
    }

    const featuredInternships = await Internship.find({ company: company.id })
      .populate('company', 'name logo')
      .limit(10);

    if (featuredInternships.length === 0) {
      console.log("No featured internships found!");
      return res.status(404).json({ 
        success: false,
        message: "No featured internships found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Featured Internships fetched successfully",
      featuredInternships
    });

  } catch (err) {
    console.error("Error fetching featured internships:", err.message);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.get("/search_internship", async (req, res) => {
  try {
    await connectToDatabase();
    const { searchTerm } = req.query;
    if (!searchTerm) {
      const internshipData = await Internship.find().populate('company', 'name logo').limit(4).sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        internshipData,
      });
    }

    const internshipData = await Internship.find({
      title: { $regex: searchTerm, $options: "i" },
    }).populate('company', 'name logo');

    if (!internshipData) {
      return res.status(200).json({
        success: true,
        message: "No Internship found",
      });
    }

    return res.status(200).json({
      success: true,
      internshipData,
    });
  } catch (err) {
    console.log("An error occured during signup =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
router.get("/user/profile", jwtAuthMiddleware, async (req, res) => {
  try {
    await connectToDatabase();
    const userId = req.jwtPayload.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile picture fetched successfully",
      profilePic: user.profilePic,
      profileName: user.name,
    });
  } catch (err) {
    console.log("An error occurred while fetching profile picture =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/initiate/forgotpassword", async(req, res) => {
  try {
    await connectToDatabase();
    const { email } = req.query;

    const user = await User.findOne({ email: email });
    if(!user) {
      console.log("No user found with the given email");
      return res.status(404).json({ success: false, message: "No user found with given email" });
    }
    console.log(user);

    const mailResponse = await sendEmail(email, user._id);
    console.log(mailResponse);

    if(mailResponse.accepted.length > 0) {
      return res.status(200).json({ success: true, message: "An email has been sent to the given mail. The email will be valid for 30 minutes" });
    } else {
      return res.status(500).json({ success: false, message: "Failed to send email, try again later" });
    }
  } catch(err) {
    console.log("An error occured while initiating forgot password =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/complete/forgotpassword", async (req, res) => {
  try {
    await connectToDatabase();
    const { forgotPasswordToken } = req.query;
    const { password, passwordConfirm } = req.body;

    if(password !== passwordConfirm) {
      return res.status(401).json({ success: false, message: "Passwords must be same" });
    }

    const user = await User.findOne({ forgotPasswordToken: forgotPasswordToken, forgotPasswordTokenExpiry: { $gt: Date.now() } });
    if(!user) {
      console.log("Wrong forgot password token, or token expired");
      return res.status(400).json({ success: false, message: "Token has expired for reset password" });
    }

    user.forgotPasswordToken = null;
    user.forgotPasswordTokenExpiry = null;
    user.password = password;

    await user.save();

    return res.status(200).json({ success: true, message: "Password updated successfully", role: user.role });
  } catch(err) {
    console.log("An error occured while completing forgot password =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
})


module.exports = router;