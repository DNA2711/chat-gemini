"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NewContent from "./NewContent";
import Message from "./Message";
import HelpBt from "./HelpBt";
import ActivityBt from "./ActivityBt";
import SettingBt from "./SettingBt";
import { useThemeMode } from "@/hooks/useThemeMode";

const Sider: React.FC = () => {
  useThemeMode();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${collapsed ? "w-20" : "w-80"} p-4 space-y-12 bg-neutral-100 flex flex-col justify-between dark:bg-neutral-900 overflow-hidden transition-all duration-300`}
    >
      <div>
        <button className={`p-2 text-neutral-900 dark:text-white hover:bg-neutral-200 hover:dark:bg-neutral-700 rounded-full`} onClick={() => setCollapsed(!collapsed)}>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      <NewContent collapsed={collapsed} />

      <div className="flex flex-col justify-between h-screen">
        <div className={`${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"} space-y-5 transition-all duration-300`}>
          <span className="block text-neutral-900 dark:text-white font-medium ms-2">Recently</span>
          <div className="grid grid-cols-1 gap-1">
            <Message collapsed={collapsed} />
            <Message collapsed={collapsed} />
            <Message collapsed={collapsed} />
          </div>
        </div>

        <div className="space-y-3">
          <HelpBt collapsed={collapsed} />
          <ActivityBt collapsed={collapsed} />
          <SettingBt collapsed={collapsed} />
        </div>
      </div>
    </div>
  );
};

export default Sider;
