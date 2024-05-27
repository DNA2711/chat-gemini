"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NewContent from "./NewContent";
import Message from "./Message";
import HelpBt from "./HelpBt";
import ActivityBt from "./ActivityBt";
import SettingBt from "./SettingBt";
import { useThemeMode } from "@/hooks/useThemeMode";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RecentlyMessages from "./Messages/RecentlygMessages";
import ShowMoreMessages from "./Messages/ShowMoreMessages";
import SiderBottom from "./SiderBottom/SiderBottom";

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
    <>
      <div className={`lg:block hidden ${collapsed ? "w-20" : "w-72"} bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 relative`}>
        <div className="h-1/6 flex flex-col justify-between">
          <div className="relative">
            <button className={`absolute top-5 start-5 p-2 text-neutral-900 dark:text-white hover:bg-neutral-200 hover:dark:bg-neutral-700 rounded-full`}
              onClick={() => setCollapsed(!collapsed)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          <div className="relative">
            <NewContent collapsed={collapsed} />
          </div>
        </div>




        <div className={`${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"} transition-all duration-300 overflow-y-auto h-4/6 px-3 py-2 scroobar-styles`}>
          <RecentlyMessages collapsed={collapsed} />
          <ShowMoreMessages collapsed={collapsed} />
        </div>

        <div className="h-1/6 px-4 flex flex-col justify-center">
          <SiderBottom collapsed={collapsed} />
        </div>
      </div>
    </>
  );
};

export default Sider;
