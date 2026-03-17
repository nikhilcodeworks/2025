import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated,token, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show loading state instead of redirecting
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  if(!token || role !== "admin")
  {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;