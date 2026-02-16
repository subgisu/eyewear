# MIRI Eyewear

프리미엄 라이프스타일 선글라스 브랜드 MIRI의 프로덕트 랜딩 페이지입니다.

아이보리와 브라운 톤을 기반으로, 제품의 기능과 태도를 동시에 전달하는 스토리텔링 구조로 설계되었습니다.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3
- Lucide React (아이콘)

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## Project Structure

```
src/
├── main.tsx           # 진입점
├── App.tsx            # 루트 컴포넌트
├── constants.ts       # 제품 정보 및 카피
├── types.ts           # TypeScript 타입 정의
├── index.css          # Tailwind directives + 커스텀 애니메이션
└── components/
    ├── Section.tsx        # 공통 섹션 래퍼
    ├── Hero.tsx           # 히어로 풀스크린
    ├── Reason.tsx         # 브랜드 철학
    ├── Weight.tsx         # 25g 초경량 소개
    ├── UVFeature.tsx      # UV400 차단 기능
    ├── Design.tsx         # 디자인 디테일
    ├── EliteFeatures.tsx  # 6가지 핵심 제품력 (헥사곤 차트)
    ├── HexagonChart.tsx   # 헥사곤 SVG 차트 컴포넌트
    ├── Activities.tsx     # 추천 활동
    ├── Specs.tsx          # 제품 스펙 + 도면
    ├── SpecsDiagram.tsx   # SVG 기술 도면 (정면/측면)
    ├── Trust.tsx          # 배송 및 교환 정책
    ├── Closing.tsx        # 클로징 CTA
    └── StickyFooter.tsx   # 하단 고정 구매 바
```

## Notes

- 현재 이미지는 [picsum.photos](https://picsum.photos) 플레이스홀더를 사용합니다. 실제 제품 이미지로 교체가 필요합니다.
- `public/images/` 디렉토리에 제품 이미지를 추가한 뒤, 각 컴포넌트의 `src` 속성을 업데이트하세요.

## License

Private — All rights reserved.
