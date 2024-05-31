import Promt2 from "@/components/Outline/Promt2";
import Settings from "@/components/Outline/Settings";
import TextOutline from "@/components/Outline/TextOutline";

const outline = () => {
    return (
        <div className="py-12">
            <div className="container">
                <div className="space-y-3 md:px-20 lg:px-40 px-0">
                    <Promt2 />
                    <TextOutline />
                    <Settings />
                </div>
            </div>
        </div>
    );
};

export default outline;
