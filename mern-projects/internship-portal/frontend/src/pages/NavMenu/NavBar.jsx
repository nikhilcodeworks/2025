import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../../helpers/axiosClient";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@mui/material";
import { Link } from "react-router";

const Nav = ({ scrollToInternships, scrollToFAQs }) => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState({
    userProfilePic: "",
    userName: "",
  });

  const { isAuthenticated, role, logout } = useAuth();

  // Placeholder image for default profile
  const defaultProfilePic =
    "https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png";

  // Fetch Profile Picture and User Data from API
  const fetchProfilePic = async () => {
    try {
      const response = await axiosClient.get("/misc/user/profile");

      if (response.data.success) {
        setUserData({
          userProfilePic: response.data.profilePic,
          userName: response.data.profileName,
        });
      } else {
        console.error("API Error:", response.data.message);
        setUserData({
          userProfilePic: "",
          userName: "",
        });
      }
    } catch (error) {
      console.error("Axios Error:", error.message);
      setUserData({
        userProfilePic: "",
        userName: "",
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfilePic();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  const roleText = () => {
    var roleT = role;
    roleT = roleT.charAt(0).toUpperCase() + roleT.slice(1);
    return roleT;
  };

  const handleHiringClick = () => {
    if (isAuthenticated && role === "recruiter") {
      navigate("/recruiter/post-internship");
    } else if (!isAuthenticated || role === "student") {
      navigate("/recruiter/login");
    }
  };

  const handleFAQClick = () => {
    if(location.pathname === "/") {
      scrollToFAQs();
    }
    else {
      navigate("/");
    }
  }

  const handleFindClick = () => {
    if (location.pathname === "/") {
      scrollToInternships();
    } else {
      navigate("/");
    }
  }

  return (
    <nav className="!bg-neutral-900 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Website Title */}
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          TEN Internships
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex justify-center flex-grow space-x-8 ">
          <a onClick={handleFindClick} className="hover:text-gray-400 cursor-pointer">
            Find Internships
          </a>
          {/* <a href="#" className="hover:text-gray-400">
            Messages
          </a> */}
          <a
            onClick={handleHiringClick}
            className="hover:text-gray-400 cursor-pointer"
          >
            Start Hiring
          </a>
          {/* <a href="#" className="hover:text-gray-400">
            Community
          </a> */}
          <a onClick={handleFAQClick} className="hover:text-gray-400 cursor-pointer">
            FAQ
          </a>
        </div>

        {/* Profile Section */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {isAuthenticated ? (
            <>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={
                    userData.userProfilePic !== ""
                      ? userData.userProfilePic
                      : defaultProfilePic
                  }
                  alt="Profile"
                  className="h-10 w-10 rounded-full border-2 border-gray-300 shadow-sm"
                />
                <div className="text-sm text-gray-300 font-medium">
                  {userData?.userName || "User"}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </>
          )}

          {isDropdownOpen && (
            <div className="absolute top-14 right-0 bg-neutral-700 text-white shadow-lg rounded-lg p-4 w-48">
              <div className="flex flex-col items-center">
                <img
                  src={
                    userData.userProfilePic !== ""
                      ? userData.userProfilePic
                      : defaultProfilePic
                  }
                  alt="Profile"
                  className="h-12 w-12 rounded-full mb-2 border-2 border-gray-500"
                />
                <p className="text-lg font-bold">
                  {userData?.userName || "User"}
                </p>
                <p className="text-sm text-gray-400">
                  <span>{roleText()}</span>
                </p>
              </div>
              <div className="mt-3">
                {role === "student" ? (
                  <>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-md"
                    >
                      To Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/recruiter/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-md"
                    >
                      To Dashboard
                    </Link>
                  </>
                )}
                <div
                  className="block px-4 py-2 text-sm hover:bg-red-500 hover:text-white rounded-md cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <a
            onClick={scrollToInternships}
            className="px-3 py-1 hover:text-gray-400"
          >
            Find Job
          </a>
          <a
            onClick={handleHiringClick}
            className="px-3 py-1 hover:text-gray-400"
          >
            Hiring
          </a>
          <a onClick={scrollToFAQs} className="px-3 py-1 hover:text-gray-400">
            FAQ
          </a>
          {isAuthenticated ? (
            <>
              {role === "student" ? (
                <Link to="/profile" className="px-3 py-1 hover:text-gray-400">
                  To Profile
                </Link>
              ) : (
                <Link
                  to="/recruiter/dashboard"
                  className="px-3 py-1 hover:text-gray-400"
                >
                  To Dashboard
                </Link>
              )}
              <p
                onClick={handleLogout}
                className="px-3 py-1 hover:text-gray-400 cursor-pointer"
              >
                Logout
              </p>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
