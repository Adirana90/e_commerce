import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong, FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-[#021526] px-5 py-2 flex justify-between items-center">
      <div className="">
        <img className="h-24 pl-4" src="../../public/logoNobg.png" alt="" />
      </div>
      <nav className="flex justify-end w-[50rem]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#5ae70f] px-4"
              : "text-[#d1d4d7] px-4 hover:text-[#94938a]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-[#5c8ab9] px-4" : "text-[#d1d4d7] px-4"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#1e2901] px-4" : "text-[#d1d4d7] px-4"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-[#5c8ab9] px-4" : "text-[#d1d4d7] px-4"
          }
        >
          Contact
        </NavLink>
      </nav>
      <div>
        <button className="text-[#d1d4d7] mx-3 rounded-full">
          <FaSearch />
        </button>
        <button className="relative overflow-hidden group text-[#d1d4d7] hover:text-black mx-3 p-[8px_24px] border-2 rounded-3xl hover:border-2  hover:border-[#6A9C89] hover:bg-[#fff]">
          <span className="absolute w-0 group-hover:w-full h-full transition-all ease-linear duration-300 top-0 left-0 bg-slate-100"></span>
          <span className="relative">Login</span>
          <FaArrowRightLong className="inline-block ml-2 group-hover:animate-slideIn" />
        </button>
        <button className="text-[#d1d4d7] mx-3 rounded-full hover:animate-bounce">
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};
