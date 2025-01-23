import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollTop, setScrollToTop] = useState(false);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const setHendler = () => {
    setScrollToTop(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", setHendler);
  });

  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="fixed right-[10px] bottom-[10px] animate-bounce z-40"
        >
          <img
            className="size-10 max-md:size-8"
            src="./assets/images/back-to-top.webp"
            alt="back to top"
          />
        </button>
      )}
    </>
  );
};
export default BackToTop;
