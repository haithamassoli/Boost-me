import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../util/Auth";
import Cookies from "js-cookie";

function Navbar() {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    auth.logout();
  };
  return (
    <>
      {isOpen && (
        <div className="absolute h-screen w-screen bg-black/30 "></div>
      )}
      {isOpen && (
        <div className="absolute top-0 h-screen w-[500px] max-w-[320px] bg-gray-300 md:w-[500px]">
          <i
            className="fa-solid fa-2xl fa-xmark absolute top-6 right-3 cursor-pointer"
            onClick={() => setIsOpen(false)}
          ></i>
          <div className="mt-20 flex flex-col items-center justify-center">
            <img
              className="cursor-pointer"
              src="/assets/ESPORTS-TEAM-01.png"
              width={70}
              alt="logo"
            />
          </div>
        </div>
      )}
      <nav className="flex items-center justify-center bg-[#11141D] px-10 py-5 md:justify-between">
        <div className="flex items-center justify-center gap-2 overflow-x-scroll whitespace-nowrap text-white scrollbar-hide md:gap-3">
          <img
            className="cursor-pointer"
            src="/assets/ESPORTS-TEAM-01.png"
            width={70}
            alt="logo"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Link to={"/"} className="cursor-pointer font-bold">
            <i className="fa-solid fa-house-chimney mr-1 text-green-400"></i>
            HOME
          </Link>
          <div className="cursor-pointer  font-bold">TESTIMONIAL</div>
          <div className="cursor-pointer  font-bold">ABOUT US</div>
          <div className="cursor-pointer  font-bold">DONATE</div>
          <div className="mr-4 cursor-pointer  font-bold">FAQ</div>
        </div>
        <div className="hidden gap-3 md:flex">
          <div className="relative flex items-center justify-end">
            <input
              type="text"
              className="rounded-2xl border-2 border-slate-600 bg-black py-1 focus:border-0 focus:outline-none focus:ring-2 focus:ring-green-400"
              name="search"
            />
            <i className="fa-solid fa-magnifying-glass absolute mr-3 text-slate-400"></i>
          </div>

          <div className="group relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full text-black ring-1 ring-[#3FB9BE]">
            <i className="fa-solid fa-user flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#3FB9BE] p-4 "></i>
            <div className="absolute -left-40 top-10 z-40 hidden w-48 items-center justify-center gap-4 rounded-2xl bg-black p-10 text-white group-hover:flex group-hover:flex-col">
              {Cookies.get("auth") ? (
                <div
                  className="flex cursor-pointer items-center justify-center hover:text-[#3FB9BE]"
                  onClick={logout}
                >
                  Logout
                </div>
              ) : (
                <>
                  <Link to={"/signup"} className="hover:text-[#3FB9BE]">
                    Signup
                  </Link>
                  <Link to={"/login"} className="hover:text-[#3FB9BE]">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <header className="flex w-full items-center gap-5 overflow-x-scroll bg-green-300 px-2 py-2 font-semibold text-black scrollbar-hide md:justify-start md:px-16">
        <div className="ml-3 cursor-pointer md:px-0">ACTION</div>
        <div className="cursor-pointer">FIGHTING</div>
        <div className="cursor-pointer">ARCADE</div>
        <div className="cursor-pointer">ADVENTURE</div>
        <div className="mr-3 cursor-pointer md:px-0">CASUAL</div>
      </header>
    </>
  );
}

export default Navbar;
