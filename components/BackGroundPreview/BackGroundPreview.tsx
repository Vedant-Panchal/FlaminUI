import CodePreview from "@src/CodePreview/CodePreview";

// Function to unescape code strings
const unescapeCode = (code: any) => {
  return code.replace(/\\`/g, "`").replace(/\\\${/g, "${");
};

// Use CodePreview component and other components within your render
const BackGroundPreview = ({
  code,
  children,
  language,
  filename,
}: {
  code: string;
  children: React.ReactNode;
  language: "tsx" | "jsx";
  filename: "string";
}) => (
  <>
    <CodePreview
      language="tsx"
      fileName={`${filename}.${language}`}
      preview={<div className="w-full h-[500px] p-5">{children}</div>}
      code={unescapeCode(code)}
    />
  </>
);

export default BackGroundPreview;
