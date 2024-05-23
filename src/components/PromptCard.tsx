import React from "react";
import AddIcon from "@mui/icons-material/Add";
interface PromptCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: (title: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ icon, title, onClick }) => {
  return (
    <button
      className="bg-white rounded-lg flex shadow-md p-5 h-32 overflow-hidden space-x-5"
      onClick={() => onClick(title)}
    >
      <div className="flex text-black">{icon}</div>
      <span className="text-lg font-medium text-black">{title}</span>
      <div className="">
        <AddIcon className="size-6 text-black" />
      </div>
    </button>
  );
};

export default PromptCard;
