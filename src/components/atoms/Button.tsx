import { BUTTON_STYLES } from "@/config/styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "warning" | "info" | "successDark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  const colorClass = BUTTON_STYLES.variants[variant];
  const sizeClass = BUTTON_STYLES.sizes[size];

  const iconElement = icon && (
    <span className="flex items-center justify-center">
      {icon}
    </span>
  );

  return (
    <button
      className={`${BUTTON_STYLES.base} ${colorClass} ${sizeClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Cargando...
        </>
      ) : (
        <>
          {iconPosition === "left" && iconElement}
          {children}
          {iconPosition === "right" && iconElement}
        </>
      )}
    </button>
  );
};