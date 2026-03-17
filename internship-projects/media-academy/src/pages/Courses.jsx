import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Courses = () => {
  const [showCourses, setShowCourses] = useState(false);
  const navigate = useNavigate();

  const toggleCourses = () => {
    setShowCourses((prevShowCourses) => !prevShowCourses);
  };

  const handleEnrollNow = () => {
    navigate("/enroll");
  };

  const courses = [
    {
      title: "Video Production",
      description:
        "Learn how to produce professional-quality videos. This course covers everything from pre-production...",
      duration: "10 weeks",
      instructor: "John Doe",
      image:
        "https://media.istockphoto.com/id/1353929637/photo/man-hands-holding-movie-clapper-film-director-concept-behind-the-scenes-of-movie-shooting-or.jpg?s=612x612&w=0&k=20&c=qMRaEPWNTf9GiCEWju3L5K42M1iH_1mFshV0c6vgy04=",
    },
    {
      title: "Photography",
      description:
        "Master the art of capturing stunning photographs. Explore various photography techniques...",
      duration: "8 weeks",
      instructor: "Jane Smith",
      image:
        "https://images.ctfassets.net/3s5io6mnxfqz/3MKTfsYWrcBJ9dRXbdQK09/eacbe6fa93548ab1e15100c211576e8d/AdobeStock_150026021.jpeg",
    },
    {
      title: "Editing and Post-Production",
      description:
        "Edit and enhance videos to create masterpieces using industry-standard software...",
      duration: "12 weeks",
      instructor: "Emily Johnson",
      image:
        "https://blaremedia.net/wp/wp-content/uploads/2023/09/video-post-production-process-scaled.jpg",
    },
    {
      title: "Digital Marketing for Media",
      description:
        "Learn strategies to market media effectively in the digital age, including social media marketing...",
      duration: "6 weeks",
      instructor: "Michael Brown",
      image:
        "https://media.istockphoto.com/id/959020654/photo/digital-marketing-new-startup-project-millennials-business-team-hands-at-work-with-financial.jpg?s=612x612&w=0&k=20&c=wwkyGtXxNKuew7FkH3DeJ5DCdqeM6kAhzj1II6yxQJI=",
    },
    {
      title: "Sound Design",
      description:
        "Discover the craft of creating immersive audio experiences for media, including sound effects, mu...",
      duration: "10 weeks",
      instructor: "Sarah Lee",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGVq5gd6M4AM5OW5zF4wnHjTfB1Jemn3R1_i0dtQGeZ8XVmI6CLW-BkMx47X-wgUDqz5cWcHtmmg1oumdzB4S6Pow49P46hsMomYPouCei7lHS84RCcODFJDxok3ftg11secyaZb07vuJcSONkoc5yeEKA5X3MMMD6oL_NhuURuLGhMS7jdF_igVo3/s1024/denisse-leon-n4BDkIEls78-unsplash-1024x683.jpg",
    },
    {
      title: "Content Creation for Social Media",
      description:
        "Master content strategies for social platforms, including video product...",
      duration: "8 weeks",
      instructor: "David Wilson",
      image:
        "https://blogsmedia.lse.ac.uk/blogs.dir/76/files/2021/07/eaters-collective-i_xVfNtQjwI-unsplash.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 py-10 px-4 sm:px-6">
      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-white mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Our <span className="text-blue-400">Academy</span>
      </motion.h2>
      <p className="text-lg sm:text-2xl text-gray-300 text-center mb-6 font-semibold leading-relaxed">
        🚀 Transform your passion into expertise with our{" "}
        <span className="text-blue-300">expert-led media courses.</span> <br />
        Learn from industry leaders, master in-demand skills, and unlock new
        career opportunities! 🎯
      </p>

      <motion.button
        onClick={toggleCourses}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105 text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {showCourses ? "Hide Courses" : "Explore Courses"}
      </motion.button>

      {showCourses && (
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden w-full sm:w-80 transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {course.description}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gray-500">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <button
                  className="mt-6 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-blue-700 transition-all text-sm sm:text-base"
                  onClick={handleEnrollNow}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Courses;
