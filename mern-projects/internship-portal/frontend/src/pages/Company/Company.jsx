import React, { useState, useEffect } from 'react';
import axiosClient from "../../helpers/axiosClient";
import { FaCalendarAlt, FaIndustry, FaUser } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { Helmet } from 'react-helmet-async';

const Company = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [companiesData, setCompaniesData] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const itemsPerPage = 20;
    const [search, setSearch] = useState("");
    const [pageLoading, setPageLoading] = useState(false);


    useEffect(() => {
        const fetchCompanies = async () => {
            try {

                const response = await axiosClient.get("/admin/companies");
                if (response.data.success) {
                    const allCompanies = response.data.allCompanies;

                    // Apply search filter
                    const filtered = allCompanies.filter((company) =>
                        company.name?.toLowerCase().includes(search.toLowerCase()) ||
                        company.email?.toLowerCase().includes(search.toLowerCase())
                    );

                    setCompaniesData(filtered);
                    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
                    setCurrentPage(prev => Math.min(prev, Math.ceil(filtered.length / itemsPerPage)) || 1);
                } else {
                    setCompaniesData([]);
                    setTotalPages(1);
                }
                setPageLoading(false);
            } catch (error) {
                console.error("Error fetching Companies:", error);
            }
        };
        setPageLoading(true);
        fetchCompanies();
    }, [search]);

    const fetchCompanyDetails = async (id) => {
        try {
            const { data } = await axiosClient.get(`/admin/companies/${id}`);
            if (data.success) {
                setSelectedCompany(data.companyData);
            }

        } catch (error) {
            console.error("Error fetching Company details:", error);
        }
    };
    const currentCompanies = companiesData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
        <title>All Companies</title>
      </Helmet>
        <main className="p-5 sm:w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => {
                  setCurrentPage(1);
                  setSearch(e.target.value);
                }}
                className="border px-3 py-1 rounded-lg"
              />
            </div>
          </div>

          {/* the table*/}
          <div className="w-full overflow-hidden">
            <div className="overflow-x-auto sm:overflow-visible">
              <table className="min-w-[900px] w-full border border-gray-300">
                <thead className="bg-gray-100 whitespace-nowrap">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      ID
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Company Name
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Company Email
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Company FOunded Year
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-900 uppercase ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                  {currentCompanies.length > 0 ? (
                    currentCompanies.map((company, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>

                        <td className="px-4 py-2 text-sm text-slate-900 font-medium">
                          {company.name}
                        </td>
                        <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                          {company.email}
                        </td>
                        <td className="px-4 py-2 text-sm text-slate-600 font-medium">
                          {company.foundedYear}
                        </td>
                        {/* <td className="px-4 py-2 text-sm text-slate-600 font-medium">{Company.student?.address}</td> */}

                        <td className="px-4 py-4 text-sm">
                          <button
                            className="text-blue-600 font-medium mr-4 cursor-pointer"
                            onClick={() => fetchCompanyDetails(company._id)}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="px-4 py-4 text-center text-gray-500"
                      >
                        No companies found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-5 space-x-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-3 py-1">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}

          {/*modal*/}
          {selectedCompany && (
            <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
              <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 relative">
                {/* Header with Profile Picture */}
                <div className="flex items-center pb-3 border-b border-gray-300">
                  {/* Profile Picture or Default Icon */}
                  {selectedCompany.logo ? (
                    <img
                      src={selectedCompany.logo}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover border border-gray-300"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.freepik.com/256/9166/9166850.png?semt=ais_hybrid"
                      className="w-12 h-12 text-gray-400 border border-gray-300 p-2 rounded-full"
                    />
                  )}

                  <h3 className="text-slate-900 text-xl font-semibold flex-1 ml-4">
                    {selectedCompany.name}
                  </h3>

                  {/* Close Button */}
                  <svg
                    id="closeIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setSelectedCompany(null)}
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
                      {selectedCompany.email || "Not provided"}
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2">
                      <FaUser className="text-lg text-black" />{" "}
                      {selectedCompany.employees || "Not provided"}
                    </p>
                  </div>

                  {/* Address */}
                  <p className="flex items-center gap-2">
                    <HiOutlineLocationMarker className="text-lg text-black" />{" "}
                    {selectedCompany.location || "Not provided"}
                  </p>
                  {/* Founded Year */}
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-lg text-black" />{" "}
                    {selectedCompany.foundedYear || "Not provided"}
                  </p>

                  {/* industry */}
                  <p className="flex items-center gap-2">
                    <FaIndustry className="text-lg text-black" />{" "}
                    {selectedCompany.industry || "Not provided"}
                  </p>
                  {/* website */}
                  <p className="flex items-center gap-2">
                    <CgWebsite className="text-lg text-black" />
                    <a
                      href={
                        selectedCompany.website?.startsWith("http")
                          ? selectedCompany.website
                          : `https://${selectedCompany.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:none"
                    >
                      {selectedCompany.website || "Not provided"}
                    </a>
                  </p>
                </div>

                {/* Footer Buttons https://res.cloudinary.com/dfybw9dad/image/upload/v1743081087/profile_pictures/cztnui40ufnnzyei1hp8.jpg*/}
                <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                  <button
                    className="cursor-pointer px-4 py-2 rounded-lg text-slate-900 text-sm font-medium border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                    onClick={() => setSelectedCompany(null)}
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
}

export default Company
