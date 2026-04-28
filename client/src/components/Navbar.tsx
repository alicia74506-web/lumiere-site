/*
 * LUMIÈRE Navbar
 * Design: Wabi-Sabi Luxe — fixed top nav with transparent → cream transition on scroll
 * Cormorant Garamond logo, Cormorant SC nav items, minimal gold accents
 */

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "B2B", href: "#b2b" },
  { label: "Founder", href: "#founder" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-out ${
        scrolled
          ? "bg-[#F5F1EB]/95 backdrop-blur-sm shadow-sm border-b border-[#D4C5A9]/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-none"
        >
          <span
            className="font-display text-2xl md:text-3xl tracking-widest"
            style={{ color: "#8B7355", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Lumiére
          </span>
          <span
            className="font-display-sc text-[0.5rem] tracking-[0.35em] mt-0.5"
            style={{ color: "#B8975A", fontFamily: "'Cormorant SC', serif" }}
          >
            Art of Scents
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="font-display-sc text-lg tracking-[0.2em] transition-colors duration-300 hover:text-[#B8975A]"
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: scrolled ? "#5C4A3A" : "#3D3530",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="font-display-sc text-[0.6rem] tracking-[0.2em] border px-5 py-2 transition-all duration-300 hover:bg-[#B8975A] hover:text-white hover:border-[#B8975A]"
            style={{
              fontFamily: "'Cormorant SC', serif",
              borderColor: "#B8975A",
              color: "#B8975A",
            }}
          >
            문의하기
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#8B7355" }}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#8B7355" }}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#8B7355" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-1000 ease-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "#F5F1EB" }}
      >
        <nav className="container flex flex-col py-6 gap-5 border-t border-[#D4C5A9]/40">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="font-display-sc text-left text-lg tracking-[0.2em] text-[#5C4A3A] hover:text-[#B8975A] transition-colors"
              style={{ fontFamily: "'Cormorant SC', serif" }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="font-display-sc text-[0.7rem] tracking-[0.2em] border px-5 py-2.5 self-start transition-all duration-300 hover:bg-[#B8975A] hover:text-white"
            style={{
              fontFamily: "'Cormorant SC', serif",
              borderColor: "#B8975A",
              color: "#B8975A",
            }}
          >
            문의하기
          </button>
        </nav>
      </div>
    </header>
  );
}
