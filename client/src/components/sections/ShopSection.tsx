/*
 * LUMIÈRE Shop Section
 * Design: Wabi-Sabi Luxe — 기존 사이트 디자인 무드 유지
 * 카테고리 필터 + 상품 그리드 + 장바구니 드로어
 */

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const CATEGORIES = [
  { id: "all", label: "전체", labelEn: "All" },
  { id: "car", label: "자동차 방향제", labelEn: "Car Diffuser" },
  { id: "diffuser", label: "디퓨저", labelEn: "Diffuser" },
  { id: "perfume", label: "향수", labelEn: "Perfume" },
  { id: "room-spray", label: "룸스프레이", labelEn: "Room Spray" },
  { id: "deodorizer", label: "소취제", labelEn: "Deodorizer" },
  { id: "oil-refill", label: "향오일 리필", labelEn: "Oil Refill" },
  { id: "sachet", label: "사쉐", labelEn: "Sachet" },
  { id: "etc", label: "기타", labelEn: "Gift & More" },
];

const PRODUCTS = [
  { id: "car-01", name: "Lumière Vent Clip", nameKo: "벤트 클립 방향제", price: 28000, category: "car", image: "", description: "차량 에어벤트에 간편하게 클립하는 럭셔리 방향제", badge: "NEW" },
  { id: "diffuser-01", name: "Lumière Reed Diffuser", nameKo: "리드 디퓨저", price: 65000, category: "diffuser", image: "", description: "공간의 향을 섬세하게 채우는 리드 디퓨저", badge: "BEST" },
  { id: "perfume-01", name: "Lumière Eau de Parfum", nameKo: "오드퍼퓸", price: 120000, category: "perfume", image: "", description: "뤼미에르의 시그니처 향을 담은 퍼스널 향수", badge: "" },
  { id: "room-01", name: "Lumière Room Spray", nameKo: "룸 스프레이", price: 45000, category: "room-spray", image: "", description: "패브릭과 공간에 가볍게 뿌리는 프리미엄 스프레이", badge: "BEST" },
  { id: "deodorizer-01", name: "Lumière Pure Air", nameKo: "소취 & 탈취제", price: 32000, category: "deodorizer", image: "", description: "냄새를 중화하고 향으로 채우는 공간 소취제", badge: "" },
  { id: "oil-01", name: "Lumière Oil Refill", nameKo: "향오일 리필", price: 38000, category: "oil-refill", image: "", description: "디퓨저 전용 리필 오일, 3가지 향 선택 가능", badge: "" },
  { id: "sachet-01", name: "Lumière Sachet", nameKo: "사쉐", price: 18000, category: "sachet", image: "", description: "드로어, 옷장, 차량에 두는 럭셔리 향 사쉐", badge: "NEW" },
  { id: "etc-01", name: "Lumière Gift Set", nameKo: "선물 세트", price: 95000, category: "etc", image: "", description: "특별한 날을 위한 뤼미에르 시그니처 선물 세트", badge: "GIFT" },
];

const gold = "#B8975A";
const darkBrown = "#3D3530";
const cream = "#F5F1EB";
const lightGold = "#D4C5A9";
const textBrown = "#5C4A3A";
const cormorantSC = { fontFamily: "'Cormorant SC', serif" };
const cormorantG = { fontFamily: "'Cormorant Garamond', serif" };

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: cream, border: `1px solid ${hovered ? gold : lightGold}`, transition: "all 0.4s ease", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? `0 12px 40px rgba(184,151,90,0.15)` : "none", position: "relative", overflow: "hidden" }}>
      {product.badge && (
        <div style={{ position: "absolute", top: 16, left: 16, background: product.badge === "GIFT" ? darkBrown : gold, color: cream, fontSize: "0.5rem", letterSpacing: "0.2em", padding: "4px 10px", ...cormorantSC }}>
          {product.badge}
        </div>
      )}
      <div style={{ height: 220, background: `linear-gradient(135deg, #EDE8E0 0%, #D4C5A9 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {product.image ? (
          <img src={product.image} alt={product.nameKo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ textAlign: "center", opacity: 0.4 }}>
            <div style={{ fontSize: "2.5rem", ...cormorantG, color: darkBrown, fontStyle: "italic" }}>L</div>
            <div style={{ fontSize: "0.45rem", letterSpacing: "0.3em", color: textBrown, ...cormorantSC, marginTop: 4 }}>LUMIÉRE</div>
          </div>
        )}
        <div style={{ position: "absolute", inset: 0, background: `rgba(61,53,48,0.06)`, opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease" }} />
      </div>
      <div style={{ padding: "20px 20px 16px" }}>
        <div style={{ fontSize: "0.45rem", letterSpacing: "0.25em", color: gold, ...cormorantSC, marginBottom: 6 }}>
          {CATEGORIES.find((c) => c.id === product.category)?.labelEn}
        </div>
        <div style={{ fontSize: "1.1rem", color: darkBrown, ...cormorantG, fontStyle: "italic", marginBottom: 2 }}>{product.name}</div>
        <div style={{ fontSize: "0.7rem", color: textBrown, fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400, marginBottom: 8 }}>{product.nameKo}</div>
        <div style={{ fontSize: "0.65rem", color: textBrown, fontFamily: "'Noto Sans KR', sans-serif", opacity: 0.7, lineHeight: 1.6, marginBottom: 16 }}>{product.description}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: "1rem", color: darkBrown, ...cormorantG, fontWeight: 600 }}>₩{product.price.toLocaleString()}</div>
          <button onClick={() => addItem({ id: product.id, name: product.name, nameKo: product.nameKo, price: product.price, image: product.image, category: product.category })}
            style={{ background: hovered ? darkBrown : "transparent", color: hovered ? cream : darkBrown, border: `1px solid ${darkBrown}`, fontSize: "0.5rem", letterSpacing: "0.2em", padding: "8px 16px", cursor: "pointer", transition: "all 0.3s ease", ...cormorantSC }}>
            담기
          </button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();
  return (
    <>
      <div onClick={() => setIsCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 100, opacity: isCartOpen ? 1 : 0, pointerEvents: isCartOpen ? "auto" : "none", transition: "opacity 0.4s ease" }} />
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(420px, 100vw)", background: cream, zIndex: 101, transform: isCartOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)", display: "flex", flexDirection: "column", borderLeft: `1px solid ${lightGold}` }}>
        <div style={{ padding: "28px 28px 20px", borderBottom: `1px solid ${lightGold}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "0.5rem", letterSpacing: "0.3em", color: gold, ...cormorantSC, marginBottom: 4 }}>SHOPPING BAG</div>
            <div style={{ fontSize: "1.4rem", color: darkBrown, ...cormorantG, fontStyle: "italic" }}>장바구니</div>
          </div>
          <button onClick={() => setIsCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: textBrown, fontSize: "1.2rem", lineHeight: 1 }}>✕</button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: textBrown, opacity: 0.5 }}>
              <div style={{ fontSize: "2rem", ...cormorantG, fontStyle: "italic", marginBottom: 8 }}>Empty</div>
              <div style={{ fontSize: "0.65rem", fontFamily: "'Noto Sans KR', sans-serif" }}>담긴 상품이 없습니다</div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {items.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: 16, paddingBottom: 20, borderBottom: `1px solid ${lightGold}` }}>
                  <div style={{ width: 72, height: 72, background: `linear-gradient(135deg, #EDE8E0, #D4C5A9)`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "1.2rem", ...cormorantG, color: darkBrown, opacity: 0.4, fontStyle: "italic" }}>L</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", ...cormorantG, color: darkBrown, fontStyle: "italic" }}>{item.name}</div>
                    <div style={{ fontSize: "0.6rem", fontFamily: "'Noto Sans KR', sans-serif", color: textBrown, marginBottom: 8 }}>{item.nameKo}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, border: `1px solid ${lightGold}` }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 10px", color: textBrown, fontSize: "0.9rem" }}>−</button>
                        <span style={{ fontSize: "0.7rem", ...cormorantSC, color: darkBrown, minWidth: 16, textAlign: "center" }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 10px", color: textBrown, fontSize: "0.9rem" }}>+</button>
                      </div>
                      <div style={{ fontSize: "0.85rem", ...cormorantG, color: darkBrown, fontWeight: 600 }}>₩{(item.price * item.quantity).toLocaleString()}</div>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: lightGold, alignSelf: "flex-start", fontSize: "0.8rem" }}>✕</button>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div style={{ padding: "20px 28px 32px", borderTop: `1px solid ${lightGold}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: textBrown, ...cormorantSC }}>TOTAL</span>
              <span style={{ fontSize: "1.1rem", ...cormorantG, color: darkBrown, fontWeight: 600 }}>₩{totalPrice.toLocaleString()}</span>
            </div>
            <button style={{ width: "100%", background: darkBrown, color: cream, border: "none", padding: "16px", fontSize: "0.6rem", letterSpacing: "0.25em", cursor: "pointer", ...cormorantSC, marginBottom: 10 }}
              onClick={() => alert("결제 기능은 PG사 연동 후 활성화됩니다.")}>주문하기</button>
            <button onClick={clearCart} style={{ width: "100%", background: "transparent", color: textBrown, border: `1px solid ${lightGold}`, padding: "12px", fontSize: "0.55rem", letterSpacing: "0.2em", cursor: "pointer", ...cormorantSC }}>비우기</button>
          </div>
        )}
      </div>
    </>
  );
}

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { totalItems, setIsCartOpen } = useCart();
  const filtered = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);
  return (
    <section id="shop" style={{ background: "#EDE8E0", paddingTop: 120, paddingBottom: 100 }}>
      <CartDrawer />
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: "0.5rem", letterSpacing: "0.4em", color: gold, ...cormorantSC, marginBottom: 16 }}>ART OF SCENTS</div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: darkBrown, ...cormorantG, fontStyle: "italic", fontWeight: 400, marginBottom: 16 }}>Shop</h2>
          <div style={{ width: 60, height: 1, background: `linear-gradient(to right, transparent, ${gold}, transparent)`, margin: "0 auto 20px" }} />
          <p style={{ fontSize: "0.8rem", color: textBrown, fontFamily: "'Noto Sans KR', sans-serif", opacity: 0.8, maxWidth: 400, margin: "0 auto", lineHeight: 1.8 }}>향이 머무는 모든 공간을 위한 뤼미에르 컬렉션</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 48 }}>
          {CATEGORIES.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              style={{ background: activeCategory === cat.id ? darkBrown : "transparent", color: activeCategory === cat.id ? cream : textBrown, border: `1px solid ${activeCategory === cat.id ? darkBrown : lightGold}`, padding: "8px 18px", fontSize: "0.5rem", letterSpacing: "0.15em", cursor: "pointer", transition: "all 0.3s ease", fontFamily: "'Noto Sans KR', sans-serif" }}>
              {cat.label}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {filtered.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
        {totalItems > 0 && (
          <button onClick={() => setIsCartOpen(true)}
            style={{ position: "fixed", bottom: 32, right: 32, background: darkBrown, color: cream, border: "none", borderRadius: "50%", width: 56, height: 56, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", boxShadow: "0 8px 32px rgba(61,53,48,0.3)", zIndex: 50 }}>
            <span style={{ fontSize: "1.2rem" }}>🛍</span>
            <span style={{ fontSize: "0.5rem", ...cormorantSC, letterSpacing: "0.1em" }}>{totalItems}</span>
          </button>
        )}
      </div>
    </section>
  );
}
