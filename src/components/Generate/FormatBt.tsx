import CastIcon from "@mui/icons-material/Cast";
import TvIcon from "@mui/icons-material/Tv";
import GroupsIcon from "@mui/icons-material/Groups";
import ButtonTypeContent from "../Button/ButtonTypeContent";

const FormatBt = () => {
  return (
    <section className="flex justify-center space-x-2">
      <ButtonTypeContent typeContent="Presentation" />
      <ButtonTypeContent typeContent="Website" />
      <ButtonTypeContent typeContent="Social" />
    </section>
  );
};

export default FormatBt;
