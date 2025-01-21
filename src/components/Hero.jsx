import React, { useState } from "react";
import Header from "../common/Header";
import { ALPHABET_LIST } from "../utils/helper";
import { DownArrowIcon } from "../utils/icons";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Hero = () => {
  const [domin, setDomain] = useSearchParams();
  const [word, setWord] = useState("HIT ME HARD AND SOFT");
  const [alpha, setAlpha] = useState();

  domin.get("e");
  const changeTextHandler = (e) => {
    setDomain({ e });
    setWord(`HIT ME HARD AND ${e.toUpperCase()}`);
  };
  const handleChange = (newWord) => setAlpha(`${newWord}`);
  return (
    <div className="pt-[10px] pb-10 bg-off-white px-4">
      <Header />
      <div className="container mx-auto">
        <div className="flex items-center gap-3.5 max-md:gap-1.5 pt-[17px] max-xl:overflow-x-auto pb-2 max-w-[1059px] pl-2.5">
          <div className="flex items-center gap-1.5">
            <button
              className={`min-w-[49px] h-[29px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-300 hover:bg-black hover:text-white font-normal text-custom-black ${
                domin.get("e") === "all" ? "bg-black !text-white" : ""
              }`}
              onClick={() => changeTextHandler("all")}
            >
              All
            </button>
            <button
              className={`min-w-[47px] h-[29px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-300 hover:bg-black hover:text-white font-normal text-custom-black ${
                domin.get("e") === "pop" ? "bg-black !text-white" : ""
              }`}
              onClick={() => changeTextHandler("pop")}
            >
              Pop
            </button>
            <button
              className={`h-[29px] min-w-[54px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-300 hover:bg-black hover:text-white font-normal text-custom-black ${
                domin.get("e") === "rock" ? "bg-black !text-white" : ""
              }`}
              onClick={() => changeTextHandler("rock")}
            >
              Rock
            </button>
            <button
              className={`flex items-center gap-1 justify-center h-[29px] min-w-[64px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-300 hover:bg-black hover:text-white font-normal text-custom-black ${
                domin.get("e") === "song"
                  ? "bg-black !text-white button-arrow"
                  : ""
              }`}
              onClick={() => changeTextHandler("song")}
            >
              More <DownArrowIcon />
            </button>
          </div>
          <div className="flex items-center gap-[2px]">
            {ALPHABET_LIST.map(function (item, index) {
              return (
                <Link
                  onClick={() => handleChange(item)}
                  key={index}
                  to="#"
                  className="flex items-center hover:bg-custom-black size-7 justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl max-md:size-5"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="bg-custom-black rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20 max-sm:justify-center">
          <h1 className="font-Montserrat text-5xl leading-custom-3xl text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl">
            {word}
          </h1>
          <img
            src="./assets/images/hero-img.webp"
            alt="hero img"
            className="size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4"
          />
          <div className="absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6 max-lg:gap-4 max-md:gap-3">
            <div className="size-[206px] max-lg:size-32 max-sm:size-20 overflow-hidden rounded-full">
              <img
                src="./assets/images/billie-img.webp"
                alt="profile"
                className="size-[206px] max-lg:size-32 max-sm:size-20 hover:scale-110 duration-300 ease-linear"
              />
            </div>
            <div>
              <p className="font-semibold text-[32px] max-lg:text-2xl leading-custom-2xl text-white max-sm:text-lg">
                Billie Eilish {alpha}
              </p>
              <p className="font-montserrat font-medium text-base leading-5 text-white pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm font-Montserrat">
                Relesed May 17, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
