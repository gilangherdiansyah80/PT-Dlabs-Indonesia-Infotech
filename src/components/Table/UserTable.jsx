const UserTable = () => {
  return (
    <table className="text-black border-black border-2">
      <thead>
        <tr>
          <th className="border-black border-2 p-3">No.</th>
          <th className="border-black border-2 p-3">Nama</th>
          <th className="border-black border-2 p-3">Email</th>
          <th className="border-black border-2 p-3">Umur</th>
          <th className="border-black border-2 p-3">Status Keanggotaan</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td className="border-black border-2 p-3">1</td>
          <td className="border-black border-2 p-3">Gilang Herdiansyah</td>
          <td className="border-black border-2 p-3">
            gilangherdiansyah404@gmail.com
          </td>
          <td className="border-black border-2 p-3">23</td>
          <td className="border-black border-2 p-3">Aktif</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
