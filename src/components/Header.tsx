import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const COLOR_PRIMARY_BLUE = "#3B82F6";
const COLOR_ACCENT_GREEN = "#10B981"; // A lively, fresh green for highlights

const navLinks = [
  { label: "Home", hash: "#hero-section", path: "/" },
  { label: "Services", hash: "#solutions", path: "/services" },
  { label: "Blog", hash: "#blog", path: "/blog" },
  { label: "Portfolio", hash: "#featured-project", path: "/portfolio" },
  { label: "About Us", hash: "#about", path: "/about-us" },
  { label: "Contact", hash: "#contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-colors duration-300 sm:px-8 ${
        hasScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <a
        href="/"
        className="text-2xl font-extrabold tracking-wide sm:text-3xl"
        style={{
          color: COLOR_PRIMARY_BLUE,
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        <span
          style={{
            color: COLOR_ACCENT_GREEN,
          }}
        >
          Open
        </span>{" "}
        Vision
      </a>
      <div className="flex items-center sm:hidden">
        <button
          className="text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
      <div
        className={`items-center space-x-4 sm:flex md:space-x-8 ${
          isMenuOpen
            ? "absolute left-0 top-[72px] flex w-full flex-col items-center space-x-0 space-y-4 bg-white py-4 shadow-md"
            : "hidden"
        } sm:relative sm:left-auto sm:top-auto sm:w-auto sm:flex-row sm:bg-transparent sm:py-0 sm:shadow-none`}
      >
        <nav className="flex flex-col space-y-2 text-sm sm:flex-row sm:space-x-4 sm:space-y-0 sm:text-lg md:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={isHome ? link.hash : link.path}
              className="block py-1 text-center font-medium text-gray-700 transition duration-200 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={isHome ? "/get-started" : "/get-started"}
          className="transform rounded-lg bg-[#3B82F6] px-5 py-2 text-sm font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:ring-4 sm:px-6 sm:py-3 sm:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
