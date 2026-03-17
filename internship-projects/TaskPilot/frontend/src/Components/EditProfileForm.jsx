import React, { useState,useContext } from "react";
import { updateUserProfile } from "../api/userApi";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { toast } from "react-toastify";
import {roleRequest} from "../api/userApi";

const EditProfileForm = ({ onClose }) => {
  // Use currentUser as the initial state
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [formData, setFormData] = useState(currentUser);
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData,
      [name]: value 
    });
  };


  const handleAddSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !formData.skills.includes(trimmed)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, trimmed],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Skills before submit:", formData.skills);
    
    // Map local "skills" to backend field "tech_stack"
    const payload = {
      ...formData,
      tech_stack: formData.skills,
    };
    delete payload.skills;

    const result = await updateUserProfile(payload);
    if (!result || result.success === false) {
      console.error("Failed to update profile");
      return;
    }
    
    const updatedProfile = {
      firstName: result.data.first_name,
      lastName: result.data.last_name,
      email: result.data.email,
      contact: result.data.phone || "Not provided",
      role: result.data.role || "Not specified",
      location: result.data.location || "Not specified",
      projects: formData.projects,
      teams: formData.teams,
      tasks: formData.tasks,
      skills: result.data.tech_stack,
      profileImage: result.data.profile_pic || "/default-profile.jpg",
    };

    setCurrentUser(updatedProfile);
    console.log("Profile updated successfully:", updatedProfile);
    toast.success("Profile updated successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Email + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Role + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Designation
              </label>
              <select
  name="role"
  value={formData.role}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
>
  <option value="">Select Designation</option>
  {[
    "Intern",
    "Junior Developer",
    "Developer",
    "Senior Developer",
    "Team Lead",
    "Project Manager",
    "UI/UX Designer",
    "QA Engineer",
    "HR",
    "Product Manager",
    "CTO",
    "CEO",
  ].map((roleOption) => (
    <option
      key={roleOption}
      value={roleOption}
      disabled={
        (currentUser.role === "pending" || currentUser.role === undefined) &&
        roleOption !== "Intern"
      }
      className={
        (currentUser.role === "pending" || currentUser.role === undefined) &&
        roleOption !== "Intern"
          ? "text-gray-400 bg-gray-100"
          : "text-black"
      }
    >
      {roleOption}
    </option>
  ))}
</select>

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Add a skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="border rounded-lg px-3 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
              {["intern", "pending"].includes((currentUser.role || "").toLowerCase()) && (
              <button
                type="button"
                onClick={async () => {
                  const currentRole = (currentUser.role || "").toLowerCase();
                  const requestedRole = currentRole === "pending" ? "intern" : "tl";

                  try {
                    const result = await roleRequest(requestedRole);
                    if (result?.success) {
                      toast.success(`Role request sent for: ${result.data.requested_role}`);
                    } else{
                      toast.error("Please be patient, role already requested.");
                    } 
                  } catch (err) {
                    console.error("Role request error:", err);
                    toast.error("An error occurred while sending the role request.");
                  }
                }}
                className="px-4 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Send Role Request
              </button>
            )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;