import React, { useEffect, useState } from "react";
import axiosClient from "../helpers/axiosClient";
import { FaMapMarkerAlt, FaBriefcase, FaClock } from "react-icons/fa";
import NavBar from "../pages/NavMenu/NavBar";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { Helmet } from "react-helmet-async";

const StudentApplications = () => {
  const [filter, setFilter] = useState("all");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedInternship, setSelectedInternship] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (internship) => {
    setSelectedInternship(internship);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedInternship(null);
    setOpenModal(false);
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const getApplicationsByStatus = async (status) => {
        const res = await axiosClient.get(
          `/student/applications?type=${status}`
        );
        return res.data.applications || [];
      };

      if (filter === "all") {
        // Fetch all statuses in parallel and merge them
        const statuses = ["pending", "accepted", "rejected"];
        const allData = await Promise.all(
          statuses.map(getApplicationsByStatus)
        );
        const merged = allData.flat();
        setApplications(merged);
      } else {
        const res = await axiosClient.get(
          `/student/applications?type=${filter}`
        );

        if (res.data.success) {
          setApplications(res.data.applications || []);
        } else {
          setApplications([]);
        }
      }
    } catch (err) {
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchApplications();
  }, [filter]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "accepted":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-blue-600 bg-blue-100";
      case "rejected":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  // Utility function (can be reused)
  const formatDuration = (duration) => {
    if (!duration) return "3 months";
    const number = typeof duration === "string" ? parseInt(duration) : duration;
    return `${number} months`;
  };

  return (
    <>
      <Helmet>
        <title>My Applications | Internship Tracker</title>
        <meta
          name="description"
          content="Track and manage all your internship applications in one place."
        />
        <meta
          name="keywords"
          content="internship applications, student tracker, application history"
        />
      </Helmet>
      <div>
        <NavBar />
        <div className="p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            My Applications
          </h1>

          {/* Filter Buttons */}
          <div className="flex justify-center md:gap-4 gap-2 mb-8 flex-wrap">
            {["all", "pending", "accepted", "rejected"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`md:px-5 px-3 py-1 md:py-2 rounded-full border transition ${
                  filter === status
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {/* Loading Spinner */}
          {loading && (
            <p className="text-center text-gray-500">Loading applications...</p>
          )}

          {/* Application Cards */}
          {!loading && applications.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
              {applications.map((app) => {
                const internship = app.internship || {};
                const company = internship.company || {};
                return (
                  <div
                    key={app._id}
                    className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                          {company.name?.charAt(0) || "C"}
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">
                            {company.name || "Company"}
                          </p>
                          <h2 className="text-lg font-semibold">
                            {internship.title || "Job Title"}
                          </h2>
                        </div>
                      </div>

                      <div className="flex gap-4 text-sm text-gray-500 mb-2 flex-wrap">
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-gray-400" />
                          {internship.location || "Remote"}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaBriefcase className="text-gray-400" />
                          {internship.type || "Internship"}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-gray-400 mt-[2px]" />
                          {/* {internship.duration || '3 months'} */}
                          {formatDuration(internship.duration)}
                        </span>
                      </div>

                      <p className="text-sm text-gray-700 mt-2">
                        {internship.description ||
                          "Design real time web applications"}
                      </p>

                      <p
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${getStatusColor(
                          app.status
                        )}`}
                      >
                        Status: {app.status}
                      </p>

                      <p className="text-sm text-gray-500 mt-2">
                        Applied on:{" "}
                        {new Date(app.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenModal(internship)}
                      className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 w-full"
                    >
                      View Details
                    </button>

                    <Modal
                      open={openModal}
                      onClose={handleCloseModal}
                      aria-labelledby="modal-title"
                      aria-describedby="modal-description"
                      slotProps={{
                        backdrop: {
                          sx: {
                            backgroundColor: "rgba(128, 128, 128, 0.05)",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "90%",
                          maxWidth: 800,
                          maxHeight: "90vh",
                          bgcolor: "#fff",
                          boxShadow: 24,
                          borderRadius: 3,
                          p: 4,
                          overflowY: "auto",
                        }}
                      >
                        {/* Header */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 3,
                          }}
                        >
                          <Box>
                            <Typography
                              id="modal-title"
                              variant="h5"
                              fontWeight={600}
                            >
                              {selectedInternship?.title}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                            >
                              {selectedInternship?.company?.name ||
                                "Company Name"}
                            </Typography>
                          </Box>
                          <IconButton onClick={handleCloseModal}>
                            <CloseIcon />
                          </IconButton>
                        </Box>

                        <Divider sx={{ mb: 3 }} />

                        {/* Two-column info section */}
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 2,
                          }}
                        >
                          <Typography variant="body1">
                            <strong>Type:</strong>{" "}
                            {selectedInternship?.location || "N/A"}
                          </Typography>
                          <Typography variant="body1">
                            <strong>Duration:</strong>{" "}
                            {formatDuration(selectedInternship?.duration)}
                          </Typography>

                          <Typography variant="body1">
                            <strong>Stipend:</strong>{" "}
                            {selectedInternship?.stipend === "unpaid" ||
                            selectedInternship?.stipend === "0"
                              ? "Unpaid"
                              : `₹${selectedInternship?.stipend}`}
                          </Typography>

                          {selectedInternship?.startDate && (
                            <Typography variant="body1">
                              <strong>Start Date:</strong>{" "}
                              {new Date(
                                selectedInternship.startDate
                              ).toLocaleDateString()}
                            </Typography>
                          )}

                          {selectedInternship?.endDate && (
                            <Typography variant="body1">
                              <strong>End Date:</strong>{" "}
                              {new Date(
                                selectedInternship.endDate
                              ).toLocaleDateString()}
                            </Typography>
                          )}

                          {selectedInternship?.applicationDeadline && (
                            <Typography variant="body1">
                              <strong>Application Deadline:</strong>{" "}
                              {new Date(
                                selectedInternship.applicationDeadline
                              ).toLocaleDateString()}
                            </Typography>
                          )}
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        {/* Description and other long-form details */}
                        <Box>
                          <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            gutterBottom
                          >
                            Description
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            paragraph
                          >
                            {selectedInternship?.description}
                          </Typography>

                          {selectedInternship?.responsibilities && (
                            <>
                              <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                gutterBottom
                              >
                                Responsibilities
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                paragraph
                              >
                                {Array.isArray(
                                  selectedInternship.responsibilities
                                )
                                  ? selectedInternship.responsibilities.join(
                                      ", "
                                    )
                                  : selectedInternship.responsibilities}
                              </Typography>
                            </>
                          )}

                          {selectedInternship?.requirements && (
                            <>
                              <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                gutterBottom
                              >
                                Requirements
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                paragraph
                              >
                                {selectedInternship.requirements.join(", ")}
                              </Typography>
                            </>
                          )}

                          {selectedInternship?.skills && (
                            <>
                              <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                gutterBottom
                              >
                                Skills Required
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                paragraph
                              >
                                {selectedInternship.skills.join(", ")}
                              </Typography>
                            </>
                          )}

                          {selectedInternship?.company?.website && (
                            <>
                              <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                gutterBottom
                              >
                                Company Website
                              </Typography>
                              <Typography variant="body2">
                                <a
                                  href={selectedInternship.company.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: "#1976d2" }}
                                >
                                  {selectedInternship.company.website}
                                </a>
                              </Typography>
                            </>
                          )}
                        </Box>
                      </Box>
                    </Modal>
                  </div>
                );
              })}
            </div>
          )}

          {/* No Applications */}
          {!loading && applications.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No applications found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentApplications;
