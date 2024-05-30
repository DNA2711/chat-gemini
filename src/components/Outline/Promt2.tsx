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
      <div className="container flex items-center justify-center">
        <section className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Generate
          </h1>
        </section>
      </div>
      <div className="container">
        <div className="space-y-2 lg:px-72">
          <section className="flex flex-col space-y-1">
            <h2 className="text-black dark:text-white">Prompt</h2>
            <div className="flex space-x-2">
              <Select
                name="status"
                aria-label="Project status"
                className="rounded-md border-none p-1 px-3 text-sm text-black transition duration-300
                ease-in-out dark:bg-[#32353a] dark:text-white"
              >
                <option>Posts</option>
                <option>Articles</option>
                <option>Review</option>
                <option>How-to guide</option>
                <option>Opinion piece</option>
                <option>Blog post</option>
              </Select>

              <Select
                name="status"
                aria-label="Project status"
                className="rounded-md border-none p-1 px-3 text-sm transition duration-300 ease-in-out dark:bg-[#32353a] dark:text-white"
              >
                <option value="active">English</option>
                <option value="paused">Vietnamese</option>
              </Select>
            </div>
          </section>

          <section className="relative">
            {" "}
            {/* <textarea
              name="prompt"
              ref={textareaRef}
              className="text-md w-full resize-none items-center break-words rounded-md border-none pr-10 transition duration-300 ease-in-out dark:bg-[#32353a] dark:text-white"
              placeholder="Describe what you'd like to make..."
              value={textareaValue}
              onInput={autoResize}
              onChange={handleTextAreaChange}
            /> */}
            <TextArea
              value={textareaValue}
              onChange={handleTextAreaChange}
              placeholder="Describe what you'd like to make..."
              className="text-md w-full items-center break-words rounded-md border-none pr-10 transition duration-300 ease-in-out dark:bg-[#32353a] dark:text-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              {" "}
              <button>
                {" "}
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
