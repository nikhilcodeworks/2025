import React, { useState } from "react";
import Navbar from "../../Components/NavbarHome/NavbarSearch";

const jobsData = [
  {
    id: 1,
    company: "Google",
    location: "Remote",
    profile: "Software Engineer Internship",
    description:
      "Work on cutting-edge technologies and collaborate with teams.",
    applicants: 10,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 2,
    company: "Amazon",
    location: "Gurugram, India",
    profile: "Data Analyst Internship",
    description: "Assist in data-driven decision-making processes.",
    applicants: 8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 3,
    company: "Microsoft",
    location: "Hybrid",
    profile: "Cloud Engineer Internship",
    description: "Work on cloud-based solutions and manage deployments.",
    applicants: 12,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 4,
    company: "Microsoft",
    location: "Hybrid",
    profile: "Software Engineer Internship",
    description: "Work on cloud-based solutions and manage deployments.",
    applicants: 12,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = () => {
    const filtered = jobsData.filter(
      (job) =>
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.profile.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="bg-neutral-900 p-4">
        <Navbar />
        <div className="hidden md:block w-full max-w-md mx-auto mt-4">
          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-grow px-6 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex gap-4 justify-center p-4 bg-neutral-50">
        <div
          className={`flex flex-col w-full md:w-1/3 h-[80vh] overflow-y-auto gap-4 ${
            selectedJob ? "hidden md:flex" : "flex"
          }`}
        >
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="w-full p-4 bg-white rounded-lg shadow-lg cursor-pointer flex items-center gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={job.logo}
                  alt={`${job.company} Logo`}
                  className="w-19 h-5 rounded-md"
                />
                <div>
                  <div className="text-gray-700 font-semibold">
                    {job.company}
                  </div>
                  <div className="text-gray-500 text-sm">{job.profile}</div>
                  <span className="text-gray-500 text-sm">{job.location}</span>
                  <div className="mt-2 text-sm text-neutral-900 cursor-pointer">
                    {job.applicants} Applicants
                  </div>
                  <button
                    className="mt-2 px-4 py-2 bg-neutral-900 text-white rounded-md cursor-pointer"
                    onClick={() => setSelectedJob(job)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`w-full md:w-1/2 p-4 bg-gray-50 rounded-lg shadow-lg ${
            selectedJob ? "block" : "hidden md:block"
          }`}
        >
          {selectedJob ? (
            <div className="w-full">
              <button
                className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-md md:hidden"
                onClick={() => setSelectedJob(null)}
              >
                Back to Jobs
              </button>
              <div className="flex items-center gap-4">
                <img
                  src={selectedJob.logo}
                  alt={`${selectedJob.company} Logo`}
                  className="w-18 h-9 rounded-md"
                />
                <div>
                  <h2 className="text-2xl font-semibold">
                    {selectedJob.company}
                  </h2>
                  <p className="text-gray-600">{selectedJob.location}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-2">
                {selectedJob.profile}
              </h3>
              <p className="mt-2 text-gray-700">{selectedJob.description}</p>
              <div className="mt-4 text-gray-700">
                Applicants: {selectedJob.applicants}
              </div>
              <button
                onClick={() => (window.location.href = "/apply")}
                className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-md"
              >
                Apply Now
              </button>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Reviews & Ratings
                </h3>
                <p className="text-gray-600">
                  (Review charts will be displayed here)
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a job to see details</p>
          )}
        </div>
      </div>
    </div>
  );
}
