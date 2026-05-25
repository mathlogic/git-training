import { useState } from "react";
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

export default function CopyCommandButton({ command, label = "Copy", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(command);
      } else {
        fallbackCopy(command);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      fallbackCopy(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 ${className}`}
      title={`Copy command: ${command}`}
    >
      {copied ? <CheckIcon className="h-3.5 w-3.5 text-emerald-600" /> : <ClipboardDocumentIcon className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
