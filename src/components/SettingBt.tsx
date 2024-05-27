import { MoonIcon } from "@heroicons/react/24/outline";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import ToggleMode from "./ToggleMode";

interface SettingBtProps {
  collapsed: boolean;
}

const SettingBt: React.FC<SettingBtProps> = ({ collapsed }) => {
  return (
    <>
      <Menu>
        <MenuButton className="p-2 flex items-center space-x-4 rounded-full relative overflow-hidden hover:bg-slate-200 dark:hover:bg-neutral-800 w-full">
          <SettingsIcon className="h-5 w-5 text-neutral-800 dark:text-white" />
          {!collapsed && (
            <span
              className={`block text-sm text-neutral-800 dark:text-white origin-left ${collapsed ? "scale-0" : "scale-100"
                } transition-transform duration-300 whitespace-nowrap`}
            >
              Setting
            </span>
          )}
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
            anchor="top end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-slate-100 dark:bg-neutral-800 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none dark:text-[#4d5154] shadow-2xl"
          >
            <MenuItem>
              <div className="group flex justify-between w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <MoonIcon className="text-neutral-800 dark:text-white size-4" />
                  <span className="text-neutral-900 dark:text-white">Dark mode</span>
                </div>
                <ToggleMode />
              </div>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <ArchiveBoxXMarkIcon className="text-neutral-800 dark:text-white size-4" />
                <span className="text-neutral-900 dark:text-white">Archive</span>
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-neutral-900/5 dark:bg-white/50" />
            <MenuItem>
              <button className="group flex w-full items-center justify gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <TrashIcon className="text-neutral-800 dark:text-white size-4" />
                <span className="text-neutral-900 dark:text-white">Delete</span>
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </>

  );
};

export default SettingBt;
