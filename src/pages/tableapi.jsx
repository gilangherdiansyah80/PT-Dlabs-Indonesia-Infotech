import { useState } from "react";
import SideBar from "../components/Aside/SideBar";
import ApiTable from "../components/Table/ApiTable";

const TableApi = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className="w-full flex min-h-screen">
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
          <h1 className="text-2xl font-bold">Table Api</h1>
        </header>

        <section>
          <ApiTable />
        </section>
      </main>
    </main>
  );
};

export default TableApi;
