import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

interface HelpBtProps {
  collapsed: boolean;
}
const HelpBt: React.FC<HelpBtProps> = ({ collapsed }) => {
  return (
    <button className="hover:bg-gray-700 dark:hover:bg-gray-200 p-3 flex rounded-full space-x-4 relative overflow-hidden ">
      <QuestionMarkCircleIcon className="h-6 w-6 text-[#e1e2e3] dark:text-[#4d5154]" />
      <span
        className={`text-[#e1e2e3] dark:text-[#4d5154] origin-left absolute ${
          collapsed ? "scale-0" : "scale-100"
        } transition-transform duration-300 whitespace-nowrap left-10   `}
      >
        {" "}
        Help
      </span>
    </button>
  );
};

export default HelpBt;
