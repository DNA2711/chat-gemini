import { Select } from "@headlessui/react";
import SelectionList from "../ListBox/SelectionList";
import { getPostType } from "@/const/function";
import { Action } from "./Promt";
import { TooltipLanguage, TooltipPostType, TooltipText } from "@/const/tooltip";
import Tooltip from "../Tooltip/Tooltip";

const PostType = [
  "Posts",
  "Articles",
  "Review",
  "How-to guide",
  "Opinion piece",
  "Blog post",
]

const ContentLanguages = [
  "English",
  "Chinese",
  "Spanish",
  "Arabic",
  "Portuguese",
  "Russian",
  "Japanese",
  "German",
  "French",
  "Korean",
  "Hindi",
  "Indonesian",
  "Italian",
  "Polish",
  "Turkish",
  "Dutch",
  "Thailand",
  "Vietnamese",
];

interface Props {
  platform: string;
  dispatch: (value: Action) => void;
}

const Selection: React.FC<Props> = ({ platform, dispatch }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip
        content={TooltipText.post_type}
      >
        <SelectionList
          list={getPostType(platform)}
          type="postType"
          dispatch={dispatch}
        />
      </Tooltip>

      <Tooltip
        content={TooltipText.language}
      >
        <SelectionList
          list={ContentLanguages}
          type={'language'}
          dispatch={dispatch}
        />
      </Tooltip>


      {/* <Select
        name="status"
        aria-label="Project status"
        className="text-black p-1 px-3 rounded-lg"
      >
        <option value="active">Short</option>
        <option value="paused">Medium</option>
        <option value="delayed">Long</option>
        <option value="canceled">Very long</option>
      </Select>

      <Select
        name="status"
        aria-label="Project status"
        className="text-black p-1 px-3 rounded-lg"
      >
        <option value="active">English</option>
        <option value="paused">Vietnamese</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
      <Select
        name="status"
        aria-label="Project status"
        className="text-black p-1 px-3 rounded-lg "
      >
        <option>Marketer</option>
        <option>Articles</option>
        <option>Review</option>
        <option>How-to guide</option>
        <option>Opinion piece</option>
        <option>Blog post</option>
      </Select> */}
    </div>
  );
};

export default Selection;
