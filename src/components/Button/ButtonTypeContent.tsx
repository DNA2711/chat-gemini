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

    const className = "p-3 w-32 border-2 flex flex-col justify-center items-center rounded-md space-y-1 transition duration-300 ease-in-out group"
    const hoverClassName = "hover:bg-indigo-50 dark:hover:bg-indigo-50 hover:border-indigo-600 dark:hover:border-indigo-600"
    return (
        <>
            <button
                onClick={() => setPlatform(typeContent)}
                className={`${className} ${platform === typeContent ? 'border-indigo-600 bg-indigo-50' : 'border-white dark:border-neutral-900 bg-white dark:bg-neutral-900'} ${hoverClassName}`}>
                <IconDefault className="size-5 text-indigo-600" />
                <span className={`text-sm font-semibold group-hover:text-indigo-600 ${platform === typeContent ? 'text-indigo-600' : 'text-neutral-600 dark:text-neutral-300'}`}>{typeContent}</span>
            </button>
        </>
    )
}
export default ButtonTypeContent;