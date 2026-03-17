// src/components/ProtectedRoutes/ProtectedStudentRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedStudentRoute = ({ children }) => {
  const { token, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!token || role === "recruiter" || role === "admin") {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedStudentRoute;
