import React, { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";
import { ThemeContext } from "../../context/themeProvider";

export default function Header() {
  const { lang, setLang } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header
      className={`flex items-center justify-between px-6 py-3 transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-gray-800"
          : "bg-[#273142] text-gray-200"
      }`}
    >
      <button className="text-2xl">
        <i className="bi bi-list"></i>
      </button>

      <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#1e2a38] px-3 py-1 rounded-lg w-[300px]">
        <i className="bi bi-search text-gray-500"></i>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="px-3 py-1 rounded-md border bg-transparent"
        >
          <option value="en">EN</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>

        <button
          onClick={() =>
            setTheme((mode) => (mode === "light" ? "dark" : "light"))
          }
          className="px-3 py-1 rounded-md bg-[#4880FF] text-white hover:bg-[#3665cc] transition"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <div className="flex items-center gap-2">
          <i className="bi bi-person-fill"></i>
          <div className="leading-tight">
            <span className="block font-semibold">New User</span>
            <span className="text-sm opacity-70">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
