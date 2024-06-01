import Promt2 from "@/components/Outline/Promt2"
import Settings from "@/components/Outline/Settings";
import TextOutline from "@/components/Outline/TextOutline"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ConfigContent = () => {
    return (
        <>
            <div className="container">
                <div className="space-y-8 md:px-20 lg:px-40 px-0">
                    <div className="flex items-center justify-center">
                        <section className="flex items-center justify-center">
                            <h2 className="text-2xl font-bold text-black dark:text-white lg:text-3xl">
                                Config
                            </h2>
                        </section>
                    </div>
                    <Promt2 />
                    <TextOutline />
                    <Settings />
                    <div className="flex justify-center py-3">
                        <button className="bg-violet-500 p-3 rounded-md text-white font-semibold text-xl flex items-center space-x-3">
                            <span>Generate Content</span>
                            <ArrowForwardIcon className="size-6" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfigContent;