import React, { createContext, useContext, useState } from "react";

type ThemeContextType =
  | {
      theme: string;
      setTheme: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined;

const ThemeContext = createContext<ThemeContextType>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Component is not wrapped inside ThemeProvider");
  }
  return themeContext;
};

export default ThemeProvider;
