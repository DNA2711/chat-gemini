import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Avatar from "@mui/material/Avatar";

const AvtDropdown = () => {
  return (
    <Menu>
      <MenuButton className="">
        <div className="">
          <Avatar
            alt="Remy Sharp"
            src="/rog.jpg"
            sx={{ width: 48, height: 48 }}
          />
        </div>

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
          anchor="bottom end"
          className="w-[410px] z-[99] space-y-4 origin-top-right rounded-xl border border-white/5 bg-slate-100 dark:bg-slate-800 p-3 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none dark:text-[#4d5154] shadow-2xl opacity-100 scale-100"
        >
          <MenuItem>
            <div className="space-y-1">
              <div className="flex justify-center">
                <span className="text-neutral-800 dark:text-white">ducnguyen6693@gmail.com</span>
              </div>
              <div className="flex justify-center">
                <Avatar
                  alt="Remy Sharp"
                  src="/rog.jpg"
                  sx={{ width: 64, height: 64 }}
                />
              </div>
              <div className="flex justify-center">
                <span className="text-neutral-800 dark:text-white">Hello DNA,</span>
              </div>
            </div>
          </MenuItem>

          <MenuItem>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-slate-200 dark:bg-slate-900 rounded-bl-full flex rounded-tl-full space-x-1 items-center justify-center py-2">
                <div className="text-neutral-800 dark:text-white">
                  <AddIcon className="h-6 w-6 " />
                </div>
                <span className="text-neutral-800 dark:text-white text-sm">Manage account</span>
              </button>
              <button className="bg-slate-200 dark:bg-slate-900 rounded-br-full flex rounded-tr-full space-x-1 items-center justify-center py-2">
                <div className="text-neutral-800 dark:text-white">
                  <LogoutIcon className="h-6 w-6" />
                </div>
                <span className="text-neutral-800 dark:text-white text-sm">Logout</span>
              </button>
            </div>
          </MenuItem>

          <MenuItem>
            <div className="flex justify-between space-x-1">
              <button className="w-1/2 flex-grow text-end text-[#c5ccd1] dark:text-[#4d5154]">
                <span className="text-neutral-800 dark:text-white">Privacy Policy</span>
              </button>
              <div className="flex justify-center items-center">
                <CircleIcon className="h-1 w-1 text-[#c5ccd1] dark:text-[#4d5154]" />
              </div>
              <button className="w-1/2 text-start text-[#c5ccd1] dark:text-[#4d5154]">
                <span className="text-neutral-800 dark:text-white">Terms of Service</span>
              </button>
            </div>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default AvtDropdown;
