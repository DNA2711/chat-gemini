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
        <Avatar
          alt="Remy Sharp"
          src="/rog.jpg"
          sx={{ width: 48, height: 48 }}
        />
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
          className="w-[410px] origin-top-right border border-white/5 bg-[#222222] p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none dark:text-[#4d5154] shadow-2xl space-y-3 rounded-3xl dark:bg-[#e9eef6]"
        >
          <MenuItem>
            <div className="flex justify-center">
              <span>ducnguyen6693@gmail.com</span>
            </div>
          </MenuItem>

          <MenuItem>
            <div className="flex justify-center">
              <Avatar
                alt="Remy Sharp"
                src="/rog.jpg"
                sx={{ width: 64, height: 64 }}
              />
            </div>
          </MenuItem>

          <MenuItem>
            <div className="flex justify-center">
              <span>Hello DNA,</span>
            </div>
          </MenuItem>

          {/* <MenuItem>
            <div className="flex justify-center">
              <button className="border rounded-full border-gray-400 p-3">
                <span className="text-blue-200">Manage your account</span>
              </button>
            </div>
          </MenuItem> */}

          <MenuItem>
            <div className="flex justify-center space-x-1">
              <button className="w-1/2 bg-black rounded-bl-full flex rounded-tl-full space-x-1 items-center justify-center p-3 dark:bg-white">
                <div className="bg-gray-800 text-blue-200 dark:bg-[#e9eef6] rounded-full">
                  <AddIcon className="h-6 w-6 dark:text-[#4d5154]" />
                </div>
                <span> Manage your account</span>
              </button>
              <button className="w-1/2 bg-black rounded-br-full flex rounded-tr-full space-x-1 items-center justify-center p-3 dark:bg-white">
                <div>
                  <LogoutIcon className="h-6 w-6 dark:text-[#4d5154]" />
                </div>
                <span>Logout</span>
              </button>
            </div>
          </MenuItem>

          <MenuItem>
            <div className="flex justify-between space-x-1">
              <button className="w-1/2 flex-grow text-end text-[#c5ccd1] dark:text-[#4d5154]">
                Privacy Policy
              </button>
              <div className="flex justify-center items-center">
                <CircleIcon className="h-1 w-1 text-[#c5ccd1] dark:text-[#4d5154]" />
              </div>
              <button className="w-1/2 text-start text-[#c5ccd1] dark:text-[#4d5154]">
                Terms of Service
              </button>
            </div>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default AvtDropdown;
