import Message from "../Message";

interface Props {
    collapsed?: boolean;
}

const RecentlyMessages: React.FC<Props> = ({ collapsed = false }) => {
    return (
        <>
            <div className="space-y-2">
                <span className="block text-neutral-900 dark:text-white text-sm font-medium ms-2">Recently</span>
                <div className="grid grid-cols-1 gap-1 mt-5">
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                    <Message collapsed={collapsed} />
                </div>
            </div>
        </>
    )
}

export default RecentlyMessages;