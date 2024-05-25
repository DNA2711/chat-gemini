"use client";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import ChatIcon from '@mui/icons-material/Chat';
import DropDown from "./DropDown";

interface MessageProps {
  collapsed: boolean;
}
const Message: React.FC<MessageProps> = ({ collapsed }) => {
  return (
    <div className="flex justify-between items-center cursor-pointer p-2 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800">
      <div className="flex items-center space-x-4">
        <ChatIcon className="h-4 w-4 text-neutral-900 dark:text-white flex items-center" />
        <span className="text-sm font-medium text-neutral-900 dark:text-white whitespace-nowrap overflow-hidden overflow-ellipsis">
          Conversation
        </span>
      </div>
      <DropDown />
    </div>
  );
};

export default Message;
