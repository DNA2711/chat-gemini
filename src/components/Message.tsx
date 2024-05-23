"use client";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import DropDown from "./DropDown";

interface MessageProps {
  collapsed: boolean;
}
const Message: React.FC<MessageProps> = ({ collapsed }) => {
  return (
    <div
      className={`${
        collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
      } px-4 py-4 space-y-4 transition-all duration-300`}
    >
      <span className="block dark:text-[#4d5154]">Recently</span>
      <div className="hover:bg-gray-700 dark:hover:bg-gray-200 p-3 flex items-center rounded-full cursor-pointer justify-between space-x-3">
        <div className="space-x-1">
          <ChatBubbleLeftIcon className="h-6 w-6 text-[#e1e2e3] dark:text-[#4d5154]" />
        </div>
        <div className="min-w-0 space-x-1 flex">
          <span className=" inset-0 text-white dark:text-[#4d5154] whitespace-nowrap overflow-hidden overflow-ellipsis">
            Conversation
          </span>
        </div>
        <div className="flex justify-center items-center">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Message;
