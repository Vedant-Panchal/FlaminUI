import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"; // Ensure correct path
import prettier from "prettier";
import parserTypescript from "prettier/parser-typescript";
import parserBabel from "prettier/parser-babel"; // For JSX/TSX
import { Check, Copy } from "lucide-react";

interface CodeCopyProps {
  code: string;
  preview: React.ReactNode;
  language: "typescript" | "jsx" | "tsx"; // Extend this list as needed
  fileName?: string;
  lineNumbers?: Array<number>;
}

const CodeCopy: React.FC<CodeCopyProps> = ({
  code,
  preview,
  language,
  lineNumbers = [],
  fileName = "example.tsx",
}) => {
  const [selected, setSelected] = useState<"preview" | "code">("preview");
  const [processedCode, setProcessedCode] = useState<string>(code);
  const [copy, setCopy] = useState(false);

  // Function to preprocess code with Prettier
  const preprocessCode = async (
    code: string,
    language: string
  ): Promise<string> => {
    try {
      const formattedCode = await prettier.format(code, {
        parser: language,
        plugins: [
          parserTypescript, // For TypeScript and TSX
          parserBabel, // For JSX and TSX
        ],
        singleQuote: true,
        trailingComma: "es5",
        printWidth: 80, // Adjust print width if needed
      });

      // Remove extra newlines and trim spaces
      return formattedCode.replace(/\n\s*\n/g, "\n").trim();
    } catch (error) {
      console.error("Prettier formatting error:", error);
      return code; // Return original code if formatting fails
    }
  };

  // Determine the Prettier parser based on the language
  const getParser = (lang: string): string => {
    switch (lang) {
      case "typescript":
        return "typescript";
      case "jsx":
        return "babel";
      case "tsx":
        return "babel-ts";
      default:
        return "babel";
    }
  };

  useEffect(() => {
    const formatCode = async () => {
      const formattedCode = await preprocessCode(code, getParser(language));
      setProcessedCode(formattedCode);
    };
    formatCode();
  }, [code, language]);

  return (
    <div
      className="relative overflow-x-hidden rounded-lg w-full border border-white/10 mt-5"
      style={{
        backdropFilter: "blur(11px) saturate(184%)",
        WebkitBackdropFilter: "blur(11px) saturate(184%)",
        backgroundColor: "rgba(36, 36, 36, 0.2)",
      }}
    >
      <div className="flex justify-between px-4 text-white text-xs items-center bg-[#0D0D0D] border-b border-white/20 py-2 absolute top-0 left-0 z-10 w-full">
        <p className="text-sm italic font-medium text-white/70">{fileName}</p>
        <button
          className={`inline-flex items-center gap-1 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-200 ease-in-out`}
          onClick={() => {
            navigator.clipboard.writeText(processedCode);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 1000);
          }}
        >
          {copy ? (
            <Check size={15} className="text-green-600" strokeWidth={3} />
          ) : (
            <Copy size={15} />
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          backgroundColor: "transparent",
          borderRadius: "1em",
          padding: "2em",
          overflowY: "auto",
          minHeight: "100px",
          maxHeight: "500px",
          scrollbarWidth: "none",
        }}
        codeTagProps={{ className: "font-geist text-red-200 mt-6" }}
        lineProps={(lineNumber) => {
          const style: React.CSSProperties = { display: "block", width: "100%" };
          if (lineNumbers.includes(lineNumber)) {
            style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }
          return { style };
        }}
      >
        {processedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeCopy;
