import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CodePreviewProps {
  component: React.ReactNode;
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ component, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full">
      <div className="flex">
        <button
          className={`px-4 py-2 ${
            !showCode ? "bg-zinc-800 text-white" : "bg-zinc-700 text-gray-400"
          }`}
          onClick={() => setShowCode(false)}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 ${
            showCode ? "bg-zinc-800 text-white" : "bg-zinc-700 text-gray-400"
          }`}
          onClick={() => setShowCode(true)}
        >
          Code
        </button>
        {showCode && (
          <button
            className="px-4 py-2 bg-zinc-800 text-white"
            onClick={handleCopy}
          >
            <AnimatePresence>
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="h-4 w-4 text-green-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="clipboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Clipboard className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </div>
      <div className="p-8 bg-zinc-950 text-white h-full w-full">
        {showCode ? (
          <pre className="overflow-auto h-full">{code}</pre>
        ) : (
          <div className="flex justify-center items-center h-full">
            {component}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
