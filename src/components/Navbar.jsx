import React, { useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="bg-white shadow-md fixed w-full z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold text-indigo-600" 
          onClick={closeMenu}
        >
          Sumeer Mehta
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={`transition-transform duration-300 origin-center ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={`transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={`transition-transform duration-300 origin-center ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-lg py-2 ${open ? "block" : "hidden"}`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
