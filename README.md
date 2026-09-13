<div align="center">

# ✦ CREATIVE IDEA STUDIO

**A high-performance, design-engineered digital experience studio & agency platform.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v13-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![Resend](https://img.shields.io/badge/Resend-Email_API-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)

[Explore Architecture](#-architecture--stack) • [Live Features](#-core-features) • [Getting Started](#-getting-started) • [Environment Setup](#-environment-variables) • [Project Structure](#-project-structure)

</div>

---

## ✦ Overview

**Creative Idea** is a state-of-the-art web platform engineered for a modern creative experience studio. It combines brutalist minimalism, fluid micro-interactions, hardware-accelerated animations, and serverless email automation into a cohesive, high-converting digital storefront.

Designed to turn attention into meaningful growth, the platform showcases bespoke branding, social advertising campaigns, spatial web experiences, and architectural digital identities with award-winning visual fidelity.

---

## ✦ Core Features

### 1. Motion & Micro-Interactions
- **Lenis Smooth Scroll:** Momentum-based, buttery smooth scrolling across all devices.
- **Custom Magnetic Cursor:** Dynamic trailing cursor with blend-mode exclusion, magnetic snapping on buttons, and context-aware tooltips (`VIEW`, `EXPLORE`, `CLIENT`, `ALL WORKS`).
- **Scroll-Driven Parallax:** Multi-speed column offsets on featured project showcases (`SelectedWork`).
- **SVG Path Progress Drawing:** Real-time animated vector timeline synced to viewport scroll (`Process`).
- **Floating Hover Stage:** Cursor-tracking image projection on service capability hover (`Services`).

### 2. Client & Brand Ecosystem
- **Dual-Direction Infinite Marquee:** Continuous, hardware-accelerated dual-track brand ticker featuring 12 bespoke vector client logos with pause-on-hover inspection and industry tags.
- **Curated Archive (`/works`):** Comprehensive project archive with category filtering (`BRANDING`, `DIGITAL`, `CAMPAIGN`, `3D & HARDWARE`) and motion gallery cards.

### 3. Lead Generation & Contact Workflow
- **Interactive Project Inquiry Modal:** Full-screen modal supporting multi-select service tags, budget scope, and client details.
- **Resend Email Engine:** Serverless Next.js API Route (`/api/contact`) dispatching branded HTML emails directly to studio inboxes.

### 4. Design System & Typography
- **Tailored Color Palette:** Monolithic charcoal (`#0F0F0F`), warm paper (`#F9F8F6`), crimson accent (`#AC002D`), and vibrant amber (`#FFE739`).
- **Editorial Typography:** Harmonious pairing of *Plus Jakarta Sans* (headings), *Space Grotesk* (labels & technical telemetry), *Playfair Display* (editorial italics), and *Inter* (body).
- **Architectural Grid:** Subtle ambient grid background providing structured geometry across viewport breakpoints.

---

## ✦ Architecture & Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16.3 (App Router with Turbopack)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` |
| **Motion & Physics** | [Motion (Framer Motion v13)](https://motion.dev/) + [GSAP 3](https://greensock.com/gsap/) + [Lenis](https://lenis.darkroom.engineering/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [@base-ui/react](https://base-ui.com/) + [Lucide Icons](https://lucide.dev/) |
| **Email Infrastructure** | [Resend SDK](https://resend.com/) |
| **Fonts** | `next/font/google` (*Plus Jakarta Sans*, *Space Grotesk*, *Playfair Display*, *Inter*, *Geist Mono*) |

---

## ✦ Project Structure

```text
creativeidea/
├── app/
│   ├── (root)/
│   │   ├── layout.tsx             # Root layout with SmoothScroll, Cursor, Navbar, Footer
│   │   ├── page.tsx               # Studio Landing Page (Hero, Marquee, Work, Services, Process, Founders)
│   │   └── works/
│   │       └── page.tsx           # Full Project Archive & Motion Gallery
│   ├── api/
│   │   └── contact/
│   │       └── route.ts           # Resend API email handler
│   ├── globals.css                # Tailwind v4 theme tokens, keyframes, scrollbar & marquee styles
│   ├── layout.tsx                 # Base HTML wrapper & font loader
│   └── not-found.tsx              # Interactive 404 client screen
├── components/
│   ├── common/                    # Navbar, Footer, PageLoader, ContactModal, AnimatedBackground
│   ├── founders/                  # Founder cards & modal dialogs
│   ├── process/                   # Interactive timeline steps & progress badges
│   ├── sections/                  # Hero, BrandMarquee, SelectedWork, Services, Process, Founders
│   ├── ui/                        # Magnetic cursor, buttons, form inputs
│   └── work/                      # ProjectCard, WorksMotionGallery, project filters
├── constants/
│   └── index.ts                   # Studio navigation, project datasets, services, brands & founder bios
├── context/
│   └── ContactContext.tsx         # Global contact modal state management
├── lib/
│   ├── email-template.ts          # Branded HTML email template generator
│   ├── resend.ts                  # Resend client singleton
│   └── utils.ts                   # Tailwind merge & clsx utility functions
├── public/
│   ├── brands/                    # 12 bespoke vector SVG client logos
│   └── mockups/                   # High-res SVG artwork, mockups & founder portraits
└── scripts/
    └── generate-brands.js         # Generator script for brand vector assets
```

---

## ✦ Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HaqueJunaid/creative-idea-.git
   cd creative-idea-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` or `.env` file in the root directory:
   ```env
   RESEND_API_KEY="re_your_api_key_here"
   CONTACT_SENDER_EMAIL="onboarding@resend.dev"
   CONTACT_RECEIVER_EMAIL="your-studio-email@gmail.com"
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the studio site:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Scripts Reference

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server with Turbopack |
| `npm run build` | Compiles and builds the production-ready application |
| `npm run start` | Runs the built production server locally |
| `npm run lint` | Runs ESLint to check for code quality and type conventions |
| `node scripts/generate-brands.js` | Generates / updates the 12 brand vector SVGs in `public/brands/` |

---

## ✦ Environment Variables

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | API Key from Resend dashboard for sending form emails | `re_123456789...` |
| `CONTACT_SENDER_EMAIL` | Verified sender email address in Resend | `onboarding@resend.dev` |
| `CONTACT_RECEIVER_EMAIL`| Destination inbox for project inquiries | `idealdesign.studio12@gmail.com` |

---

## ✦ Deployment

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add your `RESEND_API_KEY`, `CONTACT_SENDER_EMAIL`, and `CONTACT_RECEIVER_EMAIL` under **Environment Variables**.
4. Click **Deploy**.

---

## ✦ License & Credits

Built with precision for **Creative Idea Studio**.  
Designed & Developed by [Adarsh Sharma](https://github.com/HaqueJunaid).

