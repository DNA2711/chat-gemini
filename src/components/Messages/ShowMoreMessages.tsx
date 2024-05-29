import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Message from '../Message';
import SkeletonMessage from '../Skeleton/SkeletonMessage';
import { MessageProps } from '@/types/types';
import useSWRInfinite from 'swr/infinite';
import { useState } from 'react';

const ShowMoreMessages: React.FC = () => {
    const fetcher = async (url: string) => await fetch(url).then((res) => res.json());
    const apiUrl = '/api/all-config'
    const getKey = (pageIndex: number, previousPageData: any) => {
        if (pageIndex && !previousPageData.length) return null;
        if (pageIndex === 0) return `${apiUrl}?page=0`
        return `${apiUrl}?page=${pageIndex}`;
    };

    const [firstFetched, setFirstFetched] = useState(false);
    const { data, error, isLoading, isValidating, size, setSize } = useSWRInfinite(getKey, fetcher);
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd = isEmpty || data?.[data.length - 1]?.length === 0;

    const handeFirstFetched = (firstFetched: boolean) => {
        if (!firstFetched) {
            setFirstFetched(true);
            setSize(size + 1)
        } else {
            setSize(1)
            setFirstFetched(false);
        }
    }

    return (
        <>
            <div>
                {data && data.length > 0 && !error && (
                    <button
                        className="flex space-x-3 items-center cursor-pointer px-4 py-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full"
                        onClick={() => handeFirstFetched(firstFetched)}
                    >
                        {firstFetched
                            ?
                            <KeyboardArrowUpIcon className="w-4 h-4 text-neutral-900 dark:text-white flex items-center" />

                            :
                            <KeyboardArrowDownIcon className="w-4 h-4 text-neutral-900 dark:text-white flex items-center" />
                        }
                        <span className="text-xs font-medium text-neutral-900 dark:text-white whitespace-nowrap overflow-hidden overflow-ellipsis">{firstFetched ? "Hide less" : "Show more"}</span>
                    </button>
                )}

                <div className="grid grid-cols-1 gap-1">
                    {
                        data && data.length > 0 && !error && (
                            <>
                                {isLoading
                                    ?
                                    <>
                                        <SkeletonMessage />
                                        <SkeletonMessage />
                                        <SkeletonMessage />
                                        <SkeletonMessage />
                                        <SkeletonMessage />
                                    </>
                                    :
                                    data.slice(1, data.length).map((messages: MessageProps[]) => (
                                        messages.map((item: MessageProps, index: number) => (
                                            <Message key={index} message={item} />
                                        ))
                                    ))
                                }
                            </>
                        )
                    }
                </div>
                {firstFetched && !isReachingEnd && (
                    <>
                        <button
                            className="flex space-x-3 items-center cursor-pointer px-4 py-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full"
                            onClick={() => setSize(size + 1)}
                            disabled={isLoadingMore}
                        >
                            <MoreHorizIcon className="w-4 h-4 text-neutral-900 dark:text-white flex items-center" />
                            <span className="text-xs font-medium text-neutral-900 dark:text-white whitespace-nowrap overflow-hidden overflow-ellipsis">{isLoadingMore ? "Loading..." : "Load more"}</span>
                        </button>
                    </>
                )}
            </div>
        </>
    )
}
export default ShowMoreMessages;