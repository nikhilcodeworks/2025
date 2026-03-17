import React, { useState, useEffect } from "react";

const ResumeViewer = ({ resumeUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (resumeUrl) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  if (isLoading) {
    return <p className="text-gray-600">Loading...</p>;
  }

  if (!resumeUrl) {
    return <p className="text-gray-600">Resume is not available.</p>;
  }

  return (
    <div className="mt-4">
      <a
        href={`https://docs.google.com/gview?url=${encodeURIComponent(
          resumeUrl
        )}&embedded=true`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        View Resume
      </a>
    </div>
  );
};

export default ResumeViewer;
