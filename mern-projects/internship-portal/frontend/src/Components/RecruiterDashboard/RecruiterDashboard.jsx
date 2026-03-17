import { MdEdit } from "react-icons/md"
import React, { useState, useEffect } from 'react';
import { FiBriefcase, FiClock, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import axiosClient from "../../helpers/axiosClient";
import { SiTheboringcompany } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const RecruiterDashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    nInternships: 0,
    totalApplications: 0,
    studentsHired: 0,
    recentInternships: [],
  });
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axiosClient.get("/recruiter/dashboard");

        if (response.data.success) {
          setDashboardData(response.data);
        }
        setPageLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    setPageLoading(true);
    fetchDashboardData();
  }, []);


  const cardsValue = [
    { title: "Internships Posted", value: dashboardData.nInternships, color: "text-green-500" },
    { title: "Total Applications", value: dashboardData.totalApplications, color: "text-green-500" },
    { title: "Interns Hired", value: dashboardData.studentsHired, color: "text-green-500" },
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
        <title>Recruiter Dashboard | Internship Management</title>
        <meta
          name="description"
          content="Manage internships, view applications, and connect with student talent."
        />
        <meta
          name="keywords"
          content="internship dashboard, recruiter dashboard, manage applications"
        />
      </Helmet>

      <main className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsValue.map((card, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">
                {card.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{card.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-black bg-clip-text">
            Recent Posted Internships
          </h2>
          <Link
            to="/recruiter/view-all-internships"
            className="bg-black text-white px-2 py-1 rounded-md font-medium hover:bg-gray-800 transition"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
          {dashboardData.recentInternships &&
          dashboardData.recentInternships.length > 0 ? (
            dashboardData.recentInternships.map((card, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-5 shadow-md rounded-2xl border border-gray-200 relative"
                >
                  <Link
                    to={`/recruiter/edit-internship/${card._id}`}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  >
                    <MdEdit size={24} />
                  </Link>

                  <div className="grid grid-cols-12 items-center gap-2 md:gap-1 lg:gap-1">
                    <div className="col-span-3 flex justify-center md:justify-start">
                      {card.company.logo ? (
                        <img
                          src={card.company.logo}
                          alt="Company Logo"
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/default-logo.png";
                          }}
                        />
                      ) : (
                        <SiTheboringcompany className="w-14 h-14 md:w-16 md:h-16 rounded-full text-yellow-500" />
                      )}
                    </div>

                    <div className="col-span-9 flex flex-col justify-center md:space-y-0 md:ml-2">
                      <h3 className="text-sm font-medium text-gray-600 company-title-style">
                        {card.company?.name || "Unknown Company"}
                      </h3>
                      <h2 className="text-lg font-bold text-gray-900 company-title-style">
                        {card.title}
                      </h2>
                      <h2 className="text-lg font-bold text-gray-900 company-title-style">
                        {card.role}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="hidden md:flex text-sm text-gray-600 space-x-3">
                      <span className="flex items-center">
                        <FiMapPin className="mr-1" />
                        {card.location}
                      </span>
                      <span className="flex items-center">
                        <FiBriefcase className="mr-1" />
                        {card.stipend}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" />
                        {card.duration}{" "}
                        {card.duration === 1 ? "Month" : "Months"}
                      </span>
                    </div>

                    <div className="md:hidden text-sm text-gray-600 space-y-1">
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        {card.location}
                      </div>
                      <div className="flex items-center">
                        <FiBriefcase className="mr-1" />
                        {card.access}
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-1" />
                        {card.duration}{" "}
                        {card.duration === 1 ? "Month" : "Months"}
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

                  <p className="text-sm text-red-500 mt-2">
                    Deadline: {formatDate(card.applicationDeadline)}
                  </p>

                  <div className="mt-4 flex space-x-3">
                    <Link
                      to={`/recruiter/view-one-internship/${card._id}`}
                      className="w-1/2 bg-black text-white py-2 rounded-md font-medium text-center"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/recruiter/view-all-applications/${card._id}`}
                      className="w-1/2 border border-gray-400 py-2 rounded-md font-medium text-gray-700 text-center"
                    >
                      View Applicants
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-left">
              No active internships available.
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default RecruiterDashboard;
