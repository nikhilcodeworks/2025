import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token found
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-2xl p-6 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center border border-gray-300">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-700 mb-4">
          🚀 Admin Dashboard
        </h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Manage and monitor everything from here!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/dashboard">
            <button className="w-full sm:w-auto px-6 py-3 text-white bg-blue-600 rounded-lg sm:text-lg text-md font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-700">
              Go to Dashboard
            </button>
          </Link>

          <Link to="/logout">
            <button className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg sm:text-lg text-md font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-red-600">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
