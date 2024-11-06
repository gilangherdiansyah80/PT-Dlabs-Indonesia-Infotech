import { useState, useEffect } from "react";

const ApiTable = () => {
  // State untuk menyimpan data pengguna, loading, dan error
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data pengguna
  const fetchUsers = async () => {
    try {
      // Mengambil data dari API GitHub
      const response = await fetch("https://api.github.com/users");
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      const data = await response.json();
      setUsers(data); // Menyimpan data pengguna ke dalam state
      setLoading(false); // Menghentikan loading
    } catch (error) {
      setError(error.message); // Menangani error jika pengambilan data gagal
      setLoading(false); // Menghentikan loading meskipun gagal
    }
  };

  // Mengambil data pengguna saat komponen pertama kali dimuat
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Tampilkan pesan loading jika data masih diambil */}
      {loading && <div>Loading...</div>}

      {/* Tampilkan pesan error jika terjadi kesalahan */}
      {error && <div className="text-red-600">{`Error: ${error}`}</div>}

      {/* Tampilkan tabel dengan data pengguna jika tidak ada error */}
      {!loading && !error && users.length > 0 && (
        <div className="overflow-x-auto">
          {" "}
          {/* Membungkus tabel dengan div untuk scroll */}
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-blue-400">
              <tr>
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Avatar</th>
                <th className="border px-4 py-2">Profile URL</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.login}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.html_url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApiTable;
