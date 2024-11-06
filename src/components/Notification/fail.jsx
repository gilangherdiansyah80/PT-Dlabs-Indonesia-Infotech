// eslint-disable-next-line react/prop-types
const Success = ({ title }) => {
  return (
    <section className="bg-red-700 text-white p-4 flex flex-col gap-y-3 rounded-md">
      <header>
        <section className="flex gap-x-3 items-center">
          <h1 className="text-2xl font-bold">Gagal</h1>
          <i className="fas fa-times"></i>
        </section>
      </header>

      <hr className="border-black" />

      <p className="text-gray-300">
        Selamat Anda Gagal untuk {title} Data User
      </p>
    </section>
  );
};

export default Success;
