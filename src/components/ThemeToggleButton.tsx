import React from "react";
import { useTheme } from "../providers/ThemeProvider";

const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  console.log("currTheme: " + theme);

  const handleThemeSwitch = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    console.log("Setting them to " + (theme === "light" ? "dark" : "light"));
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleThemeSwitch}>
      {`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    </button>
  );
};

export default ThemeToggleButton;
