const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const { generateToken, jwtAuthMiddleware } = require("../middleware/jwt");
const validateRecruiterInput = require("../middleware/validateRecruiterInput");
const User = require("../database/Models/user");
const Company = require("../database/Models/company");
const Internship = require("../database/Models/internship");
// const cloudinary = require("../middleware/cloudinaryConfig");
// const upload = require("../middleware/multerConfig");
const Application = require("../database/Models/application");
const cloudinary = require("cloudinary").v2;
const uploadSingle = require("../middleware/cloudinaryUpload");

const connectToDatabase = require("../database/db");
const isRecruiter = require("../middleware/isRecruiter");

const router = express.Router();



router.post("/signup", validateRecruiterInput("signup"), async (req, res) => {
  try {
    await connectToDatabase();
    const { name, email, password, phone, company } = req.body;

    let existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Account already exists" });
    }

    let companyId = null;
    if (company) {
      const existingCompany = await Company.findOne({ name: company });
      if (!existingCompany) {
        return res.status(400).json({ success: false, message: "Company not found" });
      }
      companyId = existingCompany._id;
    }

    const newRecruiter = new User({
      name,
      email: email.toLowerCase(),
      password, // Auto-hashed by the User model
      phone,
      company: companyId,
      role: "recruiter",
    });

    await newRecruiter.save();

    res.status(201).json({
      success: true,
      message: "Signup successful",
      recruiterId: newRecruiter._id,
    });

  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

// Recruiter Login Route
  router.post("/login", validateRecruiterInput("login"), async (req, res) => {
    try {
      await connectToDatabase();
      const { email, password } = req.body;
      // Convert email to lower-case for consistency
      const recruiter = await User.findOne({ email: email.toLowerCase(), role: "recruiter" });
  
      if (!recruiter) {
        // Redirect to signup if account does not exist
        return res.redirect(302, "/recruiter/signup");
      }

      if(recruiter.role !== "recruiter") {
        return res.json({
          success: false,
          message: "Unauthorized"
        })
      }
  
      const isMatch = await recruiter.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
  
      const token = generateToken({ id: recruiter.id, role: "recruiter" });
      res.status(200).json({ success: true, message: "Login successful", token });
    } catch (err) {
      console.error("Error during recruiter login:", err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  }); 

router.get("/companies", async (req, res) => {
  try {
    await connectToDatabase();
    const { search } = req.query;

    // Agar search query provided hai, toh filter companies based on name
    const query = search
      ? { name: { $regex: search, $options: "i" } }
      : {};

    // Fetch companies with selected fields and applied filter
    const companies = await Company.find(
      query,
      "name logo website location industry"
    );

    // Agar companies nahi milti, toh error message bhej do
    if (companies.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No companies found",
      });
    }

    res.status(200).json({ success: true, companies });
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



router.post("/add-company", async (req, res) => {
  try {
    await connectToDatabase();
    let { name, companylogo, website } = req.body;

    // Ensure required fields are present
    if (!name || !website) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Company name and website are required!",
        });
    }

    name = name.trim(); // Remove extra spaces

    // Check if company already exists (case-insensitive)
    const existingCompany = await Company.findOne({
      $or: [
        { name: { $regex: new RegExp(`^${name}$`, "i") } },
        { website: { $regex: new RegExp(`^${website}$`, "i") } }
      ]
    });
    if (existingCompany) {
      return res
        .status(400)
        .json({ success: false, message: "Company already exists!" });
    }

    // Create new company
    const newCompany = new Company({
      name,
      website,
      logo: companylogo, // logo field properly assign kiya
    });
    await newCompany.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Company added successfully!",
        company: newCompany,
      });
  } catch (error) {
    console.error("❌ Error adding company:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//posting internships by recruiter(tested)
router.post("/add_internship", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const userId = req.jwtPayload.id;

    const {
      title,
      description,
      requirements,
      responsibilities,
      stipend,
      duration,
      location,
      applicationDeadline,
      skills,
    } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      console.log("recruiter not found!");
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    const companyId = user.company;

    const newInternship = new Internship({
      title,
      company: companyId,
      recruiter: userId,
      description,
      requirements,
      responsibilities,
      stipend,
      duration,
      location,
      applicationDeadline,
      skills: skills || [],
    });

    const savedInternship = await newInternship.save();
    console.log(savedInternship);

    if (!savedInternship) {
      console.log("failed to post internsip!");
      return res.status(500).json({
        success: false,
        message: "Failed to post internship!",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Internship posted successfully",
      newInternship,
    });
  } catch (err) {
    console.error("Error posting internship:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get Recruiter's Internships(tested)
router.get("/internships", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const { page, limit, filter = "all" } = req.query;
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 20;
    const skipData = (pageNumber - 1) * limitNumber;

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to compare only the date

    let filterCondition = { recruiter: req.jwtPayload.id }; // Ensure only recruiter's internships are fetched

    if (filter === "new") {
      filterCondition.applicationDeadline = { $gte: today }; // Future deadlines
    } else if (filter === "closed") {
      filterCondition.applicationDeadline = { $lt: today }; // Past deadlines
    }
    console.log("Recruiter Internship Filter Condition:", filterCondition);


    // const internships = await Internship.find({ recruiter: req.jwtPayload.id })
    const internships = await Internship.find(filterCondition)
      .populate("company", "name logo")
      .skip(skipData)
      .limit(limitNumber)
      .lean();

    // const totalCount = await Internship.countDocuments({recruiter: req.jwtPayload.id,});
    const totalCount = await Internship.countDocuments(filterCondition);

    res.status(200).json({
      internships,
      totalPages: Math.ceil(totalCount / limitNumber),
    });
  } catch (err) {
    console.error("Error fetching internships:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/internships/:id", async (req, res) => {
  try {
    await connectToDatabase();
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    res.json(internship);
  } catch (err) {
    console.error("Error fetching internship:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/profile", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const recruiterData = req.jwtPayload;
    const recruiter = await User.findById(recruiterData.id, "-password")
      .select("name email phone company dob")
      .populate("company");
    console.log(recruiter);

    if (!recruiter) {
      console.log("Recruiter not found");
      return res
        .status(404)
        .json({ success: false, message: "Recruiter not found" });
    }

    return res.status(200).json({
      success: true,
      recruiter,
      company: recruiter.company,
    });
  } catch (err) {
    console.log("An error occured while fetching recruiter user data =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// post request for updating recruiter profile information
// returns - success(boolean), message(string), recruiter(object)
router.post("/update_profile", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const recruiterId = req.jwtPayload.id; // Assuming jwtAuthMiddleware adds user info to req.user
    const { name, email, mobile, dob, gender, address } = req.body;

    // Find the recruiter by ID
    let recruiter = await User.findById(recruiterId);
    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    // Update the recruiter's details
    recruiter.name = name || recruiter.name;
    recruiter.email = email || recruiter.email;
    recruiter.phone = mobile || recruiter.phone;
    recruiter.dob = dob || recruiter.dob;
    recruiter.gender = gender || recruiter.gender;
    recruiter.address = address || recruiter.address;

    // Save the updated profile
    await recruiter.save();

    res
      .status(200)
      .json({ message: "Profile updated successfully", recruiter });
  } catch (err) {
    console.log("An error occured while updating recruiter profile =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// post request for updating company information of a recruiter
// returns success(boolean), message(string), company(object)
router.post("/update_company", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const recruiterId = req.jwtPayload.id;
    const {
      name,
      companyWebsite,
      companyLogo,
      companyAddress,
      foundedYear,
      companyEmail,
    } = req.body;

    let recruiter = await User.findById(recruiterId);
    if (!recruiter) {
      console.log("Recruiter not found");
      return res.status(404).json({
        success: false,
        message: "Recruiter not found",
      });
    }
    console.log(recruiter);

    if (!mongoose.Types.ObjectId.isValid(recruiter.company)) {
      console.log("Invalid company ID");
      return res.status(400).json({
        success: false,
        message: "Invalid company ID",
      });
    }

    console.log(recruiter.company);

    let company = await Company.findById(recruiter.company);
    if (!company) {
      console.log("Company not found!");
      return res.status(404).json({
        success: false,
        message: "Company not found!",
      });
    }

    console.log(company);

    company = await Company.findByIdAndUpdate(
      recruiter.company,
      {
        name: name || company.name,
        email: companyEmail || company.email,
        foundedYear: foundedYear || company.foundedYear,
        location: companyAddress || company.location,
        website: companyWebsite || company.website,
        logo: companyLogo || company.logo,
      },
      { new: true, runValidators: true } // Return updated document & validate input
    );

    res.status(200).json({
      success: true,
      message: "Company data updated successfully!",
      company,
    });
  } catch (err) {
    console.log(
      "An error occured while updating company data from recruiter =",
      err
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// function for getting file name from link
const getPublicIdFromUrl = (url) => {
  // Extract the public ID from a Cloudinary URL
  const urlParts = url.split("/");
  const fileName = urlParts[urlParts.length - 1].split(".")[0];
  return `ten-internship/${fileName}`;
};

router.post("/update/profile_picture", jwtAuthMiddleware, isRecruiter, uploadSingle("profilePicture"), async (req, res) => {
  try {
    await connectToDatabase();
    const recruiterId = req.jwtPayload.id;
    if (!req.cloudinaryFile) {
      console.log("no file uploaded");
      return res.status(400).json({
        success: false,
        message: "Invalid file type. No image uploaded",
      });
    }

    const newImageURL = req.cloudinaryFile.url;
    const newPublicId = req.cloudinaryFile.publicId;

    const user = await User.findById(recruiterId);

    if (!user) {
      console.log("User document not found!");
      await cloudinary.uploader.destroy(newPublicId);
      return res.status(400).json({
        success: false,
        message: "User not found!",
      });
    }

    if (user.profilePic !== "") {
      try {
        const existingProfilePictureURL = user.profilePic;
        const existingPublicId = getPublicIdFromUrl(existingProfilePictureURL);

        // deleting existing image
        const imageDel = await cloudinary.uploader.destroy(existingPublicId);

        // checking for delete error
        if (imageDel.result != "ok") {
          console.log("Failed to delete existing profile picture");
          return res.status(400).json({
            success: false,
            message: "Failed to update profile picture",
          });
        }

        console.log("Existing image deleted successfully");
      } catch (deleteError) {
        console.log(
          "Warning: Failed to delete existing profile picture",
          deleteError
        );
      }
    }

    // uploading the url of the image present in cloudinary to mongodb
    const imageRes = await User.findByIdAndUpdate(
      recruiterId,
      { profilePic: newImageURL },
      { new: true }
    );

    // checking the response for error
    if (!imageRes) {
      console.log("An error occured while updating profile picture url in mongodb");
      await cloudinary.uploader.destroy(newPublicId);
      return res.status(400).json({
        success: true,
        message: "An error occured while updating profile picture",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile Picture updated successfully",
      data: newImageURL,
    });
  } catch (err) {
    console.log("An error occured while updating profile picture =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
);

router.post("/delete/profile_picture", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const userId = req.jwtPayload.id;

    const user = await User.findById(userId);
    if (user.profilePic === "") {
      console.log("No profile picture found!");
      return res.status(404).json({
        success: false,
        message: "No profile picture found!",
      });
    }

    const existingProfilePictureURL = user.profilePic;
    const existingPublicId = getPublicIdFromUrl(existingProfilePictureURL);

    const imageDel = await cloudinary.uploader.destroy(existingPublicId, {
      resource_type: "image",
    });

    if (imageDel.result !== "ok") {
      console.log("failed to delete profile picture");
      return res.status(500).json({
        success: false,
        message: "Failed to delete profile picture",
      });
    }

    user.profilePic = "";
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile picture deleted successfully",
    });
  } catch (err) {
    console.log(
      "An error occured while deleting recruiter profile picture =",
      err
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/update_internship", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const { internshipId, ...updateData } = req.body;

    if (!internshipId) {
      console.log("Internship ID not provided!");
      return res.status(400).json({
        success: false,
        message: "No internship ID provided!",
      });
    }

    if (Object.keys(updateData).length === 0) {
      console.log("No update data found!");
      return res.status(400).json({
        success: false,
        message: "No update data found!",
      });
    }

    const recruiterData = req.jwtPayload; // Extract recruiter details from token

    // Fetch the internship
    const internship = await Internship.findById(internshipId);
    if (!internship) {
      console.log("Internship not found!");
      return res.status(404).json({
        success: false,
        message: "Internship not found!",
      });
    }

    // Ensure the recruiter owns this internship
    if (internship.recruiter.toString() !== recruiterData.id) {
      console.log("Unauthorized update attempt!");
      return res.status(403).json({
        success: false,
        message: "Unauthorized to update this internship!",
      });
    }

    // Update the internship
    const updatedInternship = await Internship.findByIdAndUpdate(
      internshipId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedInternship) {
      console.log("Failed to update internship data!");
      return res.status(500).json({
        success: false,
        message: "Failed to update internship data!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Internship updated successfully!",
      updatedInternship,
    });
  } catch (err) {
    console.log("Error updating internship:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

router.get("/individual_internship/applicants", jwtAuthMiddleware, async (req, res) => {
  try {
    await connectToDatabase();
    const { internshipId } = req.query;
    if (!internshipId) {
      console.log("internship id not found");
      return res.status(400).json({
        success: false,
        message: "Internship Id not found!",
      });
    }

    const internship = await Internship.findById(internshipId);
    if (!internship) {
      console.log("Internship not found!");
      return res.status(404).json({
        success: false,
        message: "No internship found!"
      })
    }

    if (internship.recruiter.toString() !== req.jwtPayload.id) {
      console.log("Recruiter does not have access to the requested internship");
      return res.status(403).json({
        success: false,
        message: "Authorization Denied"
      })
    }

    const applicants = await Application.find({
      internship: internshipId,
    }).populate("student", "name email phone profilePic");

    if (!applicants) {
      console.log("no applicants found!");
      return res.status(200).json({
        success: true,
        message: "No applicants yet!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Applicant data fetched successfully",
      applicants,
    });
  } catch (err) {
    console.log("Error occured while fetching internship applicants =", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
);

router.get("/applicant/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    await connectToDatabase();
    const { id } = req.params;

    if (!id) {
      console.log("no id found");
      return res.status(400).json({
        success: false,
        message: "No id found",
      });
    }

    const user = await User.findById(id, "-password");
    if (!user) {
      console.log("no user found!");
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      user,
    });
  } catch (err) {
    console.log(
      "An error occured while fetching data for single applicant =",
      err
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/update_status/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    await connectToDatabase();
    const { status } = req.body;
    if (!["Pending", "Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status value." });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found." });
    }

    res.json({ success: true, message: "Status updated successfully.", application });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

router.get("/showname_navbar", jwtAuthMiddleware, async (req, res) => {
  try {
    await connectToDatabase();
    if (req.jwtPayload.role !== "recruiter") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const recruiter = await User.findById(req.jwtPayload.id).select("name email role profilePic");

    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    res.status(200).json({ success: true, recruiter });
  } catch (err) {
    console.error("Error fetching recruiter profile:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/dashboard", jwtAuthMiddleware, isRecruiter, async (req, res) => {
  try {
    await connectToDatabase();
    const userId = req.jwtPayload.id; // Get logged-in recruiter ID

    const nInternships = await Internship.countDocuments({ recruiter: userId });

    const internships = await Internship.find({ recruiter: userId }).select(
      "_id"
    );

    const internshipIds = internships.map((internship) => internship._id);

    // total applications
    const totalApplications = await Application.countDocuments({
      internship: { $in: internshipIds },
    });

    // students hired
    const studentsHired = await Application.countDocuments({
      internship: { $in: internshipIds },
      status: "Accepted",
    });
    const today = new Date();
    const recentInternships = await Internship.find({ recruiter: userId })
    .sort({ createdAt: -1 }) // Sort by newest first
    .limit(4)
    .populate("company", "name logo"); // Fetch company name and logo

    console.log(recentInternships);

    return res.status(200).json({
      success: true,
      nInternships,
      totalApplications,
      studentsHired,
      recentInternships,
    });
  } catch (err) {
    console.error("Error fetching recruiter dashboard:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/update/password", jwtAuthMiddleware, isRecruiter, async(req, res) => {
  try {
    await connectToDatabase();
    const { id } = req.jwtPayload;
    const { existingPassword, newPassword } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    if (!(await user.comparePassword(existingPassword))) {
      return res.status(200).json({
        success: false,
        message: "Given password is incorrect!",
      });
    }

    if (newPassword.trim().length < 8) {
      return res.status(200).json({
        success: false,
        message: "Length of password can not be less than 8",
      });
    }

    user.password = newPassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch(err) {
    console.log("Error updating password =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
})

module.exports = router;
