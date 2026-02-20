import { create } from "zustand";

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: localStorage.getItem("theme") === "dark",
  toggleTheme: () =>
    set((state) => {
      const newIsDark = !state.isDark;
      localStorage.setItem("theme", newIsDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newIsDark);
      return { isDark: newIsDark };
    }),
  setTheme: (isDark) => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
    set({ isDark });
  },
}));