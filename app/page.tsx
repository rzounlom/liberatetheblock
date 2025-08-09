"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import CategoryChips from "@/components/CategoryChips";
import VideoModal from "@/components/VideoModal";
import { useSearch } from "@/hooks/useSearch";
import { useCategory } from "@/hooks/useCategory";
import { useSidebar } from "@/hooks/useSidebar";
import { Video } from "@/types";
import videosData from "@/data/videos.json";

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const videos = videosData as Video[];

  // Custom hooks for state management
  const sidebar = useSidebar();
  const {
    activeCategory,
    setActiveCategory,
    categories,
    filteredVideos: categoryFilteredVideos,
  } = useCategory(videos);
  const {
    searchTerm,
    setSearchTerm,
    filteredVideos: searchFilteredVideos,
    resultCount,
  } = useSearch(categoryFilteredVideos);

  // Combine category and search filters
  const displayedVideos = useMemo(() => {
    if (searchTerm.trim()) {
      return searchFilteredVideos;
    }
    return categoryFilteredVideos;
  }, [searchTerm, searchFilteredVideos, categoryFilteredVideos]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      setActiveCategory("All"); // Reset category when searching
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchTerm(""); // Clear search when changing category
  };

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-youtube-gray-50">
      {/* Header */}
      <Header
        onMenuClick={sidebar.toggle}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />

      {/* Main Container */}
      <div className="flex mt-14">
        {/* Sidebar */}
        <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close} />

        {/* Main Content */}
        <main
          className={`
          flex-1 p-6 transition-all duration-300
          ${sidebar.isOpen ? "md:ml-60" : "ml-0"}
        `}
        >
          {/* Category Chips */}
          <CategoryChips
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Search Results Info */}
          {searchTerm.trim() && (
            <div className="mb-5 p-3 bg-youtube-gray-100 rounded-lg text-youtube-gray-500 text-sm">
              Found {resultCount} result{resultCount !== 1 ? "s" : ""} for
              &quot;{searchTerm}&quot;
            </div>
          )}

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mb-10">
            {displayedVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                onVideoClick={handleVideoClick}
              />
            ))}
          </div>

          {/* No Results Message */}
          {displayedVideos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-youtube-gray-900 mb-2">
                No videos found
              </h3>
              <p className="text-youtube-gray-500">
                {searchTerm.trim()
                  ? `Try different keywords or check your spelling`
                  : `No videos available in the ${activeCategory} category`}
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={handleCloseModal} />
    </div>
  );
}
