"use client";
import SearchIcon from "@mui/icons-material/Search";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ToneSelector from "./ToneSelector";
import AuthorSelector from "./AuthorSelection";
import { useState } from "react";

const Settings = () => {
  const [selectedLength, setSelectedLength] = useState("Medium");
  const [selectedImageSource, setSelectedImageSource] =
    useState("Web image search");

  const handleLengthClick = (length: string) => {
    setSelectedLength(length);
  };
  const handleImageSourceClick = (source: string) => {
    setSelectedImageSource(source);
  };
  return (
    <div className="container">
      <div className="space-y-2 lg:px-72">
        <div className="">
          <span className="text-black dark:text-white">Settings</span>
        </div>
        <div className="">
          <div className="space-y-4 rounded-md bg-neutral-900 px-4 py-3">
            <section className="flex flex-col space-y-2">
              <span className="text-black dark:text-white">Tone</span>
              <ToneSelector />
            </section>

            <section className="flex flex-col space-y-2">
              <span className="text-black dark:text-white">Author</span>
              <AuthorSelector />
            </section>

            <section className="space-y-2">
              <span className="text-black dark:text-white">Length</span>
              <section className="grid grid-cols-3 justify-center">
                {/* Short Button */}
                <button
                  className={`w-30 text-md flex flex-col items-center justify-center space-y-1 rounded-l-md px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedLength === "Short" ? "bg-[#805ad5] text-white" : "bg-white text-[#805ad5] hover:bg-[#eae7ff] dark:bg-[#32353a] dark:text-[#a6a7af]"}
            `}
                  onClick={() => handleLengthClick("Short")}
                >
                  <span>Short</span>
                </button>

                {/* Medium Button */}
                <button
                  className={`w-30 text-md flex flex-col items-center justify-center space-y-1 px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedLength === "Medium" ? "bg-[#805ad5] text-white" : "bg-white text-[#805ad5] hover:bg-[#eae7ff] dark:bg-[#32353a] dark:text-[#a6a7af]"}
            `}
                  onClick={() => handleLengthClick("Medium")}
                >
                  <span>Medium</span>
                </button>

                {/* Long Button */}
                <button
                  className={`w-30 text-md flex flex-col items-center justify-center space-y-1 rounded-r-md px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedLength === "Long" ? "bg-[#805ad5] text-white" : "bg-white text-[#805ad5] hover:bg-[#eae7ff] dark:bg-[#32353a] dark:text-[#a6a7af]"}
            `}
                  onClick={() => handleLengthClick("Long")}
                >
                  <span>Long</span>
                </button>
              </section>
            </section>

            <section className="flex flex-col space-y-2">
              <span className="text-black dark:text-white">Write for...</span>
              <input
                name="full_name"
                className="text-md pointer-events-none rounded-md border-none p-5 text-black transition duration-300 ease-in-out dark:bg-[#32353a] dark:text-[#a6a7af]"
                readOnly
              />
            </section>

            <section className="space-y-2">
              <span className="text-black dark:text-white">Image source</span>
              <section className="grid grid-cols-2 justify-center overflow-hidden rounded-md border-none  ">
                {/* Web Image Search Button */}
                <button
                  className={`text-md flex w-full flex-col items-center justify-center space-y-1 px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedImageSource === "Web image search" ? "bg-[#805ad5] text-white" : "bg-white text-[#805ad5] hover:bg-[#eae7ff] dark:bg-[#32353a] dark:text-[#a6a7af]"}
            `}
                  onClick={() => handleImageSourceClick("Web image search")}
                >
                  <div className="flex space-x-3">
                    <SearchIcon className="size-6 text-white" />{" "}
                    <span>Web image search</span>
                  </div>
                </button>
                {/* AI Images Button (still disabled) */}
                <button
                  className={`text-md flex w-full cursor-not-allowed flex-col items-center justify-center space-y-1 bg-gray-200 px-4 py-2 font-semibold opacity-50 transition duration-300 ease-in-out
              focus:outline-none dark:bg-[#32353a] dark:text-[#a6a7af]
            `}
                  disabled
                >
                  <div className="flex space-x-3">
                    <AutoAwesomeIcon className="size-6 text-[#805ad5]" />
                    <span>AI images</span>
                  </div>
                </button>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
