/*
 * Lumière Footer
 * Design: Minimal dark footer with brand info and copyright
 * Wabi-Sabi Luxe: warm dark, gold accents, Cormorant typography
 */

export default function Footer() {
  return (
    <footer style={{ background: "#2C1F16" }}>
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span
              className="font-display block mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "#D4C5A9",
                letterSpacing: "0.08em",
              }}
            >
              Lumiére
            </span>
            <span
              className="font-display-sc text-[0.55rem] tracking-[0.35em] block mb-5"
              style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
            >
              Art of Scents
            </span>
            <p
              className="font-display italic text-sm"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(212,197,169,0.6)", lineHeight: 1.8 }}
            >
              "향은 공간의 기억이 되고,<br />
              브랜드의 언어가 된다."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="font-display-sc text-[0.6rem] tracking-[0.2em] mb-5"
              style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "B2B Solutions", href: "#b2b" },
                { label: "Founder", href: "#founder" },
                { label: "Partners", href: "#partners" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="font-display-sc text-xs tracking-widest hover:text-[#B8975A] transition-colors"
                    style={{ fontFamily: "'Cormorant SC', serif", color: "rgba(212,197,169,0.6)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="font-display-sc text-[0.6rem] tracking-[0.2em] mb-5"
              style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <p
                  className="font-body-kr text-xs"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(212,197,169,0.5)", fontWeight: 300, marginBottom: "2px" }}
                >
                  Address
                </p>
                <p
                  className="font-body-kr text-sm"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(212,197,169,0.8)", fontWeight: 300 }}
                >
                  서울시 용산구 새창로 20길 10 3층
                </p>
              </li>
              <li>
                <p
                  className="font-body-kr text-xs"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(212,197,169,0.5)", fontWeight: 300, marginBottom: "2px" }}
                >
                  Phone
                </p>
                <a
                  href="tel:01045101018"
                  className="font-body-kr text-sm hover:text-[#B8975A] transition-colors"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(212,197,169,0.8)", fontWeight: 300 }}
                >
                  010-4510-1018
                </a>
              </li>
              <li>
                <p
                  className="font-body-kr text-xs"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(212,197,169,0.5)", fontWeight: 300, marginBottom: "2px" }}
                >
                  Email
                </p>
                <a
                  href="mailto:alicia@kwellroutine.com"
                  className="font-body-kr text-sm hover:text-[#B8975A] transition-colors"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(212,197,169,0.8)", fontWeight: 300 }}
                >
                  alicia@kwellroutine.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(184,151,90,0.15)" }}
        >
          <p
            className="font-display-sc text-[0.55rem] tracking-widest"
            style={{ fontFamily: "'Cormorant SC', serif", color: "rgba(212,197,169,0.35)" }}
          >
            © 2025 LUMIÈRE. All rights reserved.
          </p>
          <p
            className="font-display-sc text-[0.55rem] tracking-widest"
            style={{ fontFamily: "'Cormorant SC', serif", color: "rgba(212,197,169,0.35)" }}
          >
            ㈜뤼미에르 · ㈜케이웰루틴
          </p>
        </div>
      </div>
    </footer>
  );
}
