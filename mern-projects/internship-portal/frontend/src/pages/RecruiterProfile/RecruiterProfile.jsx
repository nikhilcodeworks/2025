import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaUser,
  FaBuilding,
  FaGlobe,
  FaImage,
  FaIndustry,
  FaCamera,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdCalendarToday } from "react-icons/md";
import "./RecruiterProfile.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axiosClient from "../../helpers/axiosClient";
import { Helmet } from "react-helmet-async";
import { useUpdate } from "../../context/ProfilePictureUpdateContext";
import UpdatePasswordModal from "../../Components/UpdatePassword/UpdatePasswordModal";

const RecruiterProfile = () => {

  const { setIsRecruiterImageUpdated } = useUpdate();

  const [activeTab, setActiveTab] = useState("personal");
  const [profileImage, setProfileImage] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [loading, setLoading] = useState();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState();
  const [openModal, setOpenModal] = useState(false);
  // State for Profile Details
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
  });

  // State for Company Details
  const [companyData, setCompanyData] = useState({
    companyName: "",
    companyEmail: "",
    // companyMobile: "",
    foundedYear: "",
    companyWebsite: "",
    companyLogo: "",
    companyType: "",
    companyAddress: "",
  });

  // Fetch Profile Details
  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axiosClient.get("/recruiter/profile");

        // console.log("Profile API response:", response.data);

        // Extract recruiter and company data
        const { recruiter, company } = response.data;

        if (recruiter) {
          setProfileData({
            name: recruiter.name || "",
            email: recruiter.email || "",
            mobile: recruiter.phone || "",
            dob: recruiter.dob ? recruiter.dob.split("T")[0] : "",
            gender: recruiter.gender || "",
            address: recruiter.address || "",
          });
          setProfileImage(recruiter.profilePic || "");
        } else {
          console.log("No recruiter data found");
        }
        if (company) {
          // console.log("Company data received:", company);
          setCompanyData({
            companyName: company.name || "",
            companyEmail: company.email || "",
            foundedYear: company.foundedYear || "",
            companyWebsite: company.website || "",
            companyLogo: company.logo || "",
            companyType: company.industry || "", // If industry is the type
            companyAddress: company.location || "",
          });
        } else {
          console.log("No company data found");
        }
        setPageLoading(false);
      } catch (error) {
        console.error(
          "Error fetching profile:",
          error.response?.data || error.message
        );
        setPageLoading(false);
      }
    };
    setPageLoading(true);
    fetchProfileDetails();
  }, []);

  // Handle Input Change
  const handleProfileChange = (e) => {
    if (e.target.name === "email") return; // Prevent email from being changed
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleCompanyChange = (e) => {
    if (e.target.name === "companyEmail") return; // Prevent company email from being changed
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  // Handle Profile Update
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      // Ensure authentication
      const response = await axiosClient.post(
        "/recruiter/update_profile",
        profileData
      );
      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        setSubmitLoading(false);
      }
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
      toast.error("Failed to update profile.");
      setSubmitLoading(false);
    }
  };

  // Handle Company Update
  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      const response = await axiosClient.post(
        "/recruiter/update_company",
        companyData
      );
      if (response.status === 200) {
        toast.success("Company details updated successfully!");
        setSubmitLoading(false);
      }
    } catch (error) {
      console.error("Error updating company details:", error);
      toast.error("Failed to update company details.");
      setSubmitLoading(false);
    }
  };

  // Handle Image Upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePicture", file); // Key must match backend `upload.single("profilePicture")`

    try {
      setLoading(true);
      const response = await axiosClient.post("/recruiter/update/profile_picture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      if (response.data.success) {
        console.log("Image upload response:", response.data.data);
        setProfileImage(response.data.data);
        toast.success("Profile picture updated successfully!");
        setIsRecruiterImageUpdated((prev) => !prev);
        setLoading(false);
      } else {
        setProfileImage(null);
        toast.error(
          response.data.message || "Failed to update profile picture."
        );
        setLoading(false);
      }
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      toast.error("Failed to update profile picture."); // Display error message
      setLoading(false);
    }
  };

  // Handle Profile Picture Deletion
  const handleDeleteProfilePicture = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.post("/recruiter/delete/profile_picture");

      if (res.data.success) {
        setProfileImage(null); // Remove profile image
        setShowDeleteDialog(false); // Close dialog
        toast.success("Profile picture removed successfully!");
        setLoading(false);
        setIsRecruiterImageUpdated((prev) => !prev);
      } else {
        setShowDeleteDialog(false);
        toast.error(res.data.message || "Failed to remove profile picture.");
        setLoading(false);
      }
    } catch (error) {
      console.error(
        "Error deleting profile picture:",
        error.response?.data || error.message
      );
      toast.error("Failed to remove profile picture.");
      setLoading(false);
    }
  };

  if(pageLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Recruiter Profile | Manage Company Info</title>
        <meta
          name="description"
          content="View and update your recruiter and company profile to enhance trust with applicants."
        />
        <meta
          name="keywords"
          content="recruiter profile, company profile, employer profile"
        />
      </Helmet>

      <div className="bg-gray-100 min-h-screen p-5">
        <ToastContainer position="top-right" autoClose={3000} />
        {/* Profile Header */}
        <div className="totaldivcolor text-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-5 md:top-0 z-10">
          {/* Profile Image Section */}
          <div className="relative w-24 h-24 rounded-full border-4 border-green-400 flex items-center justify-center bg-gray-700">
            {loading ? (
              <>
                <div className="flex items-center justify-center w-full h-full animate-pulse"></div>
              </>
            ) : (
              <>
                {profileImage ? (
                  <>
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => (e.target.src = "/default-profile.png")} // Fallback in case of an error
                    />
                  </>
                ) : (
                  <FaUser className="text-white text-4xl" />
                )}
              </>
            )}

            {/* Camera Icon for Upload */}
            <label
              htmlFor="fileInput"
              className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-lg cursor-pointer"
            >
              <FaCamera className="text-black text-lg" />
            </label>

            {/* Hidden File Input */}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              // capture="user"
              className="hidden"
              onChange={handleImageUpload}
            />
            {/* Cross (Delete) Button */}
            {profileImage && (
              <button
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full shadow-lg"
                onClick={() => setShowDeleteDialog(true)}
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold">{profileData.name} </h2>
            <p className="text-sm mt-1 flex items-center gap-2">
              <FaPhone className="text-yellow-400" /> {profileData.mobile}
            </p>
            <p className="text-sm mt-1 flex items-center gap-2">
              <FaEnvelope className="text-green-400" />
              {profileData.email}
            </p>
            <div className="mt-2">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-500 text-white text-sm px-3 py-1.5 hover:bg-blue-700 rounded"
              >
                Change Password
              </button>

              <UpdatePasswordModal isOpen={openModal} onClose={() => setOpenModal(false)} />
            </div>
          </div>
        </div>

        {/* Delete Confirmation Dialog */}
        {showDeleteDialog && (
          <div className="dialog-overlay">
            <div className="dialog-box">
              {/* Close button in the top-right */}
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="close-button"
              >
                ✖
              </button>

              <p className="text-lg font-semibold mt-5">
                Are you sure you want to remove the profile picture?
              </p>

              <div className="mt-4 flex justify-center gap-4">
                <button
                  disabled={loading}
                  onClick={handleDeleteProfilePicture}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <FaSpinner className="animate-spin" />
                    </div>
                  ) : (
                    <span>Yes, Remove</span>
                  )}
                </button>
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center md:justify-start gap-10 mt-5 p-3 text-gray-500">
          <button
            className={`flex items-center gap-2 pb-2 cursor-pointer ${
              activeTab === "personal"
                ? "text-black border-b-2 border-green-500"
                : ""
            }`}
            onClick={() => setActiveTab("personal")}
          >
            <FaUser /> Personal Details
          </button>
          <button
            className={`flex items-center gap-2 pb-2 cursor-pointer ${
              activeTab === "company"
                ? "text-black border-b-2 border-green-500"
                : ""
            }`}
            onClick={() => setActiveTab("company")}
          >
            <FaBriefcase /> Company Details
          </button>
        </div>

        {/* Personal Details Form */}
        {activeTab === "personal" && (
          <div className="job-form-container">
            <form className="job-form" onSubmit={handleProfileSubmit}>
              {/* Row 1: Name & Email */}
              <div className="row">
                <div className="input-group total-group">
                  <label>Name*</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      className="job-title-input"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      placeholder="Enter Name"
                    />
                    <span className="input-icon">
                      <FaUser />
                    </span>
                  </div>
                </div>

                <div className="input-group total-group">
                  <label>Email*</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      className="stipend-input bg-gray-300"
                      value={profileData.email}
                      // onChange={handleProfileChange}
                      placeholder="Enter Email"
                      readOnly
                    />
                    <span className="input-icon">
                      <MdEmail />
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2: Mobile & Date of Birth */}
              <div className="row">
                <div className="input-group total-group">
                  <label>Mobile*</label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      name="mobile"
                      className="stipend-input"
                      value={profileData.mobile}
                      onChange={handleProfileChange}
                      placeholder="Enter Mobile"
                      required
                    />
                    <span className="input-icon">
                      <FaPhone />
                    </span>
                  </div>
                </div>

                <div className="input-group total-group">
                  <label>Date of Birth*</label>
                  <div className="input-wrapper">
                    <input
                      type="date"
                      name="dob"
                      className="location-input"
                      value={profileData.dob || ""}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Gender */}
              <div className="row">
                <div className="input-group total-group">
                  <label>Gender*</label>
                  <div className="input-wrapper">
                    <select
                      name="gender"
                      className="duration-select gray-placeholder"
                      value={profileData.gender || ""}
                      onChange={handleProfileChange}
                      required
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Address */}
              <div className="input-group total-group full-width">
                <label>Address</label>
                <div className="input-wrapper">
                  <textarea
                    name="address"
                    className="description-textarea"
                    value={profileData.address || ""}
                    onChange={handleProfileChange}
                    rows="4"
                    placeholder="Enter Address"
                    required
                  ></textarea>
                  <span className="input-icon">
                    <MdLocationOn />
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                disabled={submitLoading}
                type="submit"
                className="submit-button"
              >
                {submitLoading ? (
                  <div className="flex justify-center items-center w-full">
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : (
                  <>Submit</>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Company Details Form */}
        {activeTab === "company" && (
          <div className="job-form-container">
            <form className="job-form" onSubmit={handleCompanySubmit}>
              <div className="row">
                <div className="input-group total-group">
                  <label>Company Name*</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="companyName"
                      className="job-title-input"
                      value={companyData.companyName}
                      onChange={handleCompanyChange}
                      placeholder="Enter Company Name"
                      required
                    />
                    <span className="input-icon">
                      <FaBuilding />
                    </span>
                  </div>
                </div>

                <div className="input-group total-group">
                  <label>Company Email*</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="companyEmail"
                      className="stipend-input bg-gray-300"
                      value={companyData.companyEmail}
                      onChange={handleCompanyChange}
                      placeholder="Enter Email"
                      readOnly
                    />
                    <span className="input-icon">
                      <FaEnvelope />
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2: Mobile & Founded Year */}
              <div className="row">
                <div className="input-group total-group">
                  <label>Company Type</label>
                  <div className="input-wrapper">
                    <select
                      name="companyType"
                      className="duration-select gray-placeholder"
                      value={companyData.companyType}
                      onChange={handleCompanyChange}
                    >
                      <option value="" disabled selected>
                        Select Company Type
                      </option>
                      <option value="C">Public Company</option>
                      <option value="D">Educational</option>
                      <option value="E">Self Employed</option>
                      <option value="G">Government Agency</option>
                      <option value="N">Non Profit</option>
                      <option value="O">Self Owned</option>
                      <option value="P">Privately Held</option>
                      <option value="S">Partnership</option>
                    </select>
                    <span className="input-icon">
                      <FaIndustry />
                    </span>
                  </div>
                </div>
                <div className="input-group total-group">
                  <label>Founded Year</label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="foundedYear"
                      className="stipend-input"
                      value={companyData.foundedYear}
                      onChange={handleCompanyChange}
                      placeholder="Enter Founded Year"
                    />
                    <span className="input-icon">
                      <MdCalendarToday />
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3: Website & Logo URL */}
              <div className="row">
                <div className="input-group total-group">
                  <label>Company Website*</label>
                  <div className="input-wrapper">
                    <input
                      type="url"
                      name="companyWebsite"
                      className="stipend-input"
                      value={companyData.companyWebsite}
                      onChange={handleCompanyChange}
                      placeholder="Enter Website URL"
                      required
                    />
                    <span className="input-icon">
                      <FaGlobe />
                    </span>
                  </div>
                </div>
                <div className="input-group total-group">
                  <label>Company Logo URL*</label>
                  <div className="input-wrapper">
                    <input
                      type="url"
                      name="companyLogo"
                      className="stipend-input"
                      value={companyData.companyLogo}
                      onChange={handleCompanyChange}
                      placeholder="Enter Logo URL"
                    />
                    <span className="input-icon">
                      <FaImage />
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 5: Address */}
              <div className="input-group total-group full-width">
                <label>Company Address</label>
                <div className="input-wrapper">
                  <textarea
                    name="companyAddress"
                    className="description-textarea"
                    value={companyData.companyAddress}
                    onChange={handleCompanyChange}
                    rows="4"
                    placeholder="Enter Company Address"
                    required
                  ></textarea>
                  <span className="input-icon">
                    <MdLocationOn />
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                disabled={submitLoading}
                type="submit"
                className="submit-button"
              >
                {submitLoading ? (
                  <div className="flex justify-center items-center w-full">
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : (
                  <>Submit</>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default RecruiterProfile;
