import ConfigContent from "./ConfigContent";
import Content from "./Content";

interface Props {
    params: {
        slug: string[];
    },
    searchParams: {
        t: string
    }
}

const outline: React.FC<Props> = (context) => {
    const path = context.params.slug[0];
    const render = () => {
        if (path === "c") {
            return <ConfigContent />;
        } else if (path === "v") {
            return <Content />;
        } else {
            return <ConfigContent />;
        }
    }

    return (
        <div className="relative">
            <div className="py-12">
                {render()}
            </div>
        </div>
    );
};

export default outline;
