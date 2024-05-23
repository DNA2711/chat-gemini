import AddIcon from "@mui/icons-material/Add";

interface NewContentProps {
  collapsed: boolean;
}
const NewContent: React.FC<NewContentProps> = ({ collapsed }) => {
  return (
    <button className="hover:bg-gray-700 dark:hover:bg-gray-200 p-3 flex rounded-full space-x-4 relative overflow-hidden ">
      <AddIcon className="h-6 w-6 dark:text-[#4d5154]" />
      <span
        className={`text-[#e1e2e3] dark:text-[#4d5154] origin-left absolute ${
          collapsed ? "scale-0" : "scale-100"
        } transition-transform duration-300 whitespace-nowrap left-10   `}
      >
        New conversation
      </span>
    </button>
  );
};

export default NewContent;
