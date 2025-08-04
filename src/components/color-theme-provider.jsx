import React, { createContext, useContext, useState, useEffect } from "react";

const ColorThemeContext = createContext();

export function useColorTheme() {
  return useContext(ColorThemeContext);
}

export function ColorThemeProvider({ children }) {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-green", "theme-violet", "theme-slate");

    if (theme !== "default") {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <ColorThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}