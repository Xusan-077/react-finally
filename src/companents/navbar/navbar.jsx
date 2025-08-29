import { NavLink } from "react-router-dom";
import { language } from "../../Language/Language";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";
import { LanguageContext } from "../../context/languageProvider";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const paths = ["/", "users", "settings"];

  return (
    <div
      className={`shadow-lg p-6 h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#273142]"
      }`}
    >
      {/* Logo */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-center">
          <span className="text-[#4880FF]">Dash</span>
          <span
            className={`${theme === "light" ? "text-[#000]" : "text-[#fff]"}`}
          >
            Stack
          </span>
        </h2>
      </div>

      {/* Nav Links */}
      <nav>
        <ul className="space-y-2">
          {language[lang].navbar.map((el, index) => (
            <li key={el}>
              <NavLink
                to={paths[index]}
                className={({ isActive }) =>
                  `block w-full py-2.5 text-lg rounded-md text-left font-medium pl-[80px] transition-all
                  ${
                    isActive
                      ? "bg-[#4880FF] text-white"
                      : theme === "light"
                      ? "text-gray-800 hover:bg-[#d1dfff] hover:text-[#4880FF]"
                      : "text-gray-200 hover:bg-[#314155] hover:text-[#4880FF]"
                  }`
                }
              >
                {el}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
