import React, { useState } from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("✅ Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "", access_key: "f4a1814b-741b-4320-996e-6cc50d711831" });
      } else {
        setResponseMessage("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      setResponseMessage("⚠️ Error occurred, please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-6">
      <motion.div
        className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              rows="4"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
        {responseMessage && (
          <motion.p
            className="mt-4 text-center text-black font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {responseMessage}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
