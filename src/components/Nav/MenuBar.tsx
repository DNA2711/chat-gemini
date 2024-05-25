"use client";
import React, { useState, Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import Sider from "../Sider";
import NavMobile from "./NavMobile";
import { Bars3Icon } from "@heroicons/react/24/outline";

export interface MenuBarProps { }
const MenuBar: React.FC<MenuBarProps> = () => {
    const [isVisable, setIsVisable] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsVisable(false);
    }, [pathname]);

    const handleOpenMenu = () => setIsVisable(true);
    const handleCloseMenu = () => setIsVisable(false);

    const renderContent = () => {
        return (
            <Transition show={isVisable} as={Fragment}>
                <div className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter=" duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave=" duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 bg-stone-900 bg-opacity-80"
                            onClick={handleCloseMenu}
                        />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition duration-100 transform"
                        enterFrom="opacity-0 -translate-x-14 rtl:translate-x-14"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition duration-150 transform"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-14 rtl:translate-x-14"
                    >
                        <div className="fixed inset-y-0 start-0 w-screen max-w-sm overflow-y-auto z-50">
                            <div className="flex min-h-full">
                                <div className="w-full max-w-sm overflow-hidden transition-all">
                                    <NavMobile onCloseMenu={handleCloseMenu} />
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Transition>
        );
    };

    return (
        <div>
            <button
                onClick={() => {
                    setIsVisable(!isVisable);
                }}
                className="lg:hidden z-[99] rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center"
            >
                <Bars3Icon className="h-6 w-6 z-[99]" />
            </button>

            {renderContent()}
        </div>
    );
};

export default MenuBar;
