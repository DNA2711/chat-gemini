"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Select } from "@headlessui/react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Button } from "@headlessui/react";
import { useState } from "react";

const Promt2 = () => {
  const [textareaValue, setTextAreaValue] = useState("");
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div className="">
      <section className="lg:p-6 p-4 ">
        <button className="bg-white p-2 text-black text-xl font-semibold flex justify-center items-center rounded-lg space-x-2">
          <ArrowBackIosIcon className="size-6" />
        </button>
      </section>
      <div className="flex container justify-center items-center">
        <section className="flex justify-center items-center">
          <h1 className="lg:text-3xl text-2xl font-bold text-black dark:text-white">
            Generate
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Promt2;
