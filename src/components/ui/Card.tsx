import { CARD_STYLES } from "@/config/styles";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "flat" | "elevated";
  clickable?: boolean;
  padding?: "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  clickable = false,
  padding = "md",
}) => {
  const colorClass = CARD_STYLES.variants[variant];
  const paddingClass = CARD_STYLES.padding[padding];
  const clickableClass = clickable ? "hover:shadow-lg dark:hover:shadow-xl cursor-pointer hover:scale-[1.01]" : "";

  return (
    <div
      className={`${CARD_STYLES.base} ${colorClass} ${paddingClass} ${clickableClass} ${className}`}
    >
      {children}
    </div>
  );
};
