// src/components/ProtectedRoutes/ProtectedRecruiterRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRecruiterRoute = ({ children }) => {
  const { token, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!token || (role !== "recruiter" && role !== "admin")) {
    return <Navigate to="/recruiter/login" replace />;
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRecruiterRoute;
