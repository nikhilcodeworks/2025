import React, { useState } from "react";
import { motion } from "framer-motion";


const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    comments: "",
    course: "",
    status: "Active", 
    date: new Date().toISOString().split("T")[0], 
    access_key: "f4a1814b-741b-4320-996e-6cc50d711831",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.course) {
      setResponseMessage("⚠ Please fill in all required fields.");
      return;
    }

    // ✅ Add a unique ID before saving
    const newStudent = {
      ...formData,
      id: crypto.randomUUID(), 
    };

    // ✅ Store in localStorage
    let students = JSON.parse(localStorage.getItem("enrolledStudents")) || [];
    students.push(newStudent);
    localStorage.setItem("enrolledStudents", JSON.stringify(students));

    // ✅ Notify Dashboard to update
    window.dispatchEvent(new Event("storage"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent), // ✅ Send updated student object
      });

      if (response.ok) {
        setResponseMessage("✅ Enrollment successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          comments: "",
          course: "",
          status: "Active",
          date: new Date().toISOString().split("T")[0], 
          access_key: "f4a1814b-741b-4320-996e-6cc50d711831",
        });
      } else {
        setResponseMessage("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      setResponseMessage("⚠ Error occurred, please try again later.");
    }
  };

  const courses = [
    "Video Production",
    "Photography",
    "Editing and Post-Production",
    "Digital Marketing for Media",
    "Sound Design",
    "Content Creation for Social Media",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg mt-8 mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🎓 Enroll in a Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white bg-opacity-20 border border-gray-400 text-gray-800 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="hello@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white bg-opacity-20 border border-gray-400 text-gray-800 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Course:
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white bg-opacity-20 border border-gray-400 text-gray-800 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course} className="text-black">
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="1234567890"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white bg-opacity-20 border border-gray-400 text-gray-800 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Address:
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white bg-opacity-20 border border-gray-400 text-gray-800 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Additional Comments:
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white bg-opacity-20 border border-gray-400 text-gray-800 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {responseMessage && (
            <motion.p
              className="mt-4 text-center text-gray-800 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {responseMessage}
            </motion.p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-purple-600 hover:to-indigo-500 transition duration-300"
          >
            Submit 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
