/*
 * LUMIÈRE Contact Section
 * Design: Split layout — contact info left, inquiry form right
 * Wabi-Sabi Luxe: minimal form, gold accents, warm tones
 */

import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

const CONTACT_EMAIL = "alicia@kwellroutine.com";

export default function ContactSection() {
  const { ref, visible } = useReveal(0.1);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[LUMIÈRE] 향 설계 문의 - ${formData.company || "미기재"}`
    );
    const body = encodeURIComponent(
      `회사명: ${formData.company || "-"}\n이름: ${formData.name || "-"}\n이메일: ${formData.email || "-"}\n연락처: ${formData.phone || "-"}\n\n문의 내용:\n${formData.message || "-"}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    background: "transparent",
    borderBottom: "1px solid #D4C5A9",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
    padding: "10px 0",
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 300,
    color: "#3D3530",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s",
  };

  return (
    <section id="contact" className="py-24 md:py-36 overflow-hidden" style={{ background: "#EDE8E0" }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="section-label block mb-3">Contact</span>
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
            함께 시작해요,{" "}
            <span className="italic">당신의 향 이야기</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-16 md:gap-20">
          {/* Left: Contact Info */}
          <div
            className={`md:col-span-2 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <p
              className="font-serif-kr text-sm mb-10"
              style={{ fontFamily: "'Noto Serif KR', serif", color: "#5C4A3A", fontWeight: 300, lineHeight: 2.2 }}
            >
              당신의 일상, 당신의 브랜드, 그리고 당신의 순간에 가장 어울리는 향으로<br />
              가장 좋은 기억을 함께 완성하겠습니다.
            </p>

            <div className="flex flex-col gap-8">
              {[
                {
                  label: "Address",
                  value: "서울시 용산구 새창로 20길 10 3층",
                  href: undefined,
                },
                {
                  label: "Phone",
                  value: "010-4510-1018",
                  href: "tel:01045101018",
                },
                {
                  label: "Email",
                  value: CONTACT_EMAIL,
                  href: `mailto:${CONTACT_EMAIL}`,
                },
                {
                  label: "Website",
                  value: "www.lumierehaus.co.kr",
                  href: "https://www.lumierehaus.co.kr",
                },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <span style={{ color: "#B8975A", fontSize: "0.6rem", marginTop: "4px" }}>◎</span>
                  <div>
                    <p
                      className="font-display-sc text-[0.6rem] tracking-[0.2em] mb-1"
                      style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-body-kr text-sm hover:text-[#B8975A] transition-colors"
                        style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#3D3530", fontWeight: 300 }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="font-body-kr text-sm"
                        style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#3D3530", fontWeight: 300 }}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div
              className="mt-12 p-6 border-l-2"
              style={{ borderColor: "#B8975A", background: "rgba(184,151,90,0.05)" }}
            >
              <p
                className="font-display italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  color: "#5C4A3A",
                  lineHeight: 1.8,
                }}
              >
                "한 번의 판매가 아니라<br />
                오래 남는 신뢰를 만들겠습니다."
              </p>
              <p
                className="font-display-sc text-[0.6rem] tracking-widest mt-3"
                style={{ fontFamily: "'Cormorant SC', serif", color: "#B8975A" }}
              >
                — Alicia Rhee, CEO
              </p>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div
            className={`md:col-span-3 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-20"
                style={{ minHeight: "400px" }}
              >
                <span
                  className="font-display text-5xl mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#B8975A" }}
                >
                  ✦
                </span>
                <h3
                  className="font-display mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, color: "#3D3530" }}
                >
                  문의가 접수되었습니다
                </h3>
                <p
                  className="font-body-kr text-sm"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#7A6A5A", fontWeight: 300, lineHeight: 2 }}
                >
                  빠른 시일 내에 답변 드리겠습니다.<br />
                  감사합니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label
                      className="font-display-sc text-[0.6rem] tracking-[0.2em] block mb-2"
                      style={{ fontFamily: "'Cormorant SC', serif", color: "#8B7355" }}
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="회사명"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="font-display-sc text-[0.6rem] tracking-[0.2em] block mb-2"
                      style={{ fontFamily: "'Cormorant SC', serif", color: "#8B7355" }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="담당자명"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label
                      className="font-display-sc text-[0.6rem] tracking-[0.2em] block mb-2"
                      style={{ fontFamily: "'Cormorant SC', serif", color: "#8B7355" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="이메일"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="font-display-sc text-[0.6rem] tracking-[0.2em] block mb-2"
                      style={{ fontFamily: "'Cormorant SC', serif", color: "#8B7355" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="연락처"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="font-display-sc text-[0.6rem] tracking-[0.2em] block mb-2"
                    style={{ fontFamily: "'Cormorant SC', serif", color: "#8B7355" }}
                  >
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">문의 서비스를 선택해주세요</option>
                    <option value="공간조향 프로젝트">공간조향 프로젝트</option>
                    <option value="VIP 럭셔리 키트">VIP 럭셔리 키트</option>
                    <option value="웰니스 인헤일러">웰니스 인헤일러</option>
                    <option value="소취·탈취 솔루션">소취·탈취 솔루션</option>
                    <option value="퍼스널 향수 개발">퍼스널 향수 개발</option>
                    <option value="홈 프래그런스">홈 프래그런스</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div>
                  <label
                    className="font-display-sc text-[0.6rem] tracking-[0.2em] block mb-2"
                    style={{ fontFamily: "'Cormorant SC', serif", color: "#8B7355" }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="문의 내용을 자세히 적어주세요"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      borderBottom: "none",
                      border: "1px solid #D4C5A9",
                      padding: "12px",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="font-display-sc text-[0.65rem] tracking-[0.2em] py-4 transition-all duration-300 hover:opacity-85 self-start px-12"
                  style={{
                    fontFamily: "'Cormorant SC', serif",
                    background: "#3D3530",
                    color: "#F5F1EB",
                  }}
                >
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
