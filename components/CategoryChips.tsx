"use client";

interface CategoryChipsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryChips({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryChipsProps) {
  return (
    <div className="flex gap-3 mb-6 overflow-x-auto pb-1 scrollbar-thin">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200
            ${
              activeCategory === category
                ? "bg-youtube-gray-900 text-white border border-youtube-gray-900"
                : "bg-youtube-gray-100 text-youtube-gray-500 border border-youtube-gray-300 hover:bg-youtube-gray-200"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
