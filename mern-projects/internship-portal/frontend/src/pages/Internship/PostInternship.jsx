import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './PostInternship.css';
import axiosClient from "../../helpers/axiosClient";
import { MdOutlineManageSearch  } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { skills } from "../../lib/studentSkills";
import { useAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";


const PostInternship = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    stipend: "",
    duration: "",
    location: "",
    deadline: "",
    description: "",
    responsibilities: [""],
    requirements: [""],
    selectedSkills: [], // New field for selected skills

  });

  const { role } = useAuth();

  const [searchTerm, setSearchTerm] = useState(""); // Store skill search input
  const [filteredSkills, setFilteredSkills] = useState(skills.slice(0, 5)); // Show first 5 skills initially
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle skill input click (Show all skills)
  const handleSkillInputClick = () => {
    setFilteredSkills(skills); // Show full skills list
    setShowDropdown(true); // Show dropdown
  };

  // Handle skill input change (Filter skills dynamically)
  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter skills based on input
    if (value.length > 0) {
      const matchedSkills = skills
        .filter((skill) => skill.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 10); // Show up to 10 matches
      setFilteredSkills(matchedSkills);
    } else {
      setFilteredSkills(skills); // If empty, show full list
    }
  };

  // Add selected skill
  const addSkill = (skill) => {
    if (!formData.selectedSkills.includes(skill)) {
      setFormData({ ...formData, selectedSkills: [...formData.selectedSkills, skill] });
    }
    setSearchTerm(""); // Clear input
    setShowDropdown(false); // Hide dropdown
  };

  // Remove skill
  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      selectedSkills: formData.selectedSkills.filter((s) => s !== skill),
    });
  };

  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...formData.requirements];
    updatedRequirements[index] = value;
    setFormData({ ...formData, requirements: updatedRequirements });
  };

  // Add a new requirement field
  

  // Add a new requirement field
  const addRequirement = () => {
    setFormData({ ...formData, requirements: [...formData.requirements, ""] });
  };

  // Remove requirement field (only for additional ones)
  const removeRequirement = (index) => {
    const updatedRequirements = formData.requirements.filter((_, i) => i !== index);
    setFormData({ ...formData, requirements: updatedRequirements });
  };

  const handleResponsibilityChange = (index, value) => {
    const updatedResponsibilities = [...formData.responsibilities];
    updatedResponsibilities[index] = value;
    setFormData({ ...formData, responsibilities: updatedResponsibilities });
  };

  // Add a new responsibility field
  const addResponsibility = () => {
    setFormData({ ...formData, responsibilities: [...formData.responsibilities, ""] });
  };

  // Remove responsibility field (only for additional responsibilities)
  const removeResponsibility = (index) => {
    const updatedResponsibilities = formData.responsibilities.filter((_, i) => i !== index);
    setFormData({ ...formData, responsibilities: updatedResponsibilities });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      // Define API URL based on role
      const endpoint =
        role === "admin"
          ? "/admin/add_internship"
          : "/recruiter/add_internship";
  
      // Define request payload
      const requestData =
        role === "admin"
          ? {
              title: formData.jobTitle,
              description: formData.description,
              requirements: formData.requirements,
              responsibilities: formData.responsibilities,
              stipend: formData.stipend,
              duration: formData.duration,
              location: formData.location,
              applicationDeadline: formData.deadline,
              skills: formData.selectedSkills, 
            }
          : {
              title: formData.jobTitle,
              description: formData.description,
              requirements: formData.requirements,
              responsibilities: formData.responsibilities,
              stipend: formData.stipend,
              duration: formData.duration,
              location: formData.location,
              applicationDeadline: formData.deadline,
              skills: formData.selectedSkills, 
            };
  
      // API call
      const response = await axiosClient.post(endpoint, requestData);

      if(response.data.success) {
        toast.success("Internship posted successfully!", { autoClose: 3000 });

        setFormData({
          jobTitle: "",
          requirements: [""],
          responsibilities: [""],
          stipend: "",
          duration: "",
          location: "",
          deadline: "",
          description: "",
          selectedSkills: [],
        });
      } else {
        toast.error(response.data.message || "Something went wrong. Please try again later.");
      }
      
    } catch (error) {
      console.error("Error submitting internship:", error);
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };
  return (
    <>
      <Helmet>
        <title>Post Internship | Reach Student Talent</title>
        <meta
          name="description"
          content="Post a new internship and attract top students from across the country."
        />
        <meta
          name="keywords"
          content="post internship, internship form, add internship"
        />
      </Helmet>

      <div className="job-form-container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />

        <form className="job-form" onSubmit={handleSubmit}>
          {/* Row 1: Job Title & Stipend */}
          <div className="row">
            <div className="input-group total-group">
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                className="job-title-input"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Enter Job Title"
                required
              />
              <span className="input-icon absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <MdOutlineManageSearch size={20} />
              </span>
            </div>
            <div className="input-group total-group">
              <label>Stipend</label>
              <input
                type="number"
                name="stipend"
                className="stipend-input"
                value={formData.stipend}
                onChange={handleChange}
                placeholder="Enter Stipend"
                required
              />
              <span className="input-icon absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <TbMoneybag size={20} />
              </span>
            </div>
          </div>

          {/* Row 3: Duration & Location */}
          <div className="row">
            <div className="input-group total-group">
              <label>Duration</label>
              <select
                name="duration"
                className="duration-select gray-placeholder"
                value={formData.duration}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Duration
                </option>
                <option value="0">Flexible</option>
                <option value="1">1 Month</option>
                <option value="2">2 Months</option>
                <option value="3">3 Months</option>
                <option value="4">4 Months</option>
                <option value="5">5 Months</option>
                <option value="6">6 Months</option>
              </select>
            </div>

            <div className="input-group total-group">
              <label>Location</label>
              <select
                name="location"
                className="duration-select gray-placeholder"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Location
                </option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-Site">On-Site</option>
              </select>
              {/* <input type="text" name="location" className="location-input" value={formData.location} onChange={handleChange} placeholder="Enter Location" required /> */}
            </div>
          </div>

          {/* Row 4: Application Deadline */}
          {role === "recruiter" && (
            <div className="row">
              <div className="input-group total-group">
                <label>Application Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  className="application-deadline-input"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Responsibilities Section */}
          <div className="input-group full-width total-group">
            <label>Responsibilities</label>
            {formData.responsibilities.map((responsibility, index) => (
              <div key={index} className="responsibility-field">
                <div className="input-container">
                  {" "}
                  {/* Wrapper for input & ❌ button */}
                  <input
                    type="text"
                    value={responsibility}
                    onChange={(e) =>
                      handleResponsibilityChange(index, e.target.value)
                    }
                    placeholder="Enter Responsibility"
                    className="full-width"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeResponsibility(index)}
                      className="remove-btn"
                    >
                      ❌
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addResponsibility}
              className="add-btn"
            >
              + Add Responsibility
            </button>
          </div>

          {/* Requirements Section */}
          <div className="input-group full-width total-group">
            <label>Requirements</label>
            {formData.requirements.map((requirement, index) => (
              <div key={index} className="responsibility-field">
                {" "}
                {/* Use the same styles as Responsibilities */}
                <div className="input-container">
                  <input
                    type="text"
                    value={requirement}
                    onChange={(e) =>
                      handleRequirementChange(index, e.target.value)
                    }
                    placeholder="Enter Requirement"
                    className="full-width"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="remove-btn"
                    >
                      ❌
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button type="button" onClick={addRequirement} className="add-btn">
              + Add Requirement
            </button>
          </div>

          {/* Skills Input Field */}
          <div className="input-group full-width total-group">
            <label>Skills</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSkillChange}
              onClick={handleSkillInputClick}
              placeholder="Type to search skills..."
            />
            {showDropdown && (
              <div className="skilled-dropdown">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skilled-dropdown-item"
                    onClick={() => addSkill(skill)}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Selected Skills */}
          <div className="selected-skills mb-3">
            {formData.selectedSkills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}{" "}
                <ImCross
                  size={10}
                  onClick={() => removeSkill(skill)}
                  className="remove-icon"
                />
              </span>
            ))}
          </div>

          {/* Row 5: Description (Full width) */}
          <div className="input-group total-group full-width">
            <label>Description</label>
            <textarea
              name="description"
              className="description-textarea"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter Internship Description"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PostInternship;

