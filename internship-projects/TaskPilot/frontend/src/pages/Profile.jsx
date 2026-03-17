import React, { useContext, useEffect, useState } from "react";
import ProfileCard from "../Components/ProfileCard";
import ProfileInfoCard from "../Components/ProfileInfoCard";
import RecentActivityCard from "../Components/RecentActivityCard";
import NotificationSettingsCard from "../Components/NotificationSettingsCard";
import EditProfileForm from "../Components/EditProfileForm";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { currentUser } = useContext(CurrentUserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // Optionally show a loader while loading user data
  if (currentUser === null) return null;

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <button
            className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileCard />
          <ProfileInfoCard
            email={currentUser.email}
            contact={currentUser.contact}
            role={currentUser.role}
            location={currentUser.location}
            skills={currentUser.skills}
          />
          <RecentActivityCard />
          <NotificationSettingsCard />
        </div>

        {isModalOpen && (
          <EditProfileForm
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Profile;