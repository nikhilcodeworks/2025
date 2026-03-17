import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../helpers/axiosClient";
import { useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { skills } from "../../lib/studentSkills";
import "./PostInternship.css";
import { MdOutlineManageSearch } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { Helmet } from "react-helmet-async";




const EditOneInternship = ({ role }) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        jobTitle: "",
        stipend: "",
        duration: "",
        location: "",
        deadline: "",
        description: "",
        responsibilities: [],
        requirements: [],
        selectedSkills: [],
    });

    useEffect(() => {
        const fetchInternship = async () => {
            try {
                const response = await axiosClient.get(`/admin/internship/${id}`);

                if (response.data.success) {
                    const { internship } = response.data;
                    setFormData({
                        jobTitle: internship.title,
                        stipend: internship.stipend,
                        duration: internship.duration,
                        location: internship.location,
                        deadline: internship.applicationDeadline?.split("T")[0],
                        description: internship.description,
                        responsibilities: internship.responsibilities || [],
                        requirements: internship.requirements || [],
                        selectedSkills: internship.skills || [],
                    });
                }
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching internship details:", error);
                toast.error("Failed to fetch internship details.");
            }
        };

        fetchInternship();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleArrayChange = (type, index, value) => {
        const updatedArray = [...formData[type]];
        updatedArray[index] = value;
        setFormData({ ...formData, [type]: updatedArray });
    };

    const handleRemoveOrClear = (type, index) => {
        setFormData((prevFormData) => {
            const updatedArray = [...prevFormData[type]];

            if (index === 0) {
                // Clear the first row instead of removing it
                updatedArray[0] = "";
            } else {
                // Remove other rows
                updatedArray.splice(index, 1);
            }

            return { ...prevFormData, [type]: updatedArray };
        });
    };



    const addArrayField = (type) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [type]: [...prevFormData[type], ""], // Add an empty new row
        }));
    };

    // const removeArrayField = (type, index) => {
    //     const updatedArray = formData[type].filter((_, i) => i !== index);
    //     setFormData({ ...formData, [type]: updatedArray });
    // };

    const handleSkillChange = (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length > 0) {
            setFilteredSkills(skills.filter((skill) => skill.toLowerCase().includes(value)));
        }
    };


    const removeSkill = (skill) => {
        setFormData({
            ...formData,
            selectedSkills: formData.selectedSkills.filter((s) => s !== skill),
        });
    };
    const [searchTerm, setSearchTerm] = useState(""); // Store skill search input
    const [filteredSkills, setFilteredSkills] = useState(skills.slice(0, 5)); // Show first 5 skills initially
    const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility

    const handleSkillInputClick = () => {
        setFilteredSkills(skills); // Show full skills list
        setShowDropdown(true); // Show dropdown
    };
    const addSkill = (skill) => {
        if (!formData.selectedSkills.includes(skill)) {
            setFormData({ ...formData, selectedSkills: [...formData.selectedSkills, skill] });
        }
        setSearchTerm(""); // Clear input
        setShowDropdown(false); // Hide dropdown
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            // const companyId = tokenPayload.companyId;  // Extract companyId

            const endpoint =
              role === "admin"
                ? "/admin/update_internship"
                : "/recruiter/update_internship";

            // Ensure correct field names based on backend expectation
            const updatedData =
            role === "admin"
                ? {
                      internshipId: id, // ✅ Internship ID in the request body
                      title: formData.jobTitle,
                      stipend: formData.stipend,
                      duration: formData.duration,
                      location: formData.location,
                      applicationDeadline: formData.deadline,
                      description: formData.description,
                      responsibilities: formData.responsibilities.filter(Boolean),
                      requirements: formData.requirements.filter(Boolean),
                      skills: formData.selectedSkills,
                  }
                : {
                      internshipId: id,
                      title: formData.jobTitle,
                    //   company: companyId, // Recruiter must provide a company name
                      stipend: formData.stipend,
                      duration: formData.duration,
                      location: formData.location,
                      applicationDeadline: formData.deadline,
                      description: formData.description,
                      responsibilities: formData.responsibilities.filter(Boolean),
                      requirements: formData.requirements.filter(Boolean),
                      skills: formData.selectedSkills,
                  };
                  
            console.log("Sending Data: ", updatedData); // Debugging log
    
            const response = await axiosClient.post(endpoint, updatedData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
    
            if (response.data.success) {
                toast.success("Internship updated successfully!");
            } else {
                toast.error("Failed to update internship.");
            }
        } catch (error) {
            console.error("Update error:", error.response?.data || error.message);
            toast.error("Error updating internship.");
        }
    };
    
    return (
      <>
        <Helmet>
          <title>Edit Internship | Update Internship Details</title>
          <meta
            name="description"
            content="Make changes to your internship post and keep it up to date for better applicant quality."
          />
          <meta
            name="keywords"
            content="edit internship, update listing, internship editing"
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
                  <option value="" disabled selected>
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
                  <option value="" disabled selected>
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
              {formData.responsibilities.map((res, index) => (
                <div
                  key={index}
                  className="input-group flex items-center gap-2 relative"
                  style={{ marginBottom: "10px" }}
                >
                  <input
                    type="text"
                    value={res}
                    onChange={(e) =>
                      handleArrayChange(
                        "responsibilities",
                        index,
                        e.target.value
                      )
                    }
                    className="flex-1 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-700"
                    onClick={() =>
                      handleRemoveOrClear("responsibilities", index)
                    }
                  >
                    {index === 0 ? "❌" : "❌"}
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="add-btn"
                onClick={() => addArrayField("responsibilities")}
              >
                + Add Responsibility
              </button>
            </div>

            {/* Requirements Section */}
            <div className="input-group full-width total-group">
              <label>Requirements</label>
              {formData.requirements.map((req, index) => (
                <div
                  key={index}
                  className="input-group flex items-center gap-2 relative"
                  style={{ marginBottom: "10px" }}
                >
                  <input
                    type="text"
                    value={req}
                    onChange={(e) =>
                      handleArrayChange("requirements", index, e.target.value)
                    }
                    className="flex-1 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveOrClear("requirements", index)}
                  >
                    {index === 0 ? "❌" : "❌"}
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="add-btn"
                onClick={() => addArrayField("requirements")}
              >
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
                  <ImCross size={10} onClick={() => removeSkill(skill)} />
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

export default EditOneInternship;