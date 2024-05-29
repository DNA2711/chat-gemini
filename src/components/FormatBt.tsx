import CastIcon from "@mui/icons-material/Cast";
import TvIcon from "@mui/icons-material/Tv";
import GroupsIcon from "@mui/icons-material/Groups";

const FormatBt = () => {
  return (
    <section className="flex justify-center gap-3">
      <button
        className="bg-white p-3 text-[#805ad5] border-2 w-32 text-md font-semibold hover:border-[#805ad5] hover:bg-[#eae7ff] flex flex-col justify-center items-center rounded-lg space-y-1
      transition duration-300 ease-in-out"
      >
        <CastIcon className="size-5" />
        <span>Presentation</span>
      </button>
      <button className="bg-white p-3  border-2 w-32 text-[#805ad5] text-md font-semibold hover:border-[#805ad5] hover:bg-[#eae7ff] flex flex-col justify-center items-center rounded-lg space-y-1 transition duration-300 ease-in-out">
        <TvIcon className="size-5" />
        <span>Website</span>
      </button>
      <button className="bg-white p-3  border-2 w-32 text-[#805ad5] text-md font-semibold hover:border-[#805ad5] hover:bg-[#eae7ff] flex flex-col justify-center items-center rounded-lg space-y-1 transition duration-300 ease-in-out">
        <GroupsIcon className="size-5" />
        <span>Social</span>
      </button>
    </section>
  );
};

export default FormatBt;
