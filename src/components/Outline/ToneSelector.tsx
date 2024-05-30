import React, { useEffect, useRef, useState } from "react";
import TextArea from "./TextArea";

interface Tone {
  Professional: string;
  Conversational: string;
  Technical: string;
  Academic: string;
  Inspirational: string;
  Humorous: string;
}

function ToneSelector() {
  const [selectedTone, setSelectedTone] = useState("");
  const [textToShow, setTextToShow] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const tones = {
    Professional:
      "Clear persuasive writing, appropriate for a business context.",
    Conversational:
      "Informal and friendly tone that mimics natural conversation.",
    Technical:
      "Precise and detailed writing suitable for technical documents, manuals, and guides. Emphasize accuracy and clarity.",
    Academic:
      "Formal and scholarly tone commonly used in academic papers and research. Be clear and objective.",
    Inspirational:
      "Motivational and uplifting tone that aims to inspire and encourage readers.",
    Humorous:
      "Light-hearted and entertaining tone, use humor and wit to engage the audience. Suitable for satire, comedy writing, and certain types of marketing..Light-hearted and entertaining tone, use humor and wit to engage the audience. Suitable for satire, comedy writing, and certain types of marketing..",
  };
  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    autoResize();
  }, [textToShow]);

  const handleToneClick = (tone: keyof Tone) => {
    setSelectedTone(tone);
    setTextToShow(tones[tone]);
  };

  return (
    <div>
      <TextArea
        value={textToShow}
        readOnly
        className="pointer-events-none w-full rounded-md border-none p-2 transition duration-300 ease-in-out dark:bg-[#32353a] dark:text-white"
      />

      <div className="flex flex-wrap gap-2 overflow-hidden rounded-md">
        {" "}
        {Object.keys(tones).map((tone) => (
          <button
            key={tone}
            onClick={() => handleToneClick(tone as keyof Tone)}
            className={`text-md flex w-fit items-center justify-center rounded-md px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
              ${selectedTone === tone ? "bg-[#805ad5] text-white" : "bg-white text-[#805ad5] hover:bg-[#eae7ff] dark:bg-[#32353a] dark:text-[#a6a7af]"}
            `}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ToneSelector;
