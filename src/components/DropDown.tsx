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

const DropDown = () => {
  return (
    <Menu>
      <MenuButton className="h-5 w-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full">
        <EllipsisVerticalIcon className=" text-neutral-900 dark:text-white" />
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
          className="ms-8 w-36 origin-top-right rounded-xl border border-white/5 bg-slate-100 dark:bg-neutral-800 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none dark:text-[#4d5154] shadow-2xl"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <PencilIcon className="text-neutral-900 dark:text-white size-4" />
              <span className="text-neutral-900 dark:text-white text-sm">Edit</span>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="text-neutral-900 dark:text-white size-4" />
              <span className="text-neutral-900 dark:text-white text-sm">Archive</span>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-neutral-900/5 dark:bg-white/50" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <TrashIcon className="text-neutral-900 dark:text-white size-4" />
              <span className="text-neutral-900 dark:text-white text-sm">Delete</span>
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default DropDown;
