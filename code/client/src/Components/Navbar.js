import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex items-center justify-center gap-2 overflow-x-scroll whitespace-nowrap text-white scrollbar-hide md:gap-5">
          <img
            className="cursor-pointer"
            src="/assets/ESPORTS-TEAM-01.png"
            width={70}
            alt="logo"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Link to={"/"} className="cursor-pointer font-bold md:text-xl">
            <i className="fa-solid fa-house-chimney mr-3 text-green-400"></i>
            HOME
          </Link>
          <div className="cursor-pointer  font-bold md:text-xl">
            TESTIMONIAL
          </div>
          <div className="cursor-pointer  font-bold md:text-xl">ABOUT US</div>
          <div className="cursor-pointer  font-bold md:text-xl">DONATE</div>
          <div className="mr-4 cursor-pointer  font-bold md:text-xl">FAQ</div>
        </div>
        <div className="hidden gap-5 md:flex">
          <div className="relative flex items-center justify-end">
            <input
              type="text"
              className="rounded-2xl bg-black focus:border-0 focus:outline-none focus:ring-2 focus:ring-green-400"
              name="search"
            />
            <i className="fa-solid  fa-magnifying-glass absolute mr-3 text-slate-400"></i>
          </div>
          <div className="mr-4 flex cursor-pointer items-center justify-center ">
            <i className="fa-solid  fa-user mr-3"></i>
            <a href="http://localhost:8000/login">SIGN IN</a>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full text-black ring-1 ring-green-400">
            <i className="fa-brands fa-facebook-f flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-green-400 p-4 "></i>
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
