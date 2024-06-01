const TextOutline = () => {
  return (
    <div className="">
      <div className="space-y-2">
        <h3 className="font-semibold text-black dark:text-white">Outline</h3>
        <textarea
          name="full_name"
          className="text-md pointer-events-none h-80 w-full rounded-md border-none p-5 transition duration-300 ease-in-out bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300"
        />
      </div>
    </div>
  );
};

export default TextOutline;
