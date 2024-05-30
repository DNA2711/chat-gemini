import { Select } from "@headlessui/react";
import SelectionList from "../ListBox/SelectionList";

const TypeContent1 = [
  "Posts",
  "Articles",
  "Review",
  "How-to guide",
  "Opinion piece",
  "Blog post",
]

const TypeContent2 = [
  "Neutral",
  "Formal",
  "Informal",
  "Technical",
  "Professional",
  "Educational",
]

const Selection = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <SelectionList list={TypeContent1} />

      <SelectionList list={TypeContent2} />

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
