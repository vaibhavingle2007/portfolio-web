# Vaibhav Ingle Portfolio - Next.js Version

## Overview
A modern, responsive portfolio website showcasing Vaibhav Ingle's projects, skills, and contact information. Originally a static HTML/CSS/JavaScript website, now converted to Next.js for better performance, SEO, and modern React architecture.

## Project Type
Next.js 15 web application with TypeScript

## Current Setup
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Port**: 5000 (frontend)
- **Host**: 0.0.0.0
- **Technology**: React 19, Next.js 15, TypeScript, CSS Modules
- **Contact Form**: Formspree integration
- **Deployment**: Autoscale deployment with build step

## Features
- Minimal, Azuki-inspired UI/UX
- Responsive design for all devices
- Animated hero section with rotating words (React hooks)
- Project showcase with modal popups (React state management)
- Downloadable resume
- Contact form integration
- Custom animations and effects
- Social media links (GitHub, Instagram)
- Server-side rendering for better SEO
- Image optimization with Next.js Image component
- Loading screen with smooth animations

## Project Structure
```
portfolio-nextjs/
├── app/                # Next.js App Router
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── LoadingScreen.tsx # Loading animation
├── public/            # Static assets
│   ├── assets/        # Images & media files
│   ├── favicon_io/    # Favicons
│   ├── vaibhav.png    # Profile image
│   └── resume.pdf     # Downloadable resume
├── styles/            # Global styles
│   ├── globals.css    # Main styles
│   ├── theme-azuki.css # Theme styles
│   ├── hero-styles.css # Hero section styles
│   └── mobile.css     # Mobile responsive styles
├── next.config.ts     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies
```

## Running the Project
Development: `npm run dev` (runs on 0.0.0.0:5000)
Build: `npm run build`
Production: `npm start`

## Recent Changes
- **2024-11-24**: Converted from HTML to Next.js
  - Set up Next.js 15 project structure with App Router
  - Converted all HTML sections to React components (Navigation, Hero, About, Projects, Contact, Footer, LoadingScreen)
  - Implemented React hooks for interactive features (rotating words, navigation scroll effects, project modals)
  - Migrated all CSS files and assets to Next.js structure
  - Fixed font paths to use Next.js public directory (absolute paths)
  - Configured autoscale deployment with build step
  - Changed GSAP loading strategy to afterInteractive for better SSR compatibility
  - Fixed crossOrigin attribute for Google Fonts preconnect
  - Added CSS class-based animations for Hero component word rotation
  
## Status
- App successfully converted from HTML to Next.js
- All components working correctly with React hooks
- Hydration errors resolved through proper SSR/client rendering patterns
- Production build successful with optimized static pages

## Developer Info
- **Developer**: Vaibhav Ingle
- **Email**: vaibhavingleg@gmail.com
- **GitHub**: https://github.com/vaibhavingle2007
- **Instagram**: @ninjavex_
