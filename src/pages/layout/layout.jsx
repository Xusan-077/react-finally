import Navbar from "../../companents/navbar/navbar";
import { Outlet } from "react-router-dom";
import Header from "../../companents/header/header";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="flex">
      <div className="fixed top-0 left-0 w-[20%]">
        <Navbar />
      </div>

      <div className="ml-[20%] w-[80%]">
        <div className="bg-[#0006] sticky top-0 z-10">
          <Header />
        </div>

        <div
          className={`min-h-screen p-[20px] ${
            theme === "light" ? "bg-[#F5F6FA]" : "bg-[#1B2431]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
}
