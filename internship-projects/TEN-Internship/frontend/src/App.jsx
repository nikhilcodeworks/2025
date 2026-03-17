import { useState, Suspense, Lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// import { AdminAuthProvider } from "./Components/LoginAdmin/AuthContext";
//admin routes
import LoginAdmin from "./Components/LoginAdmin/LoginAdmin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import ProtectedRoute from "./Components/LoginAdmin/ProtectedRoute";
import ManageUser from "./pages/ManageUser/ManageUser.jsx";
import PostInternship from "./pages/Internship/PostInternship.jsx";
import LayoutAdmin from "./Components/LayoutAdmin/LayoutAdmin.jsx"; // Import the new layout
import NotificationAdmin from "./Components/NotificationAdmin/NotificationAdmin";
import ViewAdminInternships from "./pages/Internship/ViewAdminInternships.jsx";
import PageNotFound from "./Components/extras/PageNotFound.jsx";

//student routes
import Profile from "./student_pages/Profile.jsx";
import Signup from "./student_pages/Signup.jsx";
import Login from "./student_pages/Login.jsx";
import ProfileFill from "./student_pages/ProfileFill.jsx";
import CustomInput from "./Components/forms/CustomInput.jsx";
import ProtectedStudentRoute from "./Components/ProtectedRoutes/ProtectedStudentRoute.jsx";
import StudentApplications from "./student_pages/StudentApplications.jsx";
import AdminPage from "./component/Adminpage/Adminpage.jsx";
import SearchPage from "./pages/ClientLayout/SearchPage.jsx";
import NewHome from "./pages/ClientLayout/NewHome.jsx";
import Company from "./pages/Company/Company.jsx";
import AdminProfile from "./Components/AdminProfile/AdminProfile.jsx";

//Recruiter routes
import RecruiterDashboard from "./Components/RecruiterDashboard/RecruiterDashboard.jsx";
import RecruiterLayout from "./Components/RecruiterLayout/RecruiterLayout.jsx";
import RecruiterSignup from "./Components/RecruiterSignup/RecruiterSignup.jsx";
import RecruiterLogin from "./Components/RecruiterLogin/RecruiterLogin.jsx";
import RecruiterProfile from "./pages/RecruiterProfile/RecruiterProfile";
import ProtectedRecruiterRoute from "./Components/ProtectedRoutes/ProtectedRecruiterRoutes.jsx";

//Recruiter and Admin pages
import ViewInternship from "./pages/Internship/ViewInternship";
import ViewOneInternship from "./pages/Internship/ViewOneInternship";
import ViewAllApplication from "./pages/Application/ViewAllApplication";
import EditOneInternship from "./pages/Internship/EditOneInternship.jsx";

// layout
import UserLayout from "./Components/layouts/userLayout.jsx";
import UserDetailsPage from "./component/Adminpage/UserDetailsPage.jsx";
//recruiter and student pages
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Loading from "./Components/extras/Loading.jsx";

// import JobList from "../src/component/Adminpage/JobList/JobList.jsx"
// import JobDetail from "../src/component/Adminpage/JobList/JobDetail.jsx"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { role } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="admin">
            {/* Public routes */}
            <Route index path="login" element={<LoginAdmin />} />

            <Route
              path="all_users"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <AdminPage />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="user/:id"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <UserDetailsPage />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />

            {/* Protected routes with layout */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <AdminDashboard />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="ManageUser"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <ManageUser />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="edit-internship/:id"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <EditOneInternship role={role} />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />

            <Route
              path="post-internship"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <PostInternship />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />

            <Route
              path="view-admin-internships"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <ViewAdminInternships />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />

            <Route
              path="view-recruiter-all-internships"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <ViewInternship role={role} />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="view-one-internship/:id"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <ViewOneInternship />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="view-all-applications/:internshipId"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <ViewAllApplication role={role} />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="company"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <Company />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="NotificationAdmin"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <NotificationAdmin />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
            <Route
              path="Profile"
              element={
                <ProtectedRoute>
                  <LayoutAdmin
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  >
                    <AdminProfile />
                  </LayoutAdmin>
                </ProtectedRoute>
              }
            />
          </Route>

          {/* student routes */}
          <Route path="/" element={<UserLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <NewHome />
                </Suspense>
              }
            />
            {/* <Route path="search_page" element={<SearchPage />} /> NOT BEING USED */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="profile"
              element={
                <ProtectedStudentRoute>
                  <Profile />
                </ProtectedStudentRoute>
              }
            />
            <Route
              path="profile-fill"
              element={
                <ProtectedStudentRoute>
                  <ProfileFill />
                </ProtectedStudentRoute>
              }
            />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route
              path="student-applications"
              element={
                <ProtectedStudentRoute>
                  <StudentApplications />
                </ProtectedStudentRoute>
              }
            />
          </Route>

          <Route path="recruiter">
            <Route path="signup" element={<RecruiterSignup />} />
            <Route path="login" element={<RecruiterLogin />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />

            <Route
              path="profile"
              element={
                <ProtectedRecruiterRoute>
                  <RecruiterLayout>
                    <RecruiterProfile />
                  </RecruiterLayout>
                </ProtectedRecruiterRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <ProtectedRecruiterRoute>
                  <RecruiterLayout>
                    <RecruiterDashboard />
                  </RecruiterLayout>
                </ProtectedRecruiterRoute>
              }
            />
            <Route
              path="edit-internship/:id"
              element={
                <ProtectedRecruiterRoute>
                  <RecruiterLayout>
                    <EditOneInternship role={role} />
                  </RecruiterLayout>
                </ProtectedRecruiterRoute>
              }
            />
            <Route
              path="post-internship"
              element={
                <ProtectedRecruiterRoute>
                  <RecruiterLayout>
                    <PostInternship />
                  </RecruiterLayout>
                </ProtectedRecruiterRoute>
              }
            />
            <Route
              path="view-all-internships"
              element={
                <ProtectedRecruiterRoute>
                  <RecruiterLayout>
                    <ViewInternship role={role} />
                  </RecruiterLayout>
                </ProtectedRecruiterRoute>
              }
            />
            <Route
              path="view-one-internship/:id"
              element={
                <ProtectedRecruiterRoute>
                  <RecruiterLayout>
                    <ViewOneInternship />
                  </RecruiterLayout>
                </ProtectedRecruiterRoute>
              }
            />
            <Route
              path="view-all-applications/:internshipId"
              element={
                <ProtectedRecruiterRoute>
                  <RecruiterLayout>
                    <ViewAllApplication role={role} />
                  </RecruiterLayout>
                </ProtectedRecruiterRoute>
              }
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />

          {/* <Route path="/" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// <Route path="/adminpage" element={<AdminPage />} />
// <Route path="/user/:id" element={<UserDetailsPage />} />
// <Route path="/" element={<Home />} />
// <Route path="/searchpage" element={<SearchPage />} />
// <Route path="/apply" element={<Apply />} />
