// src/types.ts
export interface ContentItem {
  name: string;
  img: string;
  desc: string;
  link?: string;
}

export interface StateData {
  name: string;
  sanskrit: string;
  headline: string;
  description: string;
  coverImage: string;
  places: ContentItem[];
  food: ContentItem[];
  guides: ContentItem[];
}
