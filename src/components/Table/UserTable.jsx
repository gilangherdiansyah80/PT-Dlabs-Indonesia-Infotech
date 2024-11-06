import { useState } from "react";
import Filter from "../Filter/Filter";

/* eslint-disable react/prop-types */
const UserTable = ({ users, editUser, deleteUser }) => {
  const [statusFilter, setStatusFilter] = useState("all"); // Filter status
  const [sortBy, setSortBy] = useState("name"); // Kolom untuk sorting

  // Fungsi untuk menangani perubahan filter status
  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  // Fungsi untuk menangani perubahan sorting
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Fungsi untuk mengurutkan data berdasarkan kolom yang dipilih
  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); // Urutkan berdasarkan nama
    } else if (sortBy === "age") {
      return a.age - b.age; // Urutkan berdasarkan umur
    } else if (sortBy === "status") {
      return a.status.localeCompare(b.status); // Urutkan berdasarkan status
    }
    return 0;
  });

  // Fungsi untuk memfilter data berdasarkan status
  const filteredUsers = sortedUsers.filter((user) => {
    if (statusFilter === "all") return true; // Menampilkan semua data
    return user.status === statusFilter; // Filter berdasarkan status
  });

  return (
    <section>
      {/* Filter Status && Sorting */}
      <Filter
        statusFilter={statusFilter}
        handleStatusFilterChange={handleStatusFilterChange}
        sortBy={sortBy}
        handleSortChange={handleSortChange}
      />

      {/* Tabel Data Pengguna */}
      <div className="overflow-x-auto">
        <table className="border-collapse border border-black text-center w-full">
          <thead className="bg-blue-400">
            <tr>
              <th className="border-collapse border border-black p-3">No.</th>
              <th className="border-collapse border border-black p-3">Name</th>
              <th className="border-collapse border border-black p-3">Email</th>
              <th className="border-collapse border border-black p-3">Age</th>
              <th className="border-collapse border border-black p-3">
                Status
              </th>
              <th className="border-collapse border border-black p-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td className="border-collapse border border-black p-3">
                  {index + 1}
                </td>
                <td className="border-collapse border border-black p-3">
                  {user.name}
                </td>
                <td className="border-collapse border border-black p-3">
                  {user.email}
                </td>
                <td className="border-collapse border border-black p-3">
                  {user.age}
                </td>
                <td className="border-collapse border border-black p-3">
                  {user.status}
                </td>
                <td className="border-collapse border border-black p-3">
                  <section className="flex gap-x-3 justify-center">
                    <button
                      onClick={() => editUser(user.id, user)} // Mengirim ID pengguna ke fungsi edit
                      className="bg-green-600 text-white rounded-md p-3"
                    >
                      Edit User
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)} // Mengirim ID pengguna ke fungsi delete
                      className="bg-red-600 text-white rounded-md p-3"
                    >
                      Delete User
                    </button>
                  </section>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserTable;
