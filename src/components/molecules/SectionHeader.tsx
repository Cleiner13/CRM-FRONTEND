import { COLOR_SYSTEM } from "@/config/styles";
import { Button } from "@/components/atoms/Button";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
  };
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  action,
}) => {
  const titleText = `${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark}`;
  const subtitleText = `${COLOR_SYSTEM.text.tertiary.light} ${COLOR_SYSTEM.text.tertiary.dark}`;

  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className={`text-2xl font-bold ${titleText}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-1 ${subtitleText}`}>
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <Button
          variant="primary"
          size="md"
          onClick={action.onClick}
          icon={action.icon}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
};
