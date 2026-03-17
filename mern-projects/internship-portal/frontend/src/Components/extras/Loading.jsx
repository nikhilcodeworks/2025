import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen bg-gray-50 pt-24">
      <h1 className="text-2xl font-semibold text-gray-800 mb-10">
        Internship Tracker
      </h1>
      <div className="relative w-3/5 h-1 bg-gray-300 overflow-hidden rounded">
        <div className="absolute w-2/5 h-full bg-blue-500 animate-slide" />
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            left: -40%;
          }
          50% {
            left: 60%;
          }
          100% {
            left: -40%;
          }
        }
        .animate-slide {
          animation: slide 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Loading;