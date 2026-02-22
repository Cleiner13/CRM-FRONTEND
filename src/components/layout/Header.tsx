import { Button } from "@/components/ui";
import { useThemeStore } from "@/store/themeStore";
import { Moon, Sun, LogOut, Settings } from "lucide-react";
import { COLOR_SYSTEM } from "@/config/styles";

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();
  
  // Datos del usuario (en un proyecto real, vendrían del contexto/store)
  const userData = {
    name: "Juan García",
    role: "Gerente de Ventas",
    avatar: "https://via.placeholder.com/40",
  };

  return (
     <header className={`${COLOR_SYSTEM.background.primary.light} ${COLOR_SYSTEM.background.primary.dark} border-b-2 ${COLOR_SYSTEM.border.primary.light} px-6 py-4`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
            {userData.avatar ? (
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement!.innerHTML = `<span>${userData.name.charAt(0)}</span>`;
                }}
              />
            ) : (
              <span>{userData.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className={`text-sm font-semibold ${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark}`}>
              ¡Bienvenido, {userData.name}!
            </p>
            <p className={`text-xs ${COLOR_SYSTEM.text.tertiary.light} ${COLOR_SYSTEM.text.tertiary.dark}`}>
              {userData.role}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Settings size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <LogOut size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};
