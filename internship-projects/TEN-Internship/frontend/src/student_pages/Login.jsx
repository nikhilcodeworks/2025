import { useState } from "react";
import CustomInput from "../Components/forms/CustomInput";
import { FaEnvelope, FaHome, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router";
import axios from "axios"; // Import Axios
import axiosClient from "../helpers/axiosClient";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { Helmet } from 'react-helmet-async';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Handle errors
  const [loading, setLoading] = useState(false); // Handle loading

  // google login
  const googleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      const accessToken = res.access_token;
      const googleRes = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
      );
      const userDataFromGoogle = googleRes.data;

      const serverRes = await axiosClient.post("/student/auth/login", {
        userDataFromGoogle,
      });

      if (serverRes.data.success === true) {
        console.log("It worked =", serverRes.data);
        toast.success(serverRes.data.message + "Redirecting to profile!");
        login(serverRes.data.token, "student");
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else if (serverRes.data.success === false) {
        toast.error(serverRes.data.message);
      }
    },
    onError: (err) => console.error(err),
  });

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
      const response = await axiosClient.post("/student/login", formData);

      if (response.data.success) {
        // alert("Login Successful!");
        toast.success("Login Successful!");

        login(response.data.token, "student");

        // Call the onLoginSuccess callback if it exists
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          navigate("/profile");
        }
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
    <>
      <Helmet>
        <title>Login | Student Portal</title>
        <meta
          name="description"
          content="Login to access your student dashboard and apply for internships."
        />
        <meta
          name="keywords"
          content="student login, internship portal login, career login"
        />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-lg w-full bg-white p-8 shadow-md rounded-lg relative">
          <Link
            to="/"
            className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
          >
            <FaHome size={25} />
          </Link>
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
              location="login"
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
              location="login"
            />

            {/*Forget password link */}
            <div className="mt-2">
              <Link
                to="/forgotpassword"
                className="text-sm font-semibold text-gray-700 hover:text-black focus:text-black"
              >
                Forgot Password?
              </Link>
            </div>

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
            <button
              className="flex items-center justify-center w-full border py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer duration-200"
              onClick={() => googleLogin()}
            >
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
      </div>
    </>
  );
};

export default Login;
