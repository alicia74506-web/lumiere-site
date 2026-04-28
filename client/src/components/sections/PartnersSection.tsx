/*
 * LUMIÈRE Partners Section
 * Design: Infinite horizontal marquee with partner logos
 * Wabi-Sabi Luxe: subtle background, elegant typography
 */

import { useReveal } from "@/hooks/useReveal";

const partners = [
  { name: "MASERATI", sub: "마세라티" },
  { name: "신한금융그룹", sub: "Shinhan Financial Group" },
  { name: "MONCLER", sub: "몽클레어" },
  { name: "MegaStudy", sub: "메가스터디" },
  { name: "IBK투자증권", sub: "IBK Investment Securities" },
  { name: "K-Auction", sub: "케이옥션" },
  { name: "디애스턴한남", sub: "" },
  { name: "대혜건축", sub: "Daehye Architecture" },
  { name: "Seran Hospital", sub: "세란병원" },
  { name: "Gungsan Postnatal Care", sub: "궁산후조리원" },
  { name: "Sage Wood CC", sub: "세이지우드CC" },
  { name: "우리은행", sub: "Woori Bank" },
  { name: "Le Méridien", sub: "르 메르디앙" },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners];

export default function PartnersSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="partners" className="py-24 md:py-32 overflow-hidden" style={{ background: "#3D3530" }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="section-label block mb-4"
            style={{ color: "rgba(184,151,90,0.8)" }}
          >
            Partners
          </span>
          <h2
            className="font-display"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 300,
              color: "#F5F1EB",
              lineHeight: 1.3,
            }}
          >
            함께한 브랜드들
          </h2>
          <p
            className="font-body-kr text-sm mt-4"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(245,241,235,0.55)", fontWeight: 300 }}
          >
            국내외 최고의 브랜드들과 함께 향의 가치를 만들어가고 있습니다.
          </p>
        </div>
      </div>

      {/* Marquee — full width */}
      <div
        className={`relative overflow-hidden transition-all duration-1000 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "0.3s" }}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 w-24 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #3D3530, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 w-24 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #3D3530, transparent)" }}
        />

        <div className="flex marquee-track" style={{ width: "max-content" }}>
          {allPartners.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex flex-col items-center justify-center px-12 py-8 border-r"
              style={{
                borderColor: "rgba(184,151,90,0.15)",
                minWidth: "220px",
              }}
            >
              <span
                className="font-display-sc text-sm tracking-widest block mb-1"
                style={{ fontFamily: "'Cormorant SC', serif", color: "#F5F1EB", letterSpacing: "0.12em" }}
              >
                {p.name}
              </span>
              <span
                className="font-body-kr text-[0.65rem]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "rgba(184,151,90,0.6)", fontWeight: 300 }}
              >
                {p.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container mt-16">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-0 border transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ borderColor: "rgba(184,151,90,0.2)", transitionDelay: "0.5s" }}
        >
          {[
            { num: "13+", label: "파트너 브랜드", sub: "Partner Brands" },
            { num: "25", label: "년 호텔 경력", sub: "Years of Hotel Experience" },
            { num: "100%", label: "천연 원료", sub: "Natural Ingredients" },
            { num: "∞", label: "맞춤 향 설계", sub: "Bespoke Solutions" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-10 px-6 border-r last:border-r-0 border-b md:border-b-0"
              style={{ borderColor: "rgba(184,151,90,0.2)" }}
            >
              <span
                className="font-display block mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "#B8975A",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </span>
              <span
                className="font-body-kr text-xs text-center block"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#F5F1EB", fontWeight: 300 }}
              >
                {stat.label}
              </span>
              <span
                className="font-display-sc text-[0.55rem] tracking-widest mt-1 text-center block"
                style={{ fontFamily: "'Cormorant SC', serif", color: "rgba(184,151,90,0.5)" }}
              >
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
