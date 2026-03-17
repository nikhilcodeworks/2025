import { FiHome, FiUser, FiBriefcase, FiSettings, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function RecruiterSidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Sidebar: Overlay on Mobile, Fixed on Desktop */}
      <aside className={`fixed top-16 left-0 h-full bg-white shadow-lg w-64 p-5 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 md:w-64 lg:w-64 z-50`}>

        <nav className="mt-5 space-y-4">
          <Link to="/recruiter/dashboard" className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded mt-5">
            <FiHome /> <span>Dashboard</span>
          </Link>
          <Link to="/recruiter/post-internship" className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded">
            <FiUser /> <span>Post Internship</span>
          </Link>
          <Link to="/recruiter/view-all-internships" className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded">
            <FiBriefcase /> <span>View Internships</span>
          </Link>
          {/* <Link to="#" className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded">
            <FiSettings /> <span>Settings</span>
          </Link> */}
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
}
