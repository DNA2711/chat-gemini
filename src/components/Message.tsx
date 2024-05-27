"use client";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import ChatIcon from '@mui/icons-material/Chat';
import DropDown from "./DropDown";
import Link from "next/link";

interface MessageProps {
  collapsed: boolean;
}
const Message: React.FC<MessageProps> = ({ collapsed }) => {
  return (
    <div className="flex items-center cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-800 w-full relative group">
      <div className="space-x-2 ps-2 inline-flex items-center w-11/12">
        <ChatIcon className="size-4 text-neutral-900 dark:text-neutral-400 group-hover:dark:text-neutral-300" />
        <span className=" text-sm font-medium text-neutral-900 dark:text-neutral-400 group-hover:dark:text-neutral-300 line-clamp-1">
          Conversation Conversation Conversation Conversation
        </span>
      </div>
      <div className="z-50 group-hover:opacity-100 opacity-0">
        <DropDown />
      </div>
      <Link href={'/'} className="absolute inset-0"></Link>
    </div>

  );
};

export default Message;
