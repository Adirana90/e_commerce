import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong, FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-[#1e201e] px-5 py-2 flex justify-between items-center">
      <div className="">
        <img className="h-24 pl-4" src="../../public/go.png" alt="" />
      </div>
      <nav className="flex justify-end">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#5c8ab9] p-4" : "text-[#d1d4d7] p-4"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-[#5c8ab9] p-4" : "text-[#d1d4d7] p-4"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#5c8ab9] p-4" : "text-[#d1d4d7] p-4"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-[#5c8ab9] p-4" : "text-[#d1d4d7] p-4"
          }
        >
          Contact
        </NavLink>
      </nav>
      <div>
        <button className="text-[#d1d4d7] mx-3 rounded-full hover:animate-ping">
          <FaSearch />
        </button>
        <button className=" text-[#d1d4d7] mx-3 p-[8px_24px] border-2 hover:py-[10px] rounded-3xl ">
          Login
          <FaArrowRightLong className="inline-block ml-2 h-5" />
        </button>
        <button className="text-[#d1d4d7] mx-3 rounded-full hover:animate-bounce">
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};
