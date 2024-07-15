import { useState } from "react";
import SwitchButton from "./SwitchButton";

interface CodePreviewProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}

const CodePreview: React.FC<CodePreviewProps> = ({ children, preview }) => {
  const [selected, setSelected] = useState<"preview" | "code">("preview");

  return (
    <div>
      <SwitchButton selected={selected} setSelected={setSelected} />
      
        {selected === "preview" ? preview : children}
      
    </div>
  );
};

export default CodePreview;