import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (storedToken) {
      setToken(storedToken);
      setRole(storedRole || "");
      setIsAuthenticated(true);
    }
    setLoading(false); // Remove loading state after data is fetched
  }, []);


  const login = (token, role) => {
    setToken(token);
    setIsAuthenticated(true);
    setRole(role);
    localStorage.setItem("token", token);
    localStorage.setItem('role', role);
    // navigate("/admin/AdminDashboard");
  };

  const logout = () => {
    setToken("");
    setIsAuthenticated(false);
    setRole('');
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // navigate("/admin/LoginAdmin");
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, role, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);