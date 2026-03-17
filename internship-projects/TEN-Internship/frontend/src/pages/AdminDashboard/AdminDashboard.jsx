import React, { useEffect, useState } from 'react'
import "./AdminDashboard.css";
import { FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from '../../helpers/axiosClient';
import { SiTheboringcompany } from "react-icons/si";
import { Helmet } from 'react-helmet-async';


const AdminDashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    nStudents: 0,
    nRecruiters: 0,
    nInternships: 0,
    newInternships: [],
  });
  const [pageLoading, setPageLoading] = useState();
  useEffect(() => {
    setPageLoading(true);
    fetchDashboardData();
  }, []);


  const fetchDashboardData = async () => {
    try {
      const response = await axiosClient.get("/admin/dashboard");
      if (response.data.success) {
        setDashboardData(response.data);
      }
      setPageLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };



  // const toggleDescription = (index) => {
  //   setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  // };

  const cardsValue = [
    { title: "Total Students", value: dashboardData.nStudents, color: "bg-green-100 text-green-800" },
    { title: "Total Internships", value: dashboardData.nInternships, color: "bg-blue-100 text-blue-800" },
    { title: "Total Recruiters", value: dashboardData.nRecruiters, color: "bg-yellow-100 text-yellow-800" },
  ];

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (pageLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="w-full h-auto lg:h-screen bg-sitebg p-6 overflow-hidden">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardsValue.map((card, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">
                {card.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{card.value}</span>
                <span className={`text-xs p-1 rounded ${card.color}`}>
                  {card.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-black bg-clip-text">
            Recent Posted Internships
          </h2>
          <Link
            to="/admin/view-admin-internships"
            className="bg-black text-white px-2 py-1 rounded-md font-medium hover:bg-gray-800 transition"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
          {dashboardData.newInternships.length > 0 ? (
            dashboardData.newInternships.map((card, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-5 shadow-md rounded-2xl border border-gray-200"
                >
                  {/* Two-column layout for large screens */}
                  <div className="grid grid-cols-12 items-center gap-2 md:gap-1 lg:gap-1">
                    <div className="col-span-3 flex justify-center md:justify-start">
                      {card.company.logo ? (
                        <img
                          src={card.company.logo}
                          alt="Company Logo"
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full"
                        />
                      ) : (
                        <SiTheboringcompany className="w-14 h-14 md:w-16 md:h-16 text-yellow-500 " />
                      )}
                    </div>

                    {/* Second Column: Company Details */}
                    <div className="col-span-9 flex flex-col justify-center md:space-y-0 md:ml-2">
                      <h3 className="text-sm font-medium text-gray-600 company-title-style">
                        {card.company?.name || "Unknown Company"}
                      </h3>
                      <h2 className="text-lg font-bold text-gray-900 company-title-style">
                        {card.title}
                      </h2>
                      <h2 className="text-lg font-bold text-gray-900">
                        {card.role}
                      </h2>
                    </div>
                  </div>
                  {/* Responsive Job Info */}
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
                        {card.duration} Months
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
                        {card.duration} Months
                      </div>
                    </div>
                  </div>

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

                  {/* Job Description */}
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
                  {card.applicationDeadline && (
                    <p className="text-sm text-red-500 mt-2">
                      Deadline: {formatDate(card.applicationDeadline)}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="mt-4 flex space-x-3">
                    <Link
                      to={`/admin/view-one-internship/${card._id}`}
                      className="w-1/2 bg-black text-white py-2 rounded-md font-medium text-center"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/admin/view-all-applications/${card._id}`}
                      className="w-1/2 border text-center border-gray-400 py-2 rounded-md font-medium text-gray-700"
                    >
                      View Applicants
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No new internships available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard
