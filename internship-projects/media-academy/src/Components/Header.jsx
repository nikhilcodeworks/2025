import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role"); // Get role from localStorage
    setIsAuthenticated(!!token);
    setRole(userRole);
  }, []);

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // Clear role on logout
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="bg-[#17428b] text-white py-4 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Media Academy Logo" className="h-10 w-auto" />
        <h1 className="ml-3 text-xl font-semibold">Media Academy</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {role === "admin" ? (
          <>
            <Link to="/dashboard" className="hover:text-blue-400 transition" onClick={handleCloseNav}>
              Dashboard
            </Link>
            <button className="hover:text-red-400 transition" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-blue-400 transition" onClick={handleCloseNav}>
              Home
            </Link>
            <Link to="/courses" className="hover:text-blue-400 transition" onClick={handleCloseNav}>
              Courses
            </Link>
            <Link to="/instructors" className="hover:text-blue-400 transition" onClick={handleCloseNav}>
              Instructors
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition" onClick={handleCloseNav}>
              Contact
            </Link>
            {isAuthenticated ? (
              <button className="hover:text-red-400 transition" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="hover:text-blue-400 transition" onClick={handleCloseNav}>
                Login
              </Link>
            )}
          </>
        )}
      </nav>

      {/* Mobile Navigation Toggle */}
      <button className="md:hidden text-white text-2xl" onClick={handleButtonToggle}>
        {showNav ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Navigation Menu */}
      {showNav && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#17428b] bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-xl z-50">
          {role === "admin" ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-400" onClick={handleCloseNav}>
                Dashboard
              </Link>
              <button className="hover:text-red-400" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-blue-400" onClick={handleCloseNav}>
                Home
              </Link>
              <Link to="/courses" className="hover:text-blue-400" onClick={handleCloseNav}>
                Courses
              </Link>
              <Link to="/instructors" className="hover:text-blue-400" onClick={handleCloseNav}>
                Instructors
              </Link>
              <Link to="/contact" className="hover:text-blue-400" onClick={handleCloseNav}>
                Contact
              </Link>
              {isAuthenticated ? (
                <button className="hover:text-red-400" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/login" className="hover:text-blue-400" onClick={handleCloseNav}>
                  Login
                </Link>
              )}
            </>
          )}
          <button className="text-red-400 text-2xl absolute top-6 right-6" onClick={handleCloseNav}>
            <AiOutlineClose />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
