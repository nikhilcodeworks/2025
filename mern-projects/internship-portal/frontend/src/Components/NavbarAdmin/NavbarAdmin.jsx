import { useState, useEffect } from "react";
import { FaBell, FaBars ,FaUser} from "react-icons/fa";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "./NavbarAdmin.css";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const location = useLocation();
  const { logout } = useAuth();

  const navigate = useNavigate();

  // Route-to-title mapping
  const pageTitles = {
    "/admin/dashboard": "Admin Dashboard",
    "/admin/view-all-internships": "View Internship",
    // "/Notification": "Notification",
    "/admin/all_users": "Manage Users",
    "/admin/user": "User Details",
    "/admin/post-internship": "Post Internship",
    "/admin/view-admin-internships": "View Admin Internships",
    "/admin/view-recruiter-all-internships": "View Recruiter Internships",
    "/admin/profile": "Admin Profile",
    "/admin/company": "All Company",
  };

  let currentPageTitle = "Admin Dashboard";

  if (location.pathname.startsWith("/admin/edit-internship/")) {
    currentPageTitle = "Edit Internship";
  } else if (location.pathname.startsWith("/admin/view-one-internship/")) {
    currentPageTitle = "View Internship Details";
  } else if (location.pathname.startsWith("/admin/view-all-applications/")) {
    currentPageTitle = "View Applications";
  } else {
    currentPageTitle = pageTitles[location.pathname] || "Admin Dashboard";
  }

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);
  

  // Handle logout
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("showWelcomeToast"); // Clear the toast flag
    toast.success("Logged out successfully!");
    navigate("/admin/login");
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-3 lg:py-6 fixed left-0 right-0 top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Left Section (Hamburger, Logo, Title) */}
        <div className="flex items-center gap-5">
          {/* Hamburger Menu (Visible only on small screens) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 rounded-lg cursor-pointer lg:hidden hover:bg-gray-200"
          >
            <FaBars className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/admin/dashboard">
            <img
              src="/Loginimg/Logo.svg"
              className="h-8 sm:inline"
              alt="Logo"
            />
          </Link>

          {/* Dynamic Page Title */}
          <span className="text-lg font-semibold text-black md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ">
            {currentPageTitle}
          </span>
        </div>

        {/* Right Section (Notifications & Profile) */}
        <div className="flex items-center gap-4">
          {/* Notification Button */}
          {/* <button
          onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          className="relative w-10 h-9 rounded-xl"
        >
          <FaBell className="text-lg" />
          {notificationCount > 0 && (
            <span
              className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full bg-red-500 text-white ${
                blink ? "opacity-100" : "opacity-50"
              }`}
            >
              {notificationCount}
            </span>
          )}
        </button> */}

          {/* Profile Image */}
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex text-sm rounded-full dropdown cursor-pointer"
          >
            <FaUser
              className="w-8 h-8 rounded-full object-cover"
              // src="https://cdn.pixabay.com/photo/2015/04/13/12/07/business-720429_1280.jpg"
              // alt="user photo"
            />
          </button>
        </div>
      </div>

      {/* Notification Dropdown
    {isNotificationOpen && (
      <div className="absolute right-4 top-16 w-80 bg-white shadow-lg rounded-xl p-4 z-50">
        <h4 className="text-center p-2 text-primary font-medium bg-gray-800 text-white rounded-lg">
          Notifications
        </h4>
        {[...Array(notificationCount)].map((_, index) => (
          <div key={index} className="p-2 border-b">
            <p className="text-sm text-gray-700">
              New message from Rubel Islam: "Create a new class text for class 10."
            </p>
            <p className="text-xs text-gray-500">a few moments ago</p>
          </div>
        ))}
        <Link to="/NotificationAdmin">
          <button className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg">
            View all
          </button>
        </Link>
      </div>
    )} */}

      {/* Profile Dropdown */}
      {isProfileOpen && (
        <div className="absolute right-4 top-16 w-56 bg-white shadow-lg rounded-xl p-4 z-50">
          <p className="font-semibold">Admin</p>
          {/* <p className="text-sm text-gray-500">Admin</p> */}
          <button
            className="block px-4 py-2 hover:bg-gray-300 mt-2 text-sm p-2 rounded-lg cursor-pointer w-full text-left"
            onClick={() => navigate("/admin/Profile")}
          >
            Profile
          </button>
          <button
            className="block px-4 py-2 hover:bg-gray-300 mt-2 text-sm p-2 rounded-lg cursor-pointer w-full text-left"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
