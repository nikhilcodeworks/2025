import RecruiterSidebar from "../RecruiterSidebar/RecruiterSidebar";
import RecruiterNavbar from "../RecruiterNavbar/RecruiterNavbar";
import { useState } from "react";

export default function RecruiterLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  
  return (
    <div className="flex">
      {/* Sidebar */}
      <RecruiterSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content (Takes full screen when sidebar is closed) */}
      <div
        className={`flex-1 min-h-screen transition-all duration-300 
        ${sidebarOpen ? "ml-0 md:ml-64 lg:ml-64" : "ml-0 md:ml-64"}`}
      >
            <RecruiterNavbar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />

        <main className="mt-16 p-5">
          {children}
        </main>
      </div>
    </div>
  );
}
