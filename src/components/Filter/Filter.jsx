/* eslint-disable react/prop-types */

const Filter = ({
  statusFilter,
  handleStatusFilterChange,
  sortBy,
  handleSortChange,
}) => {
  return (
    <>
      <div className="mb-4">
        <label>Status Keanggotaan:</label>
        <select
          value={statusFilter}
          onChange={handleStatusFilterChange}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="all">Semua</option>
          <option value="active">Aktif</option>
          <option value="inactive">Tidak Aktif</option>
        </select>
      </div>

      <div className="mb-4">
        <label>Urutkan berdasarkan:</label>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="name">Nama</option>
          <option value="age">Umur</option>
          <option value="status">Status</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
