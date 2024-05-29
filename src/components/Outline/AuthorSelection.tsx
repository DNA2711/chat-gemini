import React, { useState } from "react";

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
      "Light-hearted and entertaining tone, use humor and wit to engage the audience. Suitable for satire, comedy writing, and certain types of marketing..",
  };

  const handleToneClick = (author: keyof Author) => {
    setSelectedAuthor(author);
    setTextToShow(authors[author]);
  };

  return (
    <div>
      <textarea
        value={textToShow}
        readOnly
        className="w-full h-20 p-2 border rounded"
      />

      <div className=" grid grid-cols-3 grid-rows-2 gap-2 ">
        {Object.keys(authors).map((author) => (
          <button
            key={author}
            onClick={() => handleToneClick(author as keyof Author)}
            className={`px-4 py-1 rounded transition duration-300 ease-in-out transform hover:scale-105 ${
              selectedAuthor === author
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {author}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AuthorSelector;
