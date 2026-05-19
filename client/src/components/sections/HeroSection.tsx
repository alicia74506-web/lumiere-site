/*
 * LUMIÈRE Hero Section
 * Design: Full-viewport asymmetric layout — text left offset, image right overflow
 * Wabi-Sabi Luxe: grain texture overlay, slow fade-in stagger, italic serif quote
 */

import { useEffect, useState } from "react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663596071276/UkVyzlRazPXoBjVX.png";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: "#EDE8E0" }}>
      {/* Background image — right side, full height */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Lumière — Art of Scents"
          className="w-full h-full object-cover object-center"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 1.2s ease" }}
        />
        {/* Gradient overlay — left side for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(237,232,224,0.97) 0%, rgba(237,232,224,0.90) 35%, rgba(237,232,224,0.55) 60%, rgba(237,232,224,0.10) 100%)",
          }}
        />
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container pb-20 md:pb-28 pt-32 md:pt-0">
        <div className="max-w-2xl">
          {/* Section label */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="section-label" style={{ color: "#B8975A" }}>Art of Scents</span>
            <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #B8975A, transparent)", maxWidth: "80px" }} />
          </div>

          {/* Main headline */}
          <h1
            className={`font-display leading-none mb-6 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              color: "#3D3530",
              transitionDelay: "0.35s",
              letterSpacing: "-0.01em",
            }}
          >
            Lumière<br />
          </h1>

          {/* Italic quote */}
          <p
            className={`font-display italic mb-10 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 300,
              color: "#5C4A3A",
              lineHeight: 1.7,
              transitionDelay: "0.5s",
            }}
          >
            "향은 공간의 기억이 되고, 브랜드의 언어가 된다."
          </p>

          {/* Sub description */}
          <p
            className={`font-body-kr mb-12 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "#7A6A5A",
              lineHeight: 2,
              maxWidth: "420px",
              transitionDelay: "0.65s",
            }}
          >
            공간조향 및 B2B 납품 전문 럭셔리 향수 브랜드. 호텔, 오피스, 병원부터 VIP 기프트까지 — 향이 쓰이는 모든 영역에서 최고의 결과물을 만듭니다.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button
              onClick={() => document.querySelector("#b2b")?.scrollIntoView({ behavior: "smooth" })}
              className="font-display-sc text-[0.65rem] tracking-[0.2em] px-8 py-3.5 transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Cormorant SC', serif",
                background: "#B8975A",
                color: "#F5F1EB",
              }}
            >
              B2B 솔루션 보기
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-display-sc text-[0.65rem] tracking-[0.2em] px-8 py-3.5 border transition-all duration-300 hover:bg-[#B8975A] hover:text-white hover:border-[#B8975A]"
              style={{
                fontFamily: "'Cormorant SC', serif",
                borderColor: "#8B7355",
                color: "#5C4A3A",
              }}
            >
              문의하기
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${loaded ? "opacity-60" : "opacity-0"}`}
        style={{ transitionDelay: "1.2s" }}
      >
        <span className="section-label text-[0.55rem]" style={{ color: "#8B7355" }}>Scroll</span>
        <div className="w-px h-10 overflow-hidden" style={{ background: "#D4C5A9" }}>
          <div
            className="w-full h-1/2"
            style={{
              background: "#B8975A",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
        `}</style>
      </div>
    </section>
  );
}
