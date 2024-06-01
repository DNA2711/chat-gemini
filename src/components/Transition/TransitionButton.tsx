interface Props {
    Icon: React.ReactNode
    name?: string;
    className: string;
    isShow?: boolean;
    typeShow?: string;
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
    setTypeShow?: React.Dispatch<React.SetStateAction<string>>;
    setShowOther?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TransitionButton: React.FC<Props> = ({
    Icon,
    name,
    className,
    isShow = false,
    typeShow = '',
    setShow = () => { },
    setTypeShow = () => { },
    setShowOther = () => { },
}) => {

    const handleClick = (isShow: boolean, typeShow: string) => {
        setShow(!isShow);
        setShowOther(false)
        setTypeShow(typeShow)
    }

    return (
        <>
            <button
                onClick={() => handleClick(isShow, typeShow)}
                className={className}
            >
                {Icon}
                {name && (
                    <span
                        className={`block text-sm text-neutral-800 dark:text-white origin-left transition-transform duration-300 whitespace-nowrap`}
                    >
                        {name}
                    </span>
                )}
            </button>
        </>
    )
}
export default TransitionButton;