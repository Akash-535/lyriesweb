import React, { useEffect, useState } from "react";
import { ALPHABET_LIST } from "../utils/helper";
import { Link, useSearchParams } from "react-router-dom";

const Footer = () => {
  const [alpha, setAlpha] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
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
    <div>
      <div className="flex items-center gap-[2px]">
        {ALPHABET_LIST.map((item, index) => {
          return (
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleAlphabetChange(item);
              }}
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
  );
};

export default Footer;
