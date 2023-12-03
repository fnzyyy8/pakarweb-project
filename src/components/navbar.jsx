/* eslint-disable no-unused-vars */
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./layout.scss";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const toogleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="navbar">
      <div>
        <img src="/pakar-web.svg" alt="logo-pakarweb" className="w-32" />
      </div>
      <div className="flex">
        <button className="collapse-button" onClick={toogleNavbar}>
          <MenuIcon />
        </button>
        <ul className={navbar ? "hidden" : "nav-menu"}>
          <a href="/">
            <li className="nav-item hover:text-slate-500">Home</li>
          </a>
          <a href="/about">
            <li className="nav-item hover:text-slate-500">About</li>
          </a>
          <a href="/services">
            <li className="nav-item hover:text-slate-500">Services</li>
          </a>
          <button className="">Daftar</button>
        </ul>
      </div>
    </nav>
  );
}
