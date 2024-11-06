import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SideBar = ({ showMenu, onClick }) => {
  return (
    <aside
      className={`bg-sky-700 p-3 text-white md:w-64 md:static ${
        showMenu ? "fixed inset-0 w-full h-full z-50" : "hidden"
      } md:block`}
    >
      {/* Close Button (Only on Mobile) */}
      <i
        className="fas fa-times absolute top-4 right-4 text-white text-2xl md:hidden"
        onClick={onClick}
      ></i>

      <header className="flex flex-col gap-y-3 items-center">
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-full border-white border flex items-center justify-center">
          <i className="fas fa-user md:text-5xl"></i>
        </div>
        <h1 className="font-bold text-2xl">Data Tech</h1>
      </header>

      <hr />

      <nav className="flex justify-center">
        <ul className="flex flex-col gap-y-3 items-center">
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <Link to="/tableapi">
            <li>Table Api</li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
