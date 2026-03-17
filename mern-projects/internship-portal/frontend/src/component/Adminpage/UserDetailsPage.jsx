import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const UserDetailsPage = () => {
  const { id } = useParams(); //id fetch from url
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const mockUsers = [
      {
        id: 1,
        name: "Pragati Joshi",
        email: "pragati@example.com",
        phone: "123-456-7890",
        designation: "Software Engineer",
        experience: "2 years",
        role: "candidate",
      },
      {
        id: 2,
        name: "Vaibhav Bhatiya",
        email: "bhatiya@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
      },
      {
        id: 3,
        name: "Deepti sing",
        email: "sing@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "candidate",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 4,
        name: "Aabhash kumar",
        email: "kumar@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 5,
        name: "Rohit Rasule",
        email: "rasule@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "candidate",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 6,
        name: "Aadarsh sing rajput ",
        email: "rajput@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "candidate",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 7,
        name: "Disha Jaiswal",
        email: "jaiswal@example.com",
        phone: "987-654-4210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 8,
        name: "Shreyashi Gupta ",
        email: "gupta@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "candidate",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 9,
        name: "Minal kumar",
        email: "kumar@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 10,
        name: "Rohit Desai",
        email: "Desai@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "candidate",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 11,
        name: "Chirag Shrama",
        email: "Shrama@example.com",
        phone: "987-654-3210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "candidate",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 12,
        name: "Aakash Podar",
        email: "podar@example.com",
        phone: "987-654-4210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 13,
        name: "seema Teli",
        email: "podar@example.com",
        phone: "987-654-4210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 12,
        name: "Rishit Dubey",
        email: "podar@example.com",
        phone: "987-654-4210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
        // profilePic: "https://via.placeholder.com/100"
      },
      {
        id: 13,
        name: "Dev simbbha",
        email: "podar@example.com",
        phone: "987-654-4210",
        company: "Tech Solutions Pvt. Ltd.",
        designation: "HR Manager",
        role: "recruiter",
        // profilePic: "https://via.placeholder.com/100"
      },
    ];

    //find user by iddd
    const selectedUser = mockUsers.find(user => user.id === parseInt(id));
    setUser(selectedUser);
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">User Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-700">📧 {user.email}</p>
        <p className="text-gray-700">📞 {user.phone}</p>
        <p className="text-gray-800 font-medium">{user.designation || "N/A"}</p>
        {user.role === "recruiter" && <p className="text-gray-800 font-bold">Company: {user.company}</p>}
      </div>
    </div>
  );
};

export default UserDetailsPage;
