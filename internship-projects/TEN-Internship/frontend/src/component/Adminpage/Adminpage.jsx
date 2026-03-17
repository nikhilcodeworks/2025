import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Eye } from "lucide-react";
import StudentModal from "../../Components/Modal/StudentModal";
import RecruiterModal from "../../Components/Modal/RecruiterModal";
import { FaUser } from "react-icons/fa";
import axiosClient from "../../helpers/axiosClient";
import { Helmet } from "react-helmet-async";
// import axios from "axios";

const AdminPage = () => {
  const { token } = useAuth();
  const [applicantsData, setApplicantsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApplicant, setSelectedApplicant] = useState(null);  // Modal state
  const [roleFilter, setRoleFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLoading, setPageLoading] = useState(true);

  const itemsPerPage = 20;

  // Fetch applicants data
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        if (!token) throw new Error("No authentication token found");

        const response = await axiosClient.get("/admin/all_users");

        if(response.data.success) {
          const data = response.data.data;
          if (Array.isArray(data)) setApplicantsData(data);
        }
        setPageLoading(false);
      } catch (err) {
        console.error("Error fetching applicants data:", err);
        setApplicantsData([]);
      }
    };
    setPageLoading(true);
    fetchApplicants();
  }, [token]);

  // Filtering applicants based on search and role
  const filteredApplicants = applicantsData.filter((applicant) => {
    return (
      (searchTerm === "" || applicant.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (roleFilter === "All" || applicant.role.toLowerCase() === roleFilter.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);
  const currentApplicants = filteredApplicants.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page changes
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  // Handling modal open/close
  const handleOpenModal = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const handleCloseModal = () => {
    setSelectedApplicant(null);
  };

  if(pageLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Manage all users</title>
      </Helmet>
      <main className="p-5 sm:w-full overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="search-box w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            {["All", ...new Set(applicantsData.map((user) => user.role))].map(
              (role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              )
            )}
          </select>
        </div>

        <div className="w-full overflow-hidden">
          <div className="overflow-x-auto sm:overflow-visible">
            <table className="min-w-[900px] w-full border border-gray-300 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase">
                    Id
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase">
                    email
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase">
                    Phone
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase">
                    Role
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentApplicants.length > 0 ? (
                  currentApplicants.map((applicant, index) => (
                    <tr key={applicant._id}>
                      <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                        {index + 1}
                      </td>
                      <td className="p-3 text-sm flex items-center font-medium text-slate-900">
                        {applicant?.profilePic ? (
                          <img
                            src={applicant.profilePic}
                            alt={applicant.name}
                            className="w-9 h-9 rounded-full mr-4 me-2 object-cover"
                            style={{ width: "36px", height: "36px" }}
                          />
                        ) : (
                          <FaUser
                            className="text-gray-600 mr-4"
                            style={{ width: "36px", height: "36px" }}
                          />
                        )}
                        {applicant.name}
                      </td>
                      {/* <td className="px-4 py-4 text-sm text-slate-900 font-medium">{applicant.name}</td> */}
                      <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                        {applicant.email}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                        {applicant.phone || "Not Provided"}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                        {applicant.role}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button
                          className="text-blue-600 hover:text-blue-800 focus:outline-none"
                          onClick={() => handleOpenModal(applicant)}
                          title="View Details"
                        >
                          <Eye className="h-5 mt-2 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-4 text-center text-gray-500"
                    >
                      {searchTerm || roleFilter
                        ? "No matching users found."
                        : "No users available."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border bg-blue-600 text-white rounded-md mr-2"
          >
            Previous
          </button>
          <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border bg-blue-600 text-white rounded-md ml-2"
          >
            Next
          </button>
        </div>

        {/* Modal for Viewing Applicant Details */}
        {selectedApplicant && (
          <div>
            {selectedApplicant.role === "student" ? (
              <StudentModal
                user={selectedApplicant}
                onClose={handleCloseModal}
              />
            ) : selectedApplicant.role === "recruiter" ? (
              <RecruiterModal
                user={selectedApplicant}
                onClose={handleCloseModal}
              />
            ) : null}
          </div>
        )}
      </main>
    </>
  );
};

export default AdminPage;
