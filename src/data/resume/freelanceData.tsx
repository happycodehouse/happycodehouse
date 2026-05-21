import type { CompanyProject } from './types';

export const freelanceData: CompanyProject = {
  company: {
    name: "Freelance Contract"
  },
  brief: {
    kr: "삼성 VXT CMS 프로젝트에 프리랜서 개발자로 참여하여 React 기반 UI/UX 검증 페이지 및 컴포넌트 라이브러리를 구축했습니다.",
    en: "Participated as freelance developer in Samsung VXT CMS project. Built React-based UI/UX validation pages and reusable component library."
  },
  projects: [
    {
      title: {
        kr: "Samsung VXT CMS",
        en: "Samsung VXT CMS",
        url: {
          kr: "https://www.samsungvx.com",
          en: "https://www.samsungvx.com"
        }
      },
      period: ["2025.06 – 2025.08", "2024.10 – 2024.11", "2024.04 – 2024.06"],
      details: {
        kr: [
          { text: "React 기반 UI/UX 검증용 웹페이지 및 재사용 컴포넌트 라이브러리 구축" },
          { text: "디자이너 협업을 통한 반응형 웹 인터페이스 구현" }
        ],
        en: [
          { text: "Built React-based UI/UX validation pages and reusable component library" },
          { text: "Collaborated with designers to deliver responsive interfaces" }
        ]
      }
    }
  ]
}