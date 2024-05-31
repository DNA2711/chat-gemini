"use client";
import { Select } from "@headlessui/react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import TextArea from "./TextArea";

const Promt2 = () => {
  const [textareaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <section className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Generate
          </h2>
        </section>
      </div>
      <div className="">
        <div className="space-y-2">
          <section className="space-y-3">
            <h3 className="text-black font-semibold dark:text-white">Basic Settings</h3>
            <div className="flex space-x-2">
              <div className="rounded-md border-none p-1 px-3 text-sm transition duration-300 ease-in-out bg-white dark:bg-[#32353a]">
                <span className="text-neutral-500 dark:text-white font-semibold">Website</span>
              </div>
              <div className="rounded-md border-none p-1 px-3 text-sm transition duration-300 ease-in-out bg-white dark:bg-[#32353a]">
                <span className="text-neutral-500 dark:text-white font-semibold">Posts</span>
              </div>
              <div className="rounded-md border-none p-1 px-3 text-sm transition duration-300 ease-in-out bg-white dark:bg-[#32353a]">
                <span className="text-neutral-500 dark:text-white font-semibold">English</span>
              </div>
            </div>
          </section>

          <section className="relative">
            <TextArea
              value={textareaValue}
              onChange={handleTextAreaChange}
              placeholder="Describe what you'd like to make..."
              className="text-md w-full items-center break-words rounded-md border-none pr-10 transition duration-300 ease-in-out dark:bg-[#32353a] dark:text-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button>
                <ArrowPathRoundedSquareIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </section>

          {textareaValue && (
            <section className="flex justify-center space-x-2">
              <Button className="text-md inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-black opacity-100 shadow-inner transition-opacity duration-300">
                Cancel
              </Button>
              <Button className="text-md inline-flex items-center gap-2 rounded-md bg-gray-700 bg-gradient-to-r from-[#1f1c2c] to-[#928dab] px-6 py-3 font-semibold text-white opacity-100 shadow-inner transition-opacity duration-300 ">
                <AutoAwesomeIcon className="size-6" />
                Generate outline
              </Button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Promt2;
