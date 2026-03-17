import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCourse, setFilterCourse] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("enrolledStudents")) || [];
    const updatedStudents = storedStudents.map((student) => {
      const lastLoginDate = new Date(student.lastLogin);
      const today = new Date();
      const timeDiff = Math.floor((today - lastLoginDate) / (1000 * 60 * 60 * 24)); // Difference in days

      let newStatus = student.status;
      if (student.status !== "Completed") {
        newStatus = timeDiff > 1 ? "Inactive" : "Active";
      }

      return {
        ...student,
        status: newStatus,
        lastLoginStatus: timeDiff > 1 ? `Not logged in for ${timeDiff} days` : "Logged in recently",
      };
    });

    setStudents(updatedStudents);
  }, []);

  // Handle Search and Filtering
  const filteredStudents = students.filter((student) => {
    return (
      (student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterCourse ? student.course === filterCourse : true) &&
      (filterStatus ? student.status === filterStatus : true)
    );
  });

  // Handle Editing Student
  const handleEdit = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.email === updatedStudent.email ? updatedStudent : student
    );
    setStudents(updatedStudents);
    localStorage.setItem("enrolledStudents", JSON.stringify(updatedStudents));
    setSelectedStudent(null);
  };

  // Handle Delete Student
  const handleDelete = (email) => {
    const updatedStudents = students.filter((student) => student.email !== email);
    setStudents(updatedStudents);
    localStorage.setItem("enrolledStudents", JSON.stringify(updatedStudents));
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold text-center mb-6">📊 Dashboard</h2>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none"
        />
        <select
          value={filterCourse}
          onChange={(e) => setFilterCourse(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600"
        >
          <option value="">All Courses</option>
          <option value="Video Production">Video Production</option>
          <option value="Photography">Photography</option>
          <option value="Editing and Post-Production">Editing & Post-Production</option>
          <option value="Digital Marketing for Media">Digital Marketing</option>
          <option value="Sound Design">Sound Design</option>
          <option value="Content Creation for Social Media">Content Creation</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Enrollment Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg p-4 shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Course</th>
              <th className="p-2">Enrollment Date</th>
              <th className="p-2">Last Login</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.email} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.email}</td>
                  <td className="p-2">{student.course}</td>
                  <td className="p-2">{student.date}</td>
                  <td className="p-2">{student.lastLoginStatus}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-lg text-white ${
                        student.status === "Active"
                          ? "bg-green-500"
                          : student.status === "Inactive"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      className="text-blue-400 hover:underline mr-3"
                      onClick={() => setSelectedStudent(student)}
                    >
                      View
                    </button>
                    <button
                      className="text-red-400 hover:underline"
                      onClick={() => handleDelete(student.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Viewing and Editing User Details */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">📋 Student Details</h3>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
            <p><strong>Phone:</strong> {selectedStudent.phone}</p>
            <p><strong>Address:</strong> {selectedStudent.address}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Enrollment Date:</strong> {selectedStudent.date}</p>
            <p><strong>Last Login:</strong> {selectedStudent.lastLoginStatus}</p>
            <p><strong>Status:</strong> {selectedStudent.status}</p>

            {/* Edit Status */}
            <div className="mt-4">
              <label className="block text-sm">Update Status:</label>
              <select
                value={selectedStudent.status}
                onChange={(e) =>
                  setSelectedStudent({ ...selectedStudent, status: e.target.value })
                }
                className="w-full px-3 py-2 mt-1 bg-gray-700 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-between">
              <button onClick={() => handleEdit(selectedStudent)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Save
              </button>
              <button onClick={() => setSelectedStudent(null)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
