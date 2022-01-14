import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeButton } from "../styledComponents/ThemeButton";

function ChangeThemeButton() {
  const { setThemeName, themeName, theme } = useContext(ThemeContext);

  return (
    <ThemeButton
      theme={theme}
      onClick={() =>
        setThemeName((prev) => (prev === "light" ? "dark" : "light"))
      }
    >
      Change Theme - {`${themeName}`}
    </ThemeButton>
  );
}

export default ChangeThemeButton;
