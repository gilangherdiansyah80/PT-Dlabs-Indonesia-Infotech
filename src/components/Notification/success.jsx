// eslint-disable-next-line react/prop-types
const Success = ({ title }) => {
  return (
    <section className="bg-green-500 text-black p-4 flex flex-col gap-y-3 rounded-md">
      <header>
        <section className="flex gap-x-3 items-center">
          <h1 className="text-2xl font-bold">Sukses</h1>
          <i className="fa fa-check"></i>
        </section>
      </header>

      <hr className="border-black" />

      <p className="text-gray-700">
        Selamat Anda Berhasil untuk {title} Data User
      </p>
    </section>
  );
};

export default Success;
