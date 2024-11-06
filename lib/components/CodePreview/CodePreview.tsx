import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, MonitorPlay } from "lucide-react";

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
      <div className="flex mb-2">
        <div className="flex bg-red-500 rounded-md">
          <button
            className={
              "px-4 py-2 " + (!showCode ? "text-white" : "text-gray-400")
            }
            onClick={() => setShowCode(false)}
          >
            <MonitorPlay size={16} />
          </button>
          <button
            className={
              "px-4 py-2 " + (showCode ? "text-white" : "text-gray-400")
            }
            onClick={() => setShowCode(true)}
          >
            <Code size={16} />
          </button>
        </div>
        {showCode && (
          <button
            className="text-white bg-red-400 rounded-md p-2"
            onClick={handleCopy}
          >
            <AnimatePresence>
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, y: 1 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <Check className="h-4 w-4 text-green-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="clipboard"
                  initial={{ opacity: 0, y: 1 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <Clipboard className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </div>
      <div className="p-6 bg-zinc-950 text-white h-full w-full rounded-md">
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
