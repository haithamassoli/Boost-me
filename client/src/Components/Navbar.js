import React, { useState } from "react";

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
        <div className="flex  items-center justify-center gap-2 text-white md:gap-5">
          <img
            className="cursor-pointer"
            src="/assets/ESPORTS-TEAM-01.png"
            width={70}
            alt="logo"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="cursor-pointer text-lg font-bold md:text-xl">
            ACTION
          </div>
          <div className="cursor-pointer text-lg font-bold md:text-xl">
            ADVENTURE
          </div>
          <div className="cursor-pointer text-lg font-bold md:text-xl">
            ARCADE
          </div>
          <div className="cursor-pointer text-lg font-bold md:text-xl">
            FIGHTING
          </div>
        </div>
        <div className="hidden gap-5 md:flex">
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full text-black ring-1 ring-green-400">
            <i className="fa-brands fa-twitch flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-green-400 p-4 "></i>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full text-black ring-1 ring-green-400">
            <i className="fa-brands fa-discord flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-green-400 p-4 "></i>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full text-black ring-1 ring-green-400">
            <i className="fa-brands fa-twitter flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-green-400 p-4 "></i>
          </div>
          <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full text-black ring-1 ring-green-400">
            <i className="fa-brands fa-facebook-f flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-green-400 p-4 "></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
