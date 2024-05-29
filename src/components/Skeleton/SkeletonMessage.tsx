const SkeletonMessage = () => {
    return (
        <>
            <div className="flex flex-col cursor-pointer px-2 rounded-ful w-full relative group animate-pulse space-y-2 py-2">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
        </>
    )
}
export default SkeletonMessage;