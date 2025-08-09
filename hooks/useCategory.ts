"use client";

import { useState, useMemo } from "react";
import { Video } from "@/types";

export function useCategory(videos: Video[]) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      "Music",
      "Gaming",
      "News",
      "Sports",
      "Technology",
      "Entertainment",
      "Education",
      "Comedy",
      "Science",
    ],
    []
  );

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") {
      return videos;
    }

    return videos.filter(
      (video) => video.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [videos, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    categories,
    filteredVideos,
  };
}
