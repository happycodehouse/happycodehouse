import type { CompanyProject } from './types';

export const freelanceData: CompanyProject = {
  company: {
    name: "Freelance Contract"
  },
  brief: {
    kr: "삼성 VXT CMS 프로젝트 프리랜서 개발자로 참여하여 React 기반 UI/UX 테스트서버 웹페이지 개발 및 컴포넌트 라이브러리를 구축했습니다.",
    en: "Participated as freelance developer in Samsung VXT CMS project. Developed React-based UI/UX validation web pages and component libraries."
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
      period: "25.06 - 08 / 24.10 - 11 / 24.04 - 06",
      details: {
        kr: [
          { text: "React 기반 UI/UX 검증용 웹페이지 제작" },
          { text: "컴포넌트 기반 재사용 가능한 UI 라이브러리 구축" },
          { text: "디자이너 협업을 통한 반응형 웹 인터페이스 구축" }
        ],
        en: [
          { text: "Built React-based web pages for UI/UX validation" },
          { text: "Developed reusable component-based UI library" },
          { text: "Created responsive web interfaces through designer collaboration" }
        ]
      },
      tags: ["#React"]
    }
  ]
};