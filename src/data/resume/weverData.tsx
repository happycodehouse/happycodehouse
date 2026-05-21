import React from 'react';
import type { CompanyProject } from './types';

export const weverData: CompanyProject = {
  company: {
    name: "WeverCNS Co., Ltd.",
    url: "https://wever.kr/",
    team: "Web Development Team",
    period: "2021.12 – 2023.02"
  },
  brief: {
    kr: "정부기관 및 기업 공식 웹사이트 구축 전문 회사에서 퍼블리싱 전담으로 참여하여 대규모 정부 프로젝트와 기업 홈페이지 개발을 담당했습니다.",
    en: "Specialized in frontend development for large-scale government and corporate web projects at a leading digital agency."
  },
  projects: [
    {
      title: {
        kr: "제20대 대한민국 대통령실 웹사이트 개편",
        en: "20th Presidential Office of Korea Website Redesign"
      },
      period: "2022.07 – 2022.12",
      details: {
        kr: [
          { text: "대통령실 국/영문 공식 홈페이지 전면 재구축" },
          { text: "반응형 웹 구현 및 웹접근성 인증 획득" }
        ],
        en: [
          { text: "Redesigned bilingual presidential websites" },
          { text: "Delivered responsive design + WCAG compliance" }
        ]
      }
    },
    {
      title: {
        kr: "제19대 대한민국 청와대 특별 페이지 구축",
        en: "19th Blue House Special Portal Development"
      },
      period: "2021.12 – 2022.05",
      details: {
        kr: [
          { text: "API 연동을 통한 100여개 국정과제 데이터 시각화" },
          { text: "반응형 웹 및 웹접근성 인증 구현" }
        ],
        en: [
          { text: "Built interactive data visualization for 100+ policy initiatives via API" },
          { text: "Built responsive, WCAG-compliant web solution" }
        ]
      }
    },
    {
      title: {
        kr: "대동/아이티센그룹 웹사이트 구축 및 유지보수",
        en: "Corporate Website Development & Maintenance"
      },
      period: "2021.12 – 2023.02",
      details: {
        kr: [
          { text: "농업기업 대동 및 아이티센그룹 계열사 5개 홈페이지 구축" },
          { text: "반응형 웹 구현 및 지속적 유지보수 담당" }
        ],
        en: [
          { text: <>Developed and maintained websites for <a href="https://daedong-kioti.com/" target="_blank" rel="noopener noreferrer">Daedong</a> and ITcen Group subsidiaries (5 corporate sites)</> },
          { text: "Implemented responsive design architecture and provided ongoing technical support" }
        ]
      }
    }
  ]
}