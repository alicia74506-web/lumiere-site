/*
 * LUMIÈRE About Section
 * Design: Asymmetric split — large italic quote left, core values right
 * Wabi-Sabi Luxe: organic spacing, gold dividers, serif typography
 */

import { useReveal } from "@/hooks/useReveal";

const coreValues = [
  {
    icon: "✦",
    title: "Pure",
    desc: "천연 원료 기반의 안전하고 순수한 향. Non-Toxic & Eco-Friendly 원칙을 지킵니다.",
  },
  {
    icon: "✦",
    title: "Luxury",
    desc: "특급호텔 25년 노하우로 완성한 프리미엄 품질. 지속력과 확산력, 감정의 흐름까지 설계합니다.",
  },
  {
    icon: "✦",
    title: "Bespoke",
    desc: "공간, 브랜드, 목적에 맞춘 완전한 맞춤 향 설계. 단 하나뿐인 시그니처 센트를 만듭니다.",
  },
];

export default function AboutSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="about" className="py-24 md:py-36 overflow-hidden" style={{ background: "#F5F1EB" }}>
      <div className="container" ref={ref}>
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="section-label">About Lumiére</span>
          <div className="gold-divider" />
        </div>

        {/* Main content — asymmetric layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Brand story */}
          <div
            className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <h2
              className="font-display italic mb-8 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "#3D3530",
                lineHeight: 1.3,
              }}
            >
              향이 쓰이는<br />
              모든 영역에서
            </h2>

            <div className="gold-divider mb-8" />

            <p
              className="font-serif-kr leading-loose mb-6"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "#5C4A3A",
                lineHeight: 2.1,
              }}
            >
              저희는 공간의 향을 넘어, 모든 형태의 향을 아우르는 <strong style={{ fontWeight: 500, color: "#3D3530" }}>'토탈 센트 비즈니스'</strong>를 지향합니다.
            </p>
            <p
              className="font-body-kr leading-loose mb-6"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                color: "#7A6A5A",
                lineHeight: 2.2,
              }}
            >
              호텔 리테일, 오피스, 병원 등 공간을 위한 향 설계는 물론, 퍼스널 퍼퓸, 홈 프래그런스, 바디·헤어·핸드 케어,<br />
              패브릭 미스트, 소취·탈취 제품, 브랜드 굿즈 향 개발, 시그니처 향 컨설팅까지 — 향이 쓰이는 모든 영역에서 '우리만의 기준'으로 기획하고 구현합니다.
            </p>
            <p
              className="font-body-kr"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                color: "#7A6A5A",
                lineHeight: 2.2,
              }}
            >
              원료의 품질, 지속력과 확산력, 사용 맥락(장소·시간·목적), 그리고 고객이 느끼는 감정의 흐름까지 고려해 가장 설득력 있는 향의 결과물을 만들어냅니다.
            </p>
          </div>

          {/* Right: Core Values */}
          <div
            className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Positioning tag */}
            <div
              className="mb-10 p-6 border-l-2"
              style={{ borderColor: "#B8975A", background: "rgba(184,151,90,0.05)" }}
            >
              <p
                className="font-display-sc text-xs tracking-[0.2em] mb-2"
                style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
              >
                Positioning
              </p>
              <p
                className="font-display text-lg"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3D3530", fontWeight: 400 }}
              >
                Natural Aromatics
              </p>
              <p
                className="font-display text-sm italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#7A6A5A" }}
              >
                For Premium & Safe Life
              </p>
            </div>

            {/* Core Values */}
            <p
              className="font-display-sc text-xs tracking-[0.2em] mb-6"
              style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
            >
              Core Values
            </p>
            <div className="flex flex-col gap-6">
              {coreValues.map((val, i) => (
                <div
                  key={val.title}
                  className={`flex gap-5 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${0.4 + i * 0.12}s` }}
                >
                  <span
                    className="mt-1 text-xs flex-shrink-0"
                    style={{ color: "#B8975A" }}
                  >
                    {val.icon}
                  </span>
                  <div>
                    <h3
                      className="font-display-sc text-sm tracking-widest mb-1.5"
                      style={{ fontFamily: "'Cormorant SC', serif", color: "#3D3530" }}
                    >
                      {val.title}
                    </h3>
                    <p
                      className="font-body-kr text-sm leading-relaxed"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#7A6A5A", fontWeight: 300, lineHeight: 1.9 }}
                    >
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
