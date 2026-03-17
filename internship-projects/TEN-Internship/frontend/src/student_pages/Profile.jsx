import { useState, useEffect } from "react";
import axiosClient from "../helpers/axiosClient";
import { useAuth } from "../context/AuthContext";
import { FaTimes } from "react-icons/fa";
import {
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBriefcase,
  FaFileAlt,
  FaCamera,
  FaVenusMars,
  FaMapMarkerAlt,
  FaThumbtack,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ResumeViewer from "../Components/ResumeViewer/ResumeViewer";
import NavBar from "../pages/NavMenu/NavBar";
import { Helmet } from "react-helmet-async";
import UpdatePasswordModal from "../Components/UpdatePassword/UpdatePasswordModal";

const Profile = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!token) return;

    const fetchUserProfile = async () => {
      try {
        const response = await axiosClient.get("/student/profile");

        const userData = response.data.userData;
        setTimeout(() => {
          setUser(userData);
          setProfilePic(
            userData.profilePic ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          );
        }, 1000);
      } catch (err) {
        toast.error("Failed to load profile");
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    //generate preview
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setProfilePic(preview);

    const formData = new FormData();
    formData.append("profilePicture", file);

    try {
      setLoading(true);
      toast.info("Updating profile picture...");

      const response = await axiosClient.post("/student/update/profile_pic",
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.data && response.data.success) {
        setProfilePic(response.data.data + "?t=" + new Date().getTime());
        toast.success("Profile picture updated!");
        setLoading(false);
      } else {
        setProfilePic(
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        );
        toast.error("Profile picture update failed. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      toast.error("Failed to update profile picture.");
      setLoading(false);
    }
  };

  const handleDeleteProfilePicture = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.post("/student/delete/profile_pic");
      if(response.data.success) {
        setProfilePic("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
        setShowDeleteDialog(false);
        toast.success("Profile picture deleted successfully!");
        setLoading(false);
      } else {
        toast.error(response.data.message || "Failed to delete profile picture.");
        setLoading(false);
      }
    } catch(err) {
      toast.error("Failed to delete profile picture.");
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleEditProfile = async () => {
    setLoading(true);
    // Simulate a delay for editing profile
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds (simulation)
      navigate("/profile-fill");
    }, 2000);
  };

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600 animate-pulse">
          Loading profile...
        </p>
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>My Profile | Student Dashboard</title>
        <meta
          name="description"
          content="View and update your student profile to receive tailored internship recommendations."
        />
        <meta
          name="keywords"
          content="student profile, career profile, internship profile"
        />
      </Helmet>
      <NavBar />
      <div className="min-h-screen bg-white py-10 px-4 sm:px-8 md:px-16">

        {/* Profile Section - Two Column Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6 sm:gap-8 mb-8 mt-10 shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg">
          {/* Left Section: Profile Picture */}
          <div className="flex justify-center md:items-center md:justify-start items-center gap-4 sm:gap-6">
            <div className="relative">
              {loading ? (
                <>
                  <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-4 border-blue-500 animate-pulse bg-gray-200"></div>
                </>
              ) : (
                <>
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-4 border-blue-500 shadow-lg object-center object-cover"
                  />
                  <label className="absolute bottom-2 right-2 bg-gray-700 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 transition">
                    <FaCamera />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      className="hidden"
                    />
                  </label>
                  {profilePic !==
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" && (
                    <button
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-lg cursor-pointer hover:bg-red-600 transition"
                      onClick={() => setShowDeleteDialog(true)}
                    >
                      <FaTimes />
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Right Section: User Info */}
          <div className="flex flex-col justify-center md:justify-start text-base sm:text-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2 md:text-start text-center">
              {" "}
              {user.name}
            </h3>
            <p className="text-gray-700 flex items-center">
              <FaVenusMars className="mr-2" />
              {user.gender || "Not Specified"}
            </p>
            <p className="text-gray-700 flex items-center">
              <FaPhone className="mr-2" />{" "}
              {user.phone || "Phone number not available"}
            </p>
            <p className="text-gray-700 flex items-center">
              <FaEnvelope className="mr-2" />
              {user.email}
            </p>
            <p className="text-gray-700 flex items-center">
              <FaMapMarkerAlt className="mr-2" />{" "}
              {user.address || "Address not available"}
            </p>
            
            <div className="mt-2">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-500 text-white text-base px-3 py-1.5 hover:bg-blue-700 rounded"
              >
                Change Password
              </button>

              <UpdatePasswordModal isOpen={openModal} onClose={() => setOpenModal(false)} />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 shadow-lg rounded-lg px-8 py-6 text-center md:gap-5 gap-4 mb-8 flex md:flex-row flex-col items-center justify-center">
          <p className="text-gray-600 font-medium">
            {/* Click to view the applications you've submitted */}
            <span className="block md:hidden">
              Click below to view the applications you've submitted
            </span>
            <span className="hidden md:block">
              Click here to view the applications you've submitted
            </span>
          </p>
          <button
            onClick={() => navigate("../student-applications")}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Applications <FaArrowRight className="text-sm mt-1" />
          </button>
        </div>

        {/* Skills & Education Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Education Section */}
          <section className="shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaGraduationCap className="mr-2" /> Education
            </h3>
            {(user.education || []).length > 0 ? (
              user.education.map((edu, index) => (
                <div key={index} className="mt-3 sm:mt-4">
                  <p className="font-medium text-gray-800">
                    {edu.organisation}
                  </p>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-blue-600">
                    {edu.startDate && edu.endDate
                      ? `${new Date(edu.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })} -
                   ${new Date(edu.endDate).toLocaleDateString("en-US", {
                     year: "numeric",
                     month: "short",
                   })}`
                      : "Date not provided"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No education details</p>
            )}
          </section>

          {/* Skills Section */}
          <section className="shadow-lg p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center text-blue-600 mb-4">
              <FaThumbtack className="mr-2" /> Skills
            </h3>
            {user.skills?.length > 0 ? (
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm capitalize font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No skills added.</p>
            )}
          </section>
        </div>

        {/* Projects & Work Experience Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8">
          {/* Projects Section */}
          <section className="shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaFileAlt className="mr-2" /> Projects
            </h3>
            {(user.projects || []).length > 0 ? (
              user.projects.map((project, index) => (
                <div key={index} className="mt-3 sm:mt-4">
                  <p className="font-medium text-gray-800">{project.name}</p>
                  <p className="text-sm text-blue-600">
                    {project.startDate && project.endDate
                      ? `${new Date(project.startDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short" }
                        )} -
                   ${new Date(project.endDate).toLocaleDateString("en-US", {
                     year: "numeric",
                     month: "short",
                   })}`
                      : "Date not provided"}
                  </p>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No projects added</p>
            )}
          </section>

          {/* Work Experience Section */}
          <section className="shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaBriefcase className="mr-2" /> Work Experience
            </h3>
            {(user.experience || []).length > 0 ? (
              user.experience.map((work, index) => (
                <div key={index} className="mt-3 sm:mt-4">
                  <p className="font-medium text-gray-800">{work.name}</p>
                  <p className="text-gray-700 mt-1">{work.title}</p>
                  <p className="text-sm text-blue-600">
                    {work.startDate && work.endDate
                      ? `${new Date(work.startDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short" }
                        )} -
                   ${new Date(work.endDate).toLocaleDateString("en-US", {
                     year: "numeric",
                     month: "short",
                   })}`
                      : "Date not provided"}
                  </p>
                  <p className="text-gray-700 mt-2">{work.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No work experience added</p>
            )}
          </section>
        </div>

        {/* Resume Download & Edit Profile Button */}
        <div className="mt-8 sm:mt-12 text-center flex flex-col items-center space-y-4">
          <ResumeViewer resumeUrl={user.resume} />

          <button
            onClick={handleEditProfile}
            disabled={loading}
            className="bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Loading...
              </>
            ) : (
              "Edit Profile"
            )}
            {/* Edit Profile */}
          </button>
        </div>
      </div>
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
                className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition"
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
                className="bg-gray-300 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
