import React from "react";
import AddIcon from "@mui/icons-material/Add";
interface PromptCardProps {
  title: string;
  onClick: (title: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-white rounded-md flex shadow-md p-3 h-24 overflow-hidden space-x-5 group hover:border-indigo-600 border-2 border-white hover:bg-indigo-100 transition duration-300 ease-in-out"
      onClick={() => onClick(title)}
    >
      <div className="flex-grow break-words border-none overflow-hidden ">
        <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-800 line-clamp-3 text-left">
          {title}
        </span>
      </div>
      <div className="">
        <AddIcon className="size-5 text-neutral-500 group-hover:text-indigo-600" />
      </div>
    </button>
  );
};

export default PromptCard;
