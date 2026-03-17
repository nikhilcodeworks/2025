import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-blue-400">Media Academy</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mt-4">
            Learn, Create, and Succeed in the Media Industry!
          </p>

          <a
            href="/courses"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 mt-6 rounded-lg text-lg font-medium transition duration-300 shadow-lg"
          >
            Explore Courses
          </a>
        </motion.div>
      </div>

      {/* Why Choose Media Academy */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 w-full py-16 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Media Academy?
        </motion.h2>

        <p className="max-w-2xl mx-auto text-lg opacity-80 mb-10">
          Gain industry-ready skills with expert-led courses, hands-on training, and state-of-the-art facilities.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Cards */}
          {[
            {
              title: "Expert-Led Courses",
              desc: "Learn from top industry professionals.",
              color: "from-gray-500 to-gray-700",
            },
            {
              title: "Hands-On Training",
              desc: "Work on real-world projects.",
              color: "from-gray-500 to-gray-700",
            },
            {
              title: "State-of-the-Art Facilities",
              desc: "Access premium tools & equipment.",
              color: "from-gray-500 to-gray-700",
            },
            {
              title: "Supportive Community",
              desc: "Join a network of creative minds.",
              color: "from-gray-500 to-gray-700",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg bg-gradient-to-r ${feature.color} text-white shadow-md transition transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm opacity-90 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
