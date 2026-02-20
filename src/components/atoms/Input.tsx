import { COLOR_SYSTEM, INPUT_STYLES } from "@/config/styles";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  variant?: "default" | "minimal";
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  icon,
  variant = "default",
  required,
  className = "",
  ...props
}) => {
  const colorClass = INPUT_STYLES.variants[variant];
  const textcolor = `${COLOR_SYSTEM.input.text.light} ${COLOR_SYSTEM.input.text.dark}`;
  const labelClass = INPUT_STYLES.label;
  const errorClass = `${INPUT_STYLES.error}`;
  const helperTextClass = `${INPUT_STYLES.helperText}`;

  return (
    <div className="w-full">
      {label && (
        <label className={labelClass}>
          {label}
          {required && <span className="ml-1 text-error-600">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
            {icon}
          </div>
        )}
        <input
          className={`${INPUT_STYLES.base} ${colorClass} ${textcolor} ${icon ? "pl-10" : ""} ${error ? "border-error-500 dark:border-error-500" : ""} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className={`${errorClass}`}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className={`${helperTextClass}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};