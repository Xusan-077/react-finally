import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";
import { LanguageContext } from "../../context/languageProvider";
import { language } from "../../Language/Language";

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
        {language[lang].pages.settingsPage.settingsPageTitle}
      </h3>
    </div>
  );
}
