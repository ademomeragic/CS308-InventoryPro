import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom"; // Import Link

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", link: "/dashboard", icon: <LuLayoutDashboard /> },
    { title: "Inventory", link: "/inventory", icon: <MdOutlineInventory2 /> },
    { title: "Reports", link: "/reports", icon: <HiOutlineDocumentReport /> },
    { title: "Customers", link: "/customers", icon: <HiOutlineUsers /> },
    { title: "Settings", link: "/settings", icon: <LuSettings /> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-light-blue h-screen p-5 pt-0 ${
          open ? "w-52" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-light-blue text-3xl rounded-full absolute -right-3 top-10 border border-light-blue cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div>
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className="text-white font-bold text-md flex items-center gap-x-4 cursor-pointer
                p-2 hover:bg-light-white rounded-md mt-2"
              >
                <Link to={menu.link} className="flex items-center gap-x-4">
                  <div className="text-xl">{menu.icon}</div>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
