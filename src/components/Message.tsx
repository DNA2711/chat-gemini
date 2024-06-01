"use client";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import ChatIcon from '@mui/icons-material/Chat';
import DropDown from "./DropDown";
import Link from "next/link";
import { MessageProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation'
interface Props {
  message: MessageProps
}
const Message: React.FC<Props> = ({
  message
}) => {
  const { id, title } = message;
  const params = useParams<{ slug: string[] }>()
  const idParams = params.slug?.[1] ? params.slug[1] : '';
  return (
    <div
      className={`flex items-center cursor-pointer p-2 rounded-full ${idParams === id ? "bg-slate-300 dark:bg-slate-800" : "hover:bg-slate-200 dark:hover:bg-neutral-800"} w-full relative group`}
    >
      <div className="space-x-2 ps-2 inline-flex items-center w-11/12">
        <ChatIcon className="size-4 text-neutral-900 dark:text-neutral-200 group-hover:dark:text-neutral-300" />
        <span className=" text-sm font-medium text-neutral-900 dark:text-neutral-200 group-hover:dark:text-neutral-300 line-clamp-1">
          {title}
        </span>
      </div>
      <div className="z-50 group-hover:opacity-100 opacity-0">
        <DropDown />
      </div>
      <Link href={`/generate/v/${id}`} className="absolute inset-0"></Link>
    </div>
  );
};

export default Message;
