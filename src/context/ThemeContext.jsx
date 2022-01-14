import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themes = {
  light: {
    background: "#FFF89A",
    color: "#086E7D",
    button: "#FFC900",
  },
  dark: {
    background: "#086E7D",
    color: "#FFF89A",
    button: "#F05454",
  },
};

function ThemeContextProvider(props) {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const localThemeName = localStorage.getItem("themeName")
      ? localStorage.getItem("themeName")
      : localStorage.setItem("themeName", themeName);
    setThemeName(localThemeName);
  }, []);

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
    const theme = themeName === "light" ? themes.light : themes.dark;
    document.body.className = "";
    document.body.classList.add(theme.background, theme.color);
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeName === "light" ? themes.light : themes.dark,
        setThemeName,
        themeName,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContextProvider, ThemeContext };
