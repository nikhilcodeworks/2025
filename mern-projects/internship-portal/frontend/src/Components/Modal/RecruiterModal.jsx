import { React, useEffect, useRef } from "react";
import ResumeViewer from "../ResumeViewer/ResumeViewer";

const RecruiterModal = ({ user, onClose }) => {
  const { company = {} } = user || {};
  const modalRef = useRef(null);

  // Close the modal if clicked outside or the 'Esc' key is pressed
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal when clicking outside
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose(); // Close the modal when pressing 'Esc'
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
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex justify-center items-center overflow-auto p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl relative p-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-800">{user?.name || "Recruiter Info"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl font-bold">✕</button>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-slate-700 mb-2">Personal Info</h4>
              <p><strong>Email:</strong> {user?.email || "N/A"}</p>
              <p><strong>Phone:</strong> {user?.phone || "N/A"}</p>
              <p><strong>Gender:</strong> {user?.gender || "N/A"}</p>
              <p><strong>Date of Birth:</strong> {user?.dob || "N/A"}</p>
              <p><strong>Skills:</strong> {user?.skills?.length ? user.skills.join(', ') : "N/A"}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-700 mb-2">Company Info</h4>
              <p><strong>Company:</strong> {company?.name || "N/A"}</p>
              <p><strong>Founded:</strong> {company?.foundedYear || "N/A"}</p>
              <p><strong>Location:</strong> {company?.location || "N/A"}</p>
              <p><strong>Industry:</strong> {company?.industry || "N/A"}</p>
              <p><strong>Website:</strong> {company?.website || "N/A"}</p>
              <p><strong>Employees:</strong> {company?.employees || "N/A"}</p>
              <p><strong>Email:</strong> {company?.email || "N/A"}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex justify-center">
              {company?.logo ? (
                <img src={company.logo} alt="Company Logo" className="h-40 object-contain" />
              ) : (
                <p className="text-gray-500">No company logo</p>
              )}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-700 mb-2">Education</h4>
              {user.education?.length ? (
                user.education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <p><strong>Degree:</strong> {edu.degree || "N/A"}</p>
                    <p><strong>Institution:</strong> {edu.organisation || "N/A"}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No education info available</p>
              )}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-700 mb-2">Experience</h4>
              {user.experience?.length ? (
                user.experience.map((exp, index) => (
                  <div key={index} className="mb-2">
                    <p><strong>Title:</strong> {exp.title || "N/A"}</p>
                    <p><strong>Description:</strong> {exp.description || "N/A"}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No experience info available</p>
              )}
            </div>
          </div>
        </div>

        {/* Resume Viewer */}
        {user?.resume && <div className="mt-8 pt-4 border-t">
          <h4 className="font-semibold text-slate-800 mb-2">Resume</h4>
          <ResumeViewer resumeUrl={user?.resume} />
        </div>}
      </div>
    </div>
  );
};

export default RecruiterModal;
