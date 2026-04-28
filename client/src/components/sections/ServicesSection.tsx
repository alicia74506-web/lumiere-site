/*
 * LUMIÈRE Services Section
 * Design: Asymmetric grid — large feature card + smaller cards
 * Wabi-Sabi Luxe: image hover zoom, gold label, organic spacing
 */

import { useReveal } from "@/hooks/useReveal";

const SPACE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/space_scenting-hsAEa6pkttocUFWwu5Grff.webp";
const COLLECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/fragrance_collection-9Yr5QNFerFfUtXMC5cR8tQ.webp";
const PERSONAL_PERFUME_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/service_personal_perfume-6SitBQAcjhQ4QXmwS5755n.webp";
const CAR_DIFFUSER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/service_car_diffuser-NnGvktfnEy9Xe9vdWm4Afx.webp";
const HOME_FRAGRANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/service_home_fragrance-F9b36aFP74X9s5bLu5xKBn.webp";

const services = [
  {
    id: 1,
    title: "Space Scenting",
    subtitle: "공간 조향",
    desc: "호텔, 오피스, 병원 등 공간에 맞는 시그니처 향 설계",
    image: SPACE_IMG,
  },
  {
    id: 2,
    title: "Personal Perfume",
    subtitle: "퍼스널 향수",
    desc: "개인의 취향과 이미지를 반영한 맞춤 향 제작",
    image: PERSONAL_PERFUME_IMG,
  },
  {
    id: 3,
    title: "Car Diffuser",
    subtitle: "카 디퓨저",
    desc: "차량 공간에 어울리는 프리미엄 향 경험",
    image: CAR_DIFFUSER_IMG,
  },
  {
    id: 4,
    title: "Home Fragrance",
    subtitle: "홈 프래그런스",
    desc: "일상 공간을 위한 디퓨저, 패브릭 미스트, 룸 스프레이",
    image: HOME_FRAGRANCE_IMG,
  },
  {
    id: 5,
    title: "Odor Neutralizing",
    subtitle: "소취·탈취",
    desc: "단순히 향을 더하는 것이 아니라 불필요한 냄새를 정리하는 솔루션",
    image: COLLECTION_IMG,
  },
];

export default function ServicesSection() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section id="services" className="py-24 md:py-36 overflow-hidden" style={{ background: "#EDE8E0" }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div
          className={`flex items-start justify-between mb-16 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <span className="section-label block mb-3">Our Portfolio</span>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#3D3530",
                lineHeight: 1.2,
              }}
            >
              Services &{" "}
              <span className="italic">Products</span>
            </h2>
          </div>
          <div className="hidden md:block text-right mt-2">
            <p
              className="font-body-kr text-sm"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#8B7355", fontWeight: 300, lineHeight: 2 }}
            >
              향이 쓰이는 모든 영역에서<br />
              최고의 결과물을 만듭니다.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured large card — Space Scenting */}
          <div
            className={`md:col-span-2 md:row-span-2 group relative overflow-hidden transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.1s", minHeight: "420px" }}
          >
            <img
              src={SPACE_IMG}
              alt="Space Scenting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(37,28,20,0.85) 0%, rgba(37,28,20,0.3) 50%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span
                className="font-display-sc text-[0.6rem] tracking-[0.25em] block mb-2"
                style={{ fontFamily: "'Cormorant SC', serif", color: "#D4A853" }}
              >
                01 — {services[0].title}
              </span>
              <h3
                className="font-display text-white mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 300,
                }}
              >
                {services[0].subtitle}
              </h3>
              <p
                className="font-body-kr text-sm text-white"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, lineHeight: 1.8 }}
              >
                {services[0].desc}
              </p>
            </div>
          </div>

          {/* Small cards — Services 2-5 */}
          {services.slice(1).map((service, idx) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden border transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${0.15 + idx * 0.08}s`,
                borderColor: "#D4C5A9",
                minHeight: "280px",
              }}
            >
              {/* Background image with opacity */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{ opacity: 0.2 }}
                />
              )}

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <span
                    className="font-display-sc text-[0.55rem] tracking-[0.2em] block mb-3"
                    style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
                  >
                    {String(service.id).padStart(2, "0")} — {service.title}
                  </span>
                  <h3
                    className="font-display mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 300,
                      color: "#3D3530",
                    }}
                  >
                    {service.subtitle}
                  </h3>
                </div>
                <p
                  className="font-body-kr text-xs"
                  style={{
                    fontFamily: "'Noto Sans KR', sans-serif",
                    color: "#7A6A5A",
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
