import { useEffect } from "react";
import { AppRouter } from "@/router/AppRouter";
import { useThemeStore } from "@/store/themeStore";

function App() {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    // Cargar tema guardado on mount
    const savedTheme = localStorage.getItem("theme") === "dark";
    setTheme(savedTheme);
  }, [setTheme]);

  return <AppRouter />;
}

export default App;