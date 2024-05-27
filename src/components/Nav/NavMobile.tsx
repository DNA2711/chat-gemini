"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import RecentlyMessages from "../Messages/RecentlygMessages";
import ShowMoreMessages from "../Messages/ShowMoreMessages";
import SiderBottomMobile from "../SiderBottom/SiderBottomMobile";

interface Props {
    setIsVisableMenuBar?: React.Dispatch<SetStateAction<boolean>>;
    setIsVisableBottomContent?: React.Dispatch<SetStateAction<boolean>>;
    setTypeBottomContent?: React.Dispatch<SetStateAction<string>>;
}

const NavMobile: React.FC<Props> = ({
    setIsVisableMenuBar = () => { },
    setIsVisableBottomContent = () => { },
    setTypeBottomContent = () => { }
}) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className={`pt-24 h-screen transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-slate-100 dark:bg-neutral-900 relative`}>
                <div className={`transition-all duration-300 overflow-y-auto h-5/6 px-3 py-4 scroobar-styles`}>
                    <RecentlyMessages collapsed={collapsed} />
                    <ShowMoreMessages collapsed={collapsed} />
                </div>

                <div className="h-1/6 px-4 flex flex-col justify-center">
                    <SiderBottomMobile
                        setIsVisableMenuBar={setIsVisableMenuBar}
                        setIsVisableBottomContent={setIsVisableBottomContent}
                        setTypeBottomContent={setTypeBottomContent}
                    />
                </div>
            </div>
        </>
    );
};

export default NavMobile;
