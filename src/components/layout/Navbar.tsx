import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import MobileMenu from "./MobileMenu.tsx";
import logoWhite from "../../assets/Logo-white.svg?url";
import logoBlack from "../../assets/Logo-black.svg?url";

import Button from "../ui/Button.tsx"; 

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  
  links: NavLink[];
}

export default function Navbar ({ links }: NavbarProps){
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-[#0B0B0B]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          {" "}
          <img src={logoWhite} alt="Company Logo" className="w-45% h-45% hidden dark:block" />
          <img src={logoBlack} alt="Company Logo" className="w-45% h-45% block dark:hidden" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => ( 
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <Button onClick={toggleTheme} variant="ghost">
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>

          {/* CTA Button - hidden di mobile */}
          <Button variant="primary" className="hidden md:block ">
            Get Started
          </Button>

          {/* Hamburger - muncul di mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} links={links} />
    </header>
  );
}
