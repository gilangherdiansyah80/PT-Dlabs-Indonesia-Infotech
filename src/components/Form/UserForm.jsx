/* eslint-disable react/prop-types */
import { useState } from "react"; // Menambahkan useState
import useFormValidation from "../../hooks/useFormValidation";
import validateUser from "../../utils/validateUser";
import Success from "../Notification/success";
import Fail from "../Notification/fail";

const UserForm = ({ initialValues, onSubmit, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false); // State untuk menampilkan notifikasi sukses
  const [isFail, setIsFail] = useState(false); // State untuk menampilkan notifikasi gagal

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    initialValues,
    validateUser
  );

  const submitForm = (e) => {
    e.preventDefault();
    const validationErrors = handleSubmit(e);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values); // Memastikan data dikirimkan
      alert("Data Berhasil Ditambahkan");
      setIsSuccess(true);
      setIsFail(false);
      setTimeout(() => setIsSuccess(false), 3000);
    } else {
      setIsFail(true);
      setIsSuccess(false);
      setTimeout(() => setIsFail(false), 3000);
    }
  };

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-10 backdrop-blur-sm">
      <div className="bg-gray-400 rounded-md p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col gap-y-3">
        {isSuccess && (
          <Success title={initialValues.name ? "Edit" : "Tambah"} />
        )}{" "}
        {/* Menampilkan notifikasi sukses */}
        {isFail && <Fail title={initialValues.name ? "Edit" : "Tambah"} />}{" "}
        {/* Menampilkan notifikasi gagal */}
        <h2 className="text-lg font-semibold text-center">
          {initialValues.name ? "Edit User" : "Tambah User"}
        </h2>
        <form onSubmit={submitForm} className="flex flex-col gap-y-3">
          <label className="flex flex-col">
            Nama:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="border border-black p-2 rounded-md"
              placeholder="Input Your Name"
              required
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </label>
          <label className="flex flex-col">
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border border-black p-2 rounded-md"
              placeholder="example@gmail.com"
              required
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </label>
          <label className="flex flex-col">
            Umur:
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
              className="border border-black p-2 rounded-md"
              placeholder="Input Your Age"
              required
            />
            {errors.age && <p className="text-red-600">{errors.age}</p>}
          </label>
          <label className="flex flex-col">
            Status:
            <select
              name="status"
              value={values.status}
              onChange={handleChange}
              className="border border-black p-2 rounded-md"
            >
              <option value="active">Aktif</option>
              <option value="inactive">Tidak Aktif</option>
            </select>
          </label>
          <section className="flex flex-col sm:flex-row w-full gap-x-3 mt-4">
            <button
              type="submit"
              className="bg-green-600 p-3 text-white rounded-md w-full sm:w-1/2 mb-3 sm:mb-0"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 p-3 text-white rounded-md w-full sm:w-1/2"
            >
              Batal
            </button>
          </section>
        </form>
      </div>
    </section>
  );
};

export default UserForm;
