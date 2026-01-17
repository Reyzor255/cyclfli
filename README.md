# Netflix N1 - Luxury Bicycle Landing Page

A modern, high-performance landing page for the Netflix N1 luxury bicycle, built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- 🎨 Modern UI with shadcn/ui components
- ⚡ Next.js 16 with App Router
- 🎭 Framer Motion animations
- 🎬 Netflix-inspired "Tudum" splash screen
- 📱 Fully responsive design
- 🌙 Dark theme optimized
- 🚀 Optimized performance

## Tech Stack

- **Framework:** Next.js 16.0.10
- **React:** 19.2.0
- **Styling:** Tailwind CSS v4.1.9
- **UI Components:** shadcn/ui with Radix UI
- **Animations:** Framer Motion 12.26.2
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ or npm/pnpm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd luxury-bicycle-landing-page
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── bike-showcase.tsx
│   ├── cta-section.tsx
│   ├── features-section.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── home-content.tsx
│   ├── stats-section.tsx
│   ├── still-riding-section.tsx
│   ├── tech-grid.tsx
│   └── tudum-splash.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## License

Private project - All rights reserved
