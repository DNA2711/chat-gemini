import { PlusIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import AvtDropdown from "./AvtDropdown";
import MenuBar from "./Nav/MenuBar";
import EditContentMobile from "./EditContentMobile";

const Header = () => {
  return (
    <header className="sticky top-0 p-4 flex bg-white dark:bg-slate-900 transition-all duration-300 z-30">
      <div className="w-1/2 flex items-center md:space-x-0 space-x-6">
        <MenuBar />
        <h1 className="md:text-2xl text-xl z-[51] font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          <span>AI Content</span> <span className="sm:inline-block hidden"> Creator</span>
        </h1>
      </div>

      <div className="w-1/2 flex items-center justify-end">
        <button className="hover:bg-neutral-300 dark:hover:bg-slate-800 p-3 rounded-full lg:hidden">
          <PlusIcon className="size-6 text-neutral-800 dark:text-neutral-300" />
        </button>

        <EditContentMobile />
        <AvtDropdown />
      </div>
    </header>
  );
};

export default Header;
