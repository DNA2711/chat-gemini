import { Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
    isShow: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const TransitionBottomContent: React.FC<Props> = ({ isShow, setShow, children }) => {
    return (
        <>
            <Transition show={isShow} as={Fragment}>
                <div className="relative z-[52]">
                    <TransitionChild
                        as={Fragment}
                        enter=" duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave=" duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 bg-stone-900 bg-opacity-50"
                            onClick={() => setShow(false)}
                        />
                    </TransitionChild>

                    <TransitionChild
                        as={Fragment}
                        enter="transition duration-300 transform"
                        enterFrom="opacity-0 translate-y-14 rtl:translate-y-14"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition duration-350 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-14 rtl:translate-y-14"
                    >
                        <div className="fixed bottom-0 w-screen inset-x-0 bg-slate-100 dark:bg-neutral-700 p-4">
                            {children}
                        </div>
                    </TransitionChild>
                </div>
            </Transition>
        </>
    )
}
export default TransitionBottomContent;