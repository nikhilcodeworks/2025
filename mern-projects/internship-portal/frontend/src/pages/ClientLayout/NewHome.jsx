import { useState, useEffect, useRef } from "react";
// import { FaBars } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Link } from "react-router";
import { useNavigate, useLocation } from "react-router";
import SearchForm from "./SearchForm.jsx";
import axiosClient from "../../helpers/axiosClient";
import { useAuth } from "../../context/AuthContext.jsx";
import Navbar from "../NavMenu/NavBar.jsx";
export default function NewHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedInternship, setSelectedInternship] = useState(null);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const { isAuthenticated } = useAuth();

  const internshipRef = useRef(null);
  const faqRef = useRef(null);

  const handleStudentSignup = () => {
    navigate("/signup");
  };

  const handleRecruiterSignup = () => {
    navigate("/recruiter/signup");
  };

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    //redirect admin if logged in
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (token && role === "admin") {
      navigate("/admin/dashboard");
      return;
    }

    const fetchInternships = async () => {
      try {
        const response = await axiosClient.get("/misc/featured_internships");
        if (response.data.success) {
          setInternships(response.data.featuredInternships);
        } else {
          console.error("Error: Internships data not found");
        }
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, []);

  const scrollToInternships = () => {
    internshipRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToFAQs = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleApply = async (internshipId) => {
    if (!isAuthenticated) {
      // If the user is not logged in, redirect to the login page
      alert("You need to log in first!");
      navigate("/login");
      return;
    }

    // Fetch user profile details (assuming you store it in localStorage or API)
    const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

    const requiredFields = ["name", "email", "phone", "resume"]; // Add required fields
    const isProfileComplete = requiredFields.every(
      (field) => userProfile[field]
    );

    if (!isProfileComplete) {
      // Alert user about incomplete profile and redirect them
      alert("You have not completed your profile. Please update your details.");
      navigate("/profile");
      return;
    }

    try {
      // If the profile is complete, send application to backend
      await axiosClient.post("http://localhost:5000/apply", {
        internshipId,
      });

      // Show success popup
      alert("Applied successfully!");
    } catch (error) {
      console.error("Error applying:", error);
      alert("Failed to apply. Please try again.");
    }
  };

  // previous static jobs

  // const jobs = [
  //   {
  //     id: 1,
  //     title: "Senior Frontend Developer",
  //     company: "Google Inc.",
  //     type: "Full-time",
  //     salary: "$80-100k/year",
  //     location: "San Francisco, CA",
  //     skills: ["React", "TypeScript"],
  //     bgColor: "bg-blue-50",
  //     textColor: "text-blue-600",
  //   },
  //   {
  //     id: 2,
  //     title: "Product Designer",
  //     company: "Microsoft",
  //     type: "Remote",
  //     salary: "$70-90k/year",
  //     location: "Remote",
  //     skills: ["Figma", "UI/UX"],
  //     bgColor: "bg-purple-50",
  //     textColor: "text-purple-600",
  //   },
  //   {
  //     id: 3,
  //     title: "Backend Engineer",
  //     company: "Amazon",
  //     type: "Contract",
  //     salary: "$90-120k/year",
  //     location: "Seattle, WA",
  //     skills: ["Python", "AWS"],
  //     bgColor: "bg-green-50",
  //     textColor: "text-green-600",
  //   },
  // ];

  // const categories = [
  //   {
  //     name: "Technology",
  //     jobs: "2,154 jobs available",
  //     bgColor: "bg-blue-100",
  //     textColor: "text-blue-600",
  //     icon: (
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Design",
  //     jobs: "1,843 jobs available",
  //     bgColor: "bg-purple-100",
  //     textColor: "text-purple-600",
  //     icon: (
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Marketing",
  //     jobs: "1,567 jobs available",
  //     bgColor: "bg-green-100",
  //     textColor: "text-green-600",
  //     icon: (
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Business",
  //     jobs: "1,234 jobs available",
  //     bgColor: "bg-orange-100",
  //     textColor: "text-orange-600",
  //     icon: (
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  //       />
  //     ),
  //   },
  // ];

  const steps = [
    {
      title: "1. Create Profile",
      description:
        "Create your job seeker profile and upload your latest resume",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      ),
    },
    {
      title: "2. Search Jobs",
      description:
        "Browse through thousands of jobs and filter based on your preferences",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
    },
    {
      title: "3. Apply & Get Hired",
      description:
        "Apply to jobs with one click and track your application status",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  const stats = [
    { value: "15k+", label: "Active Employers" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support" },
    { value: "45k+", label: "Placements" },
  ];

  const faqs = [
    {
      question: "How do I create a job seeker profile?",
      answer:
        "Click on the 'Sign Up' button, and complete your profile. Make sure to include your resume and relevant work experience.",
    },
    {
      question: "How can I post an internship as an employer?",
      answer:
        "Create an employer account, click on 'Post an Internship', fill in the job details including requirements and benefits. Your internship posting will be live.",
    },
    {
      question: "Is it free to apply for internships?",
      answer:
        "Yes, job seekers can browse and apply to all internships completely free of charge. We never charge applicants for using our platform.",
    },
    {
      question: "How do I track my internship applications?",
      answer:
        "Log into your account and visit the 'My Applications' section to see the status of all your internship applications, including whether they've been viewed or responded to.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Access Top Talent",
      description:
        "Connect with qualified candidates from our vast talent pool",
      bgColor: "bg-blue-600",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Secure Hiring",
      description: "Advanced screening and verification processes",
      bgColor: "bg-purple-600",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      title: "Fast & Efficient",
      description: "Streamlined hiring process saves time and resources",
      bgColor: "bg-green-600",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
  ];

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  return (
    <>
      <div>
        <Navbar
          scrollToInternships={scrollToInternships}
          scrollToFAQs={scrollToFAQs}
        />
        <header className="bg-neutral-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-20 text-center animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Discover opportunities that match your skills and aspirations
            </p>

            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              onClick={scrollToInternships}
            >
              Start Searching Now
            </button>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 px-4 md:px-12 pb-12">
          {[
            { value: "10k+", label: "Active Jobs", delay: "0s" },
            { value: "5k+", label: "Companies", delay: "0.2s" },
            { value: "8M+", label: "Job Seekers", delay: "0.4s" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-xl text-center animate__animated animate__fadeInUp"
              style={{ animationDelay: stat.delay }}
            >
              <h3 className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div> */}
        </header>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Featured Internships
              </h2>
              <p className="text-neutral-600">
                Find the best internship for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.slice(0, 3).map((internship) => (
                <div
                  key={internship._id}
                  className="bg-white shadow-sm border-gray-400 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 bg-opacity-10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">
                        {internship.company?.name?.charAt(0) || "?"}
                      </span>
                    </div>
                    <span className="text-blue-600 font-medium text-sm">
                      {internship.type?.replace(/unpaid/gi, "Unpaid") ||
                        "Internship"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {internship.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {internship.company?.name || "Unknown Company"}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-blue-600 bg-blue-100 bg-opacity-10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-neutral-600 mb-4">
                    <span>
                      {internship.stipend?.replace(/unpaid/gi, "Unpaid") ||
                        "N/A"}
                    </span>
                    <span>{internship.location || "Remote"}</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={scrollToInternships}
                      className="w-1/2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {selectedInternship && (
              <div
                className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
                onClick={() => navigate("/")}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg max-w-3xl max-h-full w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-xl font-bold">
                    {selectedInternship.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {selectedInternship.company}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {selectedInternship.description}
                  </p>
                  <div className="mt-4 text-gray-700 text-sm">
                    <p>
                      <span className="font-bold">Stipend:</span>{" "}
                      {selectedInternship.stipend}
                    </p>
                    <p>
                      <span className="font-bold">Job type:</span>{" "}
                      {selectedInternship.location}
                    </p>
                  </div>
                  <button
                    onClick={() => handleApply(selectedInternship.id)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all w-full"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}

            <div className="text-center mt-12">
              <button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 
                        text-white font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 
                        hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={scrollToInternships}
              >
                View More Internships
              </button>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                How It Works
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Follow these simple steps to find your next dream job
                opportunity
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center animate__animated ${
                    animationLoaded ? "animate__fadeInUp" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <svg
                      className={`w-8 h-8 ${step.textColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {step.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <button
                className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors duration-300 animate__animated animate__fadeIn cursor-pointer"
                onClick={handleStudentSignup}
              >
                Get Started Now
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 bg-neutral-50 p-8 rounded-2xl">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                  98%
                </h4>
                <p className="text-neutral-600">Success Rate</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                  24/7
                </h4>
                <p className="text-neutral-600">Support Available</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                  10k+
                </h4>
                <p className="text-neutral-600">Companies Trust Us</p>
              </div>
            </div>
          </div>
        </section>

        <section id="internship-categories" className="bg-neutral-50 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Popular Internship Categories
              </h2>
              <p className="text-neutral-600">
                Explore internship opportunities across various fields
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Development
                </h3>
                <p className="text-neutral-600 mb-4">
                  Hands-on experience in software and web development
                </p>
                <a
                  onClick={scrollToInternships}
                  className="text-blue-600 hover:text-opacity-80 font-medium"
                >
                  Browse Internships →
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Design
                </h3>
                <p className="text-neutral-600 mb-4">
                  Work on UI/UX and graphic design projects
                </p>
                <a
                  onClick={scrollToInternships}
                  className="text-purple-600 hover:text-opacity-80 font-medium"
                >
                  Browse Internships →
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Human Resources
                </h3>
                <p className="text-neutral-600 mb-4">
                  Learn talent acquisition and HR management skills
                </p>
                <a
                  onClick={scrollToInternships}
                  className="text-green-600 hover:text-opacity-80 font-medium"
                >
                  Browse Internships →
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors duration-300"
                onClick={scrollToInternships}
              >
                View All Internships
              </button>
            </div>
          </div>
        </section>

        <section id="for-employers" className="bg-neutral-900 py-16 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div
              className={`animate__animated ${
                animationLoaded ? "animate__fadeInUp" : ""
              }`}
            >
              <h2 className="text-3xl font-bold mb-6">For Employers</h2>
              <p className="text-neutral-300 mb-8">
                Find the perfect candidate for your company with our
                comprehensive hiring solutions.
              </p>

              <div className="space-y-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div
                      className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {feature.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                  onClick={handleRecruiterSignup}
                >
                  Post a Job
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="job-search" className="bg-white py-16" ref={internshipRef}>
          <SearchForm />
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-12" ref={faqRef}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600">
                Find answers to common questions about Ten Internships
              </p>
            </div>

            {/* FAQ Items */}
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-neutral-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-neutral-600 transform transition-transform ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className={`px-6 py-4 bg-neutral-50 ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-neutral-900 text-white py-10 mt-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-around gap-8">
              {/* Get in Touch */}
              <div>
                <h6 className="text-lg font-bold">Get in Touch</h6>
                <p className="text-sm mt-2">Mail us</p>
                <p className="text-sm text-gray-400">
                  info@entrepreneurshipnetwork.net
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h6 className="text-lg font-bold">Quick Links</h6>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/" className="text-sm hover:text-gray-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollToInternships}
                      className="text-sm hover:text-gray-400"
                    >
                      Browse Internships
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.entrepreneurshipnetwork.net/"
                      className="text-sm hover:text-gray-400"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="recruiter/post-internship"
                      className="text-sm hover:text-gray-400"
                    >
                      Post an Internship
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/login"
                      className="text-sm cursor-pointer hover:text-gray-400"
                    >
                      Administrator Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-400">
                Copyright © 2025, All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
