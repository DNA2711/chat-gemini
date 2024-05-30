import CastIcon from "@mui/icons-material/Cast";
import TvIcon from "@mui/icons-material/Tv";
import GroupsIcon from "@mui/icons-material/Groups";

interface Props {
    typeContent: string;
}

const ButtonTypeContent: React.FC<Props> = ({
    typeContent,
}) => {

    let IconDefault = CastIcon
    switch (typeContent) {
        case 'Presentation':
            IconDefault = CastIcon
        case 'Website':
            IconDefault = TvIcon
        case 'Social':
            IconDefault = GroupsIcon
        default:
            IconDefault = CastIcon
    }

    return (
        <>
            <button
                className="bg-white p-3 w-32 border-2 border-white hover:border-indigo-600 hover:indigo-400 flex flex-col justify-center items-center rounded-md space-y-1 transition duration-300 ease-in-out group">
                <IconDefault className="size-5 text-indigo-600" />
                <span className="text-sm font-medium text-neutral-600 group-hover:text-indigo-600">{typeContent}</span>
            </button>
        </>
    )
}
export default ButtonTypeContent;