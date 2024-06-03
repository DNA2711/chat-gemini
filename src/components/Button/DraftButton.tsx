"use client";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ShoppingBagIcon as ShoppingCartIcon,
  Cog8ToothIcon as CogIcon,
} from "@heroicons/react/24/outline";

const Result = () => {
  return (
    <div className="absolute right-0 lg:p-5">
      <Popover className="relative">
        {({ open }) => (
          <>
            <PopoverButton
              className={`dark:bg-primary-6000 dark:hover:bg-primary-700 dark:border-primary-6000 z-10 rounded-xl border border-neutral-200 bg-white p-2.5 shadow-xl hover:bg-neutral-100 focus:outline-none ${
                open ? " ring-primary-500 focus:ring-2" : ""
              }`}
            >
              <CogIcon className="h-8 w-8" />
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute right-0 z-10 mt-3 w-screen max-w-sm">
                <div className="nc-custom-shadow-1 overflow-hidden rounded-2xl bg-white dark:bg-neutral-950">
                  <div className="relative space-y-3.5 p-6 xl:space-y-5">
                    <span className="text-xl font-semibold">Draft</span>

                    <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>

                    <div className="flex flex-col space-y-3">
                      <button className="flex items-center justify-start space-x-4 rounded-md bg-neutral-200 p-2 transition-all duration-300 hover:bg-neutral-300 dark:bg-neutral-700 hover:dark:bg-slate-800 ">
                        <span
                          className="origin-left whitespace-nowrap pe-3 text-sm font-medium text-neutral-900 dark:text-white 
                          "
                        >
                          Draft 1
                        </span>
                      </button>{" "}
                      <button className="flex items-center justify-start space-x-4 rounded-md bg-neutral-200 p-2 transition-all duration-300 hover:bg-neutral-300 dark:bg-neutral-700 hover:dark:bg-slate-800 ">
                        <span
                          className="origin-left whitespace-nowrap pe-3 text-sm font-medium text-neutral-900 dark:text-white 
                          "
                        >
                          Draft2{" "}
                        </span>
                      </button>{" "}
                      <button className="flex items-center justify-start space-x-4 rounded-md bg-neutral-200 p-2 transition-all duration-300 hover:bg-neutral-300 dark:bg-neutral-700 hover:dark:bg-slate-800 ">
                        <span
                          className="origin-left whitespace-nowrap pe-3 text-sm font-medium text-neutral-900 dark:text-white 
                          "
                        >
                          Draft 3{" "}
                        </span>
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Result;
