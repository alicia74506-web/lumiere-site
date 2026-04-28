/*
 * LUMIÈRE B2B Section
 * Design: Alternating image-text layout, dark accent section
 * Wabi-Sabi Luxe: editorial split layout, gold accents, premium feel
 */

import { useReveal } from "@/hooks/useReveal";

const VIP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/b2b_vip_kit-8nL3vq9xxrLwWW9ca6o5Er.webp";
const SPACE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596071276/jTgi6hjqtGYuTBYnBAYuhL/space_scenting-hsAEa6pkttocUFWwu5Grff.webp";

const solutions = [
  {
    num: "I",
    title: "Space Scenting Project",
    titleKr: "공간조향 프로젝트",
    desc: "호텔 로비, 기업 오피스, 병원, 리테일 매장 등 모든 공간을 위한\n시그니처 향 설계 및 납품. 공간의 브랜드 아이덴티티를 향으로 완성하는 토탈 솔루션을 제공합니다.",
    tags: ["호텔·리조트", "오피스·기업", "병원·클리닉", "리테일·쇼룸"],
    image: SPACE_IMG,
    imageLeft: false,
  },
  {
    num: "II",
    title: "VIP Luxury Kit",
    titleKr: "VIP 럭셔리 키트",
    desc: "마세라티, 몽클레어 등 프리미엄 브랜드와의 협업으로 검증된 VIP 기프트 솔루션. 브랜드 로고와 시그니처 향이 담긴 고급 키트를 기획·제작합니다.",
    tags: ["브랜드 굿즈", "VIP 기프트", "임직원 선물", "이벤트 패키지"],
    image: VIP_IMG,
    imageLeft: true,
  },
  {
    num: "III",
    title: "Wellness Inhalers",
    titleKr: "웰니스 인헤일러",
    desc: "수면·집중·금연 지원 등 기능성 인헤일러 개발 및 납품.\n우리은행 콜라보레이션으로 검증된 B2B 웰니스 솔루션으로 임직원 복지 프로그램에 활용됩니다.",
    tags: ["Sleep & Focus", "Quick Smoking", "Stress Relief", "임직원 복지"],
    image: null,
    imageLeft: false,
  },
  {
    num: "IV",
    title: "Odor Eliminator",
    titleKr: "소취·탈취 스프레이",
    desc: "Non-Toxic, Eco-Friendly 원료 기반의 업소용 소취·탈취 솔루션. 호텔, 병원, 오피스 등 대형 공간에 적합한 대용량 B2B 납품이 가능합니다.",
    tags: ["업소용 소취", "데오도란트", "패브릭 미스트", "대용량 납품"],
    image: null,
    imageLeft: true,
  },
];

function SolutionCard({ sol, index }: { sol: typeof solutions[0]; index: number }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-0 overflow-hidden transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image side */}
      {sol.image && (
        <div
          className={`relative overflow-hidden ${sol.imageLeft ? "md:order-1" : "md:order-2"}`}
          style={{ minHeight: "320px" }}
        >
          <img
            src={sol.image}
            alt={sol.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
            style={{ minHeight: "320px" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(37,28,20,0.15)" }}
          />
        </div>
      )}

      {/* Text side */}
      <div
        className={`flex flex-col justify-center p-10 md:p-14 ${sol.image ? (sol.imageLeft ? "md:order-2" : "md:order-1") : "md:col-span-2"}`}
        style={{ background: sol.image ? "#F5F1EB" : "rgba(184,151,90,0.06)" }}
      >
        <span
          className="font-display italic text-5xl md:text-6xl mb-4 leading-none"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(184,151,90,0.25)", fontWeight: 300 }}
        >
          {sol.num}
        </span>
        <span
          className="font-display-sc text-[0.6rem] tracking-[0.25em] block mb-2"
          style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
        >
          B2B Solution
        </span>
        <h3
          className="font-display mb-1"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 400,
            color: "#3D3530",
          }}
        >
          {sol.title}
        </h3>
        <p
          className="font-display-sc text-xs tracking-widest mb-5"
          style={{ fontFamily: "'Cormorant SC', serif", color: "#8B7355" }}
        >
          {sol.titleKr}
        </p>
        <div className="gold-divider mb-6" />
        <div
          className="font-body-kr text-sm mb-7"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#5C4A3A", fontWeight: 300, lineHeight: 2.1, maxWidth: "420px" }}
          dangerouslySetInnerHTML={{ __html: sol.desc.replace(/\n/g, "<br />") }}
        />
        <div className="flex flex-wrap gap-2">
          {sol.tags.map((tag) => (
            <span
              key={tag}
              className="font-body-kr text-xs px-3 py-1.5 border"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                borderColor: "#D4C5A9",
                color: "#7A6A5A",
                fontWeight: 300,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function B2BSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="b2b" className="py-24 md:py-36 overflow-hidden" style={{ background: "#F5F1EB" }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="section-label block mb-3">B2B Solutions</span>
          <div className="flex items-end gap-8">
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
              기업을 위한{" "}
              <span className="italic">맞춤 향 솔루션</span>
            </h2>
            <div className="hidden md:block pb-1">
              <div className="gold-divider-full" style={{ width: "200px" }} />
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-8 border" style={{ borderColor: "#D4C5A9" }}>
          {solutions.map((sol, i) => (
            <SolutionCard key={sol.num} sol={sol} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p
            className="font-serif-kr mb-6"
            style={{ fontFamily: "'Noto Serif KR', serif", color: "#5C4A3A", fontWeight: 300, lineHeight: 2 }}
          >
            귀사의 브랜드에 맞는 향 솔루션을 제안해 드립니다.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-display-sc text-[0.65rem] tracking-[0.2em] px-10 py-4 transition-all duration-300 hover:opacity-85"
            style={{
              fontFamily: "'Cormorant SC', serif",
              background: "#3D3530",
              color: "#F5F1EB",
            }}
          >
            B2B 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
