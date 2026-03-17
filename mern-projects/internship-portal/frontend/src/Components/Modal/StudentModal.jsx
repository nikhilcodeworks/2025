import React, { useEffect } from "react";
import { FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import ResumeViewer from "../ResumeViewer/ResumeViewer";

const StudentModal = ({ user, onClose }) => {
  const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString() : 'Not provided';
  };

  // Close the modal if clicked outside or the 'Esc' key is pressed
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById("student-modal");
      if (modal && !modal.contains(event.target)) {
        onClose();  // Close the modal when clicking outside
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();  // Close the modal when pressing 'Esc'
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div id="student-modal" className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 relative">
        {/* Header with Profile Picture */}
        <div className="flex items-center pb-3 border-b border-gray-300">
          {/* Profile Picture or Default Icon */}
          {user?.profilePic ? (
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-gray-300"
            />
          ) : (
            <FaUser className="w-12 h-12 text-gray-400 border border-gray-300 p-2 rounded-full" />
          )}
          
          <h3 className="text-slate-900 text-xl font-semibold flex-1 ml-4">{user?.name || "Student Info"}</h3>

          {/* Close Button */}
          <svg
            id="closeIcon"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClose}
            className="w-3.5 h-3.5 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-gray-700"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        {/* Main Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-4">
          {/* Email with Resume Button */}
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2">
              <HiOutlineMail className="text-lg text-black" /> {user?.email}
            </p>
            {user?.resume && <ResumeViewer resumeUrl={user?.resume} />}
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2">
              <HiOutlinePhone className="text-lg text-black" /> {user?.phone}
            </p>
          </div>

          {/* Address */}
          <p className="flex items-center gap-2">
            <HiOutlineLocationMarker className="text-lg text-black" /> {user?.address || "Not provided"}
          </p>

          {/* Gender */}
          <p className="flex items-center gap-2">
            {user?.gender === "male" ? (
              <AiOutlineMan className="text-lg text-black" />
            ) : user?.gender === "female" ? (
              <AiOutlineWoman className="text-lg text-black" />
            ) : (
              <FaUser className="text-gray-500" />
            )}
            {user?.gender || "Not specified"}
          </p>

          {/* Display Projects if Available */}
          {user?.projects?.length > 0 && (
            <section className="shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaProjectDiagram className="mr-2" /> Projects
              </h3>
              {user.projects.map((project, index) => (
                <div key={index} className="mt-3 sm:mt-4">
                  <p className="font-medium text-gray-800">{project.name}</p>
                  <p className="text-sm text-gray-600">({formatDate(project.startDate)} - {formatDate(project.endDate)})</p>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Display Work Experience if Available */}
          {user?.experience?.length > 0 && (
            <section className="shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaBriefcase className="mr-2" /> Work Experience
              </h3>
              {user.experience.map((exp, index) => (
                <div key={index} className="mt-3 sm:mt-4">
                  <p className="text-gray-700 mt-1">{exp.title}</p>
                  <p className="text-sm text-gray-600">({formatDate(exp.startDate)} - {formatDate(exp.endDate)})</p>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Display Skills if Available */}
          {user?.skills?.length > 0 && (
            <section className="shadow-lg p-6 bg-gray-50 rounded-lg mt-4">
              <h3 className="text-2xl font-semibold flex items-center text-gray-700 mb-4">
                <FaTools className="mr-2" /> Skills
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {user.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Display Education if Available */}
          {user?.education?.length > 0 && (
            <section className="shadow-lg p-3 sm:p-6 bg-gray-50 rounded-lg mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaUserGraduate className="mr-2" /> Education
              </h3>
              {user.education.map((edu, index) => (
                <div key={index} className="mt-3 sm:mt-4">
                  <p className="font-medium text-gray-800">{edu.organisation}</p>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-600">({formatDate(edu.startDate)} - {formatDate(edu.endDate)})</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
          <button
            className="cursor-pointer px-4 py-2 rounded-lg text-slate-900 text-sm font-medium border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
