"use client";
import { Select } from "@headlessui/react";
import SearchIcon from "@mui/icons-material/Search";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ToneSelector from "./ToneSelector";
import AuthorSelector from "./AuthorSelection";
const Settings = () => {
  return (
    <div className="container ">
      <div className="lg:px-40 space-y-2">
        <span className="text-black dark:text-white">Settings</span>
      </div>
      <div className="lg:px-40 px-6 space-y-2">
        <section className="flex flex-col space-y-1">
          <span className="text-black dark:text-white">Tone</span>
          {/* <Select
            name="status"
            aria-label="Project status"
            className="text-black p-1 px-3 rounded-lg"
          >
            <option className="">Neutral</option>
            <option>Formal</option>
            <option>Informal</option>
            <option>Technical</option>
            <option>Professional</option>
            <option>Educational</option>
          </Select> */}
          <ToneSelector />
        </section>

        <section className="flex flex-col space-y-1">
          <span className="text-black dark:text-white">Author</span>
          {/* <Select
            name="status"
            aria-label="Project status"
            className="text-black p-1 px-3 rounded-lg "
          >
            <option>Neutral</option>
            <option>Formal</option>
            <option>Informal</option>
            <option>Technical</option>
            <option>Professional</option>
            <option>Educational</option>
          </Select> */}
          {/* <AuthorSelector /> */}
        </section>

        <section className="space-y-1">
          <span className="text-black dark:text-white">Length</span>
          <section className="flex justify-center">
            <button className="bg-white p-2 text-[#805ad5] border-1 w-30 text-md font-semibold hover:border-[#805ad5] hover:bg-[#eae7ff] flex flex-col justify-center items-center rounded-l-lg space-y-1 transition duration-300 ease-in-out">
              <span>Short</span>
            </button>
            <button className="bg-white border-1 w-30 text-[#805ad5] text-md font-semibold hover:border-[#805ad5] p-2 hover:bg-[#eae7ff] flex flex-col justify-center items-center  space-y-1 transition duration-300 ease-in-out">
              <span>Medium</span>
            </button>
            <button className="bg-white p-2 border-1 w-30 text-[#805ad5] text-md font-semibold hover:border-[#805ad5] hover:bg-[#eae7ff] flex flex-col justify-center items-center rounded-r-lg space-y-1 transition duration-300 ease-in-out">
              <span>Long</span>
            </button>
          </section>
        </section>

        <section className="space-y-1">
          <span className="text-black dark:text-white">Write for...</span>
          <textarea
            name="full_name"
            className="rounded-xl w-full h-28 p-5 text-md text-black"
            readOnly
            // value={textareaValue}
            // onChange={handleTextAreaChange}
          />
        </section>

        <section className="space-y-1">
          <span className="text-black dark:text-white">Image source</span>
          <section className="flex justify-center">
            <button className="bg-white p-2 text-[#805ad5] border-1 w-full text-md font-semibold hover:border-[#805ad5] hover:bg-[#eae7ff] flex flex-col justify-center items-center rounded-l-lg space-y-1 transition duration-300 ease-in-out">
              <div className="flex space-x-3">
                <SearchIcon className="size-6" />
                <span>Web image search</span>
              </div>
            </button>

            <button className="bg-white p-2 border-1  w-full text-md font-semibold hover:border-[#805ad5] hover:bg-[#eae7ff] flex flex-col justify-center items-center rounded-r-lg space-y-1 transition duration-300 ease-in-out">
              <div className="flex space-x-3">
                <AutoAwesomeIcon className="size-6 text-[#805ad5]" />
                <span>AI images (Coming soon)</span>
              </div>
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Settings;
