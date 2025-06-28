import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

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
  // const location = useLocation();
  const isHome = false; // location.pathname === "/";
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
      setHasScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed max-w-[1800px] top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-colors duration-300 md:px-8 ${
        hasScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide md:text-3xl"
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
      </Link>
      <div className="flex items-center md:hidden">
        <button
          className="text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
      <div
        className={`items-center space-x-4 md:flex md:space-x-8 ${
          isMenuOpen
            ? "absolute left-0 top-[63px] flex w-full flex-col items-center space-x-0 space-y-4 bg-white py-4 shadow-md"
            : "hidden"
        } md:relative md:left-auto md:top-auto md:w-auto md:flex-row md:bg-transparent md:py-0 md:shadow-none`}
      >
        <nav className="flex flex-col space-y-2 text-sm md:flex-row md:space-y-0 md:text-lg md:space-x-8">
          {navLinks.map((link) => (
            <Link
              to={isHome ? link.hash : link.path}
              key={link.label}
              className="block py-1 text-center font-medium text-gray-700 transition duration-200 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to={isHome ? "/get-started" : "/get-started"}
          className="transform text-nowrap rounded-lg bg-[#3B82F6] px-5 py-2 text-sm font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:ring-4 md:px-6 md:py-3 md:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
