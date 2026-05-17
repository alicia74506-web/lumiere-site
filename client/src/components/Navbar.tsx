/*
 * LUMIÈRE Navbar
 * Design: Wabi-Sabi Luxe — fixed top nav with transparent → cream transition on scroll
 * Cormorant Garamond logo, Cormorant SC nav items, minimal gold accents
 * Shop 메뉴 + 장바구니 아이콘 추가
 */

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "B2B", href: "#b2b" },
  { label: "Shop", href: "#shop" },
  { label: "Founder", href: "#founder" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

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
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-out ${scrolled ? "bg-[#F5F1EB]/95 backdrop-blur-sm shadow-sm border-b border-[#D4C5A9]/30" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex flex-col leading-none">
          <span className="font-display text-2xl md:text-3xl tracking-widest" style={{ color: "#8B7355", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>Lumiére</span>
          <span className="font-display-sc text-[0.5rem] tracking-[0.35em] mt-0.5" style={{ color: "#B8975A", fontFamily: "'Cormorant SC', serif" }}>Art of Scents</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleNavClick(item.href)}
              className="font-display-sc text-lg tracking-[0.2em] transition-colors duration-300 hover:text-[#B8975A]"
              style={{ fontFamily: "'Cormorant SC', serif", color: scrolled ? "#5C4A3A" : "#3D3530" }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => setIsCartOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", position: "relative", padding: "4px 8px", color: scrolled ? "#5C4A3A" : "#3D3530" }}
            aria-label="장바구니">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalItems > 0 && (
              <span style={{ position: "absolute", top: 0, right: 0, background: "#B8975A", color: "#F5F1EB", borderRadius: "50%", width: 16, height: 16, fontSize: "0.45rem", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant SC', serif" }}>
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => handleNavClick("#contact")}
            className="font-display-sc text-[0.6rem] tracking-[0.2em] border px-5 py-2 transition-all duration-300 hover:bg-[#B8975A] hover:text-white hover:border-[#B8975A]"
            style={{ fontFamily: "'Cormorant SC', serif", borderColor: "#B8975A", color: "#B8975A" }}>
            문의하기
          </button>
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#8B7355" }} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "#8B7355" }} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#8B7355" }} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-1000 ease-out overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} style={{ background: "#F5F1EB" }}>
        <nav className="container flex flex-col py-6 gap-5 border-t border-[#D4C5A9]/40">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleNavClick(item.href)}
              className="font-display-sc text-left text-lg tracking-[0.2em] text-[#5C4A3A] hover:text-[#B8975A] transition-colors"
              style={{ fontFamily: "'Cormorant SC', serif" }}>
              {item.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button onClick={() => { setMenuOpen(false); setIsCartOpen(true); }}
              className="font-display-sc text-[0.7rem] tracking-[0.2em] border px-5 py-2.5 self-start transition-all duration-300"
              style={{ fontFamily: "'Cormorant SC', serif", borderColor: "#D4C5A9", color: "#5C4A3A" }}>
              장바구니 {totalItems > 0 && `(${totalItems})`}
            </button>
            <button onClick={() => handleNavClick("#contact")}
              className="font-display-sc text-[0.7rem] tracking-[0.2em] border px-5 py-2.5 self-start transition-all duration-300 hover:bg-[#B8975A] hover:text-white"
              style={{ fontFamily: "'Cormorant SC', serif", borderColor: "#B8975A", color: "#B8975A" }}>
              문의하기
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
