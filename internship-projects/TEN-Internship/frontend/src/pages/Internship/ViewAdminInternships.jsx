

import React, { useState, useEffect } from "react";
import { FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ViewInternship.css";
import axiosClient from "../../helpers/axiosClient";
import { MdEdit } from "react-icons/md";
import { Helmet } from "react-helmet-async";



const ITEMS_PER_PAGE = 10;

const ViewAdminInternships = ({ role }) => {
  const [internships, setInternships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("new"); // Default filter is "all"
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axiosClient.get("/admin/internship");

        if (response.data.success) {
          setInternships(response.data.internshipData || []); // Ensure it's an array
        } else {
          setInternships([]);
        }
      } catch (err) {
        console.error("Error fetching internships:", err);
        setError("Failed to load internships");
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);


  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
    <Helmet>
      <title>Admin Internships</title>
    </Helmet>
      <div className="p-5">
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
        </div>

        {loading ? (
          <p className="text-center">Loading internships...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (internships?.length ?? 0) === 0 ? (
          <p className="text-center text-gray-600">No internships found.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships
              .filter((internship) =>
                internship.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-5 shadow-md rounded-2xl border border-gray-200 relative"
                >
                  {/* Edit Button in the top-right corner */}
                  <Link
                    to={`/admin/edit-internship/${card._id}`}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  >
                    <MdEdit size={24} />
                  </Link>
                  <div className="grid grid-cols-12 items-center gap-2 md:gap-1 lg:gap-1">
                    <div className="col-span-3 flex justify-center md:justify-start">
                      <img
                        src="https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg"
                        alt="Company Logo"
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full"
                      ></img>
                    </div>
                    <div className="col-span-9 flex flex-col justify-center md:space-y-0 md:ml-2">
                      <h3 className="text-sm font-medium text-gray-600 company-title-style">
                        {card.company?.name || "Unknown Company"}
                      </h3>
                      <h2 className="text-lg font-bold text-gray-900 company-title-style">
                        {card.title}
                      </h2>
                      {/* <h2 className="text-lg font-bold text-gray-900">{card.role}</h2> */}
                    </div>
                  </div>
                  <div className="mt-2">
                    {/* Desktop: Icons in a row */}
                    <div className="hidden md:flex text-sm text-gray-600 space-x-3">
                      <span className="flex items-center">
                        <FiMapPin className="mr-1" />
                        {card.location}
                      </span>
                      <span className="flex items-center">
                        <FiBriefcase className="mr-1" />
                        {card.stipend === "0" ? "Free" : card.stipend}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" />
                        {card.duration}{" "}
                        {card.duration === 1 ? "Month" : "Months"}
                      </span>
                    </div>

                    {/* Mobile: Icons in separate rows */}
                    <div className="md:hidden text-sm text-gray-600 space-y-1">
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        {card.location}
                      </div>
                      <div className="flex items-center">
                        <FiBriefcase className="mr-1" />
                        {card.stipend === "0" ? "Free" : card.stipend}
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-1" />
                        {card.duration}{" "}
                        {card.duration === 1 ? "Month" : "Months"}
                      </div>
                    </div>
                  </div>

                  {/* Skills Section */}
                  {card.skills && card.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-700 mt-3">
                    <Link
                      to={`/admin/view-one-internship/${card._id}`}
                      className="text-black-500 hover:text-black"
                    >
                      {card.description.length > 100
                        ? `${card.description.substring(0, 100)}...`
                        : card.description}
                    </Link>
                  </p>

                  <div className="mt-4 flex space-x-3">
                    <Link
                      to={`/admin/view-one-internship/${card._id}`}
                      className={`py-2 rounded-md font-medium text-center w-1/2 bg-black text-white
                                  }`}
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/admin/view-all-applications/${card._id}`}
                      className="w-1/2 text-center border border-gray-400 py-2 rounded-md font-medium text-gray-700"
                    >
                      View Applicants
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="flex justify-center mt-5 space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-1">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewAdminInternships;
