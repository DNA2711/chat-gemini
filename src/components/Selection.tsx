import { Select } from "@headlessui/react";

const Selection = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-5 grid-cols-2">
      <Select
        name="status"
        aria-label="Project status"
        className="text-black p-1 px-3 rounded-lg "
      >
        <option>Posts</option>
        <option>Articles</option>
        <option>Review</option>
        <option>How-to guide</option>
        <option>Opinion piece</option>
        <option>Blog post</option>
      </Select>

      <Select
        name="status"
        aria-label="Project status"
        className="text-black p-1 px-3 rounded-lg "
      >
        <option>Neutral</option>
        <option>Formal</option>
        <option>Informal</option>
        <option>Technical</option>
        <option>Professional</option>
        <option>Educational</option>
      </Select>

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
