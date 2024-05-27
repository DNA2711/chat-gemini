"use client";
import React, { useState, Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Transition, TransitionChild } from "@headlessui/react";
import NavMobile from "./NavMobile";
import { ArchiveBoxXMarkIcon, Bars3Icon, MoonIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import TransitionBottomContent from "../Transition/TransitionBottomContent";
import ToggleMode from "../ToggleMode";

export interface MenuBarProps { }
const MenuBar: React.FC<MenuBarProps> = () => {
    const [isVisable, setIsVisable] = useState(false);
    const [isVisableBottomContent, setIsVisableBottomContent] = useState(false);
    const [typeBottomContent, setTypeBottomContent] = useState('setting')
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
                    <TransitionChild
                        as={Fragment}
                        enter=" duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave=" duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 bg-stone-900 bg-opacity-50"
                            onClick={handleCloseMenu}
                        />
                    </TransitionChild>

                    <TransitionChild
                        as={Fragment}
                        enter="transition duration-100 transform"
                        enterFrom="opacity-0 -translate-x-14 rtl:translate-x-14"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition duration-150 transform"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-14 rtl:translate-x-14"
                    >
                        <div className="fixed inset-y-0 start-0 h-screen w-screen max-w-sm overflow-y-auto z-50">
                            <div className="flex min-h-full">
                                <div className="w-full max-w-sm overflow-hidden transition-all">
                                    <NavMobile
                                        setIsVisableMenuBar={setIsVisable}
                                        setIsVisableBottomContent={setIsVisableBottomContent}
                                        setTypeBottomContent={setTypeBottomContent}
                                    />
                                </div>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </Transition>
        );
    };

    const renderBottomContent = (typeBottomContent: string) => {
        return (
            <>
                {typeBottomContent === 'help' && (
                    <TransitionBottomContent
                        isShow={isVisableBottomContent}
                        setShow={setIsVisableBottomContent}
                    >
                        <div className="w-full grid grid-cols-1 gap-2">
                            <div className="group flex justify-between w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <MoonIcon className="text-neutral-800 dark:text-white size-4" />
                                    <span className="text-sm text-neutral-900 dark:text-white">Dark mode</span>
                                </div>
                                <ToggleMode />
                            </div>

                            <button className="group flex w-full items-center space-x-3 py-1.5 px-3">
                                <ArchiveBoxXMarkIcon className="text-neutral-900 dark:text-white size-4" />
                                <span className="text-neutral-900 dark:text-white text-sm">Help</span>
                            </button>
                        </div>
                    </TransitionBottomContent>
                )}
                {typeBottomContent === 'activity' && (
                    <TransitionBottomContent
                        isShow={isVisableBottomContent}
                        setShow={setIsVisableBottomContent}
                    >
                        <div className="w-full grid grid-cols-1 gap-2">
                            <div className="group flex justify-between w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <MoonIcon className="text-neutral-800 dark:text-white size-4" />
                                    <span className="text-sm text-neutral-900 dark:text-white">Dark mode</span>
                                </div>
                                <ToggleMode />
                            </div>

                            <button className="group flex w-full items-center space-x-3 py-1.5 px-3">
                                <ArchiveBoxXMarkIcon className="text-neutral-900 dark:text-white size-4" />
                                <span className="text-sm text-neutral-900 dark:text-white">Activity</span>
                            </button>
                        </div>
                    </TransitionBottomContent>
                )}
                {typeBottomContent === 'setting' && (
                    <TransitionBottomContent
                        isShow={isVisableBottomContent}
                        setShow={setIsVisableBottomContent}
                    >
                        <div className="w-full grid grid-cols-1 gap-2">
                            <div className="group flex justify-between w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <MoonIcon className="text-neutral-800 dark:text-white size-4" />
                                    <span className="text-sm text-neutral-900 dark:text-white">Dark mode</span>
                                </div>
                                <ToggleMode />
                            </div>

                            <button className="group flex w-full items-center space-x-3 py-1.5 px-3">
                                <ArchiveBoxXMarkIcon className="text-neutral-900 dark:text-white size-4" />
                                <span className="text-sm text-neutral-900 dark:text-white">Archive</span>
                            </button>
                        </div>
                    </TransitionBottomContent>
                )}
            </>
        )
    }

    return (
        <div>
            <button
                onClick={() => {
                    setIsVisable(!isVisable);
                }}
                className="lg:hidden z-[99] rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center"
            >
                <Bars3Icon className="h-7 w-7 z-[51]" />
            </button>

            {renderContent()}
            {renderBottomContent(typeBottomContent)}
        </div>
    );
};

export default MenuBar;
