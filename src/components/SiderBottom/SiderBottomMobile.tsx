import { SetStateAction } from "react";
import TransitionButton from "../Transition/TransitionButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";

interface Props {
    setIsVisableMenuBar?: React.Dispatch<SetStateAction<boolean>>;
    setIsVisableBottomContent?: React.Dispatch<SetStateAction<boolean>>;
    setTypeBottomContent?: React.Dispatch<SetStateAction<string>>;
}

const SiderBottomMobile: React.FC<Props> = ({
    setIsVisableMenuBar,
    setIsVisableBottomContent,
    setTypeBottomContent
}) => {


    return (
        <>
            <TransitionButton
                Icon={<HelpOutlineIcon className="h-5 w-5 text-neutral-800 dark:text-white" />}
                name="Help"
                className="p-2 flex items-center space-x-4 rounded-full relative overflow-hidden hover:bg-slate-200 dark:hover:bg-neutral-800 w-full"
                setShow={setIsVisableBottomContent}
                setTypeShow={setTypeBottomContent}
                setShowOther={setIsVisableMenuBar}
                typeShow="help"
            />
            <TransitionButton
                Icon={<HistoryIcon className="h-5 w-5 text-neutral-800 dark:text-white" />}
                name="Activity"
                className="p-2 flex items-center space-x-4 rounded-full relative overflow-hidden hover:bg-slate-200 dark:hover:bg-neutral-800 w-full"
                setShow={setIsVisableBottomContent}
                setTypeShow={setTypeBottomContent}
                setShowOther={setIsVisableMenuBar}
                typeShow="activity"
            />
            <TransitionButton
                Icon={<SettingsIcon className="h-5 w-5 text-neutral-800 dark:text-white" />}
                name="Setting"
                className="p-2 flex items-center space-x-4 rounded-full relative overflow-hidden hover:bg-slate-200 dark:hover:bg-neutral-800 w-full"
                setShow={setIsVisableBottomContent}
                setTypeShow={setTypeBottomContent}
                setShowOther={setIsVisableMenuBar}
                typeShow="setting"
            />
        </>
    )
}
export default SiderBottomMobile;