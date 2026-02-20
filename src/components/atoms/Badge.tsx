import { BADGE_STYLES } from "@/config/styles";

interface BadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  size?: "xs" | "sm" | "md";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "primary",
  size = "md",
  icon,
}) => {
  const colorClass = BADGE_STYLES.variants[variant];
  const sizeClass = BADGE_STYLES.sizes[size];

  return (
    <span
      className={`${BADGE_STYLES.base} ${colorClass} ${sizeClass}`}
    >
      {icon && icon}
      {label}
    </span>
  );
};