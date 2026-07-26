# SOUQ — Technical Architecture Specification
**Production-Ready Frontend & Infrastructure Engineering Blueprint**  
**Version:** 1.0.0  
**Brand:** SOUQ  
**Domain:** [https://souqonline.in](https://souqonline.in)  
**Document Status:** Approved for Engineering Execution  
**Target Audience:** Staff Engineers, Frontend Architects, DevOps Engineers, Security Leads  

---

## 1. Executive Summary & Tech Stack Blueprint

This specification documents the complete enterprise frontend architecture, file directory layout, component hierarchy, data flow, deployment pipeline, and scalability roadmap for the **SOUQ** digital landing platform (`https://souqonline.in`).

Although initially deployed as an uncompromised pre-launch teaser and waitlist engine, this codebase is engineered as a persistent foundation that will evolve directly into the official SOUQ marketplace web app without requiring refactoring, directory restructuring, or architectural rewrites.

### Approved Core Tech Stack

| Layer | Selected Technology | Version / Specification | Rationale & Trade-offs |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | 15.x (App Router) | React 19 Server Components (RSC), Turbopack support, built-in Server Actions, optimized SEO rendering. |
| **Language** | TypeScript | 5.x (Strict Mode) | End-to-end type safety, strict null checks, self-documenting code standard. |
| **Styling** | Tailwind CSS | 4.x / 3.4.x | Utility-first styling engine, zero runtime CSS footprint, strict token mapping via `@theme`. |
| **Animations** | Framer Motion | 11.x | Declarative physics-based animations, layout projection, hardware-accelerated transforms. |
| **Iconography** | Lucide React | Latest | Tree-shakeable SVG icon set, stroke weight consistency, lightweight bundle size. |
| **Package Manager**| pnpm | 9.x | Fast monorepo-ready dependency resolution, strict symlink node_modules, disk space efficiency. |
| **Hosting (App)** | Hostinger VPS | Node.js PM2 / Docker | Dedicated server instance, high throughput, zero cold starts, custom memory management. |
| **Reverse Proxy** | Nginx | 1.26+ | High-performance SSL termination, gzip/brotli compression, HTTP/2 multiplexing, static asset caching. |
| **Edge DNS & WAF** | Cloudflare | Free / Pro Tier | Global CDN edge caching, DDoS mitigation, DNS resolution, rate limiting rules. |
| **Version Control** | GitHub | Enterprise / Standard | Trunk-based development, GitHub Actions CI/CD workflows, automated quality gates. |

---

## 2. Directory & Directory Architecture

The directory layout adheres to Next.js 15 App Router standards, strictly separating domain entities, UI components, application logic, and configuration.

```
souq-landing/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Automated Lint, Type-Check, Test & Build Gate
│       └── deploy.yml             # Hostinger VPS SSH Auto-Deployment Workflow
├── app/
│   ├── (routes)/
│   │   ├── layout.tsx             # Root App Layout (Fonts, Analytics, Providers)
│   │   ├── page.tsx               # Main Landing Page Composition Entry
│   │   ├── error.tsx              # Global Error Boundary Component
│   │   ├── loading.tsx            # Suspense Fallback Loader
│   │   ├── not-found.tsx          # Custom 404 Experience
│   │   ├── robots.ts              # Dynamic Robots.txt Generator
│   │   ├── sitemap.ts             # Dynamic Sitemap Generator
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts       # Serverless Waitlist Submission API Route
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── header.tsx             # Floating Frosted Header Bar
│   │   ├── footer.tsx             # Minimal Footer Container
│   │   └── mobile-sticky-bar.tsx  # Mobile Responsive Action Bar
│   ├── sections/
│   │   ├── hero-section.tsx       # Hero Section Container
│   │   ├── trust-section.tsx      # 3-Column Trust Pillars
│   │   ├── merchant-section.tsx   # Business Inquiry Teaser
│   │   └── waitlist-modal.tsx     # Dual-Track Waitlist Dialog
│   ├── ui/                        # Reusable Atomic UI Primitives
│   │   ├── button.tsx             # Primary / Secondary / Ghost Buttons
│   │   ├── input.tsx              # Styled Form Field Component
│   │   ├── badge.tsx              # Monospaced Pill Tag Component
│   │   ├── card.tsx               # Glassmorphic Container Card
│   │   ├── dialog.tsx             # Accessible Modal Primitive
│   │   ├── spinner.tsx           # Inline Loading Spinner
│   │   └── select.tsx             # Custom Select Input Dropdown
│   ├── animation/
│   │   ├── fade-in.tsx            # Viewport Scroll Fade Wrapper
│   │   ├── stagger-container.tsx  # Child Element Sequence Wrapper
│   │   └── spotlight-bg.tsx       # Desktop Mouse Tracking Spotlight
│   └── seo/
│       ├── json-ld.tsx            # Schema.org Structured Data Injector
│       └── social-meta.tsx        # OpenGraph / Twitter Fallback Tags
├── hooks/
│   ├── use-waitlist.ts            # Form Logic, State Machine & API Handler Hook
│   ├── use-mouse-position.ts      # Hardware-Accelerated Cursor Tracking
│   ├── use-media-query.ts         # Viewport Breakpoint Detector
│   └── use-keyboard-shortcut.ts   # ESC & Global Key Binding Detector
├── lib/
│   ├── email-validator.ts         # RFC 5322 Email Regex & Domain Verification
│   ├── rate-limiter.ts            # In-Memory / Redis Token Bucket Rate Limiter
│   ├── fetcher.ts                 # Unified Fetch Wrapper with Retries
│   └── utils.ts                   # Classname Merger (clsx + tailwind-merge)
├── constants/
│   ├── site-config.ts             # Domain, Brand Metadata, Social URLs
│   ├── copy-catalog.ts            # Immutable String Table for Microcopy
│   └── tokens.ts                  # Design Tokens Export Object
├── types/
│   ├── waitlist.ts                # DTO Interfaces for Waitlist Submissions
│   ├── components.ts              # Shared Component Prop Types
│   └── api.ts                     # API Response Wrappers (Success / Error)
├── config/
│   ├── site.ts                    # Feature Flags & Platform Release Toggles
│   └── env.mjs                    # Type-Safe Environment Variables Validator
├── public/
│   ├── assets/
│   │   ├── og-preview.png         # 1200x630 Social Sharing Image
│   │   └── twitter-card.png       # Twitter Preview Image
│   ├── fonts/                     # Local Inter & JetBrains Mono Fonts (.woff2)
│   ├── favicon/                   # Multi-resolution PNG & SVG Favicons
│   └── manifest.json              # Web Application Manifest
├── styles/
│   └── globals.css                # Tailwind Directives & Base Theme Variables
├── next.config.mjs                # Next.js Build & Security Headers Config
├── tailwind.config.ts             # Tailwind Token & Variant Configuration
├── tsconfig.json                  # TypeScript Compiler Rules (Strict Mode)
├── pnpm-lock.yaml                 # Lockfile for Deterministic Installs
└── package.json                   # Dependencies and Scripts
```

---

## 3. Component Architecture & Ownership Matrix

Components follow a strict atomic separation to ensure reusability, testability, and zero circular dependencies.

```
               ┌────────────────────────────────────────┐
               │           PAGE / ROUTE LAYER           │
               │             (app/page.tsx)             │
               └────────────────────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌────────────────────────┐                         ┌────────────────────┐
│    SECTION LAYER       │                         │    LAYOUT LAYER    │
│  (sections/hero.tsx)   │                         │(layout/header.tsx) │
└────────────────────────┘                         └────────────────────┘
         │                                                   │
         └─────────────────────────┬─────────────────────────┘
                                   ▼
                       ┌────────────────────────┐
                       │     UI PRIMITIVES      │
                       │   (ui/button.tsx)      │
                       └────────────────────────┘
                                   │
                                   ▼
                       ┌────────────────────────┐
                       │    ANIMATION WRAPPER   │
                       │(animation/fade-in.tsx) │
                       └────────────────────────┘
```

### Component Responsibilities & Ownership Rules

| Component Category | Directory Path | Responsibility | Permitted Imports | Reusability |
| :--- | :--- | :--- | :--- | :--- |
| **Page / Layout** | `app/`, `components/layout/` | Structural page scaffolding, root providers, header/footer layout. | Sections, UI Primitives, Hooks | Unique per route |
| **Sections** | `components/sections/` | Domain-specific content blocks (Hero, Pillars, Merchant, Modal). | UI Primitives, Animations, Hooks, Constants | Page-level composition |
| **UI Primitives** | `components/ui/` | Pure atomic UI components (Button, Input, Card, Dialog). | `lib/utils`, Icons, Type Definitions | **100% Shared across entire app** |
| **Animation Wrappers**| `components/animation/` | Declarative Framer Motion wrappers for scroll/load triggers. | Framer Motion, React Children | **100% Shared** |
| **SEO Components** | `components/seo/` | Injection of Schema.org, OpenGraph, and Twitter tags. | Constants, Metadata Types | Shared across pages |

---

## 4. State Management Rationale

### 4.1 Global State Decision: **NO GLOBAL STATE STORE REQUIRED**
* **Rationale:** A dedicated state management library (such as Redux, Zustand, or MobX) is explicitly rejected for the SOUQ landing page. The application possesses zero complex multi-screen shared state, user session persistence, or heavy background data synchronization.
* **Overhead Elimination:** Omitting global state libraries reduces bundle size by ~15KB to 45KB and eliminates unnecessary context re-renders.

### 4.2 Local & Contextual State Strategy
1. **Modal Visibility State:** Managed via lightweight React Local State (`useState`) inside `app/page.tsx` or encapsulated in a thin `WaitlistModalContext` provider.
2. **Form Interaction State:** Encapsulated entirely within the `useWaitlist` custom hook (`types`, validation errors, tab index, loading indicators, success position badge).
3. **URL State Synchronization:** Modal open/close state optionally reflects in URL query parameters (`https://souqonline.in/?modal=waitlist&track=merchant`) using Next.js `useSearchParams` for direct deep-linking from Instagram marketing campaigns.

---

## 5. Data Flow Architecture

Data flows through a unidirectional, type-safe path from static constants and client interactions down to Serverless API routes and external storage.

```
[ Static Copy Catalog ] ───► [ Section Components ] ───► [ UI Rendering ]
                                                                 │
                                                                 ▼
                                                    [ User Interacts / Types ]
                                                                 │
                                                                 ▼
                                                    [ Client Validation (Hook) ]
                                                                 │
                                                                 ▼
[ Database / Supabase ] ◄── [ API Route (/api/waitlist) ] ◄── [ HTTP POST JSON ]
```

### Data Category Specifications
* **Static Copy Data:** Extracted into `constants/copy-catalog.ts`. Components never hardcode text strings. This guarantees zero copy drift and enables future multi-language localization (i18n).
* **Configuration Data:** Managed in `config/site.ts` (Feature flags, launch dates, maintenance mode toggles).
* **Waitlist Submission Data:** Transmitted via JSON payload over TLS 1.3 (`POST /api/waitlist`).

---

## 6. Waitlist Engine & API Architecture

### 6.1 Submission API Flow & Pipeline

```
[ Client Form Submission ]
           │
           ▼
1. CLIENT-SIDE VALIDATION
   ├── Check email against RFC 5322 Regex
   ├── Check rate-limit local storage timestamp
   └── On Failure: Render instant inline error (0ms)
           │
           ▼ (PASS)
2. HTTP POST TRANSMISSION -> /api/waitlist
           │
           ▼
3. SERVER-SIDE VALIDATION & SECURITY
   ├── Extract Client IP from Headers (`x-forwarded-for`)
   ├── Rate Limit Check: Token Bucket (Max 3 attempts per IP / 60 seconds)
   ├── Honeypot Anti-Bot Field Verification (Field `hp_website` must be empty)
   └── Server-Side Email Validation & Domain MX Verification
           │
           ▼ (PASS)
4. PERSISTENCE & DISPATCH
   ├── Write to Database (PostgreSQL / Supabase / Upstash Redis)
   ├── Dispatch Webhook Notification (Discord / Slack Admin Alert)
   └── Send Confirmation Email via Resend API (Async)
           │
           ▼
5. RETURN JSON RESPONSE
   └── { success: true, queuePosition: 1428, track: "patron" }
```

### 6.2 Data Transfer Object (DTO) Definitions

```typescript
// types/waitlist.ts

export type WaitlistTrack = 'patron' | 'merchant';

export interface PatronWaitlistPayload {
  track: 'patron';
  email: string;
  honeypot?: string; // Must be empty
  source?: string;   // Campaign tracker (e.g. "instagram_bio")
}

export interface MerchantWaitlistPayload {
  track: 'merchant';
  email: string;
  businessName: string;
  category: 'retail' | 'luxury' | 'artisanal' | 'services_other';
  honeypot?: string;
}

export type WaitlistSubmissionPayload = PatronWaitlistPayload | MerchantWaitlistPayload;

export interface WaitlistSuccessResponse {
  success: true;
  message: string;
  data: {
    queuePosition: number;
    cohort: string;
    timestamp: string;
  };
}

export interface WaitlistErrorResponse {
  success: false;
  error: {
    code: 'INVALID_EMAIL' | 'RATE_LIMITED' | 'BOT_DETECTED' | 'SERVER_ERROR';
    message: string;
  };
}
```

### 6.3 Rate Limiting & Bot Protection Mechanics
* **Honeypot Trap:** Forms contain an invisible input field (`name="hp_website"` hidden via absolute off-screen CSS positioning). If filled, the request is silently dropped with a mock `200 OK` response to trick automated spam scripts.
* **IP Token Bucket Rate Limiting:** Enforced at the Next.js API Middleware / Cloudflare WAF layer (Maximum 3 requests per IP per minute).
* **Future Database Migration Path:** The API endpoint uses an abstract repository interface (`WaitlistRepository`). Initially writing to Upstash Redis or Supabase, it can seamlessly switch to an enterprise PostgreSQL database (`Prisma`/`Drizzle`) without modifying API route logic.

---

## 7. Configuration Files Specification

### 7.1 `next.config.mjs`
* Enables React Strict Mode (`reactStrictMode: true`).
* Enforces `output: 'standalone'` for optimized Docker / Node containerization on Hostinger VPS.
* Configures static asset brotli compression and custom HTTP Security Headers.

### 7.2 Environment Variable Schema & Type-Safety (`config/env.mjs`)
Environment variables are validated at build time using `zod` to prevent runtime configuration failures.

```typescript
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    WAITLIST_DATABASE_URL: z.string().url(),
    RESEND_API_KEY: z.string().min(1),
    ADMIN_NOTIFICATION_WEBHOOK: z.string().url().optional(),
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
  },
  runtimeEnv: {
    WAITLIST_DATABASE_URL: process.env.WAITLIST_DATABASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    ADMIN_NOTIFICATION_WEBHOOK: process.env.ADMIN_NOTIFICATION_WEBHOOK,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  },
});
```

---

## 8. SEO & Social Graph Architecture

### 8.1 Next.js Metadata API Setup (`app/layout.tsx`)
* **Title Template:** `%s | SOUQ — Curated Commerce`
* **Default Title:** `SOUQ — Curated Commerce & Premium Marketplace`
* **Canonical URL Policy:** Enforced as `https://souqonline.in/` across all metadata tags.

### 8.2 Dynamic Metadata Outputs
* `robots.txt`: Generated dynamically via `app/robots.ts` allowing root indexing while blocking `/api/` endpoints.
* `sitemap.xml`: Generated dynamically via `app/sitemap.ts`.
* `manifest.json`: Web app manifest specifying theme color `#050505`, background color `#050505`, display `standalone`.

---

## 9. Performance Optimization Blueprint (Targeting 100 Lighthouse)

```
┌────────────────────────────────────────────────────────┐
│             LIGHTHOUSE PERFORMANCE STRATEGY            │
├────────────────────────────────────────────────────────┤
│ 1. Zero External Runtime Scripts (Self-Hosted Fonts)   │
│ 2. Sub-50KB First Load JavaScript Footprint            │
│ 3. 100% Static HTML Generation (SSG / RSC)             │
│ 4. Hardware-Accelerated CSS-Only Background Spotlight  │
│ 5. Brotli Compression via Nginx Reverse Proxy          │
└────────────────────────────────────────────────────────┘
```

### 9.1 Asset Loading & Font Optimization
* **Local Font Subsetting:** Font files (`Inter.woff2`, `JetBrainsMono.woff2`) are self-hosted in `public/fonts/` and preloaded using Next.js `next/font/local` with `display: 'swap'`. This eliminates render-blocking external Google Font network calls.
* **Preconnect Directives:** DNS preconnect tags for Cloudflare CDN assets.

### 9.2 Code & Bundle Splitting
* **Heavy Modal Lazy Loading:** The `WaitlistModal` component is dynamically imported using `next/dynamic` with `ssr: false`. The modal bundle (`framer-motion` dialog logic) is loaded **only when the user clicks a CTA button**, keeping the initial landing payload extremely lightweight (~35KB gzipped JS).

---

## 10. Accessibility (a11y) Architecture

1. **Semantic DOM Tree Structure:**
   * Single `<h1>` tag inside Hero Section (`Curated Commerce. Uncompromising Quality.`).
   * Main container wrapped in `<main id="main-content">`.
   * Navigation bar rendered inside `<header>`, footer inside `<footer>`.
2. **Keyboard Focus Management:**
   * Active focus ring indicator: `2px solid #FFFFFF` with `3px` outline offset.
   * Skip-to-content link provided at the top of DOM for keyboard users.
3. **Screen Reader Text Transcripts:**
   * Dialog contains `aria-describedby` pointing to waitlist explanation text.
   * Form status updates (validation errors, submission progress) are announced via `aria-live="polite"` region.

---

## 11. Responsive Architecture

### Breakpoint Tokens
```
sm: '320px',    // Small Mobile
md: '480px',    // Mobile Standard
lg: '768px',    // Tablet
xl: '1024px',   // Laptop
'2xl': '1440px' // Desktop Container Max Width
```

* **Fluid Typography:** Utilizes CSS `clamp()` functions (e.g., `font-size: clamp(3.25rem, 8vw, 5.25rem)`) to smoothly scale hero headings without jagged breakpoint jumps.

---

## 12. Security Architecture

### 12.1 Custom HTTP Security Headers (`next.config.mjs`)

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self';
```

### 12.2 Cloudflare & Server Hardening
* **Cloudflare WAF Rules:** Bot Fight Mode enabled, Rate Limiting active on `/api/*`.
* **Hostinger VPS Hardening:** UFW firewall denying all ports except `80`, `443`, and SSH (port `22` key-based auth only).

---

## 13. Infrastructure & Deployment Architecture

```
[ GitHub Main Branch Commit ]
              │
              ▼
┌────────────────────────────────────────────────────────┐
│           GITHUB ACTIONS CI/CD PIPELINE                │
│  1. Run `pnpm lint`                                    │
│  2. Run `pnpm type-check`                              │
│  3. Run `pnpm test`                                    │
│  4. Execute `pnpm build` (Verify Standalone Build)     │
└────────────────────────────────────────────────────────┘
              │
              ▼ (PASS)
┌────────────────────────────────────────────────────────┐
│             HOSTINGER VPS DEPLOYMENT ENGINE            │
│  1. SSH Transport to VPS                               │
│  2. Pull standalone Next.js server bundle              │
│  3. Restart PM2 Process (`pm2 reload souq-landing`)    │
│  4. Nginx Reverse Proxy proxies port 3000 -> HTTPS     │
└────────────────────────────────────────────────────────┘
              │
              ▼
[ Live Production: https://souqonline.in ]
```

### 13.1 Nginx Reverse Proxy Configuration Blueprint (`/etc/nginx/sites-available/souqonline.in`)

```nginx
server {
    listen 80;
    server_name souqonline.in www.souqonline.in;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name souqonline.in www.souqonline.in;

    ssl_certificate /etc/letsencrypt/live/souqonline.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/souqonline.in/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Gzip & Brotli Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;

    # Static Asset Caching (Next.js Static Files)
    location /_next/static/ {
        alias /var/www/souq-landing/.next/static/;
        expires 365d;
        access_log off;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Proxy Requests to Next.js PM2 Instance
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 14. Code Standards & Development Conventions

1. **File Naming Conventions:** Kebab-case for all files (`hero-section.tsx`, `use-waitlist.ts`).
2. **Component Exports:** Named exports only (`export function Button()`), strictly no `export default` for UI primitives (App Router pages excluded).
3. **Type Strictness:** No explicit or implicit `any`. Unknown types must be handled via `unknown` with runtime type narrowing.

---

## 15. Testing & Quality Assurance Strategy

* **Static Analysis:** `eslint` with `@next/eslint-plugin-next` + `prettier` for code formatting.
* **Type Verification:** `tsc --noEmit` enforced during pre-commit hooks (`husky` + `lint-staged`).
* **End-to-End Test (Playwright):** Automated test script verifying waitlist form modal launch, input entry, RFC 5322 validation failure triggers, and success state render.

---

## 16. Future Platform Scalability & Evolution Roadmap

This project is built to scale directly into the full SOUQ marketplace ecosystem:

```
souq-landing/  ───► EVOLVES INTO ───►  souq-platform/
 ├── app/(routes)/                       ├── app/(marketing)/      --> (Existing Teaser/Landing)
 │    └── page.tsx                       ├── app/(auth)/           --> (Login/Register)
 │                                       ├── app/(marketplace)/    --> (Consumer Storefront)
 │                                       ├── app/(merchant)/       --> (Supplier Portal)
 │                                       └── app/(admin)/          --> (Control Dashboard)
 ├── components/ui/                      └── components/ui/        --> (Shared Design System Primitives)
```

By decoupling UI primitives, section containers, and API handlers today, the team can scale into a multi-route marketplace application without altering a single atomic component or design token.

---

## 17. Exhaustive Dependency Architecture

```json
{
  "dependencies": {
    "next": "15.0.0",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "zod": "^3.23.0",
    "@t3-oss/env-nextjs": "^0.10.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.11.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "15.0.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    "pnpm": "^9.0.0"
  }
}
```

*Total Runtime Dependencies:* **9 Packages** (Unnecessary utilities strictly rejected).

---
**End of Technical Architecture Specification**  
*This document serves as the official engineering blueprint for SOUQ digital infrastructure.*
