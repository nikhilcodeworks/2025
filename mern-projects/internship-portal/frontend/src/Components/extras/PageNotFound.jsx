






import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-[50px] font-bold text-black-600">404</h1>
      <p className="text-gray-700 text-lg mb-6">Page Not Found</p>
      <button
        onClick={() => navigate('/')}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default PageNotFound;
