"use client";

import {
  MdApps,
  MdMenu,
  MdMic,
  MdNotifications,
  MdPlayCircleFilled,
  MdSearch,
  MdVideoCall,
} from "react-icons/md";

import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  onMenuClick: () => void;
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export default function Header({
  onMenuClick,
  onSearch,
  searchTerm,
}: HeaderProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch(localSearchTerm);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-youtube-gray-300 flex items-center justify-between px-4 z-50 shadow-soft">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-full hover:bg-youtube-gray-100 transition-colors duration-200"
          aria-label="Menu"
        >
          <MdMenu className="w-6 h-6 text-youtube-gray-500" />
        </button>

        <div className="flex items-center gap-1">
          <MdPlayCircleFilled className="text-youtube-red text-3xl" />
          <span className="text-xl font-medium text-youtube-gray-900">
            YouTube
          </span>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="hidden md:flex items-center gap-4 flex-1 max-w-2xl mx-10">
        <form onSubmit={handleSearch} className="flex flex-1 max-w-xl">
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Search"
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 h-10 border border-youtube-gray-400 border-r-0 rounded-l-full px-4 text-base outline-none focus:border-blue-500 focus:shadow-inner"
            />
            <button
              type="submit"
              className="w-16 h-10 border border-youtube-gray-400 border-l-0 rounded-r-full bg-youtube-gray-50 hover:bg-youtube-gray-100 flex items-center justify-center transition-colors duration-200"
              aria-label="Search"
            >
              <MdSearch className="w-5 h-5 text-youtube-gray-500" />
            </button>
          </div>
        </form>

        <button
          className="w-10 h-10 rounded-full bg-youtube-gray-100 hover:bg-youtube-gray-200 flex items-center justify-center transition-colors duration-200"
          aria-label="Voice search"
        >
          <MdMic className="w-5 h-5 text-youtube-gray-500" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button
          className="w-10 h-10 rounded-full hover:bg-youtube-gray-100 flex items-center justify-center transition-colors duration-200"
          aria-label="Create"
        >
          <MdVideoCall className="w-6 h-6 text-youtube-gray-500" />
        </button>

        <button
          className="w-10 h-10 rounded-full hover:bg-youtube-gray-100 flex items-center justify-center transition-colors duration-200"
          aria-label="Apps"
        >
          <MdApps className="w-6 h-6 text-youtube-gray-500" />
        </button>

        <button
          className="w-10 h-10 rounded-full hover:bg-youtube-gray-100 flex items-center justify-center transition-colors duration-200"
          aria-label="Notifications"
        >
          <MdNotifications className="w-6 h-6 text-youtube-gray-500" />
        </button>

        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <Image
            src="https://via.placeholder.com/32/4285f4/ffffff?text=U"
            alt="User Avatar"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
