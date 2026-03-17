import { useState } from "react";
import CustomInput from "../../Components/forms/CustomInput";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import axiosClient from "../../helpers/axiosClient";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Handle errors
  const [loading, setLoading] = useState(false); // Handle loading

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Start loading

    try {
      const response = await axiosClient.post("0/student/login", formData);

      console.log("login response:", response.data);

      if (response.data.success) {
        // alert("Login Successful!");
        toast.success("Login Successful!");

        localStorage.setItem("role", "student");
        localStorage.setItem("token", response.data.token); // Store token in local storage

        login(response.data.token, "student");

        navigate("/profile"); // Redirect to profile page
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.log("login error:", err.response);
      setError(err.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-lg w-full bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login
      </h2>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email Input */}
        <CustomInput
          label="Email Address"
          type="email"
          name="email"
          icon={FaEnvelope}
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {/* Password Input */}
        <CustomInput
          label="Password"
          type="password"
          name="password"
          icon={FaLock}
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-200 cursor-pointer"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Google Sign-in Button */}
      <div className="mt-4 text-center">
        <button className="flex items-center justify-center w-full border py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer duration-200">
          <FcGoogle className="text-red-500 mr-2" />
          Sign in with Google
        </button>
      </div>

      {/* Signup Link */}
      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <button
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
