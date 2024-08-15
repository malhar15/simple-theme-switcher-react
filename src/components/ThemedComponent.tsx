import React from "react";
import { useTheme } from "../providers/ThemeProvider";

const ThemedComponent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <p
      style={{
        color: `${theme === "light" ? "black" : "white"}`,
        backgroundColor: `${theme === "light" ? "white" : "black"}`,
      }}
    >
      {`The text you are reading is in ${
        theme === "light" ? "black" : "white"
      } color with ${theme === "light" ? "white" : "black"} background.`}
    </p>
  );
};

export default ThemedComponent;
