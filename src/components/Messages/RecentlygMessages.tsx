import Message from "../Message";
import useSWR from "swr";
import SkeletonMessage from "../Skeleton/SkeletonMessage";
import { MessageProps } from "@/types/types";


const RecentlyMessages: React.FC = () => {
    const fetcher = async (url: string) => {
        return await fetch(url).then((res) => res.json());
    }
    const apiUrl = '/api/recently-config'
    const { data, error, isLoading } = useSWR(
        apiUrl,
        fetcher
    );


    return (
        <>
            {
                data && data.length > 0 && !error && (
                    <div className="space-y-2">
                        <span className="block text-neutral-900 dark:text-white text-sm font-medium ms-2">Recently</span>
                        <div className="grid grid-cols-1 mt-5">

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
                                    data.map((item: MessageProps, index: number) => (
                                        <Message key={index} message={item} />
                                    ))
                                }
                            </>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default RecentlyMessages;