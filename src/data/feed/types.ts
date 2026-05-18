import React from 'react';

export interface FeedItem {
  id: string;
  category: "LAB" | "DEV" | "NOTE";
  date: string;
  title: string;
  externalUrl?: string;
  content?: React.ReactNode;
}