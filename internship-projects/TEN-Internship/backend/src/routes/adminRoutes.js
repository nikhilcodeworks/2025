const express = require("express");
const { generateToken, jwtAuthMiddleware } = require("../middleware/jwt");
const mongoose = require("mongoose");
const isAdmin = require("../middleware/isAdmin");
const User = require("../database/Models/user");
const Company = require("../database/Models/company");
const Internship = require("../database/Models/internship");
const Application = require("../database/Models/application");

const validateAdminUserInput = require("../middleware/validateAdminInput");

const connectToDatabase = require("../database/db");

const router = express.Router();

router.post("/add", validateAdminUserInput("signup"), async (req, res) => {
  try {
    await connectToDatabase();
    const { name, email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const company = await Company.findOne({
      name: "The Entrepreneurship Network",
    });
    let companyId;
    if (!company) {
      const newCompany = new Company({
        name: "The Entrepreneurship Network",
      });
      const savedCompany = await newCompany.save();
      companyId = savedCompany._id;
    }

    companyId = company._id;
    console.log(company);

    // const company = await Company.findOne({ name: "Company XYZ"});
    // if(!company) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Failed to add admin"
    //   })
    // }
    // console.log(company)

    const newUser = new User({
      name,
      email,
      password,
      role: "admin",
      company: companyId,
    });
    const savedUser = await newUser.save();

    await Company.findByIdAndUpdate(companyId, {
      $inc: { employees: 1 },
      $push: { recruiters: savedUser.id },
    });

    console.log("Saved User =", savedUser);
    res.status(200).json({ savedUser });
  } catch (err) {
    console.log("An error occured while adding admin =", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", validateAdminUserInput("login"), async (req, res) => {
  try {
    await connectToDatabase();
    const { email, password } = req.body;
    const userData = await User.findOne({ email: email });
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "Given email is not valid",
      });
    }
    console.log(userData);
    if (userData.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Not Authorized",
      });
    }
    if (!(await userData.comparePassword(password))) {
      return res.status(200).json({
        success: false,
        message: "Password is not valid",
      });
    }

    const payload = {
      id: userData.id,
      role: "admin",
    };
    const token = generateToken(payload);
    console.log("Token has been generated =", token);
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
    });
  } catch (err) {
    console.log("An error occured while admin login =", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/all_users", jwtAuthMiddleware, isAdmin, async (req, res) => {
  try {
    await connectToDatabase();
    const { page, limit } = req.query;
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 20;

    const skipData = (pageNumber - 1) * limitNumber;

    const data = await User.find({ role: { $ne: "admin" } }, "-password")
      .populate("company")
      .lean()
      .skip(skipData)
      .limit(limitNumber);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    console.log("An error occured while fetching all users data =", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add_internship", jwtAuthMiddleware, isAdmin, async (req, res) => {
  try {
    await connectToDatabase();
    const {
      title,
      description,
      requirements,
      responsibilities,
      stipend,
      duration,
      location,
      skills,
    } = req.body;

    if (!title || !description || !stipend || !duration || !location) {
      console.log("Missing Data");
      return res.status(400).json({
        success: false,
        message: "Required data missing",
      });
    }

    const adminData = req.jwtPayload;
    console.log(adminData);

    const userData = await User.findById(adminData.id);
    console.log(userData);
    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const newIntern = new Internship({
      title,
      company: userData.company || null,
      recruiter: adminData.id,
      description,
      requirements: requirements || [],
      responsibilities: responsibilities || [],
      stipend,
      duration,
      location,
      skills: skills || [],
    });

    const savedData = await newIntern.save();
    console.log("Saved Data =", savedData);
    return res.status(200).json({
      success: true,
      savedData,
      message: "Internship Posted Successfully",
    });
  } catch (err) {
    console.log("An error occured while posting internship listing =", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// route to get all internships posted by recruiters
// not posted by admin
router.get(
  "/recruiter_internships",
  jwtAuthMiddleware,
  isAdmin,
  async (req, res) => {
    try {
      await connectToDatabase();
      const adminId = req.jwtPayload.id;

      const { page, limit, filter = "all" } = req.query;
      const pageNumber = Number(page) || 1;
      const limitNumber = Number(limit) || 20;
      const skipData = (pageNumber - 1) * limitNumber;

      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to compare only the date

      let filterCondition = {}; // Default: Fetch all internships

      if (filter === "new") {
        filterCondition = { applicationDeadline: { $gte: today } }; // Deadlines in the future
      } else if (filter === "closed") {
        filterCondition = { applicationDeadline: { $lt: today } }; // Deadlines in the past
      }
      console.log("Filter Condition:", filterCondition);

      // getting company data
      const companyData = await Company.findOne({
        name: "The Entrepreneurship Network",
      });
      if (!companyData) {
        console.log("Admin company not found!");
        return res
          .status(404)
          .json({ success: false, message: "Company not found!" });
      }

      const internshipData = await Internship.find({
        recruiter: { $ne: adminId },
        company: { $ne: companyData._id },
        ...filterCondition,
      })
        .populate("company", "name logo")
        .populate("recruiter", "name")
        .lean()
        .skip(skipData)
        .limit(limitNumber);

      const totalCount = await Internship.countDocuments(filterCondition);

      return res.status(200).json({
        success: true,
        internships: internshipData,
        totalPages: Math.ceil(totalCount / limitNumber),
      });
    } catch (err) {
      console.log("Error fetching internships:", err);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
);

// route to get internship posted by admin
router.get("/internship", jwtAuthMiddleware, isAdmin, async (req, res) => {
  try {
    await connectToDatabase();
    const { page, limit } = req.query;
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 20;
    const skipData = (pageNumber - 1) * limitNumber;

    // getting company data
    const companyData = await Company.findOne({
      name: "The Entrepreneurship Network",
    });
    if (!companyData) {
      console.log("Admin company not found!");
      return res
        .status(404)
        .json({ success: false, message: "Company not found!" });
    }

    const internshipData = await Internship.find({
      company: companyData._id,
    })
      .populate("company", "name logo")
      .sort({ createdAt: -1 })
      .skip(skipData)
      .limit(limitNumber);
    if (!internshipData) {
      console.log("Internship Data not found");
      return res.status(200).json({
        success: true,
        data: [],
        message: "Internship data not found!",
      });
    }
    return res.status(200).json({
      success: true,
      internshipData,
    });
  } catch (err) {
    console.log("An error occured while fetching admin internships =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/internship/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    await connectToDatabase();
    console.log("Received request for ID:", req.params.id);
    console.log("Admin Data:", req.jwtPayload);

    const { id } = req.params;
    const internship = await Internship.findOne({ _id: id })
      .populate("company")
      .lean();

    if (!internship) {
      console.log("No internship found for ID:", id);
      return res
        .status(404)
        .json({ success: false, message: "Internship not found" });
    }

    console.log("Internship found:", internship);
    return res.status(200).json({ success: true, internship });
  } catch (err) {
    console.error("Error fetching internship =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post(
  "/update_internship",
  jwtAuthMiddleware,
  isAdmin,
  async (req, res) => {
    try {
      await connectToDatabase();
      // console.log(internshipId);
      const { internshipId, ...updateData } = req.body;

      console.log(internshipId);
      console.log(updateData);

      if (!internshipId) {
        console.log("Internship id not provided!");
        return res.status(400).json({
          success: false,
          message: "No internship found!",
        });
      }

      if (Object.keys(updateData) === 0) {
        console.log("No extra data found!");
        return res.status(400).json({
          success: false,
          message: "No extra data found!",
        });
      }

      const adminData = req.jwtPayload;

      const internship = await Internship.findById(internshipId);
      if (!internship) {
        console.log("No Internship found with given id!");
        return res.status(400).json({
          success: false,
          message: "No such internship found",
        });
      }
      console.log(internship);

      const updatedData = await Internship.findByIdAndUpdate(
        internshipId,
        { $set: updateData },
        { new: true }
      );

      if (!updatedData) {
        console.log("Failed to update internship data");
        return res.status(401).json({
          success: false,
          message: "Failed to update internship data",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Internship Updated Successfully",
        updatedData,
      });
    } catch (err) {
      console.log("An error occured while updating internship data =", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.get(
  "/individual_internship/applicants",
  jwtAuthMiddleware,
  isAdmin,
  async (req, res) => {
    try {
      await connectToDatabase();
      const { internshipId } = req.query;
      console.log(internshipId);

      if (!internshipId || !mongoose.Types.ObjectId.isValid(internshipId)) {
        console.log("Invalid or missing internshipId");
        return res.status(400).json({
          success: false,
          message: "Invalid or missing internship ID",
        });
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
      console.log("An error occured =", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.get("/applicant/:id", jwtAuthMiddleware, isAdmin, async (req, res) => {
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

router.put(
  "/update_status/:id",
  jwtAuthMiddleware,
  isAdmin,
  async (req, res) => {
    try {
      await connectToDatabase();
      const { status } = req.body;
      const applicationId = req.params.id;

      if (!["Pending", "Accepted", "Rejected"].includes(status)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid status value." });
      }

      if (status === "Rejected") {
        const application = await Application.findByIdAndUpdate(
          applicationId,
          { status, rejectedAt: new Date() },
          { new: true }
        );

        if (!application) {
          return res
            .status(404)
            .json({ success: false, message: "Application not found." });
        }

        return res.json({
          success: true,
          message: "Status updated successfully.",
          application,
        });
      }

      const application = await Application.findByIdAndUpdate(
        applicationId, // Correct ID now
        { status },
        { new: true }
      );

      if (!application) {
        return res
          .status(404)
          .json({ success: false, message: "Application not found." });
      }

      res.json({
        success: true,
        message: "Status updated successfully.",
        application,
      });
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ success: false, message: "Server error." });
    }
  }
);

router.get("/dashboard", jwtAuthMiddleware, isAdmin, async (req, res) => {
  try {
    await connectToDatabase();
    const userData = await User.find({ role: { $ne: "admin" } });

    const companyData = await Company.findOne({
      name: "The Entrepreneurship Network",
    });
    if (!companyData) {
      console.log("Admin company not found!");
      return res
        .status(404)
        .json({ success: false, message: "Company not found!" });
    }

    const internshipData = await Internship.find({ company: companyData._id })
      .sort({ createdAt: -1 })
      .limit(4)
      .populate("company", "name logo"); // Fetch company name and logo
    // .populate('recruiter', 'name'); // Fetch recruiter name;
    const totalinternshipData = await Internship.find();
    const nInternships = totalinternshipData.length;

    if (!userData) {
      console.log("No user data found");
      return res.status(200).json({
        success: true,
        nStudents: 0,
        nRecruiters: 0,
        newInternships: [],
      });
    }

    let nStudents = 0;
    let nRecruiters = 0;

    userData.map((data, _) => {
      if (data.role === "student") {
        nStudents += 1;
      }
      if (data.role === "recruiter") {
        nRecruiters += 1;
      }
    });

    return res.status(200).json({
      success: true,
      nStudents,
      nRecruiters,
      nInternships,
      newInternships: internshipData,
    });
  } catch (err) {
    console.log("An error occured =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/companies", jwtAuthMiddleware, isAdmin, async (req, res) => {
  try {
    await connectToDatabase();
    const { page, limit } = req.query;
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 20;
    const skipData = (pageNumber - 1) * limitNumber;

    const allCompanies = await Company.find()
      .skip(skipData)
      .limit(limitNumber)
      .sort({ _id: -1 });

    if (!allCompanies) {
      console.log("No companies found!");
      return res
        .status(200)
        .json({
          success: false,
          message: "No companies present",
          allCompanies,
        });
    }

    return res
      .status(200)
      .json({ success: true, allCompanies, nCompanies: allCompanies.length });
  } catch (err) {
    console.log("An error occured while fetching companies =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/companies/:id", jwtAuthMiddleware, isAdmin, async (req, res) => {
  try {
    await connectToDatabase();
    const { id } = req.params;
    const companyData = await Company.findById(id);
    if (!companyData) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found!" });
    }

    return res.status(200).json({ success: true, companyData });
  } catch (err) {
    console.log("An error occured while fetching company information =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/update/credentials", jwtAuthMiddleware, isAdmin, async (req, res) => {
    try {
      await connectToDatabase();
      const { id } = req.jwtPayload;
      const { name, email } = req.body;

      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found!",
        });
      }

      if (name && name.trim() !== "") {
        user.name = name.trim();
      }

      if (email && email.trim() !== "") {
        const emailExists = await User.findOne({ email: email.trim() });
        if (emailExists && emailExists._id.toString() !== id) {
          return res.status(200).json({
            success: false,
            message: "Email already exists",
          });
        }
        user.email = email.trim();
      }

      await user.save();

      return res.status(200).json({
        success: true,
        message: "Data updated successfully",
      });
    } catch (err) {
      console.error("An error occured while updating admin credentials =", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.post("/update/password", jwtAuthMiddleware, isAdmin, async(req, res) => {
  try {
    await connectToDatabase();
    const { id } = req.jwtPayload;
    const { existingPassword, newPassword } = req.body;
    if(existingPassword.trim() === newPassword.trim()) {
      return res.status(200).json({
        success: false,
        message: "New password cannot be same as the previous one!"
      })
    }
    console.log(existingPassword, newPassword);

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
    console.error("Error updating password =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
})

router.get("/profile", jwtAuthMiddleware, isAdmin, async(req, res) => {
  try {
    await connectToDatabase();
    const { id } = req.jwtPayload;
    const adminData = await User.findById(id).select("name email");

    if(!adminData) {
      return res.status(404).json({
        success: false,
        message: "No user found!"
      })
    }

    return res.status(200).json({
      success: true,
      adminData
    });
  } catch(err) {
    console.error("An error occured while fetch admin profile =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
