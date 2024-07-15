import { motion, Transition } from "framer-motion";
import { Code, MonitorPlay } from "lucide-react";

const TOGGLE_CLASSES =
  "text-sm font-medium font-geist flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

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
        <MonitorPlay className="relative z-10 md:text-sm" size={18} />
        <span className="relative z-10">View</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "code" ? "text-white" : "text-zinc-500"
        }`}
        onClick={handleCodeClick}
      >
        <Code className="relative z-10 md:text-sm" size={18} />
        <span className="relative z-10">Code</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "code" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={
            { type: "spring", damping: 15, stiffness: 100 } as Transition
          }
          className="h-full w-1/2 rounded-md bg-zinc-900"
        />
      </div>
    </div>
  );
};

export default SwitchButton;