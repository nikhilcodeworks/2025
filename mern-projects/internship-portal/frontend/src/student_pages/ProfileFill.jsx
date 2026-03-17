import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPlus,
  FaTrash,
  FaFileUpload,
  FaMapMarkerAlt,
  FaVenusMars,
  FaThumbtack,
  FaBriefcase,
  FaSpinner,
} from "react-icons/fa";
import axiosClient from "../helpers/axiosClient";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import SkillsDropdown from "../Components/SkillComponent/SkillsDropdown";
import NavBar from "../pages/NavMenu/NavBar";
import ResumeViewer from "../Components/ResumeViewer/ResumeViewer";
import { Helmet } from "react-helmet-async";

const ProfileFill = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);
  const [uploadedResume, setUploadedResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const [education, setEducation] = useState([
    { organisation: "", degree: "", startDate: "", endDate: "" },
  ]);

  const [projects, setProjects] = useState([
    { name: "", startDate: "", endDate: "", description: "" },
  ]);

  const [experience, setExperience] = useState([
    { name: "", title: "", startDate: "", endDate: "", description: "" },
  ]);
  const [skills, setSkills] = useState([]);

  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (!token) return;

    const fetchUserProfile = async () => {
      try {
        const response = await axiosClient.get("/student/profile");

        const userData = response.data.userData;

        setName(userData.name || "");
        setEmail(userData.email || "");
        setPhone(userData.phone || "");
        setGender(userData.gender || "");
        setAddress(userData.address || "");
        setUploadedResume(userData.resume || null);

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
      } catch (err) {
        toast.error("Failed to load profile");
      }
    };
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const handleChange = (index, field, value, setState) => {
    setState((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  // Function to allow only numbers in phone field
  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhone(numericValue);

    if (numericValue.length !== 10) {
      setPhoneError("Phone number must be 10 digits.");
    } else {
      setPhoneError("");
    }
  };

  const formatDate = (isoDate) => {
    return isoDate ? isoDate.substring(0, 7) : "";
  };

  const validateForm = () => {
    let errors = [];

    if (!phone.match(/^\d{10}$/)) {
      errors.push("Phone number must be 10 digits.");
    }

    education.forEach((edu, index) => {
      if (!edu.organisation.trim())
        errors.push(
          `Education ${index + 1}: University/College Name is required.`
        );
      if (!edu.degree.trim())
        errors.push(`Education ${index + 1}: Degree is required.`);
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

    return errors;
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  // Function to update input fields dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    setLoading(true); // Start loading

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

    const formattedSkills = skills.flatMap((s) =>
      s.includes(",") ? s.split(",").map((skill) => skill.trim()) : s
    );

    formData.append("skills", JSON.stringify(formattedSkills));

    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const response = await axiosClient.post(
        "/student/update_profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Profile updated successfully!");
        navigate("/profile"); // Redirect to profile after successful update
      } else {
        toast.error(response.data.message || "Failed to update profile.");
      }
    } catch (err) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Helmet>
        <title>Complete Your Profile | Internship Portal</title>
        <meta
          name="description"
          content="Fill in your profile details to maximize internship matching and visibility to recruiters."
        />
        <meta
          name="keywords"
          content="profile form, complete student profile, internship matching"
        />
      </Helmet>

      <div className="relative min-h-screen bg-gray-50">
        <div className=" top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <div className="w-full mx-auto px-6 md:px-12 py-10 bg-white rounded-lg  ">
          <div className="bg-white rounded-lg py-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Profile Details
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 mt-6 shadow-lg px-6 py-5">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Personal Details
                </h2>

                {/* Name & Email Fileds (Disabled)*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 w-full rounded-lg pl-10 bg-gray-100"
                      />
                      <FaUser className="absolute left-3 top-3 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        disabled
                        className="border p-2 w-full rounded-lg pl-10 bg-gray-100"
                      />
                      <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/*Phone, Address, and Gender Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        className="border p-2 w-full rounded-lg pl-10"
                      />
                      <FaPhone className="absolute left-3 top-3 text-gray-500" />
                    </div>
                    {phoneError && (
                      <p className="text-red-500 text-sm">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-gray-700 font-semibold">
                      Gender
                    </label>
                    <div className="relative">
                      <select
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

                {/*Address field */}
                <div className="mb-4">
                  <label className="text-gray-700 font-semibold">
                    Address *
                  </label>
                  <div className="relative">
                    <textarea
                      value={address}
                      required
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      className="border p-2 w-full rounded-lg pl-10"
                      placeholder="Enter Address"
                    ></textarea>

                    <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-4 mt-6 shadow-lg px-6 py-5">
                <label className="text-gray-800 font-bold text-lg mb-4">
                  Education Details
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
                          <label className="text-gray-500 text-sm">
                            End Date
                          </label>
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
                      {
                        organisation: "",
                        degree: "",
                        startDate: "",
                        endDate: "",
                      },
                    ])
                  }
                  className="text-blue-700 mt-3 flex items-center"
                >
                  <FaPlus className="mr-1" /> Add Education
                </button>
              </div>

              {/* Projects Section */}
              <div className="mb-4 mt-6 shadow-lg px-6 py-3">
                <label className="text-gray-800 font-bold text-lg mb-4">
                  Projects
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="relative mt-2">
                      <p className="text-blue-700 font-semibold mb-2 mt-3">
                        Project {index + 1}
                      </p>
                      <input
                        type="text"
                        placeholder="Project Name"
                        value={project.name}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "name",
                            e.target.value,
                            setProjects
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
                          <label className="text-gray-500 text-sm">
                            End Date
                          </label>
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
                            className="border p-2 w-full rounded-lg"
                          />
                        </div>
                      </div>

                      <textarea
                        placeholder="Project Description"
                        value={project.description}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "description",
                            e.target.value,
                            setProjects
                          )
                        }
                        className="border p-2 w-full rounded-lg mt-2"
                      />

                      <FaTrash
                        className="absolute right-3 top-14 text-gray-500 cursor-pointer hover:text-red-500"
                        onClick={() =>
                          setProjects(projects.filter((_, i) => i !== index))
                        }
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setProjects([
                      ...projects,
                      { name: "", startDate: "", endDate: "", description: "" },
                    ])
                  }
                  className="text-blue-700 mt-2 flex items-center"
                >
                  <FaPlus className="mr-1" /> Add Project
                </button>
              </div>

              {/* Work Experience Section */}
              <div className="mb-4 mt-6 shadow-lg px-6 py-3">
                <label className="text-gray-800 font-bold text-lg mb-4">
                  Work Experience
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
                          handleChange(
                            index,
                            "name",
                            e.target.value,
                            setExperience
                          )
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
                        <label className="text-gray-500 text-sm">
                          End Date
                        </label>
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
                          setExperience(
                            experience.filter((_, i) => i !== index)
                          )
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
              <div className="mb-4 mt-6 shadow-lg px-6 py-3">
                <label className="text-gray-700 font-semibold">Skills</label>

                <SkillsDropdown
                  selectedSkills={skills}
                  setSelectedSkills={(newSkills) => {
                    setSkills(newSkills);
                  }}
                />
              </div>

              {/* Resume Upload */}
              <div className="mb-4 mt-6 shadow-lg px-6 py-3">
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

                {uploadedResume && (
                  <div className="text-md text-green-600 flex items-center gap-2">
                    <span className="font-semibold mt-4">Uploaded Resume:</span>
                    <ResumeViewer resumeUrl={uploadedResume} />
                  </div>
                )}
              </div>

              {/* Save Button */}
              <button
                type="submit"
                disabled={loading} // Disable when loading
                className={`bg-blue-500 text-white px-4 py-2 mt-6 w-full rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 ${
                  loading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin inline-block" />
                    Saving...
                  </>
                ) : (
                  "Save Profile"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileFill;
