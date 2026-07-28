# SOUQ — Product Specification Document
**Temporary Teaser & Waitlist Landing Page**  
**Version:** 2.0.0  
**Domain:** [https://souqonline.in](https://souqonline.in)  
**Status:** Approved for Next.js 15 + Neon + Drizzle Execution  
**Document Type:** Single Source of Truth (SSOT) Product & UX Architecture Specification  

---

## 1. Executive Summary & Strategic Intent

### 1.1 Brand Identity Overview
* **Brand Name:** SOUQ
* **Domain:** `https://souqonline.in`
* **Product Vision:** SOUQ is an upcoming premium marketplace designed to connect discerning consumers with verified, highly trusted local businesses and artisanal merchants.
* **Current State:** The core marketplace architecture is under active development.
* **Temporary Page Purpose:** Serve as an uncompromised, hyper-curated teaser page. It must cultivate mystery, project undeniable prestige, establish immediate credibility, and capture high-intent early adopters and merchant partners prior to official platform launch.

### 1.2 Core Philosophy
> *"If this temporary teaser page looks this intentional, the underlying platform must be extraordinary."*

The landing page must never feel like a "Under Construction" placeholder, a generic coming-soon template, or a draft. It must present itself as a completed, quiet statement of luxury and technical excellence.

### 1.3 Core Objectives
Every design decision, micro-interaction, element, and syllable on this page must serve exactly four core objectives:

1. **Communicate Premium Quality:** Command authority through restraint, precision, typography, whitespace, and subtle tactile motion.
2. **Cultivate Curiosity:** Reveal enough to evoke desire and fascination without exposing operational mechanisms or prematurely exhausting novelty.
3. **Establish Deep Trust:** Provide subtle, unshakeable signals of authenticity, enterprise security, curated excellence, and verified partnership.
4. **Convert High-Intent Visitors:** Seamlessly capture email waitlist signups for consumers and prospective business partners with zero friction.

---

## 2. Brand Identity, Aesthetic Philosophy & Design System Rules

### 2.1 Aesthetic Archetype & Influences
The visual language of SOUQ merges quiet luxury with high-end technology interfaces. It draws direct inspiration from six benchmark digital experiences:
* **Apple:** Spatial harmony, tactile physical feedback, restrained color hierarchy, hardware-grade finish.
* **Nothing OS:** Raw, confident typographic rhythm, high-contrast monochrome, intentional dot-matrix subtle accents.
* **Arc Browser:** Dynamic micro-surfaces, contextual elegance, fluid layout transitions.
* **Linear:** Razor-sharp dark mode aesthetics, precise border geometry, subtle backdrop blurs, keyboard-first feel.
* **Stripe:** Ultra-refined typography, pixel-perfect contrast ratios, authoritative structural alignment.
* **Vercel:** Monospaced accent accents, high-contrast dark palette, zero-fluff engineering aesthetics.

---

## 3. Information Architecture & Section Breakdown

```
┌─────────────────────────────────────────────────────────┐
│                      NAVIGATION BAR                     │
│  [SOUQ Mark]                     [ Request Access CTA ] │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      SECTION 1: HERO                    │
│  • Status Pill: "COMMISSIONING AUTUMN 2026"             │
│  • Primary Statement: "The Commerce Standard."          │
│  • Teaser Subtext                                       │
│  • Primary CTA: [ Request Early Access ]                │
│  • Secondary CTA: [ Partner With SOUQ ]                 │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                SECTION 2: TRUST & VISION                │
│  • 3-Column Pillar Matrix:                              │
│    1. Vetted Merchants  2. Direct Access  3. Zero Noise │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                SECTION 3: MERCHANT PREVIEW              │
│  • Business Inquiry Callout                             │
│  • "Elevate Your Business Footprint"                    │
│  • Merchant Access Form Trigger                         │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    SECTION 4: FOOTER                    │
│  • Brand Mark & Copyright                               │
│  • Legal / Privacy Policy Trigger                       │
│  • Social Presence (Instagram Link)                     │
│  • System Status Indicator ("All Systems Nominal")       │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Call To Action (CTA) Architecture

### 4.1 Primary CTA: "Request Early Access"
Triggers the modal dialog containing the 2-step consumer waitlist experience.

### 4.2 Secondary CTA: "Partner With SOUQ"
Opens the Waitlist Modal pre-set to the "Merchant / Business" track segment.

---

## 5. Exhaustive Microcopy Catalog (Verbatim Engine)

### 5.1 Navigation Bar
* **Brand Monogram:** `SOUQ`
* **Status Pill Text:** `STATUS: PRE-LAUNCH`
* **Nav Action Button:** `Request Access`

### 5.2 Hero Section
* **Badge Text:** `AUTUMN 2026 // LIMITED INVITATIONAL COHORTS`
* **Main Headline:** `Curated Commerce. Uncompromising Quality.`
* **Body Paragraph:** `SOUQ connects discerning patrons with India’s most exceptional verified businesses and independent merchants. Experience a marketplace built on trust, elegance, and zero noise.`
* **Primary Button Text:** `Request Early Access`
* **Secondary Button Text:** `Partner With SOUQ`
* **Micro Security Callout:** `🔒 By invitation only. No spam. Unsubscribe anytime.`

### 5.3 Pillar Section (Trust & Vision)
* **Section Tag:** `THE SOUQ STANDARD`
* **Section Title:** `Engineered for trust.`
* **Card 1 Tagline:** `01 / CURATION`
* **Card 1 Title:** `Strictly Vetted Merchants`
* **Card 1 Body:** `Every seller on SOUQ passes a multi-point verification process. We eliminate low-quality noise so only authentic craft, products, and services remain.`
* **Card 2 Tagline:** `02 / TRANSPARENCY`
* **Card 2 Title:** `Direct Business Connections`
* **Card 2 Body:** `Interact with verified local enterprises with total clarity. SOUQ bridges patrons and creators through seamless digital storefronts.`
* **Card 3 Tagline:** `03 / EXCLUSIVITY`
* **Card 3 Title:** `Cohort-Based Access`
* **Card 3 Body:** `Platform access is released in controlled phases to guarantee optimal service, merchant integrity, and concierge-level experience.`

### 5.4 Merchant Partner Section
* **Badge Text:** `MERCHANT INVITATIONS OPEN`
* **Headline:** `Elevate your business footprint.`
* **Body Text:** `Are you a verified brand, manufacturer, or local business owner? Join our founding merchant cohort before public rollout.`
* **Button Text:** `Apply for Merchant Access →`
* **Supporting Note:** `Priority onboarding granted to verified local businesses.`

### 5.5 Footer Section
* **Copyright Notice:** `© 2026 SOUQ ONLINE. ALL RIGHTS RESERVED.`
* **Domain Tag:** `SOUQONLINE.IN`
* **Status Monitor:** `● SYSTEM STATUS: ALL INFRASTRUCTURE NOMINAL`
* **Social Link Text:** `INSTAGRAM ↗`
* **Legal Links:** `PRIVACY POLICY` | `TERMS OF ACCESS`

### 5.6 Waitlist Modal Interface
* **Patron Modal Title:** `Join the SOUQ Waitlist`
* **Patron Description:** `Enter your email to request an inaugural invitation code when Cohort 1 opens.`
* **Merchant Modal Title:** `Apply as a Merchant Partner`
* **Merchant Description:** `Tell us about your enterprise to receive priority merchant onboarding.`
* **Success Title (Patron):** `You are on the list.`
* **Success Subtitle (Patron):** `Your access request has been recorded. We have dispatched a confirmation receipt to your inbox.`
* **Success Title (Merchant):** `Application Received.`
* **Success Subtitle (Merchant):** `Our curation team will review your business credentials. Expect a follow-up email within 48 hours.`

---

## 6. Serverless Waitlist Engine & Database Architecture

### 6.1 Backend Stack (Neon PostgreSQL + Drizzle ORM + Next.js Serverless API)
* **Backend Storage:** Neon PostgreSQL Serverless Instance.
* **ORM:** Drizzle ORM (`drizzle-orm`, `drizzle-kit`).
* **API Handler:** Serverless API Route `/api/waitlist`.
* **Security Model:** Browser never connects directly to database. `DATABASE_URL` is kept strictly server-side.

### 6.2 Table Schema (`waitlist`)
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
email TEXT UNIQUE NOT NULL,
track TEXT NOT NULL DEFAULT 'patron',
business_name TEXT,
category TEXT,
created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
```

---

## 7. Accessibility, SEO & Deployment

* **SEO Package:** Dynamic Next.js metadata API, OpenGraph, Twitter Cards, Schema.org JSON-LD.
* **Accessibility:** WCAG 2.2 AA compliant contrast ratios (18.5:1), ARIA roles, focus rings, reduced-motion overrides.
* **Hosting Platform:** Vercel edge deployment with instant global CDN distribution.

---
**End of Specification Document**  
*Approved for Next.js 15, Neon PostgreSQL, Drizzle ORM, and Vercel.*
