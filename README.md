# SOUQ Landing Page
**Curated Commerce & Premium Marketplace Teaser Page**  
**Domain:** [https://souqonline.in](https://souqonline.in)  

SOUQ is an upcoming premium marketplace designed to connect discerning patrons with verified, highly trusted local businesses and artisanal merchants. 

This repository contains the complete Next.js 15 App Router codebase, Drizzle ORM Neon database integration, design system tokens, and serverless architecture specifications.

---

## 🌟 Tech Stack Architecture
* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript 5.x (Strict Mode)
* **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
* **Animations:** Framer Motion 12
* **Icons:** Lucide React
* **Database:** Neon PostgreSQL (Serverless Pooled Connection)
* **ORM:** Drizzle ORM (`drizzle-orm`, `drizzle-kit`)
* **Deployment:** Vercel Edge Platform
* **Typography:** Space Grotesk & JetBrains Mono

---

## 📁 Repository Structure
* `PRODUCT_SPECIFICATION.md` — Product Specification Document & 100% Verbatim Copy Catalog.
* `DESIGN_SYSTEM.md` — Visual System, Monochrome Palette, 8px Grid, Motion Curves, & Design Tokens.
* `TECHNICAL_ARCHITECTURE.md` — Next.js 15 + Neon + Drizzle + Vercel Architecture Blueprint.
* `PRODUCTION_READINESS_REPORT.md` — Complete Audit Report & Launch Sign-off.
* `app/` — Next.js 15 App Router routes, serverless API routes (`/api/waitlist`), layout, and metadata.
* `db/` — Drizzle ORM database client (`index.ts`) and table schema (`schema.ts`).
* `components/` — Layout containers, section components, UI primitives, and motion modules.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your Neon PostgreSQL connection string:
```env
DATABASE_URL=postgresql://neondb_owner:your_password@ep-pool-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:your_password@ep-pool-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### 3. Push Database Schema to Neon
```bash
pnpm db:push
```

### 4. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production (Vercel)
```bash
pnpm build
```

---

## 🔒 Security & Architecture Standards
* **Serverless Security:** Database connection strings (`DATABASE_URL`) are isolated to server environment variables. Client components never connect directly to the database.
* **Type Safety:** 100% type safety from Drizzle database schemas down to UI components and API handlers.

---

## 📄 License & Copyright
© 2026 SOUQ Online. All Rights Reserved.
