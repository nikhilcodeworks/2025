import React, { useState, useEffect } from "react";
import "./ViewAllApplications.css";
import axiosClient from "../../helpers/axiosClient";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaUserGraduate, FaTools, FaProjectDiagram, FaBriefcase, FaTransgender } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import ResumeViewer from "../../Components/ResumeViewer/ResumeViewer";
import { Helmet } from "react-helmet-async";


const getStatusColors = (status) => {
    switch (status) {
        case "Rejected": return { bg: "bg-red-100", text: "text-red-700" };
        case "Accepted": return { bg: "bg-green-100", text: "text-green-700" };
        case "Pending": return { bg: "bg-blue-100", text: "text-blue-700" };
        default: return { bg: "bg-gray-100", text: "text-gray-700" };
    }
};

const getDropdownOptions = (status) => {
    switch (status) {
        case "Pending": return ["Rejected", "Accepted"];
        case "Rejected": return ["Pending", "Accepted"];
        case "Accepted": return ["Pending", "Rejected"];
        default: return [];
    }
};

const ViewAllApplications = ({ role }) => {
    const { internshipId } = useParams();
    const [applicantsData, setApplicantsData] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [recruiterEmail, setRecruiterEmail] = useState(null);
    const itemsPerPage = 20;
    const [loadingStatusId, setLoadingStatusId] = useState(null);


    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                if (!internshipId) {
                    console.error("No internshipId found in URL");
                    return;
                }

                const endpoint =
                  role === "admin"
                    ? "/admin/individual_internship/applicants"
                    : "/recruiter/individual_internship/applicants";

                const response = await axiosClient.get(endpoint, {
                    params: { internshipId },
                  }
                );
                if (response.data.success) {
                    setApplicantsData(response.data.applicants || []);
                    // setTotalPages(Math.ceil((response.data.applicants.length || 0) / itemsPerPage));
                }
                console.log(response.data.applicants);
            } catch (error) {
                console.error("Error fetching applicants:", error);
            }
        };
        fetchApplicants();
    }, [role]);

    const fetchApplicantDetails = async (id) => {
        try {
            const endpoint = role === "admin" ? `admin/applicant/${id}` : `recruiter/applicant/${id}`;
            const { data } = await axiosClient.get(endpoint);
            if (data.success) {
                setSelectedApplicant(data.user);
            }

        } catch (error) {
            console.error("Error fetching applicant details:", error);
        }
    };

    const filteredApplicants = applicantsData.filter((applicant) =>
        (filter === "All" || applicant.status === filter) &&
        (searchTerm === "" || (applicant.student?.name || "").toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleStatusChange = async (index, newStatus, applicationId) => {
        try {
            setLoadingStatusId(applicationId); // Start loading

            const response = await axiosClient.put(`/admin/update_status/${applicationId}`,
                { status: newStatus }
            );

            if (response.data.success) {
                setApplicantsData((prevApplicants) =>
                    prevApplicants.map((applicant) =>
                        applicant._id === applicationId
                            ? { ...applicant, status: newStatus }
                            : applicant
                    )
                );

                setOpenDropdown(null); // Close dropdown
                toast.success("Application status updated successfully!", {
                    position: "top-right",
                    autoClose: 3000, // Closes after 3 seconds
                });
                setTimeout(() => {
                    setLoadingStatusId(null);
                }, 3000);

            } else {
                console.error("Failed to update status:", response.data.message);
                setLoadingStatusId(null);
            }
        } catch (error) {
            console.error("Error updating application status:", error);
            setLoadingStatusId(null);
        }
    };

    const currentApplicants = filteredApplicants.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    useEffect(() => {
        const total = Math.ceil(filteredApplicants.length / itemsPerPage);
        setTotalPages(total);
    }, [filteredApplicants]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    useEffect(() => {
        const fetchRecruiterEmail = async () => {
            try {
                if (role !== "admin") {
                    const response = await axiosClient.get("/recruiter/profile");
                    if (response.data.success) {
                        setRecruiterEmail(response.data.recruiterEmail || "info@entrepreneurshipnetwork.net");
                    }
                } else {
                    setRecruiterEmail(localStorage.getItem("email") || "");  // For recruiters, fetch from localStorage
                }
            } catch (error) {
                console.error("Error fetching recruiter email:", error);
            }
        };

        fetchRecruiterEmail();
    }, [role]);

    const handleComposeEmail = () => {
        if (!selectedApplicant || !selectedApplicant.email) {
            toast.error("No applicant selected or missing email!");
            return;
        }

        // Set recruiter email based on role
        const fromEmail = role === "admin"
            ? "info@entrepreneurshipnetwork.net"
            : recruiterEmail || "recruiter@example.com"

        const applicantName = selectedApplicant.name;

        const to = selectedApplicant.email;
        const subject = encodeURIComponent("Regarding Your Application");
        const body = encodeURIComponent(
            `From: ${fromEmail}\n\nHi ${applicantName},\nI wanted to reach out regarding your application...`
        );

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");

    };

    return (
      <>
        <Helmet>
          <title>View Applications | Internship Applicants</title>
          <meta
            name="description"
            content="Browse all student applications received for your internship listing."
          />
          <meta
            name="keywords"
            content="internship applications, student applicants, review resumes"
          />
        </Helmet>

        <main className="p-5 sm:w-full overflow-hidden">
          {/* Search & Filter Section */}
          <div className="search-filter-container">
            {/* Search Input */}
            <div className="search-box-container">
              <input
                type="text"
                placeholder="Search by name..."
                className="search-box"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="filter-buttons-wrapper">
              <div className="filter-buttons">
                {["All", "Rejected", "Pending", "Accepted"].map((status) => {
                  const { bg, text } = getStatusColors(status);
                  return (
                    <button
                      key={status}
                      // className={`cursor-pointer px-4 py-2 rounded-md font-medium border ${filter === status ? `${bg} ${text}` : "border-gray-400 text-gray-700"}`}
                      className={`filter-btn ${
                        filter === status
                          ? `${bg} ${text}`
                          : "border-gray-400 text-gray-700"
                      }`}
                      onClick={() => {
                        setFilter(status);
                        setCurrentPage(1); // Reset to first page when filtering
                      }}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Applications List */}
          <div className="table-wrapper ">
            <div className="table-scroll-container">
              <table className="w-full min-w-[900px] sm:min-w-0 border border-gray-300">
                <thead className="bg-gray-100 whitespace-nowrap">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      ID
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Applied Date
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Email
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Phone
                    </th>
                    {/* <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">Location</th> */}
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                  {currentApplicants.length > 0 ? (
                    currentApplicants.map((applicant, index) => {
                      const { bg, text } = getStatusColors(applicant.status);
                      return (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td className="p-3 text-sm flex items-center text-gray-500">
                            {/* Dynamic picture https://res.cloudinary.com/dfybw9dad/image/upload/v1743081087/profile_pictures/cztnui40ufnnzyei1hp8.jpg*/}
                            {applicant.student?.profilePic ? (
                              <img
                                src={applicant.student?.profilePic}
                                alt={applicant.student?.name}
                                className="w-9 h-9 rounded-full mr-2 me-2"
                                style={{ width: "36px", height: "36px" }}
                              />
                            ) : (
                              <FaUser
                                className="text-gray-600 mr-2 me-2"
                                style={{ width: "36px", height: "36px" }}
                              />
                            )}
                            {applicant.student?.name}
                          </td>
                          {/* <td className="px-4 py-2 text-sm text-slate-900 font-medium">{applicant.student?.name}</td> */}
                          <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                            {formatDate(applicant.createdAt)}
                          </td>
                          <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                            {applicant.student?.email}
                          </td>
                          <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                            {applicant.student?.phone}
                          </td>
                          {/* <td className="px-4 py-2 text-sm text-slate-600 font-medium">{applicant.student?.address}</td> */}
                          <td className="px-4 py-2 text-sm">
                            <button
                              className={`${bg} ${text} px-3 py-1 rounded-full text-xs font-semibold relative cursor-pointer`}
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === index ? null : index
                                )
                              }
                            >
                              {applicant.status}
                            </button>
                            {openDropdown === index && (
                              <div className="absolute bg-white shadow-lg rounded-lg p-2 z-10">
                                {getDropdownOptions(applicant.status).map(
                                  (option) => (
                                    <button
                                      key={option}
                                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left ${
                                        loadingStatusId === applicant._id
                                          ? "opacity-50 cursor-not-allowed"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        loadingStatusId !== applicant._id &&
                                        handleStatusChange(
                                          index,
                                          option,
                                          applicant._id
                                        )
                                      }
                                      disabled={
                                        loadingStatusId === applicant._id
                                      }
                                    >
                                      {option}
                                    </button>
                                  )
                                )}
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-4 text-sm">
                            <button
                              className="text-blue-600 font-medium mr-4 cursor-pointer"
                              onClick={() =>
                                fetchApplicantDetails(applicant.student?._id)
                              }
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="px-4 py-4 text-center text-gray-500"
                      >
                        No applicants found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center gap-4">
              <button
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <span className="text-lg font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
          {selectedApplicant && (
            <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
              <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 relative">
                {/* Header with Profile Picture */}
                <div className="flex items-center pb-3 border-b border-gray-300">
                  {/* Profile Picture or Default Icon */}
                  {selectedApplicant.profilePic ? (
                    <img
                      src={selectedApplicant.profilePic}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover border border-gray-300"
                    />
                  ) : (
                    <FaUser className="w-12 h-12 text-gray-400 border border-gray-300 p-2 rounded-full" />
                  )}

                  <h3 className="text-slate-900 text-xl font-semibold flex-1 ml-4">
                    {selectedApplicant.name}
                  </h3>

                  {/* Close Button */}
                  <svg
                    id="closeIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setSelectedApplicant(null)}
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
                {/* <div className="p-6 overflow-y-auto max-h-[70vh]"> */}
                <div className="p-6 overflow-y-auto max-h-[70vh] space-y-2">
                  {/* Email with Resume Button */}
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2">
                      <HiOutlineMail className="text-lg text-black" />{" "}
                      {selectedApplicant.email}
                    </p>
                    {selectedApplicant.resume && (
                      <ResumeViewer resumeUrl={selectedApplicant.resume} />
                      // <a
                      //     href={selectedApplicant.resume}
                      //     target="_blank"
                      //     rel="noopener noreferrer"
                      //     className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                      // >
                      //     Show Resume
                      // </a>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2">
                      <HiOutlinePhone className="text-lg text-black" />{" "}
                      {selectedApplicant.phone}
                    </p>
                  </div>

                  {/* Address */}
                  <p className="flex items-center gap-2">
                    <HiOutlineLocationMarker className="text-lg text-black" />{" "}
                    {selectedApplicant.address || "Not provided"}
                  </p>

                  {/* Gender */}
                  <p className="flex items-center gap-2">
                    {selectedApplicant.gender === "male" ? (
                      <AiOutlineMan className="text-lg text-black" />
                    ) : selectedApplicant.gender === "female" ? (
                      <AiOutlineWoman className="text-lg text-black" />
                    ) : (
                      <FaTransgender className="text-gray-500" />
                    )}
                    {selectedApplicant.gender || "Not specified"}
                  </p>
                  <button
                    onClick={handleComposeEmail}
                    className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded shadow"
                  >
                    <img
                      src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                      alt="Gmail"
                      className="w-5 h-5"
                    />
                    Compose Email
                  </button>
                  {/* Display Projects if Available */}
                  {selectedApplicant.projects.length > 0 && (
                    <section className="shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg mt-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                        <FaProjectDiagram className="mr-2" /> Projects
                      </h3>
                      {selectedApplicant.projects.map((project, index) => (
                        <div key={index} className="mt-3 sm:mt-4">
                          <p className="font-medium text-gray-800">
                            {project.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            ({formatDate(project.startDate)} -{" "}
                            {formatDate(project.endDate)})
                          </p>
                          <p className="text-gray-700 mt-2">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </section>
                  )}

                  {/* Display Experience if Available */}
                  {selectedApplicant.experience.length > 0 && (
                    <section className="shadow-lg p-4 sm:p-6 bg-gray-50 rounded-lg mt-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                        <FaBriefcase className="mr-2" /> Work Experience
                      </h3>
                      {selectedApplicant.experience.map((exp, index) => (
                        <div key={index} className="mt-3 sm:mt-4">
                          {/* <p className="font-medium text-gray-800">{exp.name}</p> */}
                          <p className="text-gray-700 mt-1">{exp.title}</p>
                          <p className="text-sm text-gray-600">
                            ({formatDate(exp.startDate)} -{" "}
                            {formatDate(exp.endDate)})
                          </p>
                          <p className="text-gray-700 mt-2">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </section>
                  )}

                  {/* Display Skills if Available */}
                  {selectedApplicant.skills.length > 0 && (
                    <section className="shadow-lg p-6 bg-gray-50 rounded-lg mt-4">
                      <h3 className="text-2xl font-semibold flex items-center text-gray-700 mb-4">
                        <FaTools className="mr-2" /> Skills
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {selectedApplicant.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm capitalize"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Display Education if Available */}
                  {selectedApplicant.education.length > 0 && (
                    <section className="shadow-lg p-3 sm:p-6 bg-gray-50 rounded-lg mt-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                        <FaUserGraduate className="mr-2" /> Education
                      </h3>
                      {selectedApplicant.education.map((edu, index) => (
                        <div key={index} className="mt-3 sm:mt-4">
                          <p className="font-medium text-gray-800">
                            {edu.organisation}
                          </p>
                          <p className="text-gray-700">{edu.degree}</p>
                          <p className="text-sm text-gray-600">
                            ({formatDate(edu.startDate)} -{" "}
                            {formatDate(edu.endDate)})
                          </p>
                        </div>
                      ))}
                    </section>
                  )}
                </div>

                {/* Footer Buttons https://res.cloudinary.com/dfybw9dad/image/upload/v1743081087/profile_pictures/cztnui40ufnnzyei1hp8.jpg*/}
                <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                  <button
                    className="cursor-pointer px-4 py-2 rounded-lg text-slate-900 text-sm font-medium border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                    onClick={() => setSelectedApplicant(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </>
    );
};

export default ViewAllApplications;
