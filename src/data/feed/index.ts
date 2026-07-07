import { labData } from "./labData";
import { tilData } from "./tilData";
import { noteData } from "./noteData";
import type { FeedItem } from "./types";

const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split(".");
  return new Date(`20${year}-${month}-${day}`);
};

export const feedData: FeedItem[] = [...labData, ...tilData, ...noteData]
  .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());