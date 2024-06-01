import React, { useState, useEffect, useRef } from "react";
import TextArea from "./TextArea";

interface Author {
  Professional: string;
  Conversational: string;
  Technical: string;
  Academic: string;
  Inspirational: string;
  Humorous: string;
}

function AuthorSelector() {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [textToShow, setTextToShow] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const authors = {
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
      "Light-hearted and entertaining tone, use humor and wit to engage the audience. Suitable for satire, comedy writing, and certain types of marketing.. Light-hearted and entertaining tone, use humor and wit to engage the audience. Suitable for satire, comedy writing, and certain types of marketing..",
  };

  const handleAuthorClick = (author: keyof Author) => {
    setSelectedAuthor(author);
    setTextToShow(authors[author]);
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

  return (
    <div>
      <TextArea
        value={textToShow}
        readOnly
        className="pointer-events-none w-full rounded-md border-none p-2 transition duration-300 ease-in-out dark:bg-zinc-800 dark:text-neutral-300"
      />

      <div className="flex flex-wrap gap-2 overflow-hidden rounded-md">
        {" "}
        {Object.keys(authors).map((author) => (
          <button
            key={author}
            onClick={() => handleAuthorClick(author as keyof Author)}
            className={`text-md flex w-fit items-center justify-center rounded-md px-4 py-2 font-semibold transition duration-300 ease-in-out focus:outline-none
        ${selectedAuthor === author ? "bg-[#805ad5] text-white" : "bg-white text-violet-500 hover:bg-violet-200 dark:bg-zinc-800 dark:text-neutral-400"}
      `}
          >
            {author}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AuthorSelector;
