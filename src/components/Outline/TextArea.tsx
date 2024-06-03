import React, { useEffect, useRef } from "react";

interface AutoResizeTextareaProps {
  value?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
  value,
  placeholder = "",
  className = "",
  readOnly = false,
  onChange = () => {},
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    autoResize();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      placeholder={placeholder}
      className={`resize-none ${className}`}
      readOnly={readOnly}
      onInput={autoResize}
      onChange={onChange}
    />
  );
};

export default AutoResizeTextarea;
