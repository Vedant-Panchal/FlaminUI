import React, { useState } from "react";
import { ChevronRight, Minus } from "lucide-react";

interface ToggleSwitchProps {
  label?: string;
  onChange?: (checked: boolean) => void;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };
  return (
    <div
      onClick={handleToggle}
      className={`flex relative items-center justify-center w-6 h-10 rounded-t-none rounded-l-none rounded-br-[50px] rounded-tr-[50px] after:content-[' '] after:overflow-hidden after:absolute after:-bottom-[18px] after:left-1 after:h-5 after:w-2 after:shadow-[0px_-10px_0px_0px_#18181b] after:rounded-tl-[15px] after:bg-transparent before:content-[' '] before:overflow-hidden before:absolute before:-top-[18px] before:left-1 before:h-5 before:w-2 before:shadow-[0px_10px_0px_0px_#18181b] before:rounded-bl-[15px] before:bg-transparent bg-zinc-900 cursor-pointer text-white transition-colors duration-200 ease-in-out ${isChecked ? 'rotate-180':'rotate-0'}`}
    >
      
        <ChevronRight size={22} strokeWidth={2.5} color="white" className={`${isChecked ? 'rotate-0' : '-rotate-[360deg]'} transition-transform duration-[600ms] ease-in-out`} />
    </div>
  );
};
export default ToggleSwitch;
