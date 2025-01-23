import React, { useEffect, useState } from "react";
import { ALPHABET_LIST, FOOTER_LIST, SOCIAL_MEDIA_LIST } from "../utils/helper";
import { Link, useSearchParams } from "react-router-dom";

const Footer = () => {
  const [alpha, setAlpha] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const getYear = new Date().getFullYear();
  useEffect(() => {
    const dominAlpha = searchParams.get("alpha");
    if (dominAlpha) {
      setAlpha(dominAlpha);
    }
  }, [searchParams]);
  const handleAlphabetChange = (letter) => {
    setAlpha(letter.toLowerCase());
    setSearchParams({ alpha: letter.toLowerCase() });
  };
  return (
    <div className="pb-[30px]">
      {/* Alphabets */}
      <div className="pt-[42px] pb-8 border-y border-light-purple overflow-auto px-5 max-lg:pt-8 max-md:py-6">
        <div className="flex items-center text-center mx-auto justify-between w-[821px]">
          {ALPHABET_LIST.map((item, index) => {
            return (
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleAlphabetChange(item);
                }}
                key={index}
                to="#"
                className={`flex items-center hover:bg-custom-black size-7 justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl max-md:size-5 ${
                  alpha === item.toLowerCase() ? "!text-white !bg-black" : ""
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      {/* Footer items */}
      <div className="pt-[60px] container px-5 flex gap-32 items-center max-xl:gap-28 max-lg:flex-col max-lg:justify-center max-lg:gap-24 max-md:gap-12 max-sm:gap-8 max-lg:py-12 max-md:py-9 max-sm:py-7 pb-[89px] max-xl:pb-16">
        <div className="w-7/12 flex justify-between max-w-[598px] max-lg:w-full max-md:mx-auto max-md:flex-wrap max-md:gap-8">
          {FOOTER_LIST.map((obj, i) => (
            <div key={i}>
              <p className="text-sm font-semibold leading-custom-5xl max-md:text-xs">
                {obj.heading}
              </p>
              <ul className="pt-9 max-lg:pt-7 max-md:pt-5 max-sm:pt-3">
                {obj.item.map((val, idx) => (
                  <li
                    key={idx}
                    className={`${
                      idx === 0 ? "" : "pt-6 max-lg:pt-4 max-md:pt-2"
                    }`}
                  >
                    <Link
                      to="#"
                      className="text-sm max-md:text-xs max-sm:text-[10px] leading-custom-5xl font-normal text-custom-black hover:text-off-white duration-300 ease-linear"
                    >
                      {val}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-5/12 max-w-[398px] mx-auto max-xl:max-w-80 max-lg:text-center max-lg:w-full max-lg:max-w-none">
          <p className="text-sm font-semibold leading-custom-5xl pb-0.5">
            Follow us
          </p>
          <div className="flex flex-wrap gap-3.5 pt-6 w-full max-w-[312px] max-lg:gap- max-lg:max-w-none max-lg:mx-auto">
            {SOCIAL_MEDIA_LIST.map((obj, i) => (
              <Link
                key={i}
                to={obj.link}
                target="_blank"
                className="max-w-[312px] w-full bg-white rounded-[10px] py-3 pl-6 pr-3.5 max-lg:max-w-[220px] max-sm:max-w-[160px] max-md:text-xs max-lg:mx-auto flex justify-between items-center text-sm font-semibold leading-custom-5xl text-custom-black hover:shadow-header-shadow duration-300 ease-linear"
              >
                {obj.iconName}
                <span className="social-media-icon">{obj.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-light-purple">
        <div className="pt-[30px] w-full flex justify-between items-center text-center max-w-[1131px] mx-auto flex-wrap px-5 max-md:justify-center max-md:gap-3 max-md:pt-5">
          <p className="text-sm leading-custom-5xl text-custom-black font-normal">
            All rights reserved to Global Media Holdings Ltd. {getYear}
          </p>
          <div className="flex gap-10">
            <Link
              to="#"
              className="text-sm leading-custom-5xl text-custom-black font-normal hover:text-off-white duration-300 ease-linear"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm leading-custom-5xl text-custom-black font-normal hover:text-off-white duration-300 ease-linear"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
