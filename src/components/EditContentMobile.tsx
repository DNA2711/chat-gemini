"use client"
import { ArchiveBoxXMarkIcon, EllipsisVerticalIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import TransitionButton from "./Transition/TransitionButton"
import { useState } from "react"
import TransitionBottomContent from "./Transition/TransitionBottomContent"

const EditContentMobile = () => {
    const [isShow, setShow] = useState(false)
    const renderContent = () => {
        return (
            <>
                <TransitionBottomContent
                    isShow={isShow}
                    setShow={setShow}
                >
                    <div className="w-full grid grid-cols-1 gap-2">
                        <button className="group flex w-full items-center space-x-3 py-1.5 px-3">
                            <PencilIcon className="text-neutral-900 dark:text-white size-4" />
                            <span className="text-neutral-900 dark:text-white text-sm">Edit</span>
                        </button>

                        <button className="group flex w-full items-center space-x-3 py-1.5 px-3">
                            <ArchiveBoxXMarkIcon className="text-neutral-900 dark:text-white size-4" />
                            <span className="text-neutral-900 dark:text-white text-sm">Archive</span>
                        </button>

                        <button className="group flex w-full items-center space-x-3 py-1.5 px-3">
                            <TrashIcon className="text-neutral-900 dark:text-white size-4" />
                            <span className="text-neutral-900 dark:text-white text-sm">Delete</span>
                        </button>
                    </div>
                </TransitionBottomContent>
            </>
        )
    }
    return (
        <>
            <TransitionButton
                Icon={<EllipsisVerticalIcon className="size-6 text-neutral-800 dark:text-neutral-300 rounded-full" />}
                className="lg:hidden hover:bg-neutral-300 dark:hover:bg-slate-800 p-3 rounded-full"
                isShow={isShow}
                setShow={setShow}
            />
            {renderContent()}
        </>
    )
}
export default EditContentMobile