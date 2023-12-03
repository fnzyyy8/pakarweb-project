/* eslint-disable no-unused-vars */
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./layout.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toogleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="navbar">
      <a href="/">
        <img src="/pakar-web.svg" alt="logo-pakarweb" className="w-32" />
      </a>
      <div className="flex">
        <button className="collapse-button" onClick={toogleNavbar}>
          <MenuIcon />
        </button>
        <ul className={navbar ? "hidden" : "nav-menu"}>
          <a href="/about">
            <li className="nav-item hover:text-slate-500">Tentang</li>
          </a>
          <a href="/services">
            <li className="nav-item hover:text-slate-500">Layanan</li>
          </a>
          <a href="/karir">
            <li className="nav-item hover:text-slate-500">Karir</li>
          </a>
        </ul>
        <a onClick={toogleDarkMode} className="nav-item cursor-pointer">
          {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </a>
      </div>
    </nav>
  );
}
