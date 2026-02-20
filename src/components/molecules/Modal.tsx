import React from "react";
import { COLOR_SYSTEM, BUTTON_STYLES } from "@/config/styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  actions?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "danger";
    isLoading?: boolean;
  }[];
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = "md",
  actions,
  showCloseButton = true,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const cardBg = `${COLOR_SYSTEM.background.primary.light} ${COLOR_SYSTEM.background.primary.dark}`;
  const borderColor = `border-neutral-200 dark:border-neutral-700`;
  const titleText = `${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark}`;
  const subtitleText = `${COLOR_SYSTEM.text.tertiary.light} ${COLOR_SYSTEM.text.tertiary.dark}`;
  const closeText = `text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-700`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 transition-opacity duration-200"
      onClick={handleBackdropClick}
    >
      <div
        className={`${sizeClasses[size]} w-full mx-4 rounded-xl ${cardBg} shadow-2xl animation-in fade-in duration-200`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={`flex items-start justify-between border-b ${borderColor} px-6 py-4`}>
            <div>
              {title && (
                <h2 className={`text-lg font-semibold ${titleText}`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-sm ${subtitleText} mt-1`}>
                  {subtitle}
                </p>
              )}
            </div>
            {showCloseButton && (
              <button
                onClick={onClose}
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${closeText} transition-colors duration-200`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4">
          {children}
        </div>

        {/* Footer with Actions */}
        {actions && actions.length > 0 && (
          <div className={`border-t ${borderColor} px-6 py-4 flex gap-3 justify-end`}>
            {actions.map((action, idx) => {
              const buttonColor = BUTTON_STYLES.variants[action.variant || "primary"];

              return (
                <button
                  key={idx}
                  onClick={action.onClick}
                  disabled={action.isLoading}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/50 disabled:opacity-50 disabled:cursor-not-allowed ${buttonColor}`}
                >
                  {action.isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2 inline-block" />
                      Cargando...
                    </>
                  ) : (
                    action.label
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
