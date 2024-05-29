import React, { useState } from "react";

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
  const [textToShow, setTextToShow] = useState(""); // Thêm state để lưu đoạn văn bản

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
      "Light-hearted and entertaining tone, use humor and wit to engage the audience. Suitable for satire, comedy writing, and certain types of marketing..",
  }; // Đổi mảng thành object để lưu đoạn văn bản

  const handleToneClick = (tone: keyof Tone) => {
    setSelectedTone(tone);
    setTextToShow(tones[tone]); // Cập nhật đoạn văn bản khi click
  };

  return (
    <div>
      <textarea
        value={textToShow}
        readOnly
        className="w-full h-20 p-2 border rounded  "
      />

      <div className="flex flex-wrap gap-2">
        {Object.keys(tones).map((tone) => (
          <button
            key={tone}
            onClick={() => handleToneClick(tone as keyof Tone)}
            className={`px-4 py-1 rounded transition duration-300 ease-in-out transform hover:scale-105 ${
              selectedTone === tone
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ToneSelector;
