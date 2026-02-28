"use client";

import {
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

type PreProps = ComponentPropsWithoutRef<"pre">;
function getLanguageLabel(props: PreProps): string {
  const preLanguage = (props as Record<string, unknown>)["data-language"];
  if (typeof preLanguage === "string" && preLanguage.length > 0) {
    return preLanguage.toUpperCase();
  }

  return "BASH";
}

export function CodeBlock({ children, ...props }: PreProps) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const [copied, setCopied] = useState(false);
  const language = getLanguageLabel(props);

  const copyToClipboard = async () => {
    const codeText = preRef.current?.innerText.replace(/\n+$/, "") ?? "";
    if (!codeText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="code-block my-8 overflow-hidden rounded-md border border-border bg-surface">
      <div className="code-block__header flex h-9 items-center justify-between border-b border-border bg-surface-2 px-4">
        <span className="code-block__language">{language}</span>
        <button type="button" className="code-block__copy" onClick={copyToClipboard}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre ref={preRef} {...props} className="m-0 overflow-x-auto bg-transparent p-[18px]">
        {children}
      </pre>
    </div>
  );
}
