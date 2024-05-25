import { PlusIcon } from "@heroicons/react/24/outline";
import DropDown from "./DropDown";
import * as React from "react";
import AvtDropdown from "./AvtDropdown";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import MenuBar from "./Nav/MenuBar";

const Header = () => {
  return (
    <header className="sticky top-0 py-4 px-4 flex justify-between items-center w-full bg-white dark:bg-slate-900 transition-all duration-300 z-30">

      <div className="flex items-center space-x-6">
        <MenuBar />
        <h1 className="text-xl dark:text-black z-[99]">
          <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            AI Content
          </span>
        </h1>
      </div>

      <div className="flex">
        <div className="md:hidden">
          <button className="hover:bg-gray-700 dark:hover:bg-gray-200 p-3 flex rounded-full space-x-4 relative overflow-hidden ">
            <PlusIcon className="h-6 w-6 dark:text-[#4d5154]" />
          </button>
        </div>

        <div className="md:hidden">
          {/* <DropDown /> */}
          <Menu>
            <MenuButton className="hover:bg-gray-700 dark:hover:bg-gray-200 p-3 flex rounded-full space-x-4 relative overflow-hidden ">
              <EllipsisVerticalIcon className="h-6 w-6 text-gray-300 dark:text-[#4d5154]  rounded-full" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="right start"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-[#424242] dark:bg-white  p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none dark:text-[#4d5154] shadow-2xl"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <PencilIcon className="size-4" />
                    <span className="dark:text-[#4d5154]">Edit</span>
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘E
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <Square2StackIcon className="size-4" />
                    Duplicate
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘D
                    </kbd>
                  </button>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <ArchiveBoxXMarkIcon className="size-4" />
                    Archive
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘A
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <TrashIcon className="size-4" />
                    Delete
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘D
                    </kbd>
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>

        <AvtDropdown />
      </div>
    </header>
  );
};

export default Header;
