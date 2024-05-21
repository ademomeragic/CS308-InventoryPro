import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex">
      <div className=" bg-light-blue px-7 py-3 flex justify-between w-full">
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
              className="w-full px-4 py-1 pl-12 rounded-xl shadow outline-none hidden md:block bg-lighter-blue text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
