"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CastIcon from "@mui/icons-material/Cast";
import TvIcon from "@mui/icons-material/Tv";
import Selection from "./Selection";
import { Input } from "@headlessui/react";
import { Button } from "@headlessui/react";
import { useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupsIcon from "@mui/icons-material/Groups";
import PromptCard from "../components/PromptCard";
import { IconType } from "react-icons";
import { FaFileAlt, FaGlobe, FaMicrophone } from "react-icons/fa";

const Promt = () => {
  const [inputValue, setInputValue] = useState("");

  const prompts = [
    {
      icon: CastIcon,
      title: "1",
    },
    {
      icon: CastIcon,
      title: "2",
    },
    {
      icon: CastIcon,
      title: "3",
    },
    {
      icon: CastIcon,
      title: "4",
    },
    {
      icon: CastIcon,
      title: "5",
    },
    {
      icon: CastIcon,
      title: "6",
    },
    {
      icon: CastIcon,
      title: "7",
    },
    {
      icon: CastIcon,
      title: "8",
    },
    {
      icon: CastIcon,
      title: "9",
    },
    {
      icon: CastIcon,
      title: "10",
    },
    {
      icon: CastIcon,
      title: "11",
    },
    {
      icon: CastIcon,
      title: "12",
    },
    {
      icon: CastIcon,
      title: "13",
    },
  ];

  const [displayedPrompts, setDisplayedPrompts] = useState(prompts.slice(0, 6));

  const shufflePrompts = () => {
    const shuffledPrompts = [...prompts];
    for (let i = shuffledPrompts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPrompts[i], shuffledPrompts[j]] = [
        shuffledPrompts[j],
        shuffledPrompts[i],
      ];
    }
    setDisplayedPrompts(shuffledPrompts.slice(0, 6)); // Cập nhật state với 6 prompts đã xáo trộn
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlePromptClick = (title: string) => {
    setInputValue(title);
  };

  return (
    <div className="space-y-10 bg-[url('/background.jpg')] bg-cover bg-center h-screen">
      <section className="p-9">
        <button className="bg-white p-2 text-black text-xl font-semibold flex justify-center items-center rounded-lg space-x-2">
          <ArrowBackIosIcon className="size-6" />
        </button>
      </section>

      <section className="flex flex-col justify-center items-center space-y-5">
        <h1 className="text-5xl font-bold">Generate</h1>
        <h4 className="text-2xl">What would you like to create today?</h4>
      </section>

      <div className="container space-y-10">
        <section className="grid grid-flow-col auto-cols-max justify-center gap-3">
          <button className="bg-white max-w-[200px] min-w-[200px] p-8 text-black text-xl font-semibold flex flex-col justify-center items-center rounded-lg space-y-1">
            <CastIcon className="size-6" />
            <span>Presentation</span>
          </button>
          <button className="bg-white p-8 max-w-[200px] min-w-[200px] text-black text-xl font-semibold flex flex-col justify-center items-center rounded-lg space-y-1">
            <TvIcon className="size-6" />
            <span>Website</span>
          </button>
          <button className="bg-white p-8 max-w-[200px] min-w-[200px] text-black text-xl font-semibold flex flex-col justify-center items-center rounded-lg space-y-1">
            <GroupsIcon className="size-6" />
            <span>Social</span>
          </button>
        </section>

        <section className="space-y-3">
          <Selection />
          <Input
            name="full_name"
            type="text"
            className="rounded-xl w-full p-10 text-3xl text-black"
            placeholder="Describe what you'd like to make..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </section>

        <section className="flex justify-center">
          {inputValue ? (
            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-7 px-10 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white text-2xl transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[#1f1c2c] to-[#928dab]">
              <AutoAwesomeIcon className="size-6" />
              Generate outline
            </Button>
          ) : null}
        </section>

        {!inputValue && (
          <section className="transition-all duration-500 ease-in-out opacity-100">
            <div className="flex justify-center items-center">
              <span className="text-2xl font-semibold mb-4">
                Example Prompts
              </span>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {displayedPrompts.map((prompt, index) => (
                <PromptCard
                  key={index}
                  icon={<prompt.icon />}
                  title={prompt.title}
                  onClick={handlePromptClick}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-7 px-10 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white text-2xl transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[#1f1c2c] to-[#928dab]"
                onClick={shufflePrompts}
              >
                Shuffle
              </Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Promt;
