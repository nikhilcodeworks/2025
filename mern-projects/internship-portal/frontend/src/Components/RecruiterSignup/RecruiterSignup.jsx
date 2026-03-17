import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import Select from "react-select";
import { debounce } from "lodash";
import axiosClient from "../../helpers/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CustomInput from "../../Components/forms/CustomInput";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const RecruiterSignup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    newCompany: false,
    companyName: "",
    companyUrl: "",
    companyLogo: "",
  });

  const [companyList, setCompanyList] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [errors, setErrors] = useState({});

  // Real-time validation function
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        if (!value.trim()) return "Name is required";
        return "";

      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value)) return "Enter a valid email";
        return "";
      }

      case "password":
        if (!value.trim()) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        return "";

      case "phone": {
        const phoneRegex = /^[0-9]{10}$/;
        if (!value.trim()) return "Phone number is required";
        if (!phoneRegex.test(value))
          return "Enter a valid 10-digit phone number";
        return "";
      }

      default:
        return "";
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate field in real time
    const errorMessage = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    setFormData({ ...formData, [name]: value });
  };

  // Debounced function to fetch companies based on search input
  const fetchCompanies = debounce(async (search) => {
    if (search.length >= 3) {
      try {
        const response = await axiosClient.get(`/recruiter/companies?search=${search}`);
        if(response.data.success) {
          setCompanyList(response.data.companies);
        } else {
          setCompanyList([]);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    } else {
      setCompanyList([]);
    }
  }, 300);

  const handleCompanySearch = (inputValue) => {
    fetchCompanies(inputValue);
  };

  // Map backend companies to react-select options
  const companyOptions = companyList.map((company) => ({
    value: company.name,
    label: (
      <div className="flex items-center">
        <img
          src={company.logo || "https://via.placeholder.com/30"}
          alt="logo"
          className="w-6 h-6 rounded-full mr-2"
        />
        {company.name}
      </div>
    ),
  }));

  const handleCompanySelect = (selectedOption) => {
    if (selectedOption.value === "add_new") {
      setFormData({ ...formData, newCompany: true, company: "" });
      setSelectedCompany(null);
    } else {
      setFormData({ ...formData, company: selectedOption.value, newCompany: false });
      setSelectedCompany(selectedOption);
      if (errors["company"]) {
        setErrors({ ...errors, company: "" });
      }
    }
  };

  // Function to add new company using backend /add-company endpoint
  const handleAddCompany = async () => {
    try {
      const response = await axiosClient.post("/recruiter/add-company", {
        name: formData.companyName,
        website: formData.companyUrl,
        companylogo: formData.companyLogo,
      });

      if (response.data.success) {
        toast.success("Company added successfully!");
        const newCompanyOption = {
          value: formData.companyName,
          label: (
            <div className="flex items-center">
              <img
                src={formData.companyLogo || "https://via.placeholder.com/30"}
                alt="logo"
                className="w-6 h-6 rounded-full mr-2"
              />
              {formData.companyName}
            </div>
          ),
        };

        // Update company list and select new company
        setCompanyList([...companyList, response.data.company]);
        setSelectedCompany(newCompanyOption);
        setFormData({
          ...formData,
          newCompany: false,
          company: formData.companyName,
          companyName: "",
          companyUrl: "",
          companyLogo: "",
        });
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.error("An error occured while adding company =", error);
      toast.error("Error adding company");
    }
  };

  // Handle recruiter signup form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submit
    let newErrors = {};
    ["name", "email", "password", "phone"].forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Construct signupData with only allowed fields
      const signupData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        company: formData.company,
      };

      const response = await axiosClient.post("/recruiter/signup", signupData);

      if (response.data.success) {
        toast.success("Signup successful!");
        setErrors({});
        // Auto-login if token provided or redirect to login
        if (response.data.token) {
          login(response.data.token, "recruiter");
          setTimeout(() => navigate("/recruiter/dashboard"), 2000);
        } else {
          setTimeout(() => navigate("/recruiter/login"), 2000);
        }
      } else {
        toast.error(response.data.message || "Signup failed!");
      }
    } catch (error) {
      const backendErrors = error.response?.data?.error;
      if (backendErrors && Array.isArray(backendErrors)) {
        const newErrors = {};
        backendErrors.forEach((msg) => {
          const lowerMsg = msg.toLowerCase();
          if (lowerMsg.includes("name") && !newErrors.name) {
            newErrors.name = msg;
          }
          if (lowerMsg.includes("email") && !newErrors.email) {
            newErrors.email = msg;
          }
          if (lowerMsg.includes("password") && !newErrors.password) {
            newErrors.password = msg;
          }
          if (lowerMsg.includes("phone") && !newErrors.phone) {
            newErrors.phone = msg;
          }
          if (lowerMsg.includes("company") && !newErrors.company) {
            newErrors.company = msg;
          }
        });
        setErrors(newErrors);
      } else {
        if (error.response?.data?.message === "Account already exists") {
          toast.error("Account already exists. Redirecting to login page...");
          setTimeout(() => navigate("/recruiter/login"), 2000);
        } else {
          toast.error("Signup failed!");
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Recruiter Portal</title>
        <meta
          name="description"
          content="Create a recruiter account to post internships and hire top student talent."
        />
        <meta
          name="keywords"
          content="recruiter signup, post internship, hire interns"
        />
      </Helmet>

      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Recruiter Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInput
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              icon={FaUser}
              error={errors.name}
            />
            <CustomInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              icon={FaEnvelope}
              error={errors.email}
              location="signup"
            />
            <CustomInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              icon={FaLock}
              error={errors.password}
              location="signup"
            />
            <CustomInput
              label="Phone Number"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              icon={FaPhone}
              error={errors.phone}
            />

            {/* Company Select Field */}
            <div>
              <Select
                options={[
                  ...companyOptions,
                  { value: "add_new", label: "+ Add New Company" },
                ]}
                onInputChange={handleCompanySearch}
                onChange={handleCompanySelect}
                isSearchable
                value={selectedCompany}
                filterOption={null}
                className="w-full"
                placeholder="Select Company"
              />
              {errors.company && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.company}
                </div>
              )}
            </div>

            {/* New Company Form */}
            {formData.newCompany && (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 space-y-4">
                <h3 className="font-medium text-gray-800">Add New Company</h3>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="url"
                    name="companyUrl"
                    value={formData.companyUrl}
                    onChange={handleChange}
                    placeholder="Company Website URL"
                    className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="companyLogo"
                    value={formData.companyLogo}
                    onChange={handleChange}
                    placeholder="Company Logo URL"
                    className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddCompany}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Company
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            have an account?{" "}
            <button
              onClick={() => navigate("/recruiter/login")}
              className="text-blue-600 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </>
  );
};

export default RecruiterSignup;
