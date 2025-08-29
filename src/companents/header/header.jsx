import React, { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";
import { ThemeContext } from "../../context/themeProvider";
import { language } from "../../Language/Language";

export default function Header() {
  const { lang, setLang } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header
      className={`flex items-center justify-between p-[20px] transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-gray-800"
          : "bg-[#273142] text-gray-200"
      }`}
    >
      <div className="flex">
        <button className="pr-[30px] cursor-pointer">
          <i
            className={`bi bi-list text-[25px] ${
              theme == "light" ? "text-gray-600" : "text-[#fff]"
            }`}
          ></i>
        </button>

        <div
          className={`flex items-center gap-4 rounded-[20px] px-4 py-2 w-[350px] ${
            theme === "light" ? "bg-gray-100" : "bg-[#323D4E]"
          }`}
        >
          <i className="bi bi-search text-gray-500"></i>
          <input
            type="text"
            placeholder={language[lang].search}
            className={`outline-none text-[14px] bg-transparent ${
              theme === "light" ? "text-[#000]" : "text-[#fff] "
            }`}
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="cursor-pointer">
          <i className="bi bi-bell-fill"></i>
        </div>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className={` cursor-pointer px-6 py-1 rounded-md   ${
            theme === "light" ? "text-gray-800" : "text-[#fff]"
          }`}
        >
          <option className="text-[#000]" value="en">
            EN
          </option>
          <option className="text-[#000]" value="uz">
            UZ
          </option>
          <option className="text-[#000]" value="ru">
            RU
          </option>
        </select>

        <button
          onClick={() =>
            setTheme((mode) => (mode === "light" ? "dark" : "light"))
          }
          className="cursor-pointer px-3 py-1 rounded-md bg-[#4880FF] text-white hover:bg-[#3665cc] transition"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <div className="flex items-center gap-5">
          <i className="bi bi-person-fill text-[25px]"></i>
          <div className="leading-tight">
            <span className="block font-semibold">Yarashov Xusan</span>
            <span className="text-sm opacity-70">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
