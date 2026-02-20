interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 dark:from-neutral-900 dark:via-primary-900 dark:to-neutral-800">
      <div className="w-full max-w-md px-4">{children}</div>
    </div>
  );
};