"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Select } from "@headlessui/react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Circle from "../CircleAnimation/Circle";

const Promt2 = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isGifPlaying, setIsGifPlaying] = useState(true);

  const handleImageClick = () => {
    setIsGifPlaying(!isGifPlaying); // Đảo ngược trạng thái phát/dừng của GIF
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.paused ? audioElement.play() : audioElement.pause();
    }
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

      <div className="container">
        <div className="lg:px-40 space-y-2">
          <section className="flex justify-center">
            <button onClick={handleImageClick}>
              <Image
                src="/a.gif"
                alt="Arrow back icon"
                width={300}
                height={150}
              />
            </button>
            <audio ref={audioRef} src="/a.mp3" loop />
          </section>

          <section className="flex text-center items-center justify-between">
            <h2 className="text-black dark:text-white">Prompt</h2>
            <div className="flex space-x-2">
              <Select
                name="status"
                aria-label="Project status"
                className="text-black p-1 px-3 rounded-lg "
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
                className="text-black p-1 px-3 rounded-lg"
              >
                <option value="active">English</option>
                <option value="paused">Vietnamese</option>
                {/* <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option> */}
              </Select>
            </div>
          </section>

          <section className="">
            <textarea
              name="full_name"
              className="rounded-xl w-full h-20 p-5 text-md text-black"
              placeholder="Describe what you'd like to make..."
              //   value={textareaValue}
              //   onChange={handleTextAreaChange}
            />
          </section>

          <section className="flex justify-center space-x-2">
            <Button className="inline-flex items-center gap-2 rounded-md bg-white py-3 px-6 font-semibold text-black shadow-inner text-md transition-opacity duration-300 opacity-100 ">
              Cancel
            </Button>
            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-3 px-6 font-semibold text-white shadow-inner text-md transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[#1f1c2c] to-[#928dab] ">
              <AutoAwesomeIcon className="size-6" />
              Generate outline
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Promt2;
