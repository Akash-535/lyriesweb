import React, { useState } from "react";
import { SONGS_LIST } from "../utils/helper";

const Songs = () => {
  const [uploads, setUploads] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleChange = (e) => {
    const imgUpload = URL.createObjectURL(e);
    setUploads(imgUpload);
    setShowImage(true);
  };

  const handleRemoveImage = () => {
    setUploads(null);
    setShowImage(false);
  };

  return (
    <div className="container pt-[100px] px-5 max-lg:pt-20 max-md:pt-14 max-sm:pt-7">
      <h2 className="text-5xl leading-custom-3xl text-black-again tracking-[1.22px] pb-7 max-lg:text-center max-lg:text-4xl max-md:text-3xl max-md:pb-4">
        Songs
      </h2>
      <div className="pb-11 flex gap-[52px] items-center justify-center max-[1023.98px]:flex-wrap max-lg:gap-9 max-md:gap-6">
        <table className="w-full overflow-auto">
          <thead>
            <tr>
              <th className="w-0"></th>
              <th className="w-6/12 text-start text-sm font-semibold leading-custom-5xl max-md:w-4/12 max-md:text-xs">
                Song
              </th>
              <th className="text-end text-sm font-semibold leading-custom-5xl max-md:text-center whitespace-nowrap max-md:text-xs">
                Release Date
              </th>
              <th className="text-end text-sm font-semibold leading-custom-5xl whitespace-nowrap max-md:text-xs">
                Times Played
              </th>
            </tr>
          </thead>
          <tbody>
            {SONGS_LIST.map((obj, i) => (
              <tr key={i}>
                <td
                  className={`text-end text-sm leading-custom-5xl -translate-x-4 text-off-white font-normal max-xl:-translate-x-2 max-md:text-xs ${
                    i === 0 ? "pt-[33px] max-md:pt-6" : "pt-11 max-md:pt-7"
                  }`}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </td>
                <td
                  className={`text-sm leading-custom-5xl font-semibold whitespace-nowrap max-md:text-xs ${
                    i === 0 ? "pt-[33px] max-md:pt-6" : "pt-11 max-md:pt-7"
                  }`}
                >
                  {obj.songName}
                </td>
                <td
                  className={`text-end text-xs leading-3 pr-[26px] font-normal whitespace-nowrap max-md:text-[10px] max-md:pr-4 ${
                    i === 0 ? "pt-[33px] max-md:pt-6" : "pt-11 max-md:pt-7"
                  }`}
                >
                  Nov 4, 2023
                </td>
                <td
                  className={`text-end text-xs leading-3 font-normal whitespace-nowrap max-md:text-[10px] ${
                    i === 0 ? "pt-[33px] max-md:pt-6" : "pt-11 max-md:pt-7"
                  }`}
                >
                  {obj.played}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <div className="bg-blue-500 relative w-[300px] h-[600px] mx-5 rounded-[20px] flex items-center justify-center text-center max-[1023.98px]:w-[500px] max-[1023.98px]:h-[400px] max-md:!w-[300px]">
            <input
              type="file"
              id="my-input"
              hidden
              onChange={(e) => handleChange(e.target.files[0])}
              multiple
            />
            <label
              htmlFor="my-input"
              className={`cursor-pointer text-white ${
                showImage ? "hidden" : "block"
              }`}
            >
              Add Place
            </label>
            <img
              className={`w-[300px] h-[600px] object-cover rounded-[20px] max-[1023.98px]:w-[500px] max-[1023.98px]:h-[400px] max-md:!w-[300px] ${
                showImage ? "block" : "hidden"
              }`}
              src={uploads}
              alt="image"
            />
            <div
              className="flex flex-col gap-2 absolute top-5 right-5 cursor-pointer"
              onClick={handleRemoveImage}
            >
              <span
                className={`duration-300 ease-linear transition-all ${
                  showImage
                    ? "h-0.5 w-7 bg-white rounded-lg rotate-45 translate-y-1.5"
                    : "h-0 w-0"
                }`}
              ></span>
              <span
                className={`duration-300 ease-linear transition-all ${
                  showImage
                    ? "h-0.5 w-7 bg-white rounded-lg -rotate-45 -translate-y-1"
                    : "h-0 w-0"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
