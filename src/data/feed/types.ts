export type ContentBlock =
  | { type: "text"; value: string }
  | { type: "heading"; level: 2 | 3; value: string }
  | { type: "code"; value: string }
  | { type: "list"; items: string[] }
  | { type: "strong"; value: string }
  | { type: "link"; label: string; url: string }
  | { type: "images"; src: string[]; alt?: string[] }

export interface FeedSection {
  heading?: string;
  blocks: ContentBlock[];
}

export interface FeedItem {
  id: string;
  category: string;
  date: string;
  title: string;
  externalUrl?: string;
  content?: FeedSection[];
}