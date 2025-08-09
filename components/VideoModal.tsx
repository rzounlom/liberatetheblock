"use client";

import Image from "next/image";
import { MdClose } from "react-icons/md";
import { Video } from "@/types";
import { useEffect } from "react";

interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (video) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000] animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 max-w-lg mx-5 relative animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-youtube-gray-100 transition-colors duration-200"
          aria-label="Close"
        >
          <MdClose className="w-6 h-6 text-youtube-gray-500" />
        </button>

        {/* Video Thumbnail */}
        <div className="mb-4">
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={400}
            height={225}
            className="w-full rounded-lg"
          />
        </div>

        {/* Video Info */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-youtube-gray-900 mb-3 line-clamp-2">
            {video.title}
          </h3>

          <p className="text-youtube-gray-500 mb-2">by {video.channelName}</p>
          <p className="text-youtube-gray-500 text-sm mb-5">
            {video.views} • {video.timestamp}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center">
            <button
              className="bg-youtube-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
              onClick={() => {
                console.log("Playing video:", video.title);
                // In a real app, this would start video playback
              }}
            >
              Play Video
            </button>

            <button
              onClick={onClose}
              className="bg-youtube-gray-100 text-youtube-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-youtube-gray-200 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
