const TextOutline = () => {
  return (
    <div className="container">
      <div className="lg:px-40 space-y-2">
        <span className="text-black dark:text-white">Outline</span>
        <textarea
          name="full_name"
          className="rounded-xl w-full h-80 p-5 text-md text-black"
          readOnly
        />
      </div>
    </div>
  );
};

export default TextOutline;
