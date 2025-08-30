import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";
import { LanguageContext } from "../../context/languageProvider";

export default function Settings() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  return (
    <div>
      <h3
        className={`text-[25px] font-medium ${
          theme === "light" ? "text-[#000]" : "text-[#fff]"
        }`}
      >
        Settings
      </h3>
    </div>
  );
}
