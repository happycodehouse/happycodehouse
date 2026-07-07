import React from "react";
import type { CompanyProject } from "./types";
import samickthkMp4 from "../../assets/videos/resume/samickthk.mp4";
import hanatourcompanyMp4 from "../../assets/videos/resume/hanatourcompany.mp4";
import samsungMp4 from "../../assets/videos/resume/samsung.mp4";
import xiElevatorMp4 from "../../assets/videos/resume/xi-elevator.mp4";

export const uberData: CompanyProject = {
  company: {
    name: "The Uber Creative",
    url: "https://theuber.co.kr/",
    team: "UI Development Team",
    period: "2023.09 – Present"
  },
  brief: {
    kr: "디지털 에이전시에서 프론트엔드 개발자로 근무하며 기업 웹사이트 구축 및 운영을 담당하고 있습니다.",
    en: "Working as a Frontend Developer at a digital agency, responsible for corporate website development and maintenance."
  },
  projects: [
    {
      title: {
        kr: "DB그룹 CI 아카이브 개편",
        en: "DB GROUP CI ARCHIVE RENEWAL",
        url: { kr: "https://ci.dbgroup.co.kr/", en: "https://ci.dbgroup.co.kr/" }
      },
      period: "2025.10 – 2025.12",
      details: {
        kr: [
          { text: "공통 UI 컴포넌트부터 페이지 단위까지 프론트엔드 전반 개발" },
          { text: "GSAP 스크롤·전환 애니메이션으로 CI 콘텐츠 흐름 구현" },
          { text: "스크립트 자동화를 통한 재사용 컴포넌트 구조 개선" }
        ],
        en: [
          { text: "End-to-end front-end development across common UI components and pages" },
          { text: "GSAP scroll/transition animations for CI content" },
          { text: "Automated reusable components with scripts for maintainability" }
        ]
      }
    },
    {
      title: {
        kr: "DB HiTek 리뉴얼",
        en: "DB HiTek Website",
        url: { kr: "https://dbhitek.com/kr", en: "https://dbhitek.com/en/" }
      },
      period: "2025.03 – 2025.06",
      details: {
        kr: [
          { text: "공통 디자인 시스템 기반 CSS 컴포넌트 라이브러리 구축" },
          { text: "디바이스별 차별화된 GSAP 인터랙션 구현 (모바일/PC 분리)", url: "https://dbhitek.com/kr/company/about" },
          { text: "반응형 웹 및 크로스 브라우저 호환성 최적화, 웹 접근성 준수" }
        ],
        en: [
          { text: "Built CSS component library based on unified design system" },
          { text: "Separate mobile/PC GSAP interaction animations", url: "https://dbhitek.com/en/company/about" },
          { text: "Responsive design with cross-browser compatibility and WCAG compliance" }
        ]
      }
    },
    {
      title: {
        kr: "자이엘리베이터 CI 리뉴얼",
        en: "XI Elevator CI Renewal",
        url: { kr: "https://www.xielevator.com/kr", en: "https://www.xielevator.com/en" }
      },
      period: ["2025.03 – 2025.04", "2023.09 – 2023.12"],
      details: {
        kr: [
          { text: "CI 개편에 따른 웹사이트 전면 리뉴얼" },
          { text: "디바이스별 GSAP ScrollTrigger 인터랙션 분리 구현 (모바일/PC)", video: xiElevatorMp4 }
        ],
        en: [
          { text: "Full website redesign following CI renewal" },
          {
            text: "Device-specific GSAP ScrollTrigger interactions with separate mobile/PC logic", video: xiElevatorMp4
          }
        ]
      }
    },
    {
      title: {
        kr: "대상웰라이프",
        en: "DAESANG Wellife",
        url: { kr: "https://daesangwellife.com/kr/index", en: "https://daesangwellife.com/en/index" }
      },
      period: "2024.12 – 2025.05",
      details: {
        kr: [
          {
            text: "GSAP ScrollTrigger 기반 뷰포트 연동 영상/애니메이션 제어",
            url: "https://daesangwellife.com/kr/about-us/company/overview"
          },
          { text: "디자인 시스템 및 재사용 컴포넌트 라이브러리 구축" },
          { text: "반응형 디자인 및 크로스 브라우징 구현" }
        ],
        en: [
          {
            text: "GSAP ScrollTrigger for viewport-aware video/animation control",
            url: "https://daesangwellife.com/en/about-us/company/overview"
          },
          { text: "Established design system and reusable component library" },
          { text: "Responsive design with cross-browser compatibility" }
        ]
      }
    },
    {
      title: {
        kr: "삼양그룹 전사 CI 변경",
        en: "Samyang Group Corporate Identity Renewal",
        url: { kr: "https://www.samyang.com/kr", en: "https://www.samyang.com/en" }
      },
      period: "2024.07 – 2024.10",
      details: {
        kr: [
          { text: "삼양그룹 계열사 12개 사이트 CI 리뉴얼 (프론트엔드 3인)" },
          { text: "국문/영문 폰트 분리 타이포그래피 시스템 설계" },
          { text: "레거시 코드 기반 멀티 사이트 CSS 관리 및 배포 전략 수립" }
        ],
        en: [
          { text: "CI renewal across 12 Samyang Group subsidiary websites (3-person front-end team)" },
          { text: "Typography system for Korean/English font differentiation" },
          { text: "Multi-site CSS management and deployment strategy with legacy codebase" }
        ]
      }
    },
    {
      title: {
        kr: "하나투어 기업 웹사이트",
        en: "Hanatour Company",
        url: { kr: "https://www.hanatourcompany.com/kr", en: "https://www.hanatourcompany.com/en" }
      },
      period: "2024.04 – 2024.07",
      details: {
        kr: [
          { text: "GSAP ScrollTrigger 연동 외부 컨트롤러 기반 커스텀 스와이퍼 구현", video: hanatourcompanyMp4 }
        ],
        en: [
          { text: "Custom Swiper with GSAP ScrollTrigger and external content controller", video: hanatourcompanyMp4 }
        ]
      }
    },
    {
      title: {
        kr: "삼익THK 통합 사이트 리뉴얼",
        en: "Samik THK Integrated",
        url: { kr: "https://www.samickthk.co.kr/kr", en: "https://www.samickthk.co.kr/en" }
      },
      period: "2023.12 – 2024.05",
      details: {
        kr: [
          { text: "GSAP ScrollTrigger 기반 타임라인 인터랙션 애니메이션 구현", video: samickthkMp4 }
        ],
        en: [
          { text: "Timeline interaction animation with GSAP ScrollTrigger", video: samickthkMp4 }
        ]
      }
    },
    {
      title: {
        kr: "삼성전기 홈페이지 운영",
        en: "Samsung Electro-Mechanics Website Maintenance & Enhancement",
        url: { kr: "https://www.samsungvx.com/onboarding", en: "https://www.samsungsem.com/global/index.do" }
      },
      type: "maintenance",
      details: {
        kr: [
          {
            text: <><a href="https://product.samsungsem.com/index.do" target="_blank"
                       rel="noopener noreferrer">PS</a>/<a href="https://weblib.samsungsem.com/index.do" target="_blank"
                                                           rel="noopener noreferrer">CL</a> 기술 리소스 플랫폼 구축 및 운영</>
          },
          { text: "AJAX 동적 로딩 구현으로 페이지 로딩 속도 30% 개선", url: "https://samsungsem.com/kr/bepuco/contest.do" },
          { text: "WCAG 2.1 AA 인증 연간 갱신 (WebWatch 심사)" },
          { text: "지속가능경영 카테고리 인터랙티브 데이터 시각화 구현", video: samsungMp4 },
          { text: "뉴스레터 월간 제작 및 발송 운영 (멀티 플랫폼 호환성 최적화)" }
        ],
        en: [
          {
            text: <><a href="https://product.samsungsem.com/index.do" target="_blank"
                       rel="noopener noreferrer">PS</a>/<a href="https://weblib.samsungsem.com/index.do" target="_blank"
                                                           rel="noopener noreferrer">CL</a> Platform Development &
              Operations</>
          },
          {
            text: "AJAX-based dynamic loading with 30% speed improvement",
            url: "https://samsungsem.com/kr/bepuco/contest.do"
          },
          { text: "Maintained WCAG 2.1 AA certification through annual WebWatch audits" },
          { text: "Developed Sustainability Category with interactive data visualizations", video: samsungMp4 },
          { text: "Monthly newsletter production and delivery with multi-platform compatibility" }
        ]
      }
    },
    {
      title: {
        kr: "삼양 스페셜티 / 삼양 AM BU 사이트 유지운영",
        en: "Samyang Speciality / Samyang AM BU Website Maintenance"
      },
      type: "maintenance",
      details: {
        kr: [
          {
            text: <><a href="https://samyangspecialty.com/kr/index" target="_blank" rel="noopener noreferrer">Samyang
              Specialty</a> / <a href="https://www.samyangep.com/kr/index" target="_blank" rel="noopener noreferrer">삼양사
              AM BU</a> 홈페이지 통합 관리</>
          },
          { text: "정기적 콘텐츠 업데이트 및 기술 유지보수" }
        ],
        en: [
          {
            text: <><a href="https://samyangspecialty.com/en/index" target="_blank" rel="noopener noreferrer">Samyang
              Specialty</a> and <a href="https://www.samyangep.com/en/index" target="_blank" rel="noopener noreferrer">Samyang
              AM BU</a> Website Management</>
          },
          { text: "Regular content updates and technical maintenance" }
        ]
      }
    }
  ]
};