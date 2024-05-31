"use client"
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

interface NewContentProps {
  collapsed: boolean;
}
const NewContent: React.FC<NewContentProps> = ({ collapsed }) => {
  const router = useRouter();
  return (
    <>
      <div className="absolute start-5 bottom-4">
        <button
          onClick={() => router.push('/create')}
          className={`flex justify-start items-center bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 hover:dark:bg-slate-800 p-2 rounded-full space-x-4 transition-all duration-300 ${collapsed ? "size-10" : "size-full"}`}
        >
          <AddIcon className="size-6 text-neutral-900 dark:text-white" />
          <span
            className={`pe-3 font-medium text-sm text-neutral-900 dark:text-white origin-left whitespace-nowrap ${collapsed ? "scale-0" : "scale-100"
              } transition-all duration-300`}
          >
            Create new content
          </span>
        </button>
      </div>
    </>
  );
};

export default NewContent;
