/*
 * LUMIÈRE Founder Section
 * Design: Full-bleed linen texture background, large quote, portrait + story
 * Wabi-Sabi Luxe: warm texture, italic serif, organic layout
 */

import { useReveal } from "@/hooks/useReveal";

const FOUNDER_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/founder_bg-ALXj5tba2caGgCBNmMe2Nn.webp";

export default function FounderSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="founder" className="relative overflow-hidden py-24 md:py-36">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src={FOUNDER_BG}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(237,232,224,0.88)" }}
        />
      </div>

      <div className="relative z-10 container" ref={ref}>
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="section-label">Founder</span>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
          {/* Left: Portrait + Name */}
          <div
            className={`md:col-span-2 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            style={{ transitionDelay: "0.15s" }}
          >
            {/* Portrait placeholder — elegant frame */}
            <div
              className="relative mb-8 overflow-hidden"
              style={{
                aspectRatio: "3/4",
                maxWidth: "280px",
                border: "1px solid rgba(184,151,90,0.3)",
              }}
            >
              {/* Founder image placeholder with initials */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E8DDD0, #D4C5A9)" }}
              >
                <div className="text-center">
                  <span
                    className="font-display block"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "5rem",
                      fontWeight: 300,
                      color: "rgba(139,115,85,0.4)",
                      lineHeight: 1,
                    }}
                  >
                    李
                  </span>
                  <span
                    className="font-display-sc text-xs tracking-[0.3em] mt-2 block"
                    style={{ fontFamily: "'Cormorant SC', serif", color: "rgba(139,115,85,0.6)" }}
                  >
                    Alicia Rhee
                  </span>
                </div>
              </div>
              {/* Gold corner accent */}
              <div
                className="absolute top-3 left-3 w-6 h-6"
                style={{
                  borderTop: "1px solid #B8975A",
                  borderLeft: "1px solid #B8975A",
                }}
              />
              <div
                className="absolute bottom-3 right-3 w-6 h-6"
                style={{
                  borderBottom: "1px solid #B8975A",
                  borderRight: "1px solid #B8975A",
                }}
              />
            </div>

            <h3
              className="font-display mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#3D3530",
              }}
            >
              이수진
            </h3>
            <p
              className="font-display italic text-sm mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#8B7355" }}
            >
              Alicia Rhee
            </p>
            <p
              className="font-body-kr text-xs"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#7A6A5A", fontWeight: 300, lineHeight: 1.9 }}
            >
              ㈜케이웰루틴 CEO<br />
              ㈜뤼미에르 CEO
            </p>

            {/* Signature style */}
            <div className="mt-6">
              <span
                className="font-display italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  color: "#B8975A",
                  fontWeight: 300,
                }}
              >
                Alicia Rhee
              </span>
            </div>
          </div>

          {/* Right: Story */}
          <div
            className={`md:col-span-3 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Large italic quote */}
            <blockquote
              className="font-display italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 300,
                color: "#3D3530",
                lineHeight: 1.7,
                borderLeft: "2px solid #B8975A",
                paddingLeft: "1.5rem",
              }}
            >
              "특급호텔에서 25년을 일하며, 저는 공간을 완성하는 마지막 한 조각이 무엇인지 늘 고민했습니다. 그 답은 <em style={{ color: "#B8975A" }}>향</em>이었습니다."
            </blockquote>

            <div className="gold-divider mb-8" />

            <div className="flex flex-col gap-5">
              <p
                className="font-body-kr text-sm"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#5C4A3A", fontWeight: 300, lineHeight: 2.2 }}
              >
                향은 단순한 제품이 아니라 공간의 기억이 되고, 브랜드의 언어가 되는 <strong style={{ fontWeight: 500, color: "#3D3530" }}>감각의 자산</strong>입니다.
              </p>
              <p
                className="font-body-kr text-sm"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#5C4A3A", fontWeight: 300, lineHeight: 2.2 }}
              >
                호텔, 오피스, 병원, 리테일, 자동차, 그리고 개인의 일상까지 — 향이 쓰이는 모든 영역에서 최고의 결과물을 만드는 것이 저의 목표입니다.
              </p>
              <p
                className="font-body-kr text-sm"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#5C4A3A", fontWeight: 300, lineHeight: 2.2 }}
              >
                한 번의 판매가 아니라 오래 남는 신뢰를 만들겠습니다.
              </p>
            </div>

            {/* Career highlight */}
            <div
              className="mt-10 p-6 border-l-2"
              style={{ borderColor: "#B8975A", background: "rgba(184,151,90,0.05)" }}
            >
              <p
                className="font-display-sc text-[0.6rem] tracking-[0.2em] mb-3"
                style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
              >
                Career Highlights
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "특급호텔 25년 경력",
                  "마세라티 VIP 럭셔리 키트 기획",
                  "우리은행 × K-Well Routine 콜라보",
                  "다양한 업종의 B2B 향 솔루션 개발",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body-kr text-sm"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#5C4A3A", fontWeight: 300 }}
                  >
                    <span style={{ color: "#B8975A", marginTop: "2px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
