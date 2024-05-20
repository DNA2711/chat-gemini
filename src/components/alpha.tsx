"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NewContent from "./NewContent";
import Message from "./Message";
import HelpBt from "./HelpBt";
import ActivityBt from "./ActivityBt";
import SettingBt from "./SettingBt";

const Alpha: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-[#1e1f20] flex flex-col justify-between dark:bg-[#f0f4f9] overflow-hidden transition-all duration-300 ${
        collapsed ? "w-20" : "w-[286px]"
      }`}
    >
      <div className="flex flex-col px-4 py-4 space-y-5 transition-all duration-300">
        <button className="left-0" onClick={() => setCollapsed(!collapsed)}>
          <Bars3Icon className="h-10 w-10 text-white dark:text-[#4d5154] hover:bg-gray-700 p-2 rounded-full dark:hover:bg-gray-200" />
        </button>
        <NewContent collapsed={collapsed} />
      </div>

      <div className="flex flex-col justify-between h-screen">
        <Message collapsed={collapsed} />
        <div className="flex flex-col px-4 py-4 space-y-2">
          <HelpBt collapsed={collapsed} />
          <ActivityBt collapsed={collapsed} />
          <SettingBt collapsed={collapsed} />
        </div>
      </div>
    </div>
  );
};

export default Alpha;
