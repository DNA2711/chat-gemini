import ButtonTypeContent from "../Button/ButtonTypeContent";
import { TooltipText } from "@/const/tooltip";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  platform: string;
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
}

const FormatBt: React.FC<Props> = ({ platform, setPlatform }) => {
  return (
    <section className="flex justify-center space-x-2">
      <Tooltip content={TooltipText.platform_document}>
        <ButtonTypeContent typeContent="Document" platform={platform} setPlatform={setPlatform} />
      </Tooltip>
      <Tooltip content={TooltipText.platform_website}>
        <ButtonTypeContent typeContent="Website" platform={platform} setPlatform={setPlatform} />
      </Tooltip>
      <Tooltip content={TooltipText.platform_social}>
        <ButtonTypeContent typeContent="Social" platform={platform} setPlatform={setPlatform} />
      </Tooltip>
    </section>
  );
};

export default FormatBt;
