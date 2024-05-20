import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import DropDown from "./DropDown";
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
import ToggleMode from "./ToggleMode";
interface SettingBtProps {
  collapsed: boolean;
}
const SettingBt: React.FC<SettingBtProps> = ({ collapsed }) => {
  return (
    // <div className="hover:bg-gray-700 p-3 flex rounded-full space-x-4 relative overflow-hidden po">
    //   <Cog6ToothIcon className="h-6 w-6 text-[#e1e2e3]" />
    //   <span
    //     className={`text-[#e1e2e3] origin-left absolute ${
    //       collapsed ? "scale-0" : "scale-100"
    //     } transition-transform duration-300 whitespace-nowrap left-10`}
    //   >
    //     Setting
    //   </span>
    // </div>
    <Menu>
      <MenuButton className="hover:bg-gray-700 dark:hover:bg-gray-200 p-3 flex rounded-full space-x-4 relative overflow-hidden ">
        <Cog6ToothIcon className="h-6 w-6 text-[#e1e2e3] dark:text-[#4d5154]" />
        <span
          className={`text-[#e1e2e3] dark:text-[#4d5154] origin-left absolute ${
            collapsed ? "scale-0" : "scale-100"
          } transition-transform duration-300 whitespace-nowrap left-10`}
        >
          Setting
        </span>
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
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-[#424242] p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
        >
          <MenuItem>
            <ToggleMode />
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Square2StackIcon className="size-4 fill-white/30" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <TrashIcon className="size-4 fill-white/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default SettingBt;
