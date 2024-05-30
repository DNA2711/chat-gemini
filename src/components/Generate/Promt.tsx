"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CastIcon from "@mui/icons-material/Cast";
import Selection from "./Selection";
import { Input, Textarea } from "@headlessui/react";
import { Button } from "@headlessui/react";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PromptCard from "./PromptCard";
import FormatBt from "./FormatBt";
import SelectionList from "../ListBox/SelectionList";
import Tooltip from "../Tooltip/Tooltip";
import { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";

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

type ConfigProps = {
  postType: string;
  language: string;
  about: string;
  link: string;
  keywords: string;

}

export type Action =
  | { type: "UPDATE_FIELD"; field: keyof ConfigProps | string; value: string }
  | { type: "RESET" };


const initState: ConfigProps = {
  postType: "Landing Page",
  language: "English",
  about: "",
  link: "",
  keywords: ""
}

const reducer = (state: ConfigProps, action: Action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { ...initState };
    default:
      return state;
  }
}

interface SendRequest {
  platform: string;
  postType: string;
  language: string;
  about: string;
  link: string;
  keywords: string;
}

async function sendRequest(url: string, { arg }: { arg: SendRequest }) {
  const dto = {
    platform: arg.platform,
    postType: arg.postType,
    language: arg.language,
    about: arg.about,
    link: arg.link,
    keywords: arg.keywords,
  }

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(dto)
  }).then(response => response.json())
}

const Promt = () => {

  const [state, dispatch] = useReducer(reducer, initState);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    dispatch({ type: "UPDATE_FIELD", field: e.target.name as keyof ConfigProps, value: e.target.value });
  };

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

  const [platform, setPlatform] = useState("Website");
  const [textareaValue, setTextAreaValue] = useState("");
  const [LinkValue, setLinkValue] = useState("");

  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isLinkFocused, setIsLinkFocused] = useState(false);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkValue(event.target.value);
    setIsLinkFocused(event.target.value !== "");
    setIsTextAreaFocused(false);
    dispatch({ type: "UPDATE_FIELD", field: event.target.name as keyof ConfigProps, value: event.target.value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
    setIsTextAreaFocused(event.target.value !== "");
    setIsLinkFocused(false);
    dispatch({ type: "UPDATE_FIELD", field: event.target.name as keyof ConfigProps, value: event.target.value });
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

  const pathAPI = '/api/generate-outline';
  const { trigger, isMutating } = useSWRMutation(pathAPI, sendRequest)
  const { mutate } = useSWRConfig()

  const handlePromptClick = (title: string) => {
    setTextAreaValue(title);
  };

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dto = {
      postType: state.postType,
      language: state.language,
      about: state.about,
      link: state.link,
      keywords: state.keywords,
      platform: platform,
    };

    const result = await trigger(dto)
    console.log(result)
    if (result.statusCode === 200) {
      mutate('/api/recently-config')
      router.push(`/create/${result.data.id}`)
    }
  }

  return (
    <div className="lg:space-y-10 space-y-3 py-12">
      <section className="flex flex-col justify-center items-center lg:space-y-5">
        <h2 className="lg:text-5xl text-4xl font-bold text-black dark:text-white">
          Generate
        </h2>
        <p className="lg:text-2xl text-xl px-1 text-black dark:text-white">
          What would you like to create today?
        </p>
      </section>
      <div className="container space-y-5">
        <FormatBt platform={platform} setPlatform={setPlatform} />
        <div className="md:px-20 lg:px-40 px-0 space-y-3">
          <form onSubmit={handleSubmit}>
            <section className="space-y-3">
              <Selection platform={platform} dispatch={dispatch} />
              <div className="space-y-2">
                <Textarea
                  name="about"
                  className={`rounded-md w-full border-none p-5 text-md text-black ${isLinkFocused
                    ? " opacity-50 bg-gray-200 cursor-not-allowed"
                    : ""
                    }`}
                  placeholder="Describe what you'd like to make..."
                  value={textareaValue}
                  onChange={handleTextAreaChange}
                  disabled={isLinkFocused}
                  rows={1}
                />
                <span className="text-black dark:text-white">Or</span>
                <Input
                  name="link"
                  type="text"
                  className={`rounded-md w-full border-none p-5 text-md text-black ${isTextAreaFocused
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
                name="keywords"
                type="text"
                className="rounded-md w-full border-none p-5 text-md text-black"
                placeholder="Keywords"
                onChange={handleChange}
              />
            </section>

            <section className="flex justify-center mt-3">
              {textareaValue ? (
                <Button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-3 px-6 font-semibold text-white shadow-inner text-md transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[#1f1c2c] to-[#928dab]"
                >
                  <AutoAwesomeIcon className="size-6" />
                  Generate outline
                </Button>
              ) : null}
            </section>
          </form>

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
    </div>
  );
};

export default Promt;
