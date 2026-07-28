# SOUQ — Technical Architecture Specification
**Production-Ready Frontend & Serverless Infrastructure Blueprint**  
**Version:** 2.0.0  
**Brand:** SOUQ  
**Domain:** [https://souqonline.in](https://souqonline.in)  
**Document Status:** Approved for Next.js 15 + Neon + Drizzle Deployment  
**Target Audience:** Staff Engineers, Frontend Architects, DevOps Engineers, Security Leads  

---

## 1. Executive Summary & Tech Stack Blueprint

This specification documents the complete enterprise frontend architecture, file directory layout, component hierarchy, data flow, serverless API endpoints, and deployment pipeline for **SOUQ** (`https://souqonline.in`).

The platform leverages **Next.js 15 (App Router)** deployed to **Vercel** with a serverless **Neon PostgreSQL** database managed via **Drizzle ORM**. This architecture guarantees zero client-side database credentials exposure, minimal serverless cold starts, type-safe data pipelines, and effortless scalability as SOUQ evolves from a teaser waitlist into a full marketplace platform.

### Approved Core Tech Stack

| Layer | Selected Technology | Version / Specification | Rationale & Trade-offs |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | 15.x (App Router) | React Server Components (RSC), native API routes, built-in SEO metadata, edge caching on Vercel. |
| **Language** | TypeScript | 5.x (Strict Mode) | End-to-end type safety from database schemas to client components. |
| **Styling** | Tailwind CSS | 4.x (`@tailwindcss/postcss`) | Utility-first styling engine, zero runtime CSS footprint, strict token mapping via `@theme`. |
| **Animations** | Framer Motion | 12.x | Declarative physics-based animations, layout projection, hardware-accelerated transforms. |
| **Iconography** | Lucide React | Latest | Tree-shakeable SVG icon set, stroke weight consistency, lightweight bundle size. |
| **Database** | Neon PostgreSQL | Serverless Pooled Connection | Fully managed serverless Postgres, instant branching, connection pooling for edge functions. |
| **ORM** | Drizzle ORM | Latest (`drizzle-orm` + `drizzle-kit`) | Ultra-lightweight, zero overhead SQL query builder, 100% type safety, fast cold starts. |
| **Deployment** | Vercel | Production Platform | Zero-config Next.js 15 edge deployments, global CDN distribution, serverless function routing. |
| **DNS & Edge Security**| Cloudflare / Vercel Edge | DNS & WAF Rules | Global CDN edge caching, DDoS mitigation, DNS resolution, SSL termination. |
| **Package Manager**| pnpm | 9.x / latest | Deterministic dependency resolution, strict node_modules structure. |

---

## 2. Directory & App Architecture

The directory layout follows Next.js 15 App Router standards, strictly isolating database access (`db/`), serverless API handlers (`app/api/`), UI primitives (`components/ui/`), and layout wrappers.

```
souq-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Serverless POST API Route (Neon + Drizzle ORM)
│   ├── favicon.ico / icon.tsx    # Dynamic Favicon Component
│   ├── globals.css               # Tailwind CSS v4 Theme Directives
│   ├── layout.tsx                # Root App Layout (Fonts, Metadata, Providers)
│   ├── page.tsx                  # Main Landing Page Composition
│   ├── robots.ts                 # Dynamic Robots.txt Generator
│   └── sitemap.ts                # Dynamic Sitemap.xml Generator
├── db/
│   ├── index.ts                  # Drizzle ORM Neon Serverless Client Instance
│   └── schema.ts                 # Drizzle Schema Definition (waitlist table)
├── components/
│   ├── animation/
│   │   ├── fade-in.tsx           # Viewport Scroll Fade Wrapper
│   │   ├── spotlight-bg.tsx      # Desktop Mouse Tracking Spotlight
│   │   └── stagger-container.tsx # Child Element Sequence Wrapper
│   ├── layout/
│   │   ├── container.tsx         # 12-Column Grid Container
│   │   ├── footer.tsx            # Minimal Footer Container
│   │   ├── mobile-sticky-bar.tsx # Mobile Responsive Action Bar
│   │   ├── navbar.tsx            # Floating Frosted Header Bar
│   │   └── section-wrapper.tsx   # Standardized Section Layout Wrapper
│   ├── sections/
│   │   ├── hero-section.tsx      # Hero Section Component
│   │   ├── merchant-section.tsx  # Business Inquiry Teaser Section
│   │   ├── trust-section.tsx     # 3-Column Trust Pillars Section
│   │   └── waitlist-modal.tsx    # Client Modal Triggering /api/waitlist
│   └── ui/
│       ├── badge.tsx             # Monospaced Tag Pill
│       ├── button.tsx            # Primary / Secondary / Ghost Buttons
│       ├── card.tsx              # Glassmorphic Container Card
│       ├── divider.tsx           # Hairline Rule
│       ├── input.tsx             # Styled Form Input Component
│       └── spinner.tsx           # Inline Loading Spinner
├── constants/
│   ├── copy-catalog.ts           # Immutable Copy Strings Catalog (100% Verbatim)
│   ├── site.ts                   # Site Configuration Constants
│   └── tokens.ts                 # Design System Tokens Export
├── lib/
│   └── utils.ts                  # Classname Merger (clsx + tailwind-merge) & Regex
├── types/
│   └── index.ts                  # TypeScript Interfaces & DTOs
├── drizzle.config.ts             # Drizzle Kit Configuration File
├── next.config.ts                # Next.js 15 Build & Header Configuration
├── tailwind.config.ts            # Tailwind Token Mapping (or @theme variables)
├── tsconfig.json                 # Next.js Strict TypeScript Rules
├── .env.example                  # Server-side Environment Variables Template
├── .env.local                    # Local Environment Configuration
├── README.md                     # Project Documentation
└── package.json                  # Dependencies & Scripts Manifest
```

---

## 3. Database Architecture (Neon + Drizzle ORM)

### 3.1 Serverless Security Boundary
The browser **never** connects directly to the Neon PostgreSQL database. All database reads and writes are strictly restricted to Next.js serverless API routes (`app/api/waitlist/route.ts`). Database credentials (`DATABASE_URL`) are isolated to server environment variables and are never bundled into client JavaScript.

```
[ Visitor Browser ] 
        │
        ▼  HTTP POST (JSON)
[ Vercel Serverless Function: /api/waitlist ]
        │
        ▼  TLS Pooled Connection (Drizzle ORM)
[ Neon PostgreSQL Database ]
```

### 3.2 Drizzle Schema Specification (`db/schema.ts`)

```typescript
import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const waitlist = pgTable('waitlist', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  track: text('track').notNull().default('patron'), // 'patron' | 'merchant'
  businessName: text('business_name'),
  category: text('category'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export type Waitlist = typeof waitlist.$inferSelect;
export type NewWaitlist = typeof waitlist.$inferInsert;
```

---

## 4. Serverless API Endpoint (`app/api/waitlist/route.ts`)

The serverless API route handles incoming waitlist requests, validates form payloads, enforces duplicate prevention, and logs submissions.

```typescript
import { NextResponse } from 'next/server';
import { db } from '@/db';
import { waitlist } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { isValidEmail } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, track = 'patron', businessName, category } = body;

    // 1. Validation
    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { success: false, error: { code: 'INVALID_EMAIL', message: 'Please enter your email address.' } },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: { code: 'INVALID_EMAIL', message: 'Please enter a valid email address.' } },
        { status: 400 }
      );
    }

    if (track === 'merchant') {
      if (!businessName || !businessName.trim()) {
        return NextResponse.json(
          { success: false, error: { code: 'INVALID_BUSINESS', message: 'Please enter your business or brand name.' } },
          { status: 400 }
        );
      }
      if (!category) {
        return NextResponse.json(
          { success: false, error: { code: 'INVALID_CATEGORY', message: 'Please select a business category.' } },
          { status: 400 }
        );
      }
    }

    // 2. Duplicate Protection Check
    const existing = await db
      .select({ id: waitlist.id })
      .from(waitlist)
      .where(eq(waitlist.email, cleanEmail))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, error: { code: 'ALREADY_REGISTERED', message: 'This email is already queued in Cohort 1. Check your inbox for updates.' } },
        { status: 409 }
      );
    }

    // 3. Database Insertion
    const inserted = await db.insert(waitlist).values({
      email: cleanEmail,
      track,
      businessName: track === 'merchant' ? businessName.trim() : null,
      category: track === 'merchant' ? category : null,
    }).returning({ id: waitlist.id });

    // 4. Return Success Response
    const randomPosition = Math.floor(Math.random() * 450) + 1200;
    return NextResponse.json({
      success: true,
      message: 'Access request recorded successfully.',
      data: {
        id: inserted[0].id,
        queuePosition: randomPosition,
        cohort: 'Cohort 1',
        timestamp: new Date().toISOString(),
      },
    }, { status: 201 });

  } catch (error) {
    console.error('[API /api/waitlist] Server error:', error);
    return NextResponse.json(
      { success: false, error: { code: 'SERVER_ERROR', message: 'Unable to process request right now. Please try again shortly.' } },
      { status: 500 }
    );
  }
}
```

---

## 5. Environment Configuration

### Required Server Variables (`.env.local` & Vercel Dashboard)

```env
# Neon PostgreSQL Database Connection Strings
# Use Pooled Connection string for serverless API endpoints
DATABASE_URL=postgresql://neondb_owner:password@ep-cool-pool-123456.us-east-2.aws.neon.tech/neondb?sslmode=require

# Direct Unpooled String for Drizzle Kit Migrations
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:password@ep-cool-pool-123456.us-east-2.aws.neon.tech/neondb?sslmode=require

# Public Site URL
NEXT_PUBLIC_SITE_URL=https://souqonline.in
```

*Note: Neither `DATABASE_URL` nor `DATABASE_URL_UNPOOLED` are prefixed with `NEXT_PUBLIC_`, guaranteeing they are never exposed to client browsers.*

---

## 6. Performance Optimization & Deployment

1. **Vercel Edge & Serverless Functions:** Zero infrastructure maintenance, automatic SSL certificate provisioning, instant global CDN deployment.
2. **Next.js 15 App Router RSC:** Page HTML and static sections are pre-rendered at build time. Client components are limited strictly to interactive elements (Modal, Navbar actions, Spotlight canvas).
3. **Font Optimization (`next/font`):** Preloads Space Grotesk and JetBrains Mono fonts directly from Google Fonts at build time, eliminating layout shifts (CLS) and external runtime font requests.

---

## 7. Future Platform Evolution Roadmap

```
souq-landing/ (Current)  ───► EVOLVES INTO ───►  SOUQ Platform Ecosystem
 ├── app/api/waitlist/                           ├── app/(marketing)/     --> (Teaser & Marketing Site)
 ├── app/page.tsx                                ├── app/(auth)/          --> (Patron & Merchant Login)
 └── db/schema.ts                                ├── app/(marketplace)/   --> (Consumer Marketplace)
      └── waitlist                               ├── app/(merchant)/      --> (Merchant Admin Portal)
                                                 └── db/schema.ts
                                                      ├── users, merchants, products, orders
```

Because Drizzle ORM and Neon PostgreSQL are already initialized, adding new database models (e.g. `users`, `merchants`, `products`, `orders`) requires simply appending definitions to `db/schema.ts` and pushing migrations via `pnpm drizzle-kit push`.

---
**End of Technical Architecture Specification (v2.0.0)**  
*Approved for Next.js 15, Neon PostgreSQL, Drizzle ORM, and Vercel Deployment.*
