import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CustomInput from "../../Components/forms/CustomInput";
// import { useAuth } from "../../context/AuthContext";
import SkillsDropdown from "../../Components/SkillComponent/SkillsDropdown";
import LoginForm from "./LoginForm";

import axiosClient from "../../helpers/axiosClient";

import {
  FaEnvelope,
  FaFileUpload,
  FaMapMarkerAlt,
  FaPhone,
  FaPlus,
  FaTimes,
  FaTrash,
  FaUser,
  FaVenusMars,
} from "react-icons/fa";
import ResumeViewer from "../../Components/ResumeViewer/ResumeViewer";

const ProfileUpdateForm = ({ onClose, internship }) => {
  // const { isAuthenticated } = useAuth();

  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [education, setEducation] = useState([
    { organisation: "", degree: "", startDate: "", endDate: "" },
  ]);

  const [projects, setProjects] = useState([
    { name: "", startDate: "", endDate: "", description: "" },
  ]);

  const [experience, setExperience] = useState([
    { name: "", title: "", startDate: "", endDate: "", description: "" },
  ]);
  const [resume, setResume] = useState(null);
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isApplied, setIsApplied] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isProfileSaved, setIsProfileSaved] = useState(true); // true by default (assuming no changes yet)

  // Fetch user profile data when component mounts
  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (!userData || Object.keys(userData).length === 0) return;

    const nameChanged = name !== userData.name;
    const emailChanged = email !== userData.email;
    const phoneChanged = phone !== userData.phone;
    const genderChanged = gender !== userData.gender;
    const addressChanged = address !== userData.address;

    const skillsChanged =
      JSON.stringify(skills) !== JSON.stringify(userData.skills || []);

    // Compare resume name, not just existence
    const resumeChanged =
      resume instanceof File
        ? resume.name !==
          (userData.resume ? userData.resume.split("/").pop() : "")
        : false;

    const educationChanged =
      JSON.stringify(education) !== JSON.stringify(userData.education || []);

    const projectsChanged =
      JSON.stringify(projects) !== JSON.stringify(userData.projects || []);

    const experienceChanged =
      JSON.stringify(experience) !== JSON.stringify(userData.experience || []);

    const updated =
      nameChanged ||
      emailChanged ||
      phoneChanged ||
      genderChanged ||
      addressChanged ||
      skillsChanged ||
      educationChanged ||
      projectsChanged ||
      experienceChanged ||
      resumeChanged;

    setIsUpdated(updated);
    setIsProfileSaved(!updated);
  }, [
    name,
    email,
    phone,
    gender,
    address,
    education,
    projects,
    experience,
    skills,
    resume,
    userData,
  ]);

  if (!internship) {
    return <p>Loading internship data...</p>;
  }

  const fetchUserProfile = async () => {
    try {
      const response = await axiosClient.get("/student/profile");

      if (response.data.success) {
        const userData = response.data.userData || response.data.profileData;
        setUserData(userData);
        setName(userData.name || "");
        setEmail(userData.email || "");
        setPhone(userData.phone || "");
        setGender(userData.gender || "");
        setAddress(userData.address || "");
        setResume(userData.resume || null);

        setEducation(
          Array.isArray(userData.education)
            ? userData.education.map((edu) => ({
                organisation: edu.organisation || "",
                degree: edu.degree || "",
                startDate: edu.startDate || "",
                endDate: edu.endDate || "",
              }))
            : [{ organisation: "", degree: "", startDate: "", endDate: "" }]
        );

        setProjects(
          Array.isArray(userData.projects)
            ? userData.projects.map((project) => ({
                name: project.name || "",
                startDate: project.startDate || "",
                endDate: project.endDate || "",
                description: project.description || "",
              }))
            : [{ name: "", startDate: "", endDate: "", description: "" }]
        );

        setExperience(
          Array.isArray(userData.experience)
            ? userData.experience.map((exp) => ({
                name: exp.name || "",
                title: exp.title || "",
                startDate: exp.startDate || "",
                endDate: exp.endDate || "",
                description: exp.description || "",
              }))
            : [
                {
                  name: "",
                  title: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ]
        );
        setSkills(
          Array.isArray(userData.skills)
            ? userData.skills.map((skill) => skill.trim())
            : []
        );
        setIsProfileUpdated(!!(userData.resume && userData.skills.length));
      } else {
        setMessage("Failed to load profile data");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Token expired
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("token"); // Clear the token
      } else {
        console.error("Error fetching profile:", error);
        setMessage("Error loading profile data");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // const handleLoginSuccess = () => {
  //   // Reset session expiration and fetch profile data again
  //   setIsSessionExpired(false);
  //   fetchUserProfile();
  // };
  // if (isSessionExpired) {
  //   return <LoginForm onLoginSuccess={handleLoginSuccess} />; // Render LoginForm if session expired
  // }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle input changes for normal fields
  const handleChange = (index, field, value, setState) => {
    setState((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };
  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhone(numericValue);

    if (numericValue.length !== 10) {
      setPhoneError("Phone number must be 10 digits.");
    } else {
      setPhoneError("");
    }
  };

  // Handle file selection
  // const handleFileChange = (e) => {
  //   setResume(e.target.files[0]);
  // };
  const formatDate = (isoDate) => {
    return isoDate ? isoDate.substring(0, 7) : "";
  };
  const handleApply = async (internshipId) => {
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
    if (!isProfileUpdated) {
      toast.warn(
        "Please update your profile with resume and skills before applying."
      );
      return;
    }

    try {
      // Ensure the user is logged in and has a valid token
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("User is not authenticated. Please log in.");
        toast.error("You must be logged in to apply for an internship.");
        return;
      }

      console.log("Education length =", education.length);
      console.log("Projects length =", projects.length);

      // checking for education and projects
      if (education.length === 0) {
        toast.error("At least one education entry is required.");
        return;
      }

      if (projects.length === 0) {
        toast.error("At least one project entry is required.");
        return;
      }
      // Make the API request to apply for the internship
      const response = await axiosClient.post("/student/apply", {
        internshipId,
      });

      // Handle the response from the server
      if (response.data.success) {
        toast.success(
          response.data.message || "Application submitted successfully!"
        );
        setIsApplied(true); // Mark as applied
        if (onClose) {
          onClose(); // Close the profile modal
        }
      } else {
        toast.error(
          response.data.message || "Failed to apply for the internship."
        );
      }
    } catch (error) {
      // Handle errors during the API call
      console.error("Error applying for internship:", error);
      if (error.response) {
        toast.error(
          error.response.data.message || "Failed to apply for the internship."
        );
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  // Handle array field changes (projects, experience)

  const validateForm = () => {
    let errors = [];

    // Access phone from formData
    if (!phone.match(/^\d{10}$/)) {
      errors.push("Phone number must be 10 digits.");
    }

    education.forEach((edu, index) => {
      if (!edu.organisation.trim()) {
        errors.push(
          `Education ${index + 1}: University/College Name is required.`
        );
      }
      if (!edu.degree.trim()) {
        errors.push(`Education ${index + 1}: Degree is required.`);
      }
      if (
        edu.startDate &&
        edu.endDate &&
        new Date(edu.startDate) > new Date(edu.endDate)
      ) {
        errors.push(
          `Education ${index + 1}: Start date cannot be after end date.`
        );
      }
    });

    projects.forEach((project, index) => {
      if (!project.name.trim())
        errors.push(`Project ${index + 1}: Project Name is required.`);
      if (
        project.startDate &&
        project.endDate &&
        new Date(project.startDate) > new Date(project.endDate)
      ) {
        errors.push(
          `Project ${index + 1}: Start date cannot be after end date.`
        );
      }
    });

    experience.forEach((exp, index) => {
      if (!exp.name.trim())
        errors.push(`Experience ${index + 1}: Company Name is required.`);
      if (!exp.title.trim())
        errors.push(`Experience ${index + 1}: Job Title is required.`);
      if (
        exp.startDate &&
        exp.endDate &&
        new Date(exp.startDate) > new Date(exp.endDate)
      ) {
        errors.push(
          `Experience ${index + 1}: Start date cannot be after end date.`
        );
      }
    });
    if (skills.length === 0) {
      errors.push("At least one skill is required.");
    }

    // Validate resume
    if (
      !resume ||
      (typeof resume === "object" &&
        resume instanceof File &&
        !resume.name.endsWith(".pdf"))
    ) {
      errors.push("Resume is required and must be a PDF file.");
    }

    return errors;
  };
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file?.name.endsWith(".pdf")) {
      toast.error("Only PDF files are allowed.");
      return;
    }
    setResume(file);
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUpdated) {
      return;
    }
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    setIsSubmitting(true);
    setIsProfileSaved(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("address", address);

    formData.append(
      "education",
      JSON.stringify(
        education.map((edu) => ({
          ...edu,
          startDate: formatDate(edu.startDate),
          endDate: formatDate(edu.endDate),
        }))
      )
    );

    formData.append(
      "projects",
      JSON.stringify(
        projects.map((project) => ({
          ...project,
          startDate: formatDate(project.startDate),
          endDate: formatDate(project.endDate),
        }))
      )
    );

    formData.append(
      "experience",
      JSON.stringify(
        experience.map((exp) => ({
          ...exp,
          startDate: formatDate(exp.startDate),
          endDate: formatDate(exp.endDate),
        }))
      )
    );
    formData.append("skills", JSON.stringify(skills)); // good
    if (resume instanceof File) {
      formData.append("resume", resume);
    }
    // good
    console.log({ name, email, skills, resume });

    try {
      console.log("Handle submit function is getting called.");
      const response = await axiosClient.post(
        "/student/update_profile",
        formData
      );

      if (response.data.success) {
        toast.success("Profile updated successfully!");
        console.log(
          "Saving updated profile to localStorage:",
          response.data.userData
        );
        localStorage.setItem(
          "userProfile",
          JSON.stringify(response.data.userData)
        ); // Save updated profile
      } else {
        toast.error(response.data.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating the profile.");

      // Check if error.response exists
      if (error.response) {
        toast.error(error.response.data.message || "Failed to update profile");
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        // Handle other unexpected errors
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>
      </div>
      {message && <p className="text-red-500 text-center">{message}</p>}
      <div
        className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        style={{ maxHeight: "500px" }} // Set a fixed height for scrolling
      >
        <form encType="multipart/form-data">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mb-4   px-6 ">
            <div>
              <label className="text-gray-700 font-semibold">Name *</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  disabled
                  className="border p-2 w-full rounded-lg pl-10 bg-gray-200"
                />
                <FaUser className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Email *</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    console.log("Name:", e.target.value);
                    setEmail(e.target.value);
                  }}
                  disabled
                  placeholder="Enter your email"
                  className="border p-2 w-full rounded-lg pl-10 bg-gray-200"
                />
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="mb-4   px-6 ">
            <label className="text-gray-700 font-semibold">Address *</label>
            <div className="relative">
              <textarea
                value={address}
                required
                onChange={(e) => {
                  console.log("Address:", e.target.value);
                  setAddress(e.target.value);
                }}
                className="border p-2 w-full rounded-lg pl-10"
                placeholder="Enter Address"
              ></textarea>

              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4  px-6 ">
            <div>
              <label className="text-gray-700 font-semibold">
                Phone Number *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="border p-2 w-full rounded-lg pl-10"
                />
                <FaPhone className="absolute left-3 top-3 text-gray-500" />
              </div>
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Gender *</label>
              <div className="relative">
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="border p-2 pl-8 w-full rounded-lg"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                <FaVenusMars className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>
          </div>
          {/* Education Section */}
          <div className="mb-4 mt-6  px-6 py-5">
            <label className="text-gray-800 font-bold text-lg mb-4">
              Education Details
            </label>

            <div className="grid grid-cols-1  md:gap-6">
              {education.map((edu, index) => (
                <div key={index} className="relative mt-2">
                  <p className="text-blue-700 font-semibold mb-2 mt-2">
                    Education {index + 1}
                  </p>
                  <input
                    type="text"
                    placeholder="University/College Name"
                    value={edu.organisation}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "organisation",
                        e.target.value,
                        setEducation
                      )
                    }
                    className="border p-2 w-full rounded-lg mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Degree with Specialization"
                    value={edu.degree}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "degree",
                        e.target.value,
                        setEducation
                      )
                    }
                    className="border p-2 w-full rounded-lg"
                  />

                  {/* Start Date & End Date */}
                  <div className="flex gap-2 mt-2">
                    <div className="w-1/2">
                      <label className="text-gray-500 text-sm">
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={formatDate(edu.startDate)}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "startDate",
                            e.target.value,
                            setEducation
                          )
                        }
                        className="border p-2 w-full rounded-lg"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-gray-500 text-sm">End Date</label>
                      <input
                        type="month"
                        value={formatDate(edu.endDate)}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "endDate",
                            e.target.value,
                            setEducation
                          )
                        }
                        className="border p-2 w-full rounded-lg"
                      />
                    </div>
                  </div>

                  <FaTrash
                    className="absolute right-3 top-13 text-gray-500 cursor-pointer hover:text-red-500"
                    onClick={() =>
                      setEducation(education.filter((_, i) => i !== index))
                    }
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setEducation([
                  ...education,
                  { organisation: "", degree: "", startDate: "", endDate: "" },
                ])
              }
              className="text-blue-700 mt-3 flex items-center"
            >
              <FaPlus className="mr-1" /> Add Education
            </button>
          </div>
          <div className="mb-4 mt-3  px-6 py-2">
            <label className="text-gray-700 font-semibold ">Projects</label>
            <div className="grid grid-cols-1  md:gap-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value, setProjects)
                    }
                    className="border p-2 w-full rounded-lg mb-2"
                  />
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <label className="text-gray-500 text-sm">
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={formatDate(project.startDate)}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "startDate",
                            e.target.value,
                            setProjects
                          )
                        }
                        className="border p-2 w-full rounded-lg"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-gray-500 text-sm">End Date</label>
                      <input
                        type="month"
                        value={formatDate(project.endDate)}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "endDate",
                            e.target.value,
                            setProjects
                          )
                        }
                        className="border p-2 w-full rounded-lg mb-2"
                      />
                    </div>
                  </div>
                  <textarea
                    placeholder="Description"
                    value={project.description}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "description",
                        e.target.value,
                        setProjects
                      )
                    }
                    className="border p-2 w-full rounded-lg "
                  />
                  <FaTrash
                    className="absolute right-3 top-14 text-gray-500 cursor-pointer hover:text-red-500"
                    onClick={() =>
                      setProjects(projects.filter((_, i) => i !== index))
                    }
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setProjects([
                    ...projects,
                    { name: "", startDate: "", endDate: "", description: "" },
                  ])
                }
                className="text-blue-700  flex items-center"
              >
                <FaPlus className="mr-1" /> Add Project
              </button>
            </div>
          </div>

          <div className="mb-4 mt-6  px-6 py-3">
            <label className="text-gray-800 font-bold text-lg mb-4">
              Work Experience
            </label>

            <div className="grid grid-cols-2 md:gap-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative mt-2">
                  <p className="text-blue-700 font-semibold mb-2 mt-3">
                    Company {index + 1}
                  </p>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={exp.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value, setExperience)
                    }
                    className="border p-2 w-full rounded-lg mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={exp.title}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "title",
                        e.target.value,
                        setExperience
                      )
                    }
                    className="border p-2 w-full rounded-lg mb-2"
                  />

                  {/* Start Date & End Date */}
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <label className="text-gray-500 text-sm">
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={formatDate(exp.startDate)}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "startDate",
                            e.target.value,
                            setExperience
                          )
                        }
                        className="border p-2 w-full rounded-lg"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-gray-500 text-sm">End Date</label>
                      <input
                        type="month"
                        value={formatDate(exp.endDate)}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "endDate",
                            e.target.value,
                            setExperience
                          )
                        }
                        // disabled={exp.isPresent}
                        className="border p-2 w-full rounded-lg"
                      />
                    </div>
                  </div>

                  {/* <label>
                     <input 
                       type="checkbox" 
                       checked={exp.isPresent} 
                       onChange={() => handleCheckboxChange(index, "experience")}
                     />
                     you are currently working in the company
                   </label> */}

                  <textarea
                    placeholder="Skills Learned"
                    value={exp.description}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "description",
                        e.target.value,
                        setExperience
                      )
                    }
                    className="border p-2 w-full rounded-lg mt-2"
                  />

                  <FaTrash
                    className="absolute right-3 top-14 text-gray-500 cursor-pointer hover:text-red-500"
                    onClick={() =>
                      setExperience(experience.filter((_, i) => i !== index))
                    }
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setExperience([
                  ...experience,
                  {
                    name: "",
                    title: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  },
                ])
              }
              className="text-blue-700 mt-2 flex items-center"
            >
              <FaPlus className="mr-1" /> Add Work Experience
            </button>
          </div>

          {/* skills section*/}
          <div className="mb-4 mt-6  px-6 py-3">
            <label className="text-gray-700 font-semibold">Skills</label>

            <SkillsDropdown
              selectedSkills={skills}
              setSelectedSkills={(newSkills) => {
                console.log("updating skills:", newSkills);
                setSkills(newSkills);
              }}
            />
          </div>
          {/* Resume Upload */}
          <div className="mb-4 mt-6  px-6 py-3">
            <label className="text-gray-700 font-semibold">
              Upload Resume *
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
                className="border p-2 w-full rounded-lg pl-10"
              />

              <FaFileUpload className="absolute left-3 top-3 text-gray-500" />
            </div>
            {resume && (
              <div className="text-md text-green-600 flex items-center gap-2">
                <span className="font-semibold mt-4">Uploaded Resume:</span>
                <ResumeViewer resumeUrl={resume} />
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-5">
            <button
              type="button" // Change to "button" to prevent default form submission
              onClick={handleSubmit} // Call handleSubmit directly
              disabled={isSubmitting || isProfileSaved}
              className={`w-1/2 py-3  rounded-lg transition-all ${
                isSubmitting || isProfileSaved
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-500"
              }`}
              // Disable the button while submitting
            >
              {isSubmitting ? "Updating..." : "Update Profile"}
            </button>
            <button
              type="button"
              onClick={() => {
                if (!isProfileSaved) {
                  alert("Please update the profile first.");
                  return;
                }

                if (!isApplied) {
                  handleApply(internship._id);
                }
              }}
              disabled={isApplied || !isProfileSaved}
              className={`w-1/2  rounded-lg transition-all ${
                !isProfileSaved || isApplied
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              {isApplied ? "Applied" : "Apply"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
