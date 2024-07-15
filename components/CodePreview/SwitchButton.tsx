import { motion, Transition } from "framer-motion";
import { Code, TvMinimal } from "lucide-react";

const TOGGLE_CLASSES =
  "text-sm font-medium font-geist flex items-center py px-6 gap-2.5 md:py-2 transition-colors relative z-10";

interface SwitchButtonProps {
  selected: "preview" | "code";
  setSelected: (value: "preview" | "code") => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ selected, setSelected }) => {
  const handlePreviewClick = () => {
    setSelected("preview");
  };

  const handleCodeClick = () => {
    setSelected("code");
  };

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "preview" ? "text-white" : "text-zinc-500"
        }`}
        onClick={handlePreviewClick}
      >
        <TvMinimal className="relative z-10 md:text-sm" size={18} />
        <div className="relative z-10 font-semibold">Preview</div>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "code" ? "text-white" : "text-zinc-500"
        }`}
        onClick={handleCodeClick}
      >
        <Code className="relative z-10 md:text-sm" size={18} />
        <div className="relative z-10 font-semibold text">Code</div>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "code" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={
            { type: "spring", damping: 30, stiffness: 300 } as Transition
          }
          className="h-full w-1/2 rounded-lg bg-[#0D0D0D]"
        />
      </div>
    </div>
  );
};

export default SwitchButton;