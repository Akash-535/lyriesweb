import React from "react";
import { LogoIcon, SearchIcon } from "../utils/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full max-w-[1128px] mx-auto shadow-header-shadow rounded-[20px] flex items-center justify-between py-[10px] max-md:flex-wrap max-lg:gap-6 max-sm:gap-2 mt-[10px]">
      <Link to="/" className="ps-[38px] max-md:ps-6">
        <LogoIcon />
      </Link>
      <div className=" max-md:hidden flex items-center rounded-full w-full max-w-[650px] justify-between border border-solid border-light-purple ps-[30px] pe-2 max-lg:ps-2">
        <input
          type="text"
          placeholder="What do you feel like listening to right now ?"
          className=" placeholder:text-sm text-sm font-normal placeholder:font-normal leading-custom-5xl placeholder:left-6 placeholder:text-custom-gray text-custom-gray outline-none w-full bg-transparent"
        />
        <p className="flex items-center justify-center h-[39px] w-10 rounded-full bg-custom-black cursor-pointer my-[6px]">
          <SearchIcon />
        </p>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-darkBlack text-sm leading-6 font-normal transition-all ease-linear duration-300 hover:scale-110">
          Login
        </button>
        <button className="me-3 bg-custom-black border border-solid border-transparent hover:bg-white hover:text-custom-black transition-all ease-linear duration-300 hover:border-custom-black text-white font-medium text-sm leading-6 rounded-[9px] w-full min-w-[105px] max-sm:min-w-[85px] py-[9px] h-[43px]">
          Sign Up
        </button>
      </div>
      <div className="md:hidden flex mx-3 items-center rounded-full w-full max-w-[650px] justify-between border border-solid border-light-purple ps-[30px] pe-2 max-md:ps-2">
        <input
          type="text"
          placeholder="What do you feel ?"
          className=" placeholder:text-sm text-sm font-normal placeholder:font-normal leading-6 placeholder:left-6 placeholder:text-custom-gray outline-none max-md:text-xs bg-transparent w-6/12"
        />
        <p className="flex items-center justify-center h-[39px] min-w-[39px] rounded-full bg-custom-black cursor-pointer my-[6px]">
          <SearchIcon />
        </p>
      </div>
    </div>
  );
};

export default Header;
