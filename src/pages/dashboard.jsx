import { useState, useEffect } from "react";
import UserTable from "../components/Table/UserTable";
import UserForm from "../components/Form/UserForm";
import SideBar from "../components/Aside/SideBar";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      email: "john@example.com",
      age: 25,
      status: "active",
    },
    {
      id: 2,
      name: "Doe",
      email: "doe@example.com",
      age: 30,
      status: "inactive",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    age: "",
    status: "active",
  });
  const [showMenu, setShowMenu] = useState(false);

  // Load data dari localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Simpan data ke localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Menambah pengguna baru
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Edit pengguna berdasarkan id
  const editUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
  };

  // Menghapus pengguna berdasarkan id
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    alert("Data Berhasil Dihapus");
  };

  // Tampilkan form untuk tambah atau edit data
  const handleAddClick = () => {
    setFormValues({ name: "", email: "", age: "", status: "active" });
    setEditingIndex(null);
    setShowForm(true);
  };

  const handleEditClick = (index) => {
    setFormValues(users[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleFormSubmit = (user) => {
    if (editingIndex !== null) {
      editUser(users[editingIndex].id, user);
    } else {
      addUser(user);
    }
    setShowForm(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className="w-full flex h-screen">
      {/* Sidebar */}
      <SideBar onClick={handleMenuClick} showMenu={showMenu} />
      {/* Main Content */}
      <main className="flex p-3 flex-col w-full gap-y-5">
        <header className="flex justify-between items-center">
          {/* Hamburger Button */}
          <i
            className={`fas ${
              showMenu ? "fa-times" : "fa-bars"
            } md:hidden text-2xl`}
            onClick={handleMenuClick}
          ></i>
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <i
            className="fas fa-plus-circle text-2xl"
            onClick={handleAddClick}
          ></i>
        </header>

        <section>
          <UserTable
            users={users}
            editUser={handleEditClick}
            deleteUser={deleteUser}
          />
          {showForm && (
            <UserForm
              initialValues={formValues}
              onSubmit={handleFormSubmit}
              onClose={() => setShowForm(false)}
            />
          )}
        </section>
      </main>
    </main>
  );
};

export default Dashboard;
