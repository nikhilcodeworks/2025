import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTimes, FaUser, FaBriefcase, FaUserCog, FaBell, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDocumentSearch } from "react-icons/hi";



const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isInternshipOpen, setIsInternshipOpen] = useState(false);

  return (
    <div>
      <aside
        className={`scrollbar fixed top-0 left-0 z-50 w-full h-screen pt-15 bg-white border-r border-gray-200 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:w-56 lg:translate-x-0 transition-transform duration-300`}
        aria-label="Sidenav"
      >
        {isMenuOpen && (
          <button
            className="absolute top-4 right-4 text-2xl text-gray-600 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
        )}

        <div className="overflow-y-auto py-5 px-3 h-full bg-white">
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center p-2 mt-4 text-base font-normal text-primary rounded-lg hover:bg-acent1 currentPageTitle transition duration-75 
                 space-x-2  text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="text-lg text-gray-600" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/all_users"
                className="flex items-center p-2 text-base font-normal text-primary rounded-lg hover:bg-acent1 currentPageTitle transition duration-75 space-x-2  text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUserCog className="text-lg text-gray-600" />
                <span className="ml-3">Manage User</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/post-internship"
                className="flex items-center p-2 text-base font-normal text-primary rounded-lg hover:bg-acent1 currentPageTitle transition duration-75 space-x-2  text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser className="text-lg text-gray-600" />
                <span className="ml-3">Post Internship</span>
              </Link>
            </li>
            {/* All Internships - Dropdown */}
            <li>
              <button
                onClick={() => setIsInternshipOpen(!isInternshipOpen)}
                className="w-full flex justify-between items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <FaBriefcase className="text-lg text-gray-600" />
                  <span className="ml-3">All Internships</span>
                </div>
                {isInternshipOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </li>

            {/* Dropdown Items */}
            {isInternshipOpen && (
              <ul className="ml-6 space-y-1 border-l-2 border-gray-300 pl-3">
                <li>
                  <Link
                    to="/admin/view-admin-internships"
                    className="flex items-center p-2 text-sm font-normal text-gray-700 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Internships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/view-recruiter-all-internships"
                    className="flex items-center p-2 text-sm font-normal text-gray-700 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Recruiter Internships
                  </Link>
                </li>
              </ul>
            )}

            <li>
              <Link
                to="/admin/company"
                className="flex items-center p-2 text-base font-normal text-primary rounded-lg hover:bg-acent1 currentPageTitle transition duration-75 space-x-2  text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiOutlineDocumentSearch className="text-lg text-gray-600" />
                <span className="ml-3">All Company</span>
              </Link>
            </li>

            {/* <li>
              <Link
                to="/Notification"
                className="flex items-center p-2 text-base font-normal text-primary rounded-lg hover:bg-acent1 currentPageTitle transition duration-75"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaChalkboardTeacher className="text-lg text-acent1 group-hover:text-white" />
                <span className="ml-3">Notification</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;