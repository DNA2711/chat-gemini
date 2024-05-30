"use client"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TvIcon from "@mui/icons-material/Tv";
import GroupsIcon from "@mui/icons-material/Groups";
import { useEffect } from 'react';

interface Props {
    typeContent: string;
    platform?: string;
    setPlatform: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonTypeContent: React.FC<Props> = ({
    typeContent,
    platform = "",
    setPlatform
}) => {
    let IconDefault = ArticleOutlinedIcon
    switch (typeContent) {
        case 'Document':
            IconDefault = ArticleOutlinedIcon;
            break;
        case 'Website':
            IconDefault = TvIcon;
            break;
        case 'Social':
            IconDefault = GroupsIcon
            break;
        default:
            IconDefault = TvIcon
            break;
    }

    return (
        <>
            <button
                onClick={() => setPlatform(typeContent)}
                className={`${platform === typeContent ? 'border-indigo-600' : ''} bg-white hover:bg-indigo-50 p-3 w-32 border-2 border-white hover:border-indigo-600 flex flex-col justify-center items-center rounded-md space-y-1 transition duration-300 ease-in-out group`}>
                <IconDefault className="size-5 text-indigo-600" />
                <span className={`text-sm font-medium group-hover:text-indigo-600 ${platform === typeContent ? 'text-indigo-600' : 'text-neutral-600'}`}>{typeContent}</span>
            </button>
        </>
    )
}
export default ButtonTypeContent;