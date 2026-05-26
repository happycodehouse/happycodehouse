import React from 'react';

export interface CompanyInfo {
  name: string;
  url?: string;
  team?: string;
  period?: string;
}

export interface MultiLanguageText {
  kr: string | React.ReactNode;
  en: string | React.ReactNode;
}

export interface MultiLanguageUrl {
  kr: string;
  en: string;
}

export interface ProjectTitle {
  kr: string | React.ReactNode;
  en: string | React.ReactNode;
  url?: MultiLanguageUrl;
}

export interface ProjectDetail {
  text: string | React.ReactNode;
  url?: string | string[];
  video?: string;
}

export interface Project {
  title: ProjectTitle;
  period?: string | string[];
  type?: "maintenance";
  details: {
    kr: ProjectDetail[];
    en: ProjectDetail[];
  };
}

export interface CompanyProject {
  company: CompanyInfo;
  brief: MultiLanguageText;
  projects: Project[];
}