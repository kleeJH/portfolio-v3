import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";

import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { menu, close, logo_sakura } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <ScrollProgress />
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo_sakura}
            alt="logo"
            className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
          />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#5efff2] to-blue-500 text-[18px] sm:text-[20px] font-bold cursor-pointer">
            Kevin
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center justify-end relative z-50">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu icon"
              className={`w-7 h-7 transition-transform duration-300 ${
                toggle ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`absolute top-16 right-4 w-56 rounded-2xl shadow-xl backdrop-blur-lg bg-white/10 border border-white/20 transition-all duration-300 ease-in-out transform origin-top-right ${
              toggle
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col p-5 gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                      active === nav.title
                        ? "bg-white/20 text-white"
                        : "text-gray-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
