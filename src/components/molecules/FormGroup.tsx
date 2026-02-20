import React from "react";
import { COLOR_SYSTEM } from "@/config/styles";

interface FormGroupProps {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: React.ReactNode;
  layout?: "vertical" | "horizontal";
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  required = false,
  error,
  helperText,
  children,
  layout = "vertical",
}) => {
  const labelText = `${COLOR_SYSTEM.text.secondary.light} ${COLOR_SYSTEM.text.secondary.dark}`;
  const errorText = `${COLOR_SYSTEM.text.error.light} ${COLOR_SYSTEM.text.error.dark}`;
  const helperTextColor = `${COLOR_SYSTEM.text.muted.light} ${COLOR_SYSTEM.text.muted.dark}`;

  return (
    <div
      className={`flex gap-4 ${
        layout === "horizontal"
          ? "flex-row items-start"
          : "flex-col"
      }`}
    >
      {label && (
        <label
          className={`block text-sm font-medium ${labelText} ${
            layout === "horizontal"
              ? "w-32 pt-2.5 flex-shrink-0"
              : ""
          }`}
        >
          {label}
          {required && (
            <span className="ml-1 text-error-600">*</span>
          )}
        </label>
      )}

      <div className={`flex-1 ${layout === "vertical" ? "w-full" : ""}`}>
        {children}

        {error && (
          <p className={`mt-2 text-xs font-medium ${errorText}`}>
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className={`mt-2 text-xs ${helperTextColor}`}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};
