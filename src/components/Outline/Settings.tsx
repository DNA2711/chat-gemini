"use client";
import SearchIcon from "@mui/icons-material/Search";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ToneSelector from "./ToneSelector";
import AuthorSelector from "./AuthorSelection";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';

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
    <div className="space-y-2">
      <h3 className="text-black font-semibold dark:text-white">Advanced Settings</h3>
      {/* <button className="font-semibold text-neutral-800 dark:text-neutral-300 align-middle space-x-3 bg-indigo-50 p-3 rounded-md">
        <span className="">Advanced Setting</span>
        <SettingsIcon className="size-5" />
      </button> */}
      <div className="space-y-6 rounded-md bg-neutral-100 dark:bg-neutral-900 px-4 py-3">
        <section className="flex flex-col space-y-2">
          <span className="text-black font-medium dark:text-white">Tone</span>
          <ToneSelector />
        </section>

        <section className="flex flex-col space-y-2">
          <span className="text-black font-medium dark:text-white">Author</span>
          <AuthorSelector />
        </section>

        <section className="space-y-2">
          <span className="text-black font-medium dark:text-white">Length</span>
          <section className="grid grid-cols-3 justify-center">
            {/* Short Button */}
            <button
              className={`w-30 text-md flex flex-col items-center justify-center space-y-1 rounded-l-md px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedLength === "Short" ? "bg-violet-500 text-white" : "bg-white text-violet-500 hover:bg-violet-200 dark:bg-zinc-800 dark:text-neutral-400"}
            `}
              onClick={() => handleLengthClick("Short")}
            >
              <span>Short</span>
            </button>

            {/* Medium Button */}
            <button
              className={`w-30 text-md flex flex-col items-center justify-center space-y-1 px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedLength === "Medium" ? "bg-violet-500 text-white" : "bg-white text-violet-500 hover:bg-violet-200 dark:bg-zinc-800 dark:text-neutral-400"}
            `}
              onClick={() => handleLengthClick("Medium")}
            >
              <span>Medium</span>
            </button>

            {/* Long Button */}
            <button
              className={`w-30 text-md flex flex-col items-center justify-center space-y-1 rounded-r-md px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedLength === "Long" ? "bg-violet-500 text-white" : "bg-white text-violet-500 hover:bg-violet-200 dark:bg-zinc-800 dark:text-neutral-400"}
            `}
              onClick={() => handleLengthClick("Long")}
            >
              <span>Long</span>
            </button>
          </section>
        </section>

        <section className="flex flex-col space-y-2">
          <span className="text-black font-medium dark:text-white">Write for...</span>
          <input
            name="full_name"
            className="text-md pointer-events-none rounded-md border-none p-5 text-black transition duration-300 ease-in-out dark:bg-zinc-800 dark:text-neutral-400"
            readOnly
          />
        </section>

        <section className="space-y-2">
          <span className="text-black font-medium dark:text-white">Image source</span>
          <section className="grid grid-cols-2 justify-center overflow-hidden rounded-md border-none  ">
            {/* Web Image Search Button */}
            <button
              className={`text-md flex w-full flex-col items-center justify-center space-y-1 px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedImageSource === "Web image search" ? "bg-violet-500 text-white" : "bg-white text-violet-500 hover:bg-violet-200 dark:bg-zinc-800 dark:text-neutral-400"}
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
              focus:outline-none dark:bg-zinc-800 dark:text-neutral-400
            `}
              disabled
            >
              <div className="flex space-x-3">
                <AutoAwesomeIcon className="size-6 text-violet-500" />
                <span>AI images</span>
              </div>
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Settings;
