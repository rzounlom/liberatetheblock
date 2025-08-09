"use client";

import { useState, useMemo } from "react";
import { Video } from "@/types";

export function useSearch(videos: Video[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = useMemo(() => {
    if (!searchTerm.trim()) {
      return videos;
    }

    return videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [videos, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredVideos,
    resultCount: filteredVideos.length,
  };
}
