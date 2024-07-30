import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

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
    <label
      className="flex flex-col items-center cursor-pointer"
      onClick={handleToggle}
    >
      {label && <div className="mb-3 text-white font-medium">{label}</div>}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full text-white transition-colors duration-500 ease-in-out ${
          isChecked ? "" : ""
        }`}
        style={{ cursor: "pointer" }}
      >
        <ChevronLeft
          size={24}
          className={`${isChecked ? "rotate-0" : "rotate-180"} transition-transform duration-500 ease-in-out`}
          color="white"
        />
      </div>
    </label>
  );
};

export default ToggleSwitch;
