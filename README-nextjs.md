# YouTube Clone - Next.js & Tailwind CSS

A modern, responsive YouTube clone built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, featuring a polished Material Design-inspired interface.

## 🚀 Features

### ✨ Modern Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **React Icons** for comprehensive icon library
- **React Hooks** for state management

### 🎨 Design & UX

- **Material Design-inspired** interface
- **Fully responsive** design (mobile-first)
- **Smooth animations** and transitions
- **Modern glassmorphism** effects
- **Accessibility-focused** components

### ⚡ Core Functionality

- **Real-time search** with instant filtering
- **Category-based filtering** with smooth transitions
- **Responsive video grid** with lazy loading
- **Interactive sidebar** with mobile overlay
- **Video modal** with keyboard shortcuts
- **Custom hooks** for clean state management

## 🏗️ Project Structure

```
liberatetheblock/
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── VideoCard.tsx        # Individual video cards
│   ├── CategoryChips.tsx    # Category filter chips
│   └── VideoModal.tsx       # Video preview modal
├── hooks/
│   ├── useSearch.ts         # Search functionality
│   ├── useCategory.ts       # Category filtering
│   └── useSidebar.ts        # Sidebar state management
├── types/
│   └── index.ts             # TypeScript interfaces
├── data/
│   └── videos.json          # Sample video data
└── [config files]
```

## 🛠️ Installation & Setup

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### Header Component

- **Responsive search bar** with form handling
- **Mobile-friendly** navigation
- **Icon buttons** with hover effects
- **User avatar** integration

### Sidebar Component

- **Collapsible navigation** with smooth animations
- **Mobile overlay** for better UX
- **Subscription channels** with avatars
- **Responsive behavior** across breakpoints

### VideoCard Component

- **Lazy loading images** for performance
- **Hover animations** and scaling effects
- **Duration badges** and metadata
- **Click handlers** for modal integration

### Custom Hooks

- **`useSearch`**: Debounced search with filtering
- **`useCategory`**: Category state management
- **`useSidebar`**: Responsive sidebar behavior

## 🎨 Styling Approach

### Tailwind CSS Configuration

- **Custom color palette** matching YouTube's design
- **Extended animations** for smooth interactions
- **Responsive breakpoints** for all devices
- **Custom utility classes** for common patterns

### Design Tokens

```css
colors: {
  youtube: {
    red: '#ff0000',
    gray: {
      50: '#f9f9f9',   // Background
      100: '#f2f2f2',  // Light elements
      500: '#606060',  // Text secondary
      900: '#0f0f0f'   // Text primary
    }
  }
}
```

## 📱 Responsive Design

- **Mobile (< 768px)**: Single column, hidden sidebar
- **Tablet (768px - 1024px)**: Two columns, collapsible sidebar
- **Desktop (> 1024px)**: Multi-column grid, persistent sidebar
- **Large screens (> 1536px)**: Up to 5 columns for optimal viewing

## 🔧 Performance Optimizations

- **Next.js Image optimization** with lazy loading
- **Component-level code splitting** with dynamic imports
- **Debounced search** to reduce unnecessary renders
- **Memoized computations** with useMemo hooks
- **Optimized bundle** with tree shaking

## 🎮 Interactive Features

### Keyboard Shortcuts

- **`/`** - Focus search bar
- **`Escape`** - Close modal/sidebar
- **`Enter`** - Submit search

### Mouse Interactions

- **Hover effects** on all interactive elements
- **Smooth transitions** for state changes
- **Click outside** to close modals

## 🔮 Future Enhancements

- **Video player integration** with controls
- **User authentication** and profiles
- **Comments system** with real-time updates
- **Playlist functionality** and favorites
- **Dark mode toggle** with system preference
- **PWA capabilities** for mobile installation
- **Real API integration** with backend services

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

- **Netlify**: Static export support
- **Docker**: Containerized deployment
- **AWS/GCP**: Cloud platform deployment

## 📋 Scripts

```json
{
  "dev": "next dev", // Development server
  "build": "next build", // Production build
  "start": "next start", // Production server
  "lint": "next lint" // ESLint checking
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for educational purposes. YouTube is a trademark of Google LLC.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
