const TextOutline = () => {
  return (
    <div className="">
      <div className="space-y-2">
        <h3 className="text-black font-semibold dark:text-white">Outline</h3>
        <textarea
          name="full_name"
          className="text-md pointer-events-none h-80 w-full rounded-md border-none p-5 transition
          duration-300 ease-in-out dark:bg-[#32353a]
          dark:text-[#a6a7af]"
          readOnly
        />
      </div>
    </div>
  );
};

export default TextOutline;
