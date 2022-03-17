import React from "react";

function Footer() {
  return (
    <footer className="mb-5 flex flex-col items-center justify-center gap-5">
      <img src="/assets/ESPORTS-TEAM-01.png" width={70} alt="logo" />
      <h5 className="text-xl font-semibold">
        All RIGHT RESERVED TO <span className="text-green-400">BOOST ME</span>
      </h5>
      <div className=" flex gap-5">
        <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full ring-1 ring-slate-400">
          <i className="fa-brands fa-twitch flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  bg-slate-800 p-4 "></i>
        </div>
        <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full ring-1 ring-slate-400">
          <i className="fa-brands fa-discord flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  bg-slate-800 p-4 "></i>
        </div>
        <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full ring-1 ring-slate-400">
          <i className="fa-brands fa-twitter flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  bg-slate-800 p-4 "></i>
        </div>
        <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full ring-1 ring-slate-400">
          <i className="fa-brands fa-facebook-f flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  bg-slate-800 p-4 "></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
