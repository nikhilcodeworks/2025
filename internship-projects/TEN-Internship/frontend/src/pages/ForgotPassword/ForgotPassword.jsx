import { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import CustomInput from "../../Components/forms/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../../helpers/axiosClient";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const { password, confirmPassword } = formData;
    setPasswordsMatch(password && confirmPassword && password === confirmPassword);
  }, [formData.password, formData.confirmPassword]);


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const forgotToken = params.get("token");
    if (forgotToken) setToken(forgotToken);
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = async (email) => {
    if (!email) return toast.error("Please enter an email");
    setLoading(true);

    try {
      const res = await axiosClient.post("/misc/initiate/forgotpassword", {}, {
        params: { email },
      });

      if (res.data.success) {
        toast.success(res.data.message || "Email sent successfully");
        setFormData({ email: "" }); // Clear form
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Internal Server Error");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleResetSubmit = async () => {
    setLoading(true);

    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      return toast.error("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const res = await axiosClient.post("/misc/complete/forgotpassword", {
        password,
        passwordConfirm: confirmPassword,
      }, {
        params: { forgotPasswordToken: token },
      });

      if (res.data.success) {
        toast.success("Password updated successfully");
        // Check the role and navigate accordingly
        const role = res.data.role;
        if (role === "recruiter") {
          navigate("/recruiter/login");
        } else {
          navigate("/login"); // default fallback
        }
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Internal Server Error");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password | Reset Access</title>
        <meta
          name="description"
          content="Recover your student or recruiter account password securely."
        />
        <meta
          name="keywords"
          content="reset password, forgot password, account recovery"
        />
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-lg w-full bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {token ? "Reset Password" : "Forgot Password"}
          </h2>

          {token ? (
            // 🔒 Reset Password Form
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleResetSubmit();
              }}
            >
              <CustomInput
                label="New Password"
                type="password"
                name="password"
                icon={FaLock}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
              />

              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-1">
                  Confirm Password
                </label>

                <div className="relative">
                  {/* Left Icon */}
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <FaLock />
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    className="w-full py-2 px-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  {/* Right Icon */}
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full text-white py-2 px-4 rounded-md duration-200 ${
                  loading || !passwordsMatch
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                }`}
                disabled={loading || !passwordsMatch}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="white"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          ) : (
            // 📧 Email Input Form
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleEmailSubmit(formData.email);
              }}
            >
              <CustomInput
                label="Email Address"
                type="email"
                name="email"
                icon={FaEnvelope}
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-200"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="white"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Email"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
