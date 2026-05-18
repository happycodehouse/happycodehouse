import { labData } from './labData';
import { devData } from './devData';
import { noteData } from './noteData';
import type { FeedItem } from './types';

const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split('.');
  return new Date(`20${year}-${month}-${day}`);
};

export const feedData: FeedItem[] = [...labData, ...devData, ...noteData]
  .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());