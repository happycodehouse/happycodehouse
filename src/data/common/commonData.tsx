export interface ButtonType {
  key: string;
  label: string;
  value: boolean;
}

export const languageData = [
  { key: "korean", label: "KR", value: true },
  { key: "english", label: "ENG", value: false },
] as ButtonType[];

export const personalInfo = {
  name: {kr: "장하담", en: "HADAM JANG"},
  position: "Web Frontend Developer",
  motto: {kr: "뜻이 있는 곳에 길이 있다.", en: "Where there is a will, there is a way."},
  email: "hadamjang.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/hadam-jang-10256536a/",
  github: "https://github.com/happycodehouse"
};