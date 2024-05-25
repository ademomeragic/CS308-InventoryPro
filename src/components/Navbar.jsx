import { FaSearch } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="bg-light-blue px-7 py-3 flex justify-between w-full">
        <div className="items-center text-2xl">
          <span className="text-white font-bold">InventoryPro</span>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="relative md:w-65">
            <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
              <button className="p-1 focus:outline-none text-white md:text-white">
                <FaSearch />
              </button>
            </span>
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 rounded-xl outline-none hidden md:block bg-lighter-blue text-white"
            />
          </div>
          <div className="text-white">
            <BiBell className="w-6 h-6" />
          </div>
          <div className=" text-white font-semibold ">Adem Omeragic</div>
          <div className="relative">
            <button className="text-white group">
              <HiOutlineUserCircle className="w-7 h-7 mt-1" />
              <div className="z-10 hidden absolute bg-white rounded-lg shadow w-28 group-focus:block top-full right-0">
                <ul className="py-2 text-sm text-gray-950">
                  <li>
                    <a href="">Profile</a>
                  </li>
                  <li>
                    <a href="">Settings</a>
                  </li>
                  <li>
                    <a href="">Log Out</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
