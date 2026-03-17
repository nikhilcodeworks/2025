import React from "react";
import { motion } from "framer-motion";
const Instructors = () => {
  const instructors = [
    {
      name: "John Doe",
      bio: "Expert in video production.",
      photo:
        "https://c.pxhere.com/images/05/a9/150348116d671917f7e037c4bc08-1625266.jpg!d",
    },
    {
      name: "Jane Smith",
      bio: "Specialist in digital marketing.",
      photo:
        "https://th.bing.com/th/id/OIP.V_8_1bP8TJrrwUe3ikSHswHaHA?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 px-4 py-8">
    <motion.h2 
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Meet Our <span className="text-blue-400">Instructors</span>
    </motion.h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 text-center">
      Learn from the best professionals in the media industry.
    </p>

      <div className="flex flex-wrap justify-center gap-6">
        {instructors.map((instructor, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 w-72 flex flex-col items-center transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img
              src={instructor.photo}
              alt={instructor.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{instructor.name}</h3>
            <p className="text-gray-600 text-center mt-2">{instructor.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
