"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CastIcon from "@mui/icons-material/Cast";
import Selection from "./Selection";
import { Input } from "@headlessui/react";
import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PromptCard from "./PromptCard";
import FormatBt from "./FormatBt";

const Promt = () => {
  const prompts = [
    {
      icon: CastIcon,
      title:
        "Landing page for a healthcare consultant offering process improvement solutions for hospitals and clinics",
    },
    {
      icon: CastIcon,
      title:
        "Landing page for a marketing agency that helps real estate agents",
    },
    {
      icon: CastIcon,
      title:
        "Landing page for a mobile app that helps users learn a new language",
    },
    {
      icon: CastIcon,
      title: "Landing page for a subscription-based meal delivery startup",
    },
    {
      icon: CastIcon,
      title: "Landing page for [product]",
    },
    {
      icon: CastIcon,
      title: "Zodiac signs",
    },
    {
      icon: CastIcon,
      title: "One-page website promoting a dog cafe",
    },
    {
      icon: CastIcon,
      title: "Landing page for a freelance graphic designer",
    },
    {
      icon: CastIcon,
      title: "Personal site for a product designer",
    },
    {
      icon: CastIcon,
      title:
        "Homepage for a nonprofit organization focused on environmental conservation",
    },
    {
      icon: CastIcon,
      title:
        "Personal website for a leadership coach offering executive training services",
    },
    {
      icon: CastIcon,
      title: "Landing page for a consultant",
    },
    {
      icon: CastIcon,
      title: "Website for a virtual event planning company",
    },
  ];

  const [displayedPrompts, setDisplayedPrompts] = useState(prompts.slice(0, 2));

  useEffect(() => {
    const handleResize = () => {
      const newDisplayedPrompts =
        window.innerWidth <= 768 ? prompts.slice(0, 3) : prompts.slice(0, 6);
      setDisplayedPrompts(newDisplayedPrompts);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [textareaValue, setTextAreaValue] = useState("");
  const [LinkValue, setLinkValue] = useState("");

  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isLinkFocused, setIsLinkFocused] = useState(false);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkValue(event.target.value);
    setIsLinkFocused(event.target.value !== "");
    setIsTextAreaFocused(false);
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
    setIsTextAreaFocused(event.target.value !== "");
    setIsLinkFocused(false);
  };

  const shufflePrompts = () => {
    const shuffledPrompts = [...prompts];
    for (let i = shuffledPrompts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPrompts[i], shuffledPrompts[j]] = [
        shuffledPrompts[j],
        shuffledPrompts[i],
      ];
    }
    if (window.innerWidth <= 768) {
      setDisplayedPrompts(shuffledPrompts.slice(0, 3));
    } else {
      setDisplayedPrompts(shuffledPrompts.slice(0, 6));
    }
  };

  const handlePromptClick = (title: string) => {
    setTextAreaValue(title);
  };

  return (
    <div className="lg:space-y-10 space-y-3 h-screen">
      <section className="lg:p-9 p-4">
        <button className="bg-white p-2 text-black text-xl font-semibold flex justify-center items-center rounded-lg space-x-2">
          <ArrowBackIosIcon className="size-6" />
        </button>
      </section>

      <section className="flex flex-col justify-center items-center lg:space-y-5">
        <h1 className="lg:text-5xl text-4xl font-bold text-black dark:text-white">
          Generate
        </h1>
        <h4 className="lg:text-2xl text-xl px-1 text-black dark:text-white">
          What would you like to create today?
        </h4>
      </section>

      <form action="">
        <div className="container space-y-5">
          <div className="md:px-20 lg:px-40 px-0 space-y-3">
            <FormatBt />
            <section className="space-y-3">
              <Selection />
              <div className="space-y-2">
                <textarea
                  name="full_name"
                  className={`rounded-xl w-full border-none h-40 p-5 text-md text-black ${
                    isLinkFocused
                      ? " opacity-50 bg-gray-200 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Describe what you'd like to make..."
                  value={textareaValue}
                  onChange={handleTextAreaChange}
                  disabled={isLinkFocused}
                />
                <span className="text-black dark:text-white">Or</span>
                <Input
                  name="full_name"
                  type="text"
                  className={`rounded-xl w-full border-none p-5 text-md text-black ${
                    isTextAreaFocused
                      ? "opacity-50 bg-gray-200 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Link"
                  disabled={isTextAreaFocused}
                  value={LinkValue}
                  onChange={handleLinkChange}
                />
              </div>

              <Input
                name="full_name"
                type="text"
                className="rounded-xl w-full border-none p-5 text-md text-black"
                placeholder="Keywords"
              />
            </section>

            <section className="flex justify-center">
              {textareaValue ? (
                <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-3 px-6 font-semibold text-white shadow-inner text-md transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[#1f1c2c] to-[#928dab]">
                  <AutoAwesomeIcon className="size-6" />
                  Generate outline
                </Button>
              ) : null}
            </section>

            {!textareaValue && (
              <section className="transition-all duration-500 ease-in-out opacity-100 space-y-3">
                <div className="flex justify-center items-center">
                  <span className="text-2xl font-semibold text-black dark:text-white">
                    Example Prompts
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6">
                  {displayedPrompts.map((prompt, index) => (
                    <PromptCard
                      key={index}
                      title={prompt.title}
                      onClick={handlePromptClick}
                    />
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-3 px-10 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white text-md transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[#1f1c2c] to-[#928dab]"
                    onClick={shufflePrompts}
                  >
                    Shuffle
                  </Button>
                </div>
              </section>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Promt;
