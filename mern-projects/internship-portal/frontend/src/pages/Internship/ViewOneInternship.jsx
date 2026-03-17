import React, { useEffect, useState } from "react";
import "./ViewOneInternship.css";
import axiosClient from "../../helpers/axiosClient";
import { useParams } from "react-router-dom"; // To get internship ID from URL
import { SiTheboringcompany } from "react-icons/si";
import { Helmet } from "react-helmet-async";


const ViewOneInternship = ({ role }) => {
  const { id } = useParams(); // Get internship ID from URL
  console.log("Internship ID:", id); // Debugging

  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternship = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized: No token found");
          return;
        }
  
        console.log("Internship ID:", id); // Debugging
        const response = await axiosClient.get(`/admin/internship/${id}`);
  
        if (response.data.success) {
          setInternship(response.data.internship);
        } else {
          setError("Internship not found");
        }
      } catch (err) {
        console.error("Error fetching internship:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Failed to load internship details");
      } finally {
        setLoading(false);
      }
    };
  
    if (id) fetchInternship();
  }, [id]);
  

  if (loading) return <p>Loading internship details...</p>;
  if (error) return <p className="error-message">{error}</p>;

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
        <title>Internship Details | Application Insights</title>
        <meta
          name="description"
          content="Detailed view of a single internship post, including applications and analytics."
        />
        <meta
          name="keywords"
          content="internship view, internship analytics, application data"
        />
      </Helmet>

      <div className="job-description-container">
        <header className="job-header">
          {internship.company?.logo ? (
            <img
              src={internship.company.logo}
              alt="Company Logo"
              className="company-logo"
            />
          ) : (
            <SiTheboringcompany
              className="company-logo-placeholder text-yellow-400"
              size={60}
            />
          )}
          <div className="company-info">
            {/* <p>{internship.location || "Location not specified"}</p> */}
            <p>{internship.company?.email || "No Email Provided"}</p>
            <p className="text-red-500">
              Application Deadline: {formatDate(internship.applicationDeadline)}
            </p>
            <p>{internship.company?.name || "Company Name Not Available"}</p>
          </div>
        </header>

        <h1 className="job-title">Job Description</h1>

        <table className="job-table">
          <tbody>
            <tr>
              <th>Job Title:</th>
              <td>{internship.title}</td>
              <th>Duration:</th>
              <td>
                {internship.duration}{" "}
                {internship.duration === 1 ? "Month" : "Months"}
              </td>
            </tr>
            <tr>
              <th>Location:</th>
              <td>{internship.location}</td>
              <th>Stipend:</th>
              <td>{internship.stipend}</td>
            </tr>
          </tbody>
        </table>
        {/* Skills Section */}
        {internship.skills && internship.skills.length > 0 && (
          <section className="key-responsibilities">
            <h2 className="heading">Key Skills</h2>
            <ul className="table-ul">
              {internship.skills.map((skill, index) => (
                <li key={index} className="table-li">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="job-summary">
          <h2 className="heading">Job Summary</h2>
          <p>{internship.description}</p>
        </section>

        <section className="key-responsibilities">
          <h2 className="heading">Key Responsibilities</h2>
          <ul className="table-ul">
            {internship.responsibilities?.map((resp, index) => (
              <li key={index} className="table-li">
                {resp}
              </li>
            ))}
          </ul>
        </section>

        <section className="qualifications">
          <h2 className="heading">Requirements</h2>
          <ul className="table-ul">
            {internship.requirements?.map((requirement, index) => (
              <li key={index} className="table-li">
                {requirement}
              </li>
            ))}
          </ul>
        </section>

        {/* <section className="benefits">
        <h2 className="heading">Benefits</h2>
        <ul className="table-ul">
        {internship.benefits?.map((benefit, index) => (
            <li key={index} className="table-li">{benefit}</li>
          ))}
        </ul>
      </section> */}
      </div>
    </>
  );
};

export default ViewOneInternship;
