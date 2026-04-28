# Lumiére — Art of Scents 웹사이트 디자인 아이디어

## 브랜드 컨텍스트
- 공간조향 및 B2B 납품 전문 럭셔리 향수 브랜드
- 파트너: 마세라티, 롯데호텔, 신한금융그룹, 우리은행, 몽클레어, 르 메르디앙
- 슬로건: "향은 공간의 기억이 되고, 브랜드의 언어가 된다."
- 파운더: 특급호텔 25년 경력의 이수진 (Alicia Rhee)

---

<response>
<idea>

## Approach A — "Parisian Atelier" (Refined Editorial)

**Design Movement**: French Haute Couture Editorial × Luxury Perfumery

**Core Principles**:
1. 비대칭 타이포그래피 레이아웃 — 텍스트와 이미지가 오버랩되며 긴장감 형성
2. 인쇄물 감성의 세리프 타이포그래피 — 잡지 레이아웃처럼 섹션마다 다른 텍스트 크기 대비
3. 크림-오프화이트 배경에 딥 브라운과 골드 포인트
4. 여백을 호흡처럼 사용 — 콘텐츠 밀도를 의도적으로 낮게 유지

**Color Philosophy**:
- Background: #F5F0E8 (warm parchment)
- Text: #2C1810 (deep espresso brown)
- Accent: #C9A96E (antique gold)
- Secondary: #8B7355 (warm taupe)
- 따뜻하고 오래된 파리 아틀리에의 감성 — 럭셔리하되 차갑지 않음

**Layout Paradigm**:
- 전체 페이지 스크롤 싱글 페이지
- 섹션마다 다른 레이아웃 리듬: 풀블리드 이미지 → 텍스트 오버레이 → 그리드 카드 → 분할 레이아웃
- 네비게이션: 좌측 고정 세로 로고 + 우측 상단 메뉴 (비대칭)

**Signature Elements**:
1. 가는 골드 라인 구분선 (hr 대신 얇은 장식선)
2. 이탤릭 세리프 드롭캡 또는 대형 인용구
3. 섹션 번호를 로마 숫자로 표기 (I, II, III...)

**Interaction Philosophy**:
- 스크롤 시 텍스트 페이드인 (위에서 아래로)
- 카드 호버 시 골드 언더라인 슬라이드
- 버튼: 보더만 있는 미니멀 아웃라인, 호버 시 배경 채움

**Animation**:
- 섹션 진입 시 0.6s ease-out fade + translateY(20px)
- 이미지 패럴랙스 스크롤 (subtle, 20px 범위)
- 파트너 로고 수평 슬라이드 (marquee)

**Typography System**:
- Display: Cormorant Garamond (세리프, 이탤릭 혼용)
- Body: DM Sans (산세리프, 가독성)
- Accent: Cormorant SC (스몰캡스, 섹션 레이블)

</idea>
<probability>0.08</probability>
</response>

<response>
<idea>

## Approach B — "Dark Luxury Noir" (Moody Premium)

**Design Movement**: Contemporary Niche Perfumery × Dark Editorial

**Core Principles**:
1. 다크 배경 위 골드와 크림 텍스트 — 고급 향수 부티크 감성
2. 풀블리드 어두운 이미지와 텍스트의 강한 대비
3. 모노스페이스 + 세리프 혼합 타이포그래피
4. 미니멀한 UI 요소, 최소한의 색상 사용

**Color Philosophy**:
- Background: #0D0B09 (near-black warm)
- Surface: #1A1612 (dark espresso)
- Text: #F0E8D8 (warm cream)
- Accent: #D4A853 (rich gold)
- 어둠 속에서 빛나는 향수 한 병처럼 — 고급스럽고 신비로운

**Layout Paradigm**:
- 풀스크린 히어로 (100vh) + 스크롤 섹션
- 좌우 비대칭 분할 레이아웃 (텍스트 40% / 이미지 60%)
- 수직 타이포그래피 섹션 레이블 (rotated text)

**Signature Elements**:
1. 얇은 골드 보더 프레임 (이미지 주변)
2. 수직 회전 텍스트 레이블
3. 파티클 또는 안개 효과 (CSS only)

**Interaction Philosophy**:
- 커서 커스텀 (골드 원형 커서)
- 호버 시 이미지 줌인 (scale 1.05)
- 버튼: 골드 아웃라인, 호버 시 골드 배경 + 다크 텍스트

**Animation**:
- 히어로 텍스트 글자별 순차 등장 (stagger)
- 스크롤 트리거 카운터 애니메이션
- 섹션 전환 시 클립패스 와이프 효과

**Typography System**:
- Display: Playfair Display (세리프, 볼드)
- Body: Jost (산세리프, 라이트)
- Label: Space Mono (모노스페이스)

</idea>
<probability>0.07</probability>
</response>

<response>
<idea>

## Approach C — "Wabi-Sabi Luxe" (Organic Minimalism) ← SELECTED

**Design Movement**: Japanese Wabi-Sabi × French Minimalism × Luxury Branding

**Core Principles**:
1. 불완전함의 아름다움 — 텍스처 배경, 손글씨 느낌의 타이포그래피 혼용
2. 자연 소재 팔레트 — 린넨, 점토, 모래, 골드의 유기적 조화
3. 넓은 여백과 느린 리듬 — 향수처럼 천천히 펼쳐지는 레이아웃
4. 비대칭 유기적 레이아웃 — 그리드를 벗어난 자유로운 배치

**Color Philosophy**:
- Background: #EDE8E0 (linen warm)
- Surface: #F5F1EB (cream white)
- Text: #3D3530 (warm charcoal)
- Accent Gold: #B8975A (muted antique gold)
- Accent Sage: #8A9E8C (soft sage green)
- 소개서의 기존 베이지/골드 팔레트를 계승하되, 더 유기적이고 살아있는 느낌

**Layout Paradigm**:
- 비대칭 히어로: 텍스트 좌측 오프셋 + 이미지 우측 오버플로우
- 서비스 섹션: 수평 스크롤 카드 (모바일) / 비대칭 그리드 (데스크탑)
- B2B 섹션: 좌우 교차 배치 (이미지-텍스트 / 텍스트-이미지)
- 파운더 섹션: 대형 이미지 배경 + 텍스트 오버레이

**Signature Elements**:
1. 노이즈/그레인 텍스처 오버레이 (배경에 미세한 질감)
2. 가는 골드 라인 장식 (소개서의 구분선 모티프 계승)
3. 이탤릭 세리프 인용구 (슬로건 강조)

**Interaction Philosophy**:
- 부드럽고 느린 전환 (0.8s ease)
- 호버 시 이미지 미세 확대 + 골드 오버레이
- 스크롤 시 요소가 안개처럼 서서히 등장

**Animation**:
- 히어로 텍스트: 단어별 순차 페이드인 (stagger 0.1s)
- 섹션 진입: translateY(30px) → 0, opacity 0 → 1
- 파트너 로고: 수평 무한 마퀴
- 이미지: 스크롤 패럴랙스 (subtle)

**Typography System**:
- Display: Cormorant Garamond (세리프, 이탤릭 혼용) — 고급스럽고 우아함
- Body: Noto Sans KR (한국어 지원, 가독성)
- Accent: Cormorant SC (스몰캡스, 섹션 레이블)
- 한국어 본문: Noto Serif KR (세리프, 가독성)

</idea>
<probability>0.09</probability>
</response>

## 선택: Approach C — "Wabi-Sabi Luxe"

소개서의 기존 베이지/골드 팔레트를 자연스럽게 계승하면서, 단순한 복사가 아닌 더 생동감 있고 유기적인 럭셔리 감성으로 승화시킨다. 향수라는 제품의 감각적 특성과 공간조향이라는 서비스의 분위기를 가장 잘 표현할 수 있는 접근법이다.
