# SOUQ — Product Specification Document
**Temporary Teaser & Waitlist Landing Page**  
**Version:** 1.0.0  
**Domain:** [https://souqonline.in](https://souqonline.in)  
**Status:** Approved for Development Execution  
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
Every design decision, micro-interaction, element, and syllable on this page must serve exactly four core objectives. Anything that fails to support at least one of these goals is strictly prohibited:

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

### 2.2 Brand Personality Matrix

| Adhere To (Must Feel) | Avoid (Must Never Feel) |
| :--- | :--- |
| **Premium & Luxury** — High value, elevated visual weight | **Cheap & Generic** — Standard bootstrap templates, stock vectors |
| **Minimal & Restrained** — Generous layout breathing room | **Crowded & Loud** — Wall-to-wall banners, aggressive popups |
| **Quiet Confidence** — Bold statements without exclamation | **Salesy & Desperate** — Countdowns, "Hurry up", flashing badges |
| **Intentional & Sharp** — Pixel-perfect alignment and rhythm | **Startup Cliché** — Illustration avatars, playful wave dividers |
| **Timeless & Elegant** — Monochromatic depth, dark mode glass | **Colorful & Playful** — Rainbow gradients, playful rounded bubble UI |
| **Trustworthy & Authoritative** — Enterprise-level finish | **Corporate & Stuffy** — Boring stock imagery, bank brochure layout |

### 2.3 Color Token Architecture (Design System)

The color palette is strictly monochromatic with deep cinematic obsidian levels, warm silver accents, and luminous light tokens for dark mode dominance.

```
[ Canvas Black ] #050505  --> Base Background
  └── [ Surface Dark ] #0D0D0E  --> Card & Surface Background
        └── [ Surface Elevated ] #141416  --> Interactive / Modal Layer
              └── [ Border Subtle ] rgba(255, 255, 255, 0.08)  --> Hairline Borders
                    └── [ Border Active ] rgba(255, 255, 255, 0.20)  --> Focus / Hover Borders

[ Primary Text ] #F4F4F6  --> High Contrast Foreground (98% L)
[ Secondary Text ] #8E8E93 --> Muted Subtitles & Descriptions (60% L)
[ Accent Glow ] rgba(255, 255, 255, 0.05) --> Subtle Ambient Lighting
[ Success Emerald ] #10B981 --> Subtle Verification Indicator (Desaturated)
[ Error Crimson ] #EF4444 --> Form Error Validation (Subtle Tint)
```

### 2.4 Typography System

* **Primary Display Font (Headings):** Inter Display or SF Pro Display (Variable Weight: 400 to 600).
* **Primary Body Font (Descriptions/Paragraphs):** Inter Text or SF Pro Text (Weight: 400 Regular, 1.6 Line Height).
* **Technical Accent Font (Badges, Codes, Metrics):** JetBrains Mono or SF Mono (Weight: 400, Tracking: +0.05em, Uppercase).

#### Typographic Scale Hierarchy:
1. **Hero Title (Display XL):** 56px (Mobile) / 84px (Desktop) | Weight: 500 | Letter Spacing: -0.03em | Line Height: 1.05
2. **Section Heading (Display L):** 32px (Mobile) / 48px (Desktop) | Weight: 500 | Letter Spacing: -0.02em | Line Height: 1.15
3. **Sub-heading / Card Title (Display M):** 20px (Mobile) / 24px (Desktop) | Weight: 500 | Letter Spacing: -0.01em | Line Height: 1.3
4. **Body Primary (Text L):** 16px (Mobile) / 18px (Desktop) | Weight: 400 | Line Height: 1.6 | Color: Secondary Text
5. **Body Small (Text S):** 14px | Weight: 400 | Line Height: 1.5 | Color: Secondary Text
6. **Technical Mono / Pill Label:** 12px | Weight: 400 | Monospace | Letter Spacing: +0.08em | Uppercase

---

## 3. Information Architecture & Section Breakdown

The landing page follows a single-page vertical architecture designed to be fully comprehended within **15 seconds** of scanning, while providing depth upon intentional scrolling.

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

### Section 1: Hero Experience (The First 5 Seconds)

* **Why It Exists:** To establish immediate brand prestige, state the primary value proposition, and convert instant interest.
* **What Problem It Solves:** Eliminates visitor confusion about what SOUQ is, replacing ambiguity with high-status anticipation.
* **What Visitor Should Feel:** Awestruck, curious, quiet intrigue, confident assurance that this is a premier destination.
* **What Action It Encourages:** Clicking "Request Early Access" or scrolling to discover the vision.
* **Content Components:**
  1. Top Navigation Bar: Floating frosted glass container containing the minimalism SOUQ emblem (monospaced wordmark) and a quick action access trigger button.
  2. Status Indicator Badge: Monospaced pill badge reading `COMMISSIONING Q3 2026 // LIMITED ACCESS`.
  3. Hero Headline: *"Curated Commerce. Uncompromising Quality."*
  4. Hero Subtitle: *"SOUQ connects discerning patrons with India’s most exceptional verified businesses and independent merchants. Launching soon."*
  5. Dual CTA Action Group: Primary waitlist trigger + Secondary merchant inquiry trigger.

---

### Section 2: Trust & Vision Pillars (The 10-Second Mark)

* **Why It Exists:** To articulate SOUQ's fundamental differentiation without revealing confidential interface designs or proprietary logistics mechanics.
* **What Problem It Solves:** Prevents SOUQ from looking like "just another ecommerce app" by highlighting curation, trust, and exclusivity.
* **What Visitor Should Feel:** Deep alignment, trust, and relief that a quality-first marketplace is arriving.
* **What Action It Encourages:** Validates their decision to join the waitlist.
* **Content Components (3 Glassmorphic Cards):**
  * **Card A (Curation):**
    * *Heading:* "Strictly Vetted"
    * *Body:* "Every merchant on SOUQ undergoes rigorous verification. We eliminate noise so only genuine craftsmanship and service remain."
  * **Card B (Connection):**
    * *Heading:* "Direct & Frictionless"
    * *Body:* "Experience direct commerce engineered for clarity. Seamless discovery paired with transparent business profiles."
  * **Card C (Exclusivity):**
    * *Heading:* "By Invitation"
    * *Body:* "Initial platform access is granted in strictly limited cohorts to ensure an uncompromised experience for early patrons."

---

### Section 3: Business & Supplier Portal Teaser (The Merchant Target)

* **Why It Exists:** To capture secondary target audience (local businesses, suppliers, premium brands discovering SOUQ via social channels).
* **What Problem It Solves:** Solves merchant supply acquisition ahead of launch without diluting the consumer-facing luxury narrative.
* **What Visitor Should Feel:** Respected, eager to gain competitive advantage by securing an early merchant storefront.
* **What Action It Encourages:** Clicking "Apply as Merchant Partner" to submit business credentials.
* **Content Components:**
  * *Micro Label:* `FOR MERCHANTS & BRANDS`
  * *Heading:* "Position your brand among the finest."
  * *Body:* "We are onboarding a select group of exceptional local businesses and creators prior to public launch. Secure your inaugural storefront."
  * *Inline Action:* Dedicated merchant waitlist trigger.

---

### Section 4: Minimal Footer & System Status

* **Why It Exists:** To ground the page, fulfill legal requirements, link to Instagram, and provide a polished technical closing.
* **What Problem It Solves:** Ensures the page feels legally sound, operational, and grounded in real-world infrastructure.
* **What Visitor Should Feel:** Trust, technical competence, sense of completion.
* **What Action It Encourages:** Following SOUQ on Instagram for live visual updates.
* **Content Components:**
  * Left: SOUQ Logotype + Copyright notice (`© 2026 SOUQ TECHNOLOGIES INC. ALL RIGHTS RESERVED.`).
  * Center: System Status Pill (`● PLATFORM INFRASTRUCTURE ONLINE // INVITATIONS QUEUED`).
  * Right: Instagram link (`@souqonline.in`) + Privacy / Terms modal triggers.

---

## 4. Call To Action (CTA) Architecture

### 4.1 Primary CTA: "Request Early Access"
* **Strategic Rationale:** Consumers do not want to "Subscribe to a newsletter" or "Submit email". They want exclusive access to a high-status platform. "Request Early Access" frames signup as an privilege rather than a broadcast subscription.
* **Placement:**
  1. Top Navigation Bar (Right-aligned, persistent pill button).
  2. Hero Section (Primary glowing button).
* **Behavior:** Triggers the modal dialog containing the 2-step consumer waitlist experience.

### 4.2 Secondary CTA: "Partner With SOUQ"
* **Strategic Rationale:** Directly targets local business owners, brand founders, and suppliers without cluttering the main consumer narrative. Gives business visitors a clear path tailored to their needs.
* **Placement:**
  1. Hero Section (Adjacent to Primary CTA, ghost/bordered style).
  2. Section 3 (Merchant Access Section).
* **Behavior:** Opens the Waitlist Modal pre-set to the "Merchant / Business" track segment.

---

## 5. Exhaustive Microcopy Catalog

*Note: Below is the complete string catalog for the entire SOUQ digital landing experience. Every state, error message, button, label, and notification is defined verbatim.*

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

---

### 5.6 Waitlist Modal Interface (Complete Copy Engine)

#### Modal Header & Controls
* **Modal Close Button Aria Label:** `Close dialogue`
* **Segment Tab 1 (Default):** `Patron Access`
* **Segment Tab 2:** `Merchant Application`

#### Patron Waitlist Track (Default)
* **Modal Title:** `Join the SOUQ Waitlist`
* **Modal Description:** `Enter your email to request an inaugural invitation code when Cohort 1 opens.`
* **Input Field Label:** `Email Address`
* **Input Field Placeholder:** `name@domain.com`
* **Submit Button Text (Default):** `Request Access`
* **Submit Button Text (Loading):** `Encrypting & Registering...`

#### Merchant Application Track
* **Modal Title:** `Apply as a Merchant Partner`
* **Modal Description:** `Tell us about your enterprise to receive priority merchant onboarding.`
* **Input 1 Label (Business Name):** `Business / Brand Name`
* **Input 1 Placeholder:** `e.g. Apex Artisanal Leather`
* **Input 2 Label (Work Email):** `Business Email`
* **Input 2 Placeholder:** `founder@brand.com`
* **Input 3 Label (Category Dropdown):** `Business Category`
* **Dropdown Option 1 (Default):** `Select primary category`
* **Dropdown Option 2:** `Retail & Consumer Goods`
* **Dropdown Option 3:** `Apparel & Luxury Goods`
* **Dropdown Option 4:** `Artisanal & Home Goods`
* **Dropdown Option 5:** `Professional Services & Other`
* **Submit Button Text (Default):** `Submit Application`
* **Submit Button Text (Loading):** `Processing Application...`

#### Validation & Error Microcopy
* **Error - Empty Email:** `Please enter your email address.`
* **Error - Invalid Email Format:** `Please enter a valid email address (e.g. name@domain.com).`
* **Error - Empty Business Name:** `Please enter your business or brand name.`
* **Error - Unselected Category:** `Please select a business category.`
* **Error - Rate Limited:** `Too many requests. Please wait 60 seconds before trying again.`
* **Error - Network/Server Down:** `Unable to process request right now. Please try again shortly.`
* **Error - Already Registered:** `This email is already queued in Cohort 1. Check your inbox for updates.`

#### Success State Microcopy
* **Success Icon Alt Text:** `Checkmark emblem`
* **Success Title (Patron):** `You are on the list.`
* **Success Subtitle (Patron):** `Your access request has been recorded. We have dispatched a confirmation receipt to your inbox.`
* **Cohort Queue Badge:** `QUEUE POSITION: VERIFIED // COHORT 1`
* **Success Action (Secondary):** `Share on Instagram`
* **Success Close Button Text:** `Return to Overview`

* **Success Title (Merchant):** `Application Received.`
* **Success Subtitle (Merchant):** `Our curation team will review your business credentials. Expect a follow-up email within 48 hours.`
* **Success Close Button Text:** `Done`

---

## 6. Waitlist Engine & Interaction State Machine

### 6.1 User Flow Blueprint

```
[ Visitor Clicks "Request Early Access" ]
                  │
                  ▼
[ Modal Opens: Backdrop Blur (12px) + Fade/Scale (200ms) ]
                  │
                  ▼
┌────────────────────────────────────────────────────────┐
│               SELECT ACCESS TYPE SEGMENT               │
│      [ Patron Access (Default) ]  [ Merchant ]         │
└────────────────────────────────────────────────────────┘
                  │
                  ├─── Input Focus: Glow Ring (#FFFFFF 15% opacity)
                  │
                  ▼
┌────────────────────────────────────────────────────────┐
│               CLIENT-SIDE VALIDATION                   │
│  • Regex check for RFC 5322 Email Compliance           │
│  • Check non-empty string for Business Name            │
└────────────────────────────────────────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
    (Validation)      (Validation)
       FAIL              PASS
         │                 │
         ▼                 ▼
[ Display Inline ]  [ Disable Button ]
[ Error Message  ]  [ Show Spinner + "Processing..." ]
[ Shake Animation]         │
                           ▼
                    [ API Submission ]
                           │
                  ┌────────┴────────┐
                  │                 │
              (Response)        (Response)
                 FAIL              SUCCESS
                  │                 │
                  ▼                 ▼
            [ Display Server ]  [ Trigger Success State ]
            [ Error Banner   ]  [ Confetti/Particle Glow ]
                                [ Display Position Badge]
```

### 6.2 Modal Keybinding Rules
* **`ESC` Key:** Closes the modal immediately from any state unless an active form submission is mid-flight.
* **`TAB` Key Trapping:** Focus cycles exclusively through modal interactive elements (Tabs -> Inputs -> Submit Button -> Close Button). Does not escape to background page.
* **`ENTER` Key:** Submits the active form tab.

---

## 7. Complete End-to-End User Journey Mapping

```
STAGE 1: DISCOVERY (Instagram / Social Referral)
 ├── Visitor taps link on @souqonline.in Instagram bio or story.
 └── Page initializes instantly in dark mode (Zero white flashes).

STAGE 2: IMPRESSION & INTENT (First 0-5 Seconds)
 ├── Hero title "Curated Commerce. Uncompromising Quality." renders with subtle gradient shine.
 ├── Visitor scans the status pill: "COMMISSIONING AUTUMN 2026".
 └── Impression formed: High status, exclusive, real, high-budget platform.

STAGE 3: ENGAGEMENT & TRUST (5-15 Seconds)
 ├── Visitor scrolls past the dual CTAs into the 3 Trust Pillars.
 ├── Reads "Strictly Vetted Merchants" and "Direct Connections".
 └── Mental friction removed: SOUQ is recognized as a premier curated marketplace.

STAGE 4: DECISION & CONVERSION ACTION (15-30 Seconds)
 ├── Visitor clicks primary CTA "Request Early Access".
 ├── Modal presents refined frosted-glass dialog.
 ├── Visitor types email `alex@domain.com`.
 └── Taps "Request Access".

STAGE 5: CONFIRMATION & DELIGHT (Post-Action)
 ├── Button transforms with smooth progress transition.
 ├── Modal shifts to Success State: "You are on the list."
 ├── Unique Cohort position displayed (`QUEUE POSITION: VERIFIED`).
 └── Visitor closes modal feeling satisfied and invested in the upcoming launch.
```

---

## 8. Mobile-First UX Architecture

### 8.1 Mobile Viewport Strategy
* **Minimum Touch Target:** 48px × 48px for all buttons, tab triggers, and form inputs.
* **Thumb Zone Optimization:** Primary actions placed within natural lower-screen thumb arcs on mobile devices.
* **Sticky Bottom Bar:** On mobile scroll past Hero, a minimal bottom floating bar smoothly slides up containing `SOUQ` logo + `Request Access` button to ensure zero conversion friction.
* **Viewport Height Lock:** Fixed modal calculations using `100dvh` to prevent mobile browser URL bar jumping artifacts.

### 8.2 Mobile Micro-Animations
* **Tap Feedback:** Scale transform down to `0.97` on active button tap with `100ms` ease-out response.
* **Swipe to Dismiss:** Waitlist modal supports pulling down on top handle indicator to dismiss on touch screens.

---

## 9. Desktop UX Architecture & Spatial Dynamics

### 9.1 Hover & Cursor Dynamics
* **Custom Cursor Accent:** Optional subtle low-opacity radial spotlight (`200px` radius spotlight glow tracking cursor at `15%` opacity over obsidian background).
* **Card Border Glow:** Hovering over Trust Pillar cards reveals a hairline gradient border stroke (`rgba(255,255,255,0.25)`).
* **Button Micro-Shine:** Buttons feature a subtle sweeping specular light ray on hover (`300ms` duration).

### 9.2 Spatial Grid System
* **Container Max-Width:** 1200px max container width centered.
* **Grid Margins:** 24px (Mobile), 48px (Tablet), 80px (Desktop).
* **Vertical Rhythm:** 120px padding between sections on desktop to enforce luxury breathing room.

---

## 10. Accessibility (a11y) & Inclusive Design Blueprint

### 10.1 Contrast Ratios (WCAG 2.1 AAA Compliance)
* **Primary Foreground (`#F4F4F6`) on Canvas (`#050505`):** Contrast ratio **18.5:1** (Passes AAA).
* **Secondary Foreground (`#8E8E93`) on Canvas (`#050505`):** Contrast ratio **5.2:1** (Passes AA & AAA for large text).
* **Focus Ring Highlight:** High contrast white outline `2px solid #FFFFFF` with `4px` offset.

### 10.2 Reduced Motion Mode (`prefers-reduced-motion: reduce`)
* All ambient glowing particles, continuous gradient shifts, and parallax scroll effects are disabled.
* Transitions snap instantaneously (`0ms`) or use simple opacity fades without spatial movement.

### 10.3 Screen Reader & ARIA Specs
* **Landmarks:** `<header>`, `<main>`, `<section>`, `<footer>`, `<dialog>`.
* **Modal Dialog:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`.
* **Form Inputs:** Explicit `<label>` elements associated via `for`/`id` matching, plus `aria-describedby` pointing to error message containers when invalid.

---

## 11. Search Engine Optimization (SEO) & Social Graph Specification

### 11.1 Metadata Package
* **Title Tag:** `SOUQ — Curated Commerce & Premium Marketplace | Coming Soon`
* **Meta Description:** `SOUQ is an upcoming premium marketplace connecting discerning patrons with verified local businesses, artisanal brands, and exclusive merchants. Request early access.`
* **Keywords:** `SOUQ, SOUQ online, premium marketplace, curated commerce, verified local business, luxury shopping India, buy direct, exclusive waitlist`
* **Canonical URL:** `https://souqonline.in`
* **Robots Directives:** `index, follow, max-image-preview:large`

### 11.2 OpenGraph (Facebook/LinkedIn/WhatsApp) Specs
* **`og:title`:** `SOUQ — Curated Commerce & Premium Marketplace`
* **`og:description`:** `Connecting discerning patrons with India's finest verified businesses. Request inaugural cohort access.`
* **`og:url`:** `https://souqonline.in`
* **`og:site_name`:** `SOUQ`
* **`og:type`:** `website`
* **`og:image`:** `https://souqonline.in/assets/og-preview.png` (1200×630px high-contrast dark card showing embossed gold/silver SOUQ emblem with text "Inaugural Cohort Opening 2026").
* **`og:image:width`:** `1200`
* **`og:image:height`:** `630`

### 11.3 Twitter Card Specs
* **`twitter:card`:** `summary_large_image`
* **`twitter:site`:** `@souqonline_in`
* **`twitter:title`:** `SOUQ — Curated Commerce. Uncompromising Quality.`
* **`twitter:description`:** `An upcoming marketplace for verified businesses and discerning patrons. Request early access.`
* **`twitter:image`:** `https://souqonline.in/assets/twitter-card.png`

### 11.4 Structured Data (Schema.org JSON-LD Specification)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SOUQ",
  "url": "https://souqonline.in",
  "description": "SOUQ is an upcoming premium marketplace connecting discerning patrons with verified local businesses and luxury merchants.",
  "publisher": {
    "@type": "Organization",
    "name": "SOUQ Technologies",
    "url": "https://souqonline.in",
    "logo": "https://souqonline.in/assets/logo.png",
    "sameAs": [
      "https://www.instagram.com/souqonline.in"
    ]
  }
}
```

---

## 12. Design Acceptance Criteria & Quality Checklist

Before development handoff or deployment signoff, the built interface must satisfy 100% of these criteria:

* [ ] **Zero Implementation Glitches:** No raw scrollbars, zero unstyled font renders (FOUT), no white background flashes during page load.
* [ ] **15-Second Comprehension:** First-time users understand SOUQ is a curated, verified marketplace launch.
* [ ] **100% Copy Accuracy:** Every label, button string, tooltip, modal header, and error message matches the Microcopy Catalog verbatim.
* [ ] **Responsive Integrity:** Pixel-perfect from 320px (iPhone SE) up to 2560px (Ultra-wide desktop display).
* [ ] **Modal Accessibility:** Keyboard tab-trapping works flawlessly and `ESC` closes dialog seamlessly.
* [ ] **Form State Handling:** Both Consumer and Merchant tracks validate input correctly with explicit, elegant error feedback.
* [ ] **Performance SLA:** Page achieves 98+ score on Google Lighthouse (Performance, Accessibility, SEO).

---
**End of Specification Document**  
*This document is ready for design handoff, frontend execution, and stakeholders alignment.*
