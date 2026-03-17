import { useState, useEffect } from "react";
import axiosClient from "../../helpers/axiosClient";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import AdminUpdatePasswordModal from "./AdminUpdatePasswordModal";

export default function AdminProfile() {

  const [adminData, setAdminData] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAdminData = async() => {
      setLoading(true);
      const res = await axiosClient.get("/admin/profile");
      if(res.data.success) {
        setAdminData(res.data.adminData);
      } else {
        toast.error(res.data.message || "Failed to fetch data!");
      }
      setLoading(false);
    }

    fetchAdminData();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSave = async() => {
    if (!validateEmail(adminData.email)) {
      return toast.error("Please enter a valid email address!");
    }
    setButtonLoading(true);
    try {
      const res = await axiosClient.post("/admin/update/credentials", adminData);
      if (res.data.success) {
        toast.success("Profile updated successfully!");
        setEditing(false);
      } else {
        toast.error(res.data.message || "Failed to update profile!");
      }
    } catch (error) {
      toast.error("Error updating profile!");
    } finally {
      setButtonLoading(false);
    }
  }

  if(loading) {
    return (
      <div className="flex justify-center items-center">
        Loading...
      </div>
    )
  }

  return (
    <>
      <div className="flex justify-center items-center bg-neutral-50 h-screen">
        <div className="bg-white p-3 shadow-md rounded-md w-md">
          <h1 className="text-2xl mb-2">Profile</h1>
          <label className="block mb-2">Name</label>
          <input
            className="w-full mb-4 p-2 border rounded-md"
            value={adminData.name}
            onChange={(e) =>
              setAdminData({ ...adminData, name: e.target.value })
            }
            disabled={!editing}
          />

          <label className="block mb-2">Email</label>
          <input
            className="w-full mb-4 p-2 border rounded-md"
            value={adminData.email}
            onChange={(e) =>
              setAdminData({ ...adminData, email: e.target.value })
            }
            disabled={!editing}
          />

          {editing ? (
            <div className="flex g-2">
              <button
                className="bg-green-500 hover:bg-green-600 transition text-white py-2 px-4 rounded-md  mb-4 cursor-pointer w-full mr-2"
                onClick={handleSave}
                disabled={buttonLoading}
              >
                {buttonLoading ? (
                  <span className="flex justify-center">
                    <FaSpinner className="animate-spin" />
                  </span>
                ) : (
                  <>Save Changes</>
                )}
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 transition text-white py-2 px-4 rounded-md  mb-4 cursor-pointer w-full"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 transition text-white py-2 px-4 rounded-md mb-4 cursor-pointer w-full"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 transition text-white py-2 px-4 rounded-md mb-4 cursor-pointer w-full"
                onClick={() => setIsModalOpen(true)}
              >
                Change Password
              </button>
            </div>
          )}
        </div>
      </div>
      <AdminUpdatePasswordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}  />
    </>
  );
}