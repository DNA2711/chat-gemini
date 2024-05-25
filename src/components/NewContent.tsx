import AddIcon from "@mui/icons-material/Add";

interface NewContentProps {
  collapsed: boolean;
}
const NewContent: React.FC<NewContentProps> = ({ collapsed }) => {
  return (
    <>
      <div className="flex justify-start items-center bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 hover:dark:bg-slate-800 p-2 rounded-full space-x-4 overflow-hidden">
        <AddIcon className="h-6 w-6 text-neutral-900 dark:text-white" />
        {!collapsed && (
          <span
            className={`font-medium text-sm text-neutral-900 dark:text-white origin-left whitespace-nowrap ${collapsed ? "scale-0" : "scale-100"
              } transition-transform duration-300`}
          >
            New conversation
          </span>
        )}

      </div>
    </>
  );
};

export default NewContent;
