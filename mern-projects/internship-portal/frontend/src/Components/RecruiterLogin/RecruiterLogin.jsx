import React, { useState } from "react";
import CustomInput from "../../Components/forms/CustomInput";
import { FaEnvelope, FaHome, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../helpers/axiosClient";
import { Helmet } from "react-helmet-async";

const RecruiterLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";

    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 8)
      tempErrors.password = "Password must be at least 8 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axiosClient.post("/recruiter/login", formData);
      if (response.data.success) {
        toast.success("🎉 Login successful!");
        login(response.data.token, "recruiter");
        setTimeout(() => navigate("/recruiter/dashboard"), 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage);
      setErrors({ server: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Recruiter Dashboard</title>
        <meta
          name="description"
          content="Access your recruiter dashboard to manage internships and applications."
        />
        <meta
          name="keywords"
          content="recruiter login, internship posting login, hire interns"
        />
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
          {/* Home Icon inside the box */}
          <Link
            to="/"
            className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
            title="Back to Home"
          >
            <FaHome size={24} />
          </Link>
          <h2 className="text-2xl font-bold text-center mb-4">
            Recruiter Login
          </h2>

          {errors.server && (
            <p className="text-red-500 text-center">{errors.server}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInput
              label="Email Address"
              type="email"
              name="email"
              icon={FaEnvelope}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              error={errors.email}
              location="login"
            />

            <CustomInput
              label="Password"
              type="password"
              name="password"
              icon={FaLock}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={errors.password}
              location="login"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-200"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="text-right mt-2">
            <Link
              to="/forgotpassword"
              className="text-sm font-semibold text-gray-700 hover:text-black focus:text-black"
            >
              Forgot Password?
            </Link>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/recruiter/signup")}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default RecruiterLogin;
