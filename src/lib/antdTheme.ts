import colors from "./colors";

export const getAntTheme = (theme: "light" | "dark") => {
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
