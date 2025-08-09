"use client";

import { useState } from "react";
import Image from "next/image";
import { Video } from "@/types";

interface VideoCardProps {
  video: Video;
  index: number;
  onVideoClick: (video: Video) => void;
}

export default function VideoCard({
  video,
  index,
  onVideoClick,
}: VideoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-medium animate-fade-in shadow-soft"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onVideoClick(video)}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={320}
          height={180}
          className={`w-full h-full object-cover transition-all duration-200 hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </div>

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-youtube-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-youtube-gray-300"></div>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-youtube-gray-900 mb-2 leading-tight video-title-clamp">
          {video.title}
        </h3>

        <div className="flex items-start gap-3">
          <Image
            src={video.channelAvatar}
            alt={video.channelName}
            width={36}
            height={36}
            className="rounded-full flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <p className="text-xs text-youtube-gray-500 mb-0.5 font-normal">
              {video.channelName}
            </p>
            <div className="flex items-center text-xs text-youtube-gray-500 gap-1">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
