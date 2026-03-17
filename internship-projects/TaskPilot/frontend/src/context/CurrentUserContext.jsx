import React, { createContext, useState, useEffect } from "react";
import { getUserProfile, getProjectTaskTeams } from "../api/userApi";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const profile = await getUserProfile();
      const stats = await getProjectTaskTeams();
      if (profile && profile.success) {
        setCurrentUser({
          firstName: profile.data.first_name,
          lastName: profile.data.last_name,
          email: profile.data.email,
          contact: profile.data.phone || "Not provided",
          role: profile.data.role || "Not specified",
          location: profile.data.location || "Not specified",
          projects: stats?.data?.projectCount ?? 0,
          teams: stats?.data?.teamCount ?? 0,
          tasks: stats?.data?.taskCount ?? 0,
          skills: profile.data.tech_stack || ["Not specified"],
          profileImage: profile.data.profile_pic || "/image.png",
        });
      } else {
        console.error("Failed to fetch current user");
      }
    };
    fetchCurrentUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};