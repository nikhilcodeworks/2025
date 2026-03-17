const express = require("express");
const { generateToken, jwtAuthMiddleware } = require("../middleware/jwt");
const validateStudentInput = require("../middleware/validateStudentInput");
const User = require("../database/Models/user");
const Application = require("../database/Models/application");
const Internship = require("../database/Models/internship");
// const upload = require("../middleware/cloudinaryUpload");
// const uploadPDF = require("../middleware/multerPdfConfig");
// const cloudinary = require("../middleware/cloudinaryConfig");
const uploadSingle = require("../middleware/cloudinaryUpload");
const cloudinary = require("cloudinary").v2;
const connectToDatabase = require("../database/db");
const isStudent = require("../middleware/isStudent");

const router = express.Router();

router.post("/signup", validateStudentInput("signup"), async (req, res) => {
  try {
    await connectToDatabase();
    const { name, email, password } = await req.body;

    const existingUserData = await User.findOne({ email: email });
    if (existingUserData) {
      console.log("Existing User Data =", existingUserData);
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const userData = new User({
      name,
      email,
      password,
      role: "student",
    });
    const responseData = await userData.save();
    console.log(responseData);

    if (!responseData) {
      console.log("no response data", responseData);
      return res.status(400).json({
        success: false,
        message: "Failed to signup",
      });
    }

    const payload = {
      id: responseData.id,
      role: responseData.role,
    };
    const token = generateToken(payload);

    return res.status(200).json({
      success: true,
      message: "Signup successful",
      token,
    });
  } catch (err) {
    console.log("An error occured during signup =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/auth/signup", async (req, res) => {
  try {
    await connectToDatabase();
    const { userDataFromGoogle } = req.body;

    const { id, name, email } = userDataFromGoogle;

    console.log("id =", id);
    console.log("name =", name);
    console.log("email =", email);

    const existingUserData = await User.findOne({ googleId: id, email: email });
    if (existingUserData) {
      console.log("Existing User Data =", existingUserData);
      console.log("Email already exists with googleId =", id);
      return res.status(200).json({
        success: false,
        message: "Account with this gmail already exists",
      });
    }

    const userData = new User({
      name,
      email,
      googleId: id,
      role: "student",
    });

    const responseData = await userData.save();
    console.log(responseData);

    if (!responseData) {
      console.log("Failed to save data");
      return res
        .status(500)
        .json({ success: false, message: "Failed to save user" });
    }

    const payload = {
      id: responseData.id,
      role: responseData.role,
    };
    const token = generateToken(payload);

    return res
      .status(200)
      .json({ success: true, message: "Sign up successful", token });
  } catch (err) {
    console.log("An error occured while signup using google =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", validateStudentInput("login"), async (req, res) => {
  try {
    await connectToDatabase();
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email does not exist",
      });
    }
    if(user.role !== "student") {
      return res.status(200).json({
        success: false,
        message: "Unauthorized"
      })
    }

    if (!(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Given password is not correct",
      });
    }

    const payload = {
      id: user.id,
      role: "student",
    };
    const token = generateToken(payload);
    console.log("Token has been generated =", token);
    return res.status(200).json({
      success: true,
      message: "Login Succesful",
      token,
    });
  } catch (err) {
    console.log("An error occured during login =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/auth/login", async (req, res) => {
  try {
    await connectToDatabase();
    const { userDataFromGoogle } = req.body;

    const { id, name, email } = userDataFromGoogle;

    const user = await User.findOne({ googleId: id });
    if (user && user.role === "student") {
      const payload = {
        id: user.id,
        role: "student",
      };
      const token = generateToken(payload);
      return res
        .status(200)
        .json({ success: true, message: "Login successful", token });
    }

    // if no user available than create one
    const newUser = new User({
      name,
      email,
      googleId: id,
      role: "student",
    });
    const responseData = await newUser.save();
    console.log(responseData);

    if (!responseData) {
      console.log("Failed to save user!");
      return res
        .status(500)
        .json({ success: false, message: "Failed to save user" });
    }

    const payload = {
      id: responseData.id,
      role: responseData.role,
    };
    const token = generateToken(payload);

    return res
      .status(200)
      .json({ success: true, message: "Log in successful", token });
  } catch (err) {
    console.log("An error occured during login =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/profile", jwtAuthMiddleware, isStudent, async (req, res) => {
  try {
    await connectToDatabase();
    const userId = req.jwtPayload.id;
    const userData = await User.findById(userId, "-password");
    if (!userData) {
      console.log("User data not found!");
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      userData,
    });
  } catch (err) {
    console.log("An error occured while fetching profile data =", err);
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


// image upload test route

// router.post("/test-upload", uploadSingle("testFile"), (req, res) => {
//   if(!req.cloudinaryFile) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid file type. No image uploaded",
//     });
//   }
//   res.status(200).json({
//     success: true,
//     message: "Test upload successful",
//     file: req.cloudinaryFile,
//   });
// });

router.post("/update/profile_pic", jwtAuthMiddleware, isStudent, uploadSingle("profilePicture"), async (req, res) => {
    try {
      await connectToDatabase();
      const userId = req.jwtPayload.id;

      if (!req.cloudinaryFile) {
        console.log("No file present");
        return res.status(400).json({
          success: false,
          message: "Invalid file type. No image uploaded",
        });
      }

      // Get the uploaded image URL from cloudinaryFile
      const newImageURL = req.cloudinaryFile.url;
      const newPublicId = req.cloudinaryFile.publicId;

      const user = await User.findById(userId);
      if (!user) {
        console.log("No user found");
        // If user not found, try to delete the uploaded image to avoid orphaned files
        await cloudinary.uploader.destroy(newPublicId);

        return res.status(400).json({
          success: false,
          message: "User not found!",
        });
      }

      if (user.profilePic !== "") {
        console.log("Profile Picture present");
        try {
          const existingPublicId = getPublicIdFromUrl(user.profilePic);
          console.log(existingPublicId);
          await cloudinary.uploader.destroy(existingPublicId, {
            resource_type: "image",
          });
          console.log("Existing image deleted successfully");
        } catch (deleteError) {
          console.log(
            "Warning: Failed to delete existing profile picture",
            deleteError
          );
          // We continue anyway since the upload already succeeded
        }
      }

      // Update user's profile picture URL in the database
      const imageRes = await User.findByIdAndUpdate(
        userId,
        { profilePic: newImageURL },
        { new: true }
      );
      console.log("Updated image link in database");

      if (!imageRes) {
        // If database update failed, try to delete the uploaded image to avoid orphaned files
        await cloudinary.uploader.destroy(newPublicId);

        return res.status(400).json({
          success: false,
          message: "An error occurred while updating profile picture",
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


// tested with new cloudinary(multer - memoryStorage)
router.post("/delete/profile_pic", jwtAuthMiddleware, isStudent, async (req, res) => {
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
      }
    );

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
    console.log("An error occured while deleting profile picture =", err);
    return res.status(500).json({ message: "Intrnal Server Error" });
  }
});

router.post("/update_profile", jwtAuthMiddleware, isStudent, uploadSingle("resume"), async (req, res) => {
    try {
      await connectToDatabase();
      const userId = req.jwtPayload.id;

      // Parse JSON string fields
      const education = req.body.education
        ? JSON.parse(req.body.education)
        : [];
      const skills = req.body.skills ? JSON.parse(req.body.skills) : [];
      const projects = req.body.projects ? JSON.parse(req.body.projects) : [];
      const experience = req.body.experience
        ? JSON.parse(req.body.experience)
        : [];

      // prepare update fields
      const updateFields = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        education,
        skills,
        projects,
        experience,
        gender: req.body.gender,
      };

      // Add resume field only if file is uploaded
      if (req.cloudinaryFile && req.cloudinaryFile.url) {
        updateFields.resume = req.cloudinaryFile.url;
      }

      const user = await User.findById(userId);
      if (!user) {
        if (req.cloudinaryFile) {
          const newPublicId = req.cloudinaryFile.publicId;
          await cloudinary.uploader.destroy(newPublicId, {
            resource_type: "raw",
          });
        }
        console.log("User not found!");
        return res.status(404).json({
          success: false,
          message: "User not found!",
        });
      }

      if (req.cloudinaryFile) {
        console.log("Resume file has been uploaded");

        if (user.resume !== "") {
          const existingFileURL = user.resume;
          const existingPublicId = getPublicIdFromUrl(existingFileURL);

          const fileDel = await cloudinary.uploader.destroy(existingPublicId, {
            resource_type: "raw",
          });
          console.log(fileDel);

          if (fileDel.result !== "ok") {
            console.log("Failed to delete existing resume");
            const newPublicId = req.cloudinaryFile.publicId;
            console.log("new public id =", newPublicId);
            await cloudinary.uploader.destroy(newPublicId, {
              resource_type: "raw",
            });
            return res.status(400).json({
              success: false,
              message: "Failed to update resume",
            });
          }

          console.log("Existing resume deleted successfully");
        }
      }

      const updatedUser = await User.findByIdAndUpdate(userId, updateFields, {
        new: true,
        runValidators: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user: updatedUser,
      });
    } catch (err) {
      console.log("An error occured while updating profile data =", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.post("/apply", jwtAuthMiddleware, isStudent, async (req, res) => {
  try {
    await connectToDatabase();
    const userId = req.jwtPayload.id;
    const { internshipId } = req.body;
    console.log(internshipId);

    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found!");
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    const internship = await Internship.findById(internshipId);
    if (!internship) {
      console.log("Internship not found!");
      return res.status(404).json({
        success: false,
        message: "Internship not found!",
      });
    }

    const existingApplication = await Application.findOne({
      internship: internshipId,
      student: userId,
    });

    if (existingApplication) {
      console.log("Application already exists");

      if (existingApplication.status === "Rejected") {
        const now = new Date();
        const rejectedAt = existingApplication.rejectedAt;

        if (rejectedAt) {
          const daysSinceRejection = Math.floor(
            (now - rejectedAt) / (1000 * 60 * 60 * 24)
          );

          if (daysSinceRejection < 30) {
            return res.status(200).json({
              success: false,
              message: `You were rejected ${daysSinceRejection} days ago. You can reapply after ${
                30 - daysSinceRejection
              } more days.`,
            });
          }

          // Allow reapplication
          console.log("30 days passed. Allowing reapplication.");

          internship.applicants.push(userId);
          await internship.save();

          const newApplication = new Application({
            student: userId,
            internship: internshipId,
          });
          const savedResponse = await newApplication.save();
          if (!savedResponse) {
            console.log("Failed to save application");
            return res.status(500).json({
              success: false,
              message:
                "Failed to apply for internship. Please try again later!",
            });
          }

          return res.status(200).json({
            success: true,
            message: "Application submitted successfully",
            savedResponse,
          });
        } else {
          // No rejectedAt date — treat as already applied
          return res.status(200).json({
            success: false,
            message: `You have already applied to this internship. Current status: ${existingApplication.status}`,
          });
        }
      } else {
        // Application exists with status not "Rejected"
        return res.status(200).json({
          success: false,
          message: `You have already applied to this internship. Current status: ${existingApplication.status}`,
        });
      }
    }

    // No existing application — proceed to apply
    internship.applicants.push(userId);
    await internship.save();

    const newApplication = new Application({
      student: userId,
      internship: internshipId,
    });
    const savedResponse = await newApplication.save();
    if (!savedResponse) {
      console.log("Failed to save application");
      return res.status(500).json({
        success: false,
        message: "Failed to apply for internship. Please try again later!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      savedResponse,
    });
  } catch (err) {
    console.log("An error occured while applying for internship =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/applications", jwtAuthMiddleware, isStudent, async (req, res) => {
  try {
    await connectToDatabase();
    const userId = req.jwtPayload.id;

    let { type } = req.query;
    let filterType = type || "pending";
    filterType = filterType[0].toUpperCase() + filterType.slice(1);

    const applications = await Application.find({
      student: userId,
      status: filterType,
    }).populate({
      path: "internship",
      populate: {
        path: "company",
      },
    });

    if (!applications) {
      console.log("No applications found!");
      return res.status(200).json({
        success: true,
        message: "No applications found!",
        applications,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Applications fetched successfully",
      applications,
    });
  } catch (err) {
    console.log("An error occured while fetching student applications =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/update/password", jwtAuthMiddleware, isStudent, async(req, res) => {
  try {

    await connectToDatabase();
    const { id } = req.jwtPayload;
    const { existingPassword, newPassword } = req.body;
    console.log(existingPassword, newPassword);

    const user = await User.findById(id);
    if(!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!"
      });
    }

    if(!(await user.comparePassword(existingPassword))) {
      return res.status(200).json({
        success: false,
        message: "Given password is incorrect!"
      })
    }

    if(newPassword.trim().length < 8) {
      return res.status(200).json({
        success: false,
        message: "Length of password can not be less than 8"
      })
    }

    user.password = newPassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully"
    });
  } catch(err) {
    console.error("Failed to update password =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
