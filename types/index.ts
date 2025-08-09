export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
  category: string;
}

export interface Category {
  name: string;
  active: boolean;
}

export interface SearchResult {
  searchTerm: string;
  resultCount: number;
}
