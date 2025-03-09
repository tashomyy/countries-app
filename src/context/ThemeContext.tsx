import { createContext, useEffect, useState } from "react";
import colors from "../lib/colors";

export type Theme = "light" | "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
  antTheme: any;
}>({
  theme: "light",
  toggleTheme: () => {},
  antTheme: {},
});

const getAntTheme = (theme: Theme) => {
  return {
    token: {
      colorPrimary: colors.primary,
      colorLink: colors.secondary,
      colorTextBase:
        theme === "dark" ? colors.darkTextPrimary : colors.textPrimary,
      colorBgBase: theme === "dark" ? colors.darkBackground : colors.background,
    },
  };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getSystemTheme = (): Theme => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || getSystemTheme();
  });

  const antTheme = getAntTheme(theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, antTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
