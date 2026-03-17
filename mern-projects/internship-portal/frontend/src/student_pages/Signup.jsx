import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import CustomInput from "../Components/forms/CustomInput";
import { useNavigate } from "react-router";
import {toast} from "react-toastify";
import axios from "axios";
import axiosClient from "../helpers/axiosClient";
import { useGoogleLogin } from "@react-oauth/google";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const accessToken = res.access_token;
        const googleRes = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
        );
        const userDataFromGoogle = googleRes.data;

        const serverRes = await axiosClient.post(
          "/student/auth/signup",
          { userDataFromGoogle }
        );

        if (serverRes.data.success === true) {
          toast.success(serverRes.data.message + "Redirecting to profile!");
          login(serverRes.data.token, "student");
          setTimeout(() => {
            navigate("/profile");
          }, 2000);
        } else if (serverRes.data.success === false) {
          toast.error(serverRes.data.message);
        }
      } catch (err) {
        toast.error(err);
      }
    },
    onError: (err) => console.error(err),
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Signup Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      //  FIX: Removed duplicate `formData`
      const response = await axiosClient.post("/student/signup", formData);

      if (response.data.success) {
        // alert("Signup Successful! Redirecting to Login...");
        toast.success("Signup Successful! Redirecting to Login...");
        login(response.data.token, "student"); //  Update context
        navigate("/login"); //  Redirect to Login Page
      } else {
        setError(response.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create An Account
          </h2>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <CustomInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              icon={FaUser}
            />

            {/* Email Field */}
            <CustomInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              icon={FaEnvelope}
              location="signup"
            />

            {/* Password Field */}
            <CustomInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              icon={FaLock}
              location="signup"
            />

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 duration-200 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Signup Button */}
          <button
            className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 cursor-pointer duration-200"
            onClick={() => signup()}
          >
            <FcGoogle className="text-xl mr-2" />
            Sign Up with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
