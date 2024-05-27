import HistoryIcon from "@mui/icons-material/History";

interface ActivityBtProps {
  collapsed: boolean;
}

const ActivityBt: React.FC<ActivityBtProps> = ({ collapsed }) => {
  return (
    <button className="p-2 flex items-center space-x-4 rounded-full relative overflow-hidden hover:bg-slate-200 dark:hover:bg-neutral-800 w-full">
      <HistoryIcon className="h-5 w-5 text-neutral-800 dark:text-white" />
      {!collapsed && (
        <span
          className={`block text-sm text-neutral-800 dark:text-white origin-left ${collapsed ? "scale-0" : "scale-100"
            } transition-transform duration-300 whitespace-nowrap`}
        >
          Activity
        </span>
      )}
    </button>
  );
};

export default ActivityBt;
