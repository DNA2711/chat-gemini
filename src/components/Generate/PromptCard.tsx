import React from "react";
import AddIcon from "@mui/icons-material/Add";
interface PromptCardProps {
  title: string;
  onClick: (title: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-white rounded-lg flex shadow-md p-3 h-24 overflow-hidden space-x-5 hover:border-[#805ad5] border-2 border-white hover:bg-[#eae7ff] transition duration-300 ease-in-out"
      onClick={() => onClick(title)}
    >
      <div className="flex-grow break-words border-none overflow-hidden ">
        <span className="text-md font-medium text-black line-clamp-3 text-left">
          {title}
        </span>
      </div>
      <div className="">
        <AddIcon className="size-6 text-black" />
      </div>
    </button>
  );
};

export default PromptCard;
