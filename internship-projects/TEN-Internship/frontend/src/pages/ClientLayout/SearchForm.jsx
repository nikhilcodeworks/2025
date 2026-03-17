import React, { useEffect, useState } from "react";
import axiosClient from "../../helpers/axiosClient";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileUpdateForm from "./ProfileUpdateForm";
import LoginForm from "./LoginForm";
const BASE_URL = "http://localhost:5000/misc";

// Fetch featured internships
const fetchInternships = async () => {
  try {
    const response = await axiosClient.get("misc/internships");
    if(response.data.success) {
      return response.data.internshipData;
    }
  } catch (error) {
    console.error("Error fetching internships:", error);
    return [];
  }
};

// Fetch companies by search term
const fetchCompanies = async (searchTerm) => {
  try {
    const response = await axiosClient.get("misc/search_companies", {
      params: { search_term: searchTerm },
    });
    if(response.data.success) {
      return response.data.companies;
    }
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between mt-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
);

export default function InternshipSearch() {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    typeFilter: [],
    paidFilter: "all",
    searchTerm: "",
    stipendFilter: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const internshipsPerPage = 4;

  // Update stipend ranges with more options
  const stipendRanges = [
    { label: "Under 5000", value: 5000 },
    { label: "Under 10000", value: 10000 },
    { label: "Under 20000", value: 20000 },
  ];
  const normalizedType = (location) => {
    const loc = location.toLowerCase();
    if (loc.includes("remote") || loc.includes("home")) return "Remote";
    if (loc.includes("hybrid")) return "Hybrid";
    return "On-Site";
  };

  // Fetch internships on mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchInternships();
      setInternships(data);
      setFilteredInternships(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (showProfileModal || selectedInternship) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showProfileModal, selectedInternship]);
  const totalPages = Math.ceil(filteredInternships.length / internshipsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Update toggleSelectedRange function
  const toggleSelectedRange = (value) => {
    setFilters((prev) => {
      const newStipendFilters = prev.stipendFilter.includes(value)
        ? prev.stipendFilter.filter((v) => v !== value)
        : [...prev.stipendFilter, value];

      // If no ranges selected, reset to default slider range
      if (newStipendFilters.length === 0) {
        return {
          ...prev,
          stipendFilter: [],
          priceRange: [0, 50000], // Default range
        };
      }

      // Sort the filters to ensure proper range checking
      const sortedFilters = newStipendFilters.sort((a, b) => a - b);

      return {
        ...prev,
        stipendFilter: sortedFilters,
      };
    });
  };

  // Update the filtering effect
  useEffect(() => {
    let filtered = internships;

    // Filter by stipend using either slider or preset ranges
    filtered = filtered.filter((internship) => {
      let stipend = internship.stipend;
      if (typeof stipend === "string") {
        if (stipend.toLowerCase() === "unpaid") {
          stipend = 0;
        } else {
          stipend = parseInt(stipend);
        }
      }

      // If preset ranges are selected, use those instead of slider
      if (filters.stipendFilter.length > 0) {
        return filters.stipendFilter.some((range) => stipend <= range);
      }

      // Otherwise use the slider range
      return (
        stipend >= filters.priceRange[0] && stipend <= filters.priceRange[1]
      );
    });

    // Filter by internship type and location
    if (filters.typeFilter.length > 0) {
      filtered = filtered.filter((internship) => {
        const type = normalizedType(internship.location || "");
        return filters.typeFilter.includes(type);
      });
    }

    // Filter by stipend type: "paid" vs "unpaid"
    if (filters.paidFilter !== "all") {
      filtered = filtered.filter((internship) => {
        let stipend = internship.stipend;

        // Normalize
        if (typeof stipend === "string") {
          stipend = stipend.toLowerCase();
        }

        if (filters.paidFilter === "paid") {
          return stipend !== "unpaid" && stipend !== 0 && stipend !== "0";
        } else if (filters.paidFilter === "unpaid") {
          return stipend === "unpaid" || stipend === 0 || stipend === "0";
        }

        return true;
      });
    }

    // Filter by search term (title or company name)
    if (filters.searchTerm) {
      filtered = filtered.filter(
        (internship) =>
          internship.title.toLowerCase().includes(filters.searchTerm) ||
          internship.company?.name?.toLowerCase().includes(filters.searchTerm)
      );
    }
    setFilteredInternships(filtered);
    setCurrentPage(1);
  }, [filters, internships]);

  // Update handlePriceChange to reset stipend filters when using slider
  // const handlePriceChange = (event, newValue) => {
  //   setFilters((prev) => ({
  //     ...prev,
  //     priceRange: newValue,
  //     stipendFilter: [], // Reset stipend filters when using slider
  //   }));
  // };

  const handleSearch = async (event) => {
    const term = event.target.value.toLowerCase();
    setFilters((prev) => ({ ...prev, searchTerm: term }));

    if (term) {
      const companiesData = await fetchCompanies(term);
      setCompanies(companiesData);
    } else {
      setCompanies([]);
    }
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    const updatedTypes = filters.typeFilter.includes(value)
      ? filters.typeFilter.filter((t) => t !== value)
      : [...filters.typeFilter, value];
    setFilters({ ...filters, typeFilter: updatedTypes });
  };
  const handlePaidChange = (event) => {
    const value = event.target.value;
    setFilters({ ...filters, paidFilter: value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 container mx-auto p-6">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search internships or companies"
          value={filters.searchTerm}
          onChange={handleSearch}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {companies.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">Companies Found</h4>
            <ul className="list-disc pl-5">
              {companies.map((company) => (
                <li key={company._id} className="text-gray-700">
                  {company.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Preset Stipend Checkboxes */}
        <div className="mt-4">
          <h4 className="font-medium mb-2">Preset Stipend Ranges</h4>
          <div className="grid grid-cols-2 gap-2">
            {stipendRanges.map((range) => (
              <div key={range.value} className="flex items-center">
                <input
                  type="checkbox"
                  value={range.value}
                  onChange={() => toggleSelectedRange(range.value)}
                  checked={filters.stipendFilter.includes(range.value)}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700">{range.label}</label>
              </div>
            ))}
          </div>
          {filters.stipendFilter.length > 0 && (
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  stipendFilter: [],
                  priceRange: [0, 50000],
                }))
              }
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Internship Type Checkboxes */}
        <div className="mt-4">
          <h4 className="font-medium mb-2">Internship Type</h4>
          {["Remote", "Hybrid", "On-Site"].map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={type}
                onChange={handleTypeChange}
                checked={filters.typeFilter.includes(type)}
                className="mr-2"
              />{" "}
              <label>{type}</label>
            </div>
          ))}
        </div>

        {/* Stipend Type Radio Buttons */}
        <div className="mt-4">
          <h4 className="font-medium mb-2">Stipend Type</h4>
          {["all", "paid", "unpaid"].map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input
                type="radio"
                id={option}
                name="paid"
                value={option}
                checked={filters.paidFilter === option}
                onChange={handlePaidChange}
                className="mr-2"
              />
              <label htmlFor={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Content - Job Listings */}
      <div className="lg:w-3/4">
        <section className="w-full md:w-full">
          <h2 className="text-2xl font-bold mb-4">Available Internships</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInternships.length > 0 ? (
                  filteredInternships
                    .slice(
                      (currentPage - 1) * internshipsPerPage,
                      currentPage * internshipsPerPage
                    )
                    .map((internship) => (
                      <div
                        key={internship._id}
                        className="bg-white p-4 rounded-lg shadow flex flex-col gap-2 text-sm"
                      >
                        <div className="flex justify-between items-start">
                          <div className="w-10 h-10 bg-blue-100 text-blue-600 bg-opacity-10 rounded-lg flex items-center justify-center">
                            {internship.company?.logo ? (
                              <img
                                src={internship.company.logo}
                                alt={internship.company.name}
                                className="w-10 h-10 rounded-lg"
                              />
                            ) : (
                              <span className="text-blue-600 font-bold">
                                {internship.company?.name?.charAt(0) || "?"}
                              </span>
                            )}
                          </div>
                          <span className="text-blue-600 font-medium">
                            {internship.type || "Internship"}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900">
                          {internship.title || "No Title Available"}
                        </h3>
                        <p className="text-neutral-600">
                          {internship.company?.name || "Unknown Company"}
                        </p>
                        <p className="text-neutral-600">
                          Stipend: {internship.stipend || "N/A"}
                        </p>
                        <p className="text-neutral-600">
                          Location: {internship.location || "Remote"}
                        </p>
                        <div className="flex gap-4 mt-6">
                          <button
                            onClick={() => {
                              console.log("Selected internship:", internship);
                              setSelectedInternship(internship);
                            }}
                            className="w-1/2 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => {
                              if (isAuthenticated && role === "student") {
                                setSelectedInternship(internship);
                                setShowProfileModal(true);
                              } else {
                                navigate("/login");
                              }
                            }}
                            className="w-1/2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ))
                ) : (
                  <p>No internships found.</p>
                )}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </section>
      </div>

      {selectedInternship && !showProfileModal && (
        <div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center"
          onClick={() => setSelectedInternship(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Company Logo and Name */}
            <div className="flex items-center space-x-0">
              {selectedInternship.company?.logo && (
                <img
                  src={selectedInternship.company.logo}
                  alt="Company Logo"
                  className="w-8 h-8 object-contain"
                />
              )}
              <p className="text-gray-600 text-lg ml-2">
                {selectedInternship.company?.name || "Unknown Company"}
              </p>
            </div>

            <h3 className="text-xl font-bold mt-2">
              {selectedInternship.title || "No Title Available"}
            </h3>
            <div className="flex items-center space-x-95">
              <p className="text-gray-700">
                {selectedInternship.location || "N/A"}
              </p>
              <p>
                <span className="font-bold">Applicants:</span>{" "}
                {selectedInternship.applicants?.length || 0}
              </p>
            </div>
            <hr className="my-2 border-gray-300 p-2 mt-5" />
            <div className="text-gray-700   mt-2 p-1.5">
              <div className="flex items-center space-x-80 ">
                <p>
                  <span className="font-bold">Stipend:</span>{" "}
                  {selectedInternship.stipend || "N/A"}
                </p>

                <p>
                  <span className="font-bold">Duration:</span>{" "}
                  {selectedInternship.duration || "N/A"} month(s)
                </p>
              </div>
              <p className="p-0 mt-4">
                <span className="font-bold pt-3">Application Deadline:</span>{" "}
                {new Date(
                  selectedInternship.applicationDeadline
                ).toLocaleDateString() || "N/A"}
              </p>
            </div>
            <hr className="my-2 border-gray-300 p-2 mt-6" />
            <p className="text-gray-700  p-1 font-bold">Skills Required:</p>
            <p className="text-gray-700 p-1 mt-1">
              {selectedInternship.skills?.join(", ") || "N/A"}
            </p>
            <p className="text-gray-700  p-1 mt-2 font-bold">
              Role Description:
            </p>
            <p className="text-gray-700  p-1 ">
              {selectedInternship.description || "No Description Available"}
            </p>

            <p className="text-gray-700  p-1 mt-2 font-bold">
              Responsibilities:
            </p>
            <p className="text-gray-700  p-1 ">
              {selectedInternship.responsibilities?.join(", ") ||
                "No Responsibilities Provided"}
            </p>

            <p className="text-gray-700  p-1 mt-2 font-bold">Requirements:</p>
            <p className="text-gray-700  p-1 ">
              {selectedInternship.requirements?.join(", ") ||
                "No Requirements Provided"}
            </p>

            {/* <button
              onClick={() => handleApply(selectedInternship.id)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all w-full"
            >
              Apply
            </button> */}
          </div>
        </div>
      )}

      {showProfileModal && (
        <div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center"
          onClick={() => {
            setShowProfileModal(false);
            setSelectedInternship(null); // Reset selectedInternship when ProfileUpdateForm is closed
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to backdrop
          >
            <ProfileUpdateForm
              onClose={() => {
                setShowProfileModal(false);
                setSelectedInternship(null); // Reset selectedInternship when ProfileUpdateForm is closed
              }}
              internship={selectedInternship}
            />
          </div>
        </div>
      )}
    </div>
  );
}
