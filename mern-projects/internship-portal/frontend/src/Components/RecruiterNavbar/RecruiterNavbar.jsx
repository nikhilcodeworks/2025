import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Sidebar toggle icons
import { MdArrowDropDown } from "react-icons/md"; // Dropdown Arrow Icon
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from "../../helpers/axiosClient";

import { useUpdate } from "../../context/ProfilePictureUpdateContext";
import { useAuth } from "../../context/AuthContext";


const RecruiterNavbar = ({ toggleSidebar, isSidebarOpen }) => {

  const { logout } = useAuth();
  const { isRecruiterImageUpdated } = useUpdate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [recruiter, setRecruiter] = useState({ 
    name: "Loading...", 
    role: "Recruiter",
    profilePic: ""
   });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecruiterDetails = async () => {
      try {
        const response = await axiosClient.get("/recruiter/showname_navbar");
        if (response.data.success) {
          console.log("Recruiter =", response.data);
          setRecruiter(response.data.recruiter);
        }
      } catch (error) {
        console.error("Error fetching recruiter details:", error);
      }
    };

    fetchRecruiterDetails();
  }, [isRecruiterImageUpdated]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const getPageTitle = () => {
    if (location.pathname.startsWith("/recruiter/view-one-internship/")) {
      return "Internship Details";
    }
    if (location.pathname.startsWith("/recruiter/view-all-applications/")) {
      return "All Applicants Details";
    }
    if (location.pathname.startsWith("/recruiter/edit-internship/")) {
      return "Edit Internship";
    }
    if (location.pathname.startsWith("/recruiter/view-all-applications/")) {
      return "All Applications";
    }
    switch (location.pathname) {
      case "/recruiter/post-internship":
        return "Post Internship";
      case "/recruiter/view-all-internships":
        return "View Internships";
      case "/recruiter/profile":
        return "My Profile";
      default:
        return "Recruiter Dashboard";
    }
  };

  const handleProfileClick = () => {
    if(location.pathname !== "/recruiter/profile") {
      navigate("/recruiter/profile");
    }
    setDropdownOpen(false);
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-md flex items-center justify-between z-50">
      {/* Left Section: Hamburger & Logo */}
      <div className="flex items-center space-x-4">
        <button className="lg:hidden text-black" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <img src="/Loginimg/Logo.svg" alt="Logo" className="h-10 w-auto sm:inline hidden" />
      </div>

      {/* Center Section: Dynamic Page Title (Visible on all screens) */}
      <h4 className="text-lg font-semibold text-center md:text-left text-black justify-between items-center">{getPageTitle()}</h4>

      {/* Right Section: Profile Dropdown */}
      <div className="relative dropdown">
        
        <button
          className="flex items-center space-x-2 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={recruiter.profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            className="rounded-full w-10 h-10 border-2 border-white object-cover"
            alt="Recruiter"
          />
          {/* <img
            src="https://cdn.pixabay.com/photo/2015/04/13/12/07/business-720429_1280.jpg"
            className="rounded-full w-10 h-10 border-2 border-white"
            alt="User"
          /> */}
          <div className="flex flex-col text-left">
            <p className="font-semibold text-black">{recruiter.name}</p>
            <p className="text-sm text-gray-500">Recruiter</p>
          </div>
          <MdArrowDropDown size={24} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-4 w-56 bg-gray-200 text-black shadow-xl rounded-md py-2 top-16 p-4 z-50">            
            <button onClick={handleProfileClick} className="block px-4 py-2 hover:bg-gray-300 mt-2 text-sm p-2 rounded-lg cursor-pointer w-full text-left">
              My Profile
            </button>
            <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-300 mt-2 text-sm p-2 rounded-lg cursor-pointer w-full text-left">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default RecruiterNavbar;
