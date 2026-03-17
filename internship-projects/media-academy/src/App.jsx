import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/contact";
import EnrollmentForm from "./pages/Enrollmentform";
import Login from "./Components/Login";
import Admin from "./Components/Admin";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeader = ["/login", "/admin"].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      {children}
      <Footer />
    </>
  );
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token"); 
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<EnrollmentForm />} />

          {/* Protected Dashboard Route */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
