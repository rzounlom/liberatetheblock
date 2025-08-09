"use client";

import { FaGamepad, FaMusic, FaReact } from "react-icons/fa";
import {
  MdExplore,
  MdHistory,
  MdHome,
  MdSmartDisplay,
  MdSubscriptions,
  MdThumbUp,
  MdVideoLibrary,
  MdWatchLater,
} from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: "MdHome", label: "Home", active: true },
  { icon: "MdExplore", label: "Explore", active: false },
  { icon: "MdSubscriptions", label: "Subscriptions", active: false },
];

const libraryItems = [
  { icon: "MdVideoLibrary", label: "Library", active: false },
  { icon: "MdHistory", label: "History", active: false },
  { icon: "MdSmartDisplay", label: "Your videos", active: false },
  { icon: "MdWatchLater", label: "Watch later", active: false },
  { icon: "MdThumbUp", label: "Liked videos", active: false },
];

const subscriptionChannels = [
  {
    name: "Tech Channel",
    icon: "FaReact",
    color: "text-blue-500",
  },
  {
    name: "Music Channel",
    icon: "FaMusic",
    color: "text-purple-500",
  },
  {
    name: "Gaming Channel",
    icon: "FaGamepad",
    color: "text-green-500",
  },
];

const getIcon = (iconName: string) => {
  const icons = {
    MdHome,
    MdExplore,
    MdSubscriptions,
    MdVideoLibrary,
    MdHistory,
    MdSmartDisplay,
    MdWatchLater,
    MdThumbUp,
    FaReact,
    FaMusic,
    FaGamepad,
  };
  return icons[iconName as keyof typeof icons];
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-60 bg-white border-r border-youtube-gray-300 
        transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto scrollbar-thin
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:z-30
      `}
      >
        <nav className="p-3">
          {/* Main Navigation */}
          <div className="mb-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`
                  flex items-center gap-6 px-3 py-2.5 rounded-xl text-sm font-normal transition-colors duration-200
                  ${
                    item.active
                      ? "bg-youtube-gray-100 font-medium text-youtube-gray-900"
                      : "text-youtube-gray-900 hover:bg-youtube-gray-100"
                  }
                `}
              >
                {(() => {
                  const IconComponent = getIcon(item.icon);
                  return IconComponent ? (
                    <IconComponent
                      className={`w-6 h-6 ${
                        item.active
                          ? "text-youtube-gray-900"
                          : "text-youtube-gray-500"
                      }`}
                    />
                  ) : null;
                })()}
                <span className="nav-text">{item.label}</span>
              </a>
            ))}
          </div>

          <hr className="border-youtube-gray-300 my-3" />

          {/* Library Section */}
          <div className="mb-2">
            {libraryItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-6 px-3 py-2.5 rounded-xl text-sm font-normal text-youtube-gray-900 hover:bg-youtube-gray-100 transition-colors duration-200"
              >
                {(() => {
                  const IconComponent = getIcon(item.icon);
                  return IconComponent ? (
                    <IconComponent className="w-6 h-6 text-youtube-gray-500" />
                  ) : null;
                })()}
                <span className="nav-text">{item.label}</span>
              </a>
            ))}
          </div>

          <hr className="border-youtube-gray-300 my-3" />

          {/* Subscriptions */}
          <div className="mb-2">
            <h3 className="text-sm font-medium text-youtube-gray-500 mx-3 my-2 uppercase tracking-wide">
              Subscriptions
            </h3>
            {subscriptionChannels.map((channel) => (
              <a
                key={channel.name}
                href="#"
                className="flex items-center gap-6 px-3 py-2.5 rounded-xl text-sm font-normal text-youtube-gray-900 hover:bg-youtube-gray-100 transition-colors duration-200"
              >
                {(() => {
                  const IconComponent = getIcon(channel.icon);
                  return IconComponent ? (
                    <IconComponent className={`w-6 h-6 ${channel.color}`} />
                  ) : null;
                })()}
                <span className="nav-text">{channel.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
