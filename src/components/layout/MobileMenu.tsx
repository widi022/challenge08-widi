import { X } from "lucide-react";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black backdrop-blur-sm transition-opacity duration-300 lg:hidden
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-black transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div></div>
            <a href="#" className="flex items-center gap-2">
              {" "}
              <img src="/src/assets/logo-symbol.svg" alt="Logo" />
              <span className="text-xl font-bold">Your Logo</span>
            </a>
          </div>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-white hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="px-6 py-8 space-y-6">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={`block text-gray-300 hover:text-white text-lg transition-all duration-300 delay-${i * 50}
              ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <Button
            className={`w-full mt-8 transition-all duration-300 delay-200
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            variant="primary"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </>
  );
}
