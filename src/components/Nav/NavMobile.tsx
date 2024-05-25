"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useThemeMode } from "@/hooks/useThemeMode";
import NewContent from "../NewContent";
import Message from "../Message";
import HelpBt from "../HelpBt";
import ActivityBt from "../ActivityBt";
import SettingBt from "../SettingBt";

interface Props {
    onCloseMenu?: () => void;
}

const NavMobile: React.FC<Props> = ({
    onCloseMenu = () => { },
}) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className={`px-4 pt-24 max-w-auto h-screen transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-slate-100 dark:bg-neutral-900 space-y-12 relative`}>
                <div className={`${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"} space-y-5 transition-all duration-300`}>
                    <span className="block text-neutral-900 dark:text-white font-medium ms-2">Recently</span>
                    <div className="grid grid-cols-1 gap-1">
                        <Message collapsed={collapsed} />
                        <Message collapsed={collapsed} />
                        <Message collapsed={collapsed} />
                    </div>
                </div>

                <div className="absolute bottom-0">
                    <HelpBt collapsed={collapsed} />
                    <ActivityBt collapsed={collapsed} />
                    <SettingBt collapsed={collapsed} />
                </div>
            </div>
        </>
    );
};

export default NavMobile;
