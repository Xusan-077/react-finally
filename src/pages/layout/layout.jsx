import React from "react";
import Navbar from "../../companents/navbar/navbar";
import { Outlet } from "react-router-dom";
import Header from "../../companents/header/header";

export default function Layout() {
  return (
    <section className="flex">
      <div className="fixed top-0 left-0 w-[20%]">
        <Navbar />
      </div>

      <div className="ml-[20%] w-[80%]">
        <div className="bg-[#0006] sticky top-0 z-10">
          <Header />
        </div>

        <div className="bg-[#0002] min-h-screen">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
