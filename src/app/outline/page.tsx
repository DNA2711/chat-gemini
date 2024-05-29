import Promt2 from "@/components/Outline/Promt2";
import Settings from "@/components/Outline/Settings";
import TextOutline from "@/components/Outline/TextOutline";

const outline = () => {
  return (
    <div className="space-y-3">
      <Promt2 />
      <TextOutline />
      <Settings />
    </div>
  );
};

export default outline;
