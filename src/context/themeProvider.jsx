import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("");

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");

  useEffect(() => {
    localStorage.setItem("Theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
