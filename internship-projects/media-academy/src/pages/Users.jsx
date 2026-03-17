import React from "react";
const Users = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      registration_date: "2023-01-15",
      last_login: "2023-01-27",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      registration_date: "2023-01-17",
      last_login: "2023-01-28",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      registration_date: "2023-02-01",
      last_login: "2023-02-14",
      status: "Active",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      registration_date: "2023-03-05",
      last_login: "2023-03-20",
      status: "Active",
    },
  ];

  return (
    <div className='users-container'>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Last Login</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registration_date}</td>
              <td>{user.last_login}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
