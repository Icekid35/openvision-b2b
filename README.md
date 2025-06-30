# Open Visual B2B Service Platform

A modern, visually engaging B2B service website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. This project showcases digital services, blog insights, and a rich portfolio, with a focus on enterprise-grade design, accessibility, and smooth user experience.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Routing & Navigation](#routing--navigation)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Modern UI/UX**: Responsive, accessible, and visually appealing layouts using Tailwind CSS.
- **Componentized Architecture**: Header, Footer, and navigation are modular and reusable.
- **Dynamic Routing**: Uses React Router for seamless navigation between pages and detail views.
- **SPA Navigation**: All internal navigation uses `<Link>` from `react-router-dom` for fast, client-side transitions.
- **Scroll Restoration**: Each page automatically scrolls to the top on navigation.
- **Blog & Portfolio**: Dedicated pages for blog posts and portfolio projects, each with detail subpages.
- **Contact & Forms**: Interactive contact form with validation and success feedback.
- **SEO Ready**: Semantic HTML, meta tags, and best practices for discoverability.
- **Premium Typography**: Uses the Inter font globally for a clean, modern, and premium feel.
- **Consistent Branding**: Primary blue and accent green color palette.
- **Scroll Effects**: Animated header and section reveals on scroll.

---

## Project Structure

```
b2b service/
├── public/
│   └── images/           # All static images and assets
├── src/
│   ├── components/       # Header, Footer, MinimalNav, ScrollToTop, etc.
│   ├── pages/            # Main pages (Home, About, Services, etc.)
│   │   ├── blog/         # Blog detail pages
│   │   ├── portfolio/    # Portfolio detail pages
│   │   └── case-study/   # Case study detail pages
│   ├── App.tsx           # Main app with all routes and scroll restoration
│   ├── global.css        # Tailwind and global styles (Inter font, scrollbar, etc.)
│   └── main.tsx          # App entry point
├── index.html            # Loads Inter font from Google Fonts
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/icekid35/b2b-service.git
   cd b2b-service
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## Available Scripts

- `npm run dev` – Start the Vite development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build
- `npm run lint` – Lint the codebase with ESLint

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, tailwindcss-animate, PostCSS
- **Routing:** React Router DOM v6
- **UI/UX:** AOS (Animate On Scroll), react-animated-cursor
- **Linting/Formatting:** ESLint, Prettier, Prettier-plugin-tailwindcss
- **Build Tools:** Vite, TypeScript, PostCSS, Autoprefixer

---

## Design System

- **Primary Blue:** `#3B82F6`
- **Accent Green:** `#10B981`
- **Dark Text:** `#1F2937`
- **Neutral Text:** `#6B7280`
- **Typography:** Uses [Inter](https://fonts.google.com/specimen/Inter) globally for a premium, modern look.
- **Consistent Spacing:** Uses Tailwind’s spacing and responsive utilities.
- **Branding:** Easily adjustable color constants in each page/component.

---

## Routing & Navigation

- **Main Pages:** `/`, `/about`, `/services`, `/portfolio`, `/blog`, `/contact`, `/faq`, `/legal`, `/privacy`, `/partners`, `/testimonials`, `/signin`, `/signup`, `/teams`, `/impact`, `/technologies`
- **Blog Details:** `/blog/[slug]` (e.g., `/blog/visual-storytelling`)
- **Portfolio Details:** `/portfolio/[slug]` (e.g., `/portfolio/harmony-health`)
- **Case Studies:** `/case-study/[slug]`
- **404 Handling:** Unmatched routes render the NotFound page.

Navigation is handled globally via the `Header` and `Footer` components. All internal navigation uses `<Link>` for SPA transitions. The `ScrollToTop` component ensures each page starts at the top.

---

## Customization

- **Add Blog Posts:** Create new files in `src/pages/blog/` and add routes in `App.tsx`.
- **Add Portfolio Projects:** Create new files in `src/pages/portfolio/` and add routes in `App.tsx`.
- **Edit Navigation:** Update `src/components/Header.tsx` and `Footer.tsx`.
- **Branding:** Adjust color constants in each page/component as needed.
- **Typography:** To change the global font, update the `font-family` in `src/global.css` and the font link in `index.html`.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

**Open Visual – Your Vision, Our Visual Mastery.**

---