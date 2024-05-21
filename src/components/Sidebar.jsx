import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", link: "/", icon: <LuLayoutDashboard /> },
    { title: "Inventory", link: "/", icon: <MdOutlineInventory2 /> },
    { title: "Reports", link: "/", icon: <HiOutlineDocumentReport /> },
    { title: "Customers", link: "/", icon: <HiOutlineUsers /> },
    { title: "Settings", link: "/", icon: <LuSettings /> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-light-blue h-screen p-5 pt-0 ${
          open ? "w-72" : "w-20"
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
                <div className="text-xl">{menu.icon}</div>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
    </div>
  );
};

export default Sidebar;
