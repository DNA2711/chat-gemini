import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Message from '../Message';
interface Props {
    collapsed?: boolean;
}

const ShowMoreMessages: React.FC<Props> = ({ collapsed = false }) => {
    return (
        <>
            <div>
                <button className="flex space-x-3 items-center cursor-pointer px-2 py-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full">
                    <KeyboardArrowDownIcon className="w-4 h-4 text-neutral-900 dark:text-white flex items-center" />
                    <span className="text-xs font-medium text-neutral-900 dark:text-white whitespace-nowrap overflow-hidden overflow-ellipsis">Show more</span>
                </button>
                <div className="grid grid-cols-1 gap-1">
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                </div>
                <button className="flex space-x-3 items-center cursor-pointer px-2 py-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full">
                    <MoreHorizIcon className="w-4 h-4 text-neutral-900 dark:text-white flex items-center" />
                    <span className="text-xs font-medium text-neutral-900 dark:text-white whitespace-nowrap overflow-hidden overflow-ellipsis">Show more</span>
                </button>
            </div>
        </>
    )
}
export default ShowMoreMessages;