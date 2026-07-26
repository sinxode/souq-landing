# SOUQ — Design System Specification
**Visual Source of Truth & UI Architecture Standards**  
**Version:** 1.0.0  
**Brand:** SOUQ  
**Domain:** [https://souqonline.in](https://souqonline.in)  
**Document Status:** Approved for Design & Engineering Implementation  
**Target Audience:** UI/UX Designers, Design Engineers, Frontend Developers  

---

## 1. Design Principles & Aesthetic Philosophy

The SOUQ Design System is governed by eight unyielding principles. Every component, surface, spatial choice, and motion curve must strictly align with these guidelines.

1. **Less, But Better:** Stripping away excess creates focus. Every pixel must justify its presence. If an element can be removed without compromising clarity or function, it must be deleted.
2. **Whitespace as Luxury:** Generous padding and wide margins convey confidence, authority, and exclusivity. Tight layouts signal noise; spatial room signals calm.
3. **Motion is Tactile Feedback, Never Entertainment:** Animations exist solely to inform state changes and spatial hierarchy. Motion must feel physical, muted, and instant. Flashy or playful animations are strictly forbidden.
4. **Typography as Primary Visual Architecture:** In the absence of complex imagery or colorful illustrations, typography carries the emotional weight of the brand. Hierarchy, letter-spacing, and line-height are the primary UI building blocks.
5. **Intentional Surfaces over Layered Shadows:** Elevation is established through high-contrast borders, subtle background opacity steps, and backdrop blurring—never heavy drop shadows.
6. **Monochrome Mastery:** Depth is expressed through subtle variations in luminance (from 3% to 98% lightness), never through multi-color rainbow gradients.
7. **Premium Over Trendy:** Avoid transient UI trends (such as neo-brutalism, pastel gradients, or cartoonish 3D assets). Adhere to timeless dark-mode minimalism.
8. **Consistency Over Creativity:** Adhere rigorously to predefined tokens. A component built with off-system values compromises the integrity of the entire brand.

---

## 2. Colour System Specification

SOUQ operates on a precision dark-mode monochrome color system. All colors are defined in absolute HEX values and paired with explicit usage criteria.

### 2.1 Base Canvas & Surface Palette

| Token Name | HEX Value | Usage Rationale & Boundary Rules |
| :--- | :--- | :--- |
| `color-bg-primary` | `#050505` | Absolute background canvas. Used behind all sections. Provides deep black depth without pure `#000000` harshness. |
| `color-bg-secondary` | `#0D0D0E` | Secondary section background and subtle contrast breaks. Used for footer base and secondary containers. |
| `color-surface-base` | `#121214` | Primary card background, input fields, and recessed containers. |
| `color-surface-elevated` | `#1A1A1E` | Elevated surfaces: Modal dialogs, dropdown menus, persistent floating bars. |
| `color-surface-hover` | `#222226` | Interactive hover state for cards, dropdown items, and list rows. |
| `color-surface-active` | `#2A2A30` | Active pressed state for clickable surface containers. |

### 2.2 Text & Content Hierarchy

| Token Name | HEX Value | Contrast vs `#050505` | Usage Rationale |
| :--- | :--- | :--- | :--- |
| `color-text-primary` | `#F4F4F6` | **18.5:1 (AAA)** | Primary titles, hero headlines, active tab labels, high-emphasis text. |
| `color-text-secondary` | `#8E8E93` | **5.2:1 (AAA)** | Subtitles, body descriptions, form field labels, secondary actions. |
| `color-text-muted` | `#545458` | **3.1:1 (AA Large)** | Disabled text, micro-captions, subtle metadata, copyright lines. |
| `color-text-inverse` | `#050505` | **18.5:1 (AAA)** | Text rendered inside solid primary white buttons. |

### 2.3 Borders & Dividers

| Token Name | Value (HEX / RGBA) | Usage Rationale |
| :--- | :--- | :--- |
| `color-border-subtle` | `rgba(255, 255, 255, 0.08)` | Default hairline border for cards, inputs, and section dividers. |
| `color-border-medium` | `rgba(255, 255, 255, 0.16)` | Card hover borders, subtle structural emphasis. |
| `color-border-strong` | `rgba(255, 255, 255, 0.32)` | Focused input state, active tab borders, high-contrast framing. |
| `color-divider` | `rgba(255, 255, 255, 0.06)` | Horizontal rules (`<hr>`) separating sub-content blocks. |

### 2.4 Interactive & Status Palette

| Token Name | HEX Value | Usage Rationale |
| :--- | :--- | :--- |
| `color-focus-ring` | `#FFFFFF` | Solid crisp 2px focus ring indicator for full keyboard accessibility compliance. |
| `color-selection-bg` | `rgba(255, 255, 255, 0.20)` | Highlight background when user selects text content on screen. |
| `color-selection-text` | `#FFFFFF` | Text color when text is selected. |
| `color-success-bg` | `rgba(16, 185, 129, 0.10)` | Desaturated emerald tint for success modal badges and queue confirmation tags. |
| `color-success-fg` | `#10B981` | Success checkmarks, positive verification icons, verified status text. |
| `color-warning-bg` | `rgba(245, 158, 11, 0.10)` | Amber tint for non-critical alerts (e.g., "Limited Cohort Remaining"). |
| `color-warning-fg` | `#F59E0B` | Warning icon fill and alert text. |
| `color-error-bg` | `rgba(239, 68, 68, 0.10)` | Crimson tint for form validation banners. |
| `color-error-fg` | `#EF4444` | Invalid field border glow, form error message text. |
| `color-disabled-bg` | `rgba(255, 255, 255, 0.04)` | Disabled button fill, inactive form control backgrounds. |
| `color-disabled-fg` | `#3A3A3C` | Disabled button label text. |
| `color-overlay-bg` | `rgba(5, 5, 5, 0.80)` | Modal backdrop dimming layer (combined with 12px backdrop blur). |

---

## 3. Typography Architecture

### 3.1 Font Family Selection
* **Primary System Typeface:** `Inter Display` (Headings & Display Scale) / `Inter` (Body & Functional Interfaces)
* **Fallback Stack:** `SF Pro Display`, `-apple-system`, `BlinkMacSystemFont`, `Helvetica Neue`, `sans-serif`
* **Technical Monospace Typeface:** `JetBrains Mono` (Badges, Codes, Queue Positions, Technical Timestamps)
* **Fallback Mono Stack:** `SF Mono`, `Menlo`, `Monaco`, `Consolas`, `monospace`

**Rationale:** `Inter` provides supreme legibility at high optical pixel density, neutral letterforms, and extensive variable font weight controls. `JetBrains Mono` brings engineering precision to pre-launch metadata tags.

### 3.2 Typography Scale Matrix

| Scale Level | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing | Max Line Width | Target Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | 84px | 52px | 500 (Medium) | 1.05 | `-0.035em` | 14ch | Hero H1 statement |
| **Section Title** | 48px | 32px | 500 (Medium) | 1.15 | `-0.025em` | 22ch | H2 section headers |
| **Card Title** | 24px | 20px | 500 (Medium) | 1.30 | `-0.015em` | 30ch | Feature card headlines |
| **Body Large** | 18px | 16px | 400 (Regular) | 1.60 | `-0.005em` | 65ch | Hero subtext, lead copy |
| **Body Small** | 15px | 14px | 400 (Regular) | 1.55 | `0.000em` | 60ch | General body text, modal copy |
| **Button Text** | 14px | 14px | 500 (Medium) | 1.00 | `+0.010em` | Single Line | Primary & secondary CTAs |
| **Label / Input** | 13px | 13px | 500 (Medium) | 1.20 | `+0.015em` | Single Line | Form input labels |
| **Mono Badge** | 12px | 11px | 400 (Mono) | 1.00 | `+0.080em` | Single Line | Status pills, upper tags |
| **Footer / Meta** | 13px | 12px | 400 (Regular) | 1.50 | `+0.010em` | 70ch | Copyright, legal copy |

---

## 4. Spacing System (8px Strict Rhythm)

The spatial layout is rooted in a strict 8px grid system (with 4px sub-grid micro-adjustments for badges and icons).

### 4.1 Spacing Scale Tokens

```
space-1   = 4px   (Micro padding, badge vertical offset)
space-2   = 8px   (Icon-to-label gap, tight inline elements)
space-3   = 12px  (Small button vertical padding, input internal gap)
space-4   = 16px  (Standard padding, small container margins)
space-5   = 24px  (Card internal padding mobile, button horizontal padding)
space-6   = 32px  (Card internal padding desktop, grid gutter mobile)
space-8   = 48px  (Medium block spacing, grid gutter desktop)
space-10  = 64px  (Section internal spacing mobile)
space-12  = 96px  (Section internal spacing desktop)
space-16  = 128px (Hero section vertical breathing room)
```

### 4.2 Spatial Rationale & Vertical Rhythm
* **Section Padding:** Sections on desktop must maintain a minimum `128px` top and bottom clearance to create spatial authority.
* **Component Rhythm:** Headings and body text are separated by exactly `16px` (`space-4`).
* **Card Interior:** Cards maintain `32px` (`space-6`) uniform padding on desktop, scaling down to `24px` (`space-5`) on mobile screens.

---

## 5. Grid & Layout Architecture

### 5.1 Responsive Grid Specifications

| Breakpoint Name | Viewport Range | Max Container | Columns | Gutter | Outer Margin |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile Small (`sm`)** | 320px – 479px | 100% | 4 | 16px | 16px |
| **Mobile (`md`)** | 480px – 767px | 100% | 4 | 20px | 20px |
| **Tablet (`lg`)** | 768px – 1023px | 720px | 8 | 24px | 32px |
| **Laptop (`xl`)** | 1024px – 1439px | 960px | 12 | 32px | 48px |
| **Desktop Max (`2xl`)** | 1440px+ | 1200px | 12 | 48px | Auto Centered |

### 5.2 Content & Card Width Boundaries
* **Hero Lead Text Max-Width:** `680px` (Prevents line length exceeding comfortable eye movement range).
* **3-Column Feature Card Width:** `352px` (Desktop grid).
* **Waitlist Modal Dialog Max-Width:** `440px` (Desktop) / `100% - 32px` (Mobile).

---

## 6. Border System

### 6.1 Border Width Tokens
* `border-width-hairline` = `1px` (Used for 95% of UI surfaces, cards, inputs, dividers).
* `border-width-focus` = `2px` (Used exclusively for active focus ring states).

### 6.2 Radius Scale Tokens

```
radius-none   = 0px   (Strict rectangular dividers)
radius-sm     = 6px   (Badges, micro pill tags, tooltip popovers)
radius-md     = 10px  (Standard form inputs, smaller secondary buttons)
radius-lg     = 14px  (Primary buttons, small dropdown containers)
radius-xl     = 20px  (Feature cards, trust pillar containers)
radius-2xl    = 28px  (Waitlist modal dialog container)
radius-full   = 9999px (Fully rounded pill elements, status dots)
```

### 6.3 Border Radius Rules
Nested elements must always observe geometric radius scaling. The inner radius ($R_{inner}$) of a nested component inside a container with padding ($P$) and outer radius ($R_{outer}$) must satisfy:

$$R_{inner} = R_{outer} - P$$

*Example:* A card with `20px` corner radius (`radius-xl`) and `12px` internal padding containing a button must use an `8px` corner radius button to prevent visual corner clipping.

---

## 7. Shadow & Elevation System

Elevation in SOUQ is conveyed through subtle translucent glow borders and background luminance shifts. Heavy black blur drop-shadows are strictly prohibited.

### 7.1 Shadow Tokens

```
shadow-none     = none
shadow-subtle   = 0px 2px 8px rgba(0, 0, 0, 0.40)
shadow-card     = 0px 8px 32px rgba(0, 0, 0, 0.60), 0px 0px 0px 1px rgba(255, 255, 255, 0.08)
shadow-modal    = 0px 24px 64px rgba(0, 0, 0, 0.85), 0px 0px 0px 1px rgba(255, 255, 255, 0.16)
shadow-glow-btn = 0px 0px 20px rgba(255, 255, 255, 0.20)
```

### 7.2 Elevation Philosophy
* **Level 0 (Canvas):** `#050505` — Flat base background.
* **Level 1 (Cards & Inputs):** `#121214` + `1px` subtle border — Rest on Level 0.
* **Level 2 (Modal & Popovers):** `#1A1A1E` + `shadow-modal` + 12px Backdrop Blur — Floats above canvas.

---

## 8. Button System Specification

Buttons are high-emphasis conversion triggers. They must provide clear hover states and tactile press feedback.

```
┌────────────────────────────────────────────────────────┐
│                   PRIMARY BUTTON                       │
│  Fill: #F4F4F6 (Solid White) | Text: #050505 (Dark)    │
│  Radius: 14px | Height: 48px | Font: 14px Medium       │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│                  SECONDARY BUTTON                      │
│  Fill: rgba(255,255,255,0.06) | Text: #F4F4F6 (Light)  │
│  Border: 1px rgba(255,255,255,0.12) | Radius: 14px     │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│                    GHOST BUTTON                        │
│  Fill: Transparent | Text: #8E8E93 | Radius: 10px      │
│  Hover: Text #F4F4F6 + Fill rgba(255,255,255,0.04)     │
└────────────────────────────────────────────────────────┘
```

### 8.1 Button Specifications Matrix

| Property | Primary Button | Secondary Button | Ghost Button | Icon Button |
| :--- | :--- | :--- | :--- | :--- |
| **Height** | 48px (Desktop) / 44px (Mobile) | 48px / 44px | 40px | 44px × 44px |
| **Padding Horizontal** | 24px (`space-5`) | 24px (`space-5`) | 16px (`space-4`) | 10px |
| **Background (Default)** | `#F4F4F6` | `rgba(255, 255, 255, 0.06)` | `transparent` | `rgba(255, 255, 255, 0.04)` |
| **Text Color (Default)**| `#050505` | `#F4F4F6` | `#8E8E93` | `#F4F4F6` |
| **Border** | `none` | `1px solid rgba(255,255,255,0.12)`| `none` | `1px solid rgba(255,255,255,0.08)`|
| **Corner Radius** | `14px` (`radius-lg`) | `14px` (`radius-lg`) | `10px` (`radius-md`) | `10px` (`radius-md`) |
| **Hover State** | `#FFFFFF` + `shadow-glow-btn` | `rgba(255,255,255,0.10)` | `rgba(255,255,255,0.06)` + `#F4F4F6` | `rgba(255,255,255,0.10)` |
| **Pressed / Active** | Scale `0.97` + `#E5E5EA` | Scale `0.97` | Scale `0.97` | Scale `0.95` |
| **Focus State** | 2px solid `#FFFFFF` ring | 2px solid `#FFFFFF` ring | 2px solid `#FFFFFF` ring | 2px solid `#FFFFFF` ring |
| **Disabled State** | Fill: `rgba(255,255,255,0.04)`, Text: `#3A3A3C`, Cursor: `not-allowed` |

### 8.2 Loading Button State Specification
When a form action is submitted, the button transforms:
* Text fades out (`100ms`).
* An inline monospaced loader string or muted 16px spinner icon smoothly fades in (`150ms`).
* Pointer events are disabled to prevent duplicate submissions.

---

## 9. Form Input System Specification

### 9.1 Anatomy & Measurements
* **Input Field Height:** `48px`
* **Internal Horizontal Padding:** `16px` (`space-4`)
* **Background Fill:** `#121214`
* **Border Default:** `1px solid rgba(255, 255, 255, 0.10)`
* **Corner Radius:** `10px` (`radius-md`)
* **Text Color:** `#F4F4F6` (15px Inter, Regular)
* **Placeholder Color:** `#545458` (15px Inter, Regular)

### 9.2 Interactive States Matrix

```
[ DEFAULT ]     Border: rgba(255, 255, 255, 0.10) | Background: #121214
[ HOVER ]       Border: rgba(255, 255, 255, 0.20) | Background: #16161A
[ FOCUS ]       Border: #FFFFFF (Solid 1px)        | Focus Ring: 2px Outer Glow
[ VALID/OK ]    Border: rgba(16, 185, 129, 0.40)  | Trailing Checkmark Icon (#10B981)
[ ERROR ]       Border: #EF4444 (Solid 1px)        | Error Microcopy Text Below (#EF4444)
[ DISABLED ]    Border: rgba(255, 255, 255, 0.04) | Background: rgba(255, 255, 255, 0.02)
```

### 9.3 Floating Label & Error Placement Rules
* Labels sit directly above the input with `8px` vertical gap (`space-2`).
* Label typography: `13px` Inter, Weight 500, Color: `#8E8E93`.
* Validation error copy is rendered `6px` below the input container with a smooth slide-down entrance (`150ms`).

---

## 10. Card System Specification

Cards serve as structural containers for the 3 Trust Pillars and business inquiry sections.

```
┌────────────────────────────────────────────────────────┐
│                   TRUST PILLAR CARD                    │
│                                                        │
│  Tagline: 01 / CURATION (12px Mono, #8E8E93)          │
│                                                        │
│  Title: Strictly Vetted Merchants (24px, #F4F4F6)       │
│                                                        │
│  Body: Every merchant on SOUQ passes a multi-point    │
│  verification process... (15px, #8E8E93)               │
│                                                        │
│  Background: #121214 | Border: 1px rgba(255,255,255,0.08) │
│  Radius: 20px | Padding: 32px                          │
└────────────────────────────────────────────────────────┘
```

### 10.1 Card Token Rules
* **Background:** `#121214`
* **Border:** `1px solid rgba(255, 255, 255, 0.08)`
* **Corner Radius:** `20px` (`radius-xl`)
* **Padding:** `32px` (`space-6`) Desktop / `24px` (`space-5`) Mobile
* **Hover Interaction:** Card translates vertically `-4px` (`translateY(-4px)`), border shifts to `rgba(255, 255, 255, 0.20)`, surface background shifts to `#16161A`. Transition duration: `250ms cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 11. Iconography Architecture

### 11.1 Icon Library Recommendation
* **Primary Icon Set:** **Lucide Icons** or **Feather Icons**.
* **Rationale:** Clean stroke weight consistency, geometric alignment, lightweight footprint, open-source compliance.

### 11.2 Icon Stroke & Dimension Rules
* **Standard Icon Stroke Width:** `1.5px` (Matches thin, refined typography).
* **Micro Icon Stroke Width (12px icons):** `1.75px` (Ensures clarity at low pixel count).

### 11.3 Icon Scale Tokens
* `icon-size-sm` = `16px × 16px` (Inline button icons, status checkmarks)
* `icon-size-md` = `20px × 20px` (Input trailing indicators, navigation icons)
* `icon-size-lg` = `24px × 24px` (Card accent indicators, modal headers)
* `icon-size-xl` = `32px × 32px` (Success state modal emblem)

---

## 12. Motion & Animation Principles

The SOUQ motion system is engineered to feel fluid, physical, and restrained. Fast spring physics replace standard linear delays.

### 12.1 Timing Duration Scale Tokens
* `duration-instant` = `100ms` (Micro button press feedback)
* `duration-fast`    = `150ms` (Input focus glow, tooltip display)
* `duration-normal`  = `250ms` (Card hover state, tab switches)
* `duration-slow`    = `400ms` (Modal dialog expansion, backdrop fade)
* `duration-page`    = `600ms` (Initial hero text reveal)

### 12.2 Easing Curves (Cubic-Bezier Specification)

```
ease-out-standard = cubic-bezier(0.16, 1, 0.3, 1)   --> Default curve for all UI transitions
ease-in-out       = cubic-bezier(0.45, 0, 0.15, 1)  --> Modal slide transitions
ease-bounce-subtle= cubic-bezier(0.34, 1.56, 0.64, 1)--> Reserved for success icon pop
```

### 12.3 Component Motion Rules
* **Hero Text Entrance:** Staggered opacity fade (`0` to `1`) + Y-translation (`+16px` to `0px`) over `500ms` with `100ms` stagger between badge, title, and subtext.
* **Modal Entrance:** Backdrop opacity fades `0 -> 1` (`300ms`). Modal container scales `0.96 -> 1.00` and fades in (`350ms ease-out-standard`).
* **Hover Micro-Interactions:** Hardware-accelerated CSS transforms (`transform: translateY()`, `opacity`). Never animate `height`, `width`, or `margin` to prevent layout thrashing.
* **Accessibility Overrides (`prefers-reduced-motion: reduce`):** All spatial transitions (`translateY`, `scale`) are zeroed. Motion converts exclusively to `100ms` instant opacity fades.

---

## 13. Background & Ambient Lighting Architecture

The background of SOUQ is a layered dark environment containing ambient glow spots, continuous micro-noise texture, and a mouse-activated cursor spotlight.

```
┌────────────────────────────────────────────────────────┐
│ LAYER 4: Interactive Cursor Spotlight (Desktop Only)   │
│ Radial Glow: 300px Circle | Opacity: 6% White          │
├────────────────────────────────────────────────────────┤
│ LAYER 3: Ambient Glow Orbs (Fixed Positioning)         │
│ Radial Gradient: Top Center (400px Blur, Opacity 5%)   │
├────────────────────────────────────────────────────────┤
│ LAYER 2: Micro Noise Texture Canvas                    │
│ SVG Noise Overlay: 2.5% Opacity (Eliminates Banding)   │
├────────────────────────────────────────────────────────┤
│ LAYER 1: Solid Dark Canvas (#050505 Base Fill)         │
└────────────────────────────────────────────────────────┘
```

### 13.1 Background Specifications
* **Base Fill:** `#050505`
* **Static Ambient Orb Top:** Radial gradient centered at top `50% 0px`, radius `600px`, color `rgba(255, 255, 255, 0.05)`, fading to `transparent`.
* **Subtle Noise Layer:** Tileable micro-grain SVG texture at `2.5%` opacity overlaying the canvas to soften gradient step artifacts (color banding).
* **Desktop Cursor Spotlight:** On desktop devices (`width >= 1024px`), a tracking spotlight follows the user's cursor:
  * Radial gradient dimensions: `350px × 350px`.
  * Fill: `radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)`.
  * Position updated via smooth RAF (RequestAnimationFrame) easing to eliminate lag.
* **Mobile Override:** The mouse spotlight is disabled entirely on mobile touch devices (`pointer: coarse`) to conserve GPU and battery performance.

---

## 14. Responsive Component Adaptation Rules

### 14.1 Breakpoint-by-Breakpoint Component Behaviors

```
VIEWPORT WIDTH: 1440px+ (Desktop XL)
 ├── Layout: 12-Column Grid (1200px Centered Container)
 ├── Navigation: Full Inline Header (Logo Left, Status Center, Button Right)
 ├── Hero: 84px Display Title, Dual Inline Buttons
 └── Trust Pillars: 3 Side-by-Side Cards (Equal Width 352px)

VIEWPORT WIDTH: 1024px – 1439px (Laptop / Desktop Standard)
 ├── Layout: 12-Column Grid (960px Centered Container)
 ├── Hero: Title scales to 72px
 └── Trust Pillars: 3 Side-by-Side Cards

VIEWPORT WIDTH: 768px – 1023px (Tablet)
 ├── Layout: 8-Column Grid (720px Container)
 ├── Hero: Title scales to 60px
 └── Trust Pillars: Vertically Stacked (1 Card per row) or 2+1 Grid

VIEWPORT WIDTH: 320px – 767px (Mobile & Small Mobile)
 ├── Layout: 4-Column Grid (Full Width with 16px/20px Side Margins)
 ├── Navigation: Compact Logo + Action Pill
 ├── Hero: 52px Title, Vertical Stacked Dual CTAs (Full Width Buttons)
 ├── Trust Pillars: Single Column Vertical Stack (100% Card Width)
 ├── Floating Bottom Bar: Sticky "Request Access" bar slides up after scrolling past Hero
 └── Modal Dialog: Bottom Sheet or Full Screen overlay on 320px viewports
```

---

## 15. Accessibility (a11y) Architecture

1. **Minimum Touch Target Boundary:** Every interactive component (buttons, inputs, links, close controls) must occupy a minimum tap target box of `48px × 48px` on mobile and `44px × 44px` on desktop.
2. **Keyboard Navigation Ordering:**
   * Logical DOM focus sequence: `Header Navigation CTA` -> `Hero Primary CTA` -> `Hero Secondary CTA` -> `Trust Cards` -> `Merchant CTA` -> `Footer Links`.
   * When Modal is open, keyboard focus is trapped within the active dialog container.
3. **Contrast Ratios:** All text elements adhere strictly to WCAG 2.1 AAA benchmarks (`18.5:1` for primary text, `5.2:1` for secondary text).
4. **Focus Ring Standard:** Active focused elements render a crisp, un-cropped `2px solid #FFFFFF` ring with `3px` outer padding offset (`outline-offset: 3px`).
5. **Screen Reader Text Alternates:** Icon-only buttons must provide explicit `aria-label` strings (e.g., `aria-label="Close waitlist modal"`).

---

## 16. Complete Design Token Catalog

*The following token matrix serves as the single source of truth for design tokens across design files and codebase token dictionaries.*

```json
{
  "color": {
    "bg": {
      "primary": { "value": "#050505", "type": "color" },
      "secondary": { "value": "#0D0D0E", "type": "color" }
    },
    "surface": {
      "base": { "value": "#121214", "type": "color" },
      "elevated": { "value": "#1A1A1E", "type": "color" },
      "hover": { "value": "#222226", "type": "color" },
      "active": { "value": "#2A2A30", "type": "color" }
    },
    "text": {
      "primary": { "value": "#F4F4F6", "type": "color" },
      "secondary": { "value": "#8E8E93", "type": "color" },
      "muted": { "value": "#545458", "type": "color" },
      "inverse": { "value": "#050505", "type": "color" }
    },
    "border": {
      "subtle": { "value": "rgba(255, 255, 255, 0.08)", "type": "color" },
      "medium": { "value": "rgba(255, 255, 255, 0.16)", "type": "color" },
      "strong": { "value": "rgba(255, 255, 255, 0.32)", "type": "color" }
    },
    "status": {
      "success": { "value": "#10B981", "type": "color" },
      "error": { "value": "#EF4444", "type": "color" },
      "warning": { "value": "#F59E0B", "type": "color" }
    }
  },
  "space": {
    "1": { "value": "4px", "type": "dimension" },
    "2": { "value": "8px", "type": "dimension" },
    "3": { "value": "12px", "type": "dimension" },
    "4": { "value": "16px", "type": "dimension" },
    "5": { "value": "24px", "type": "dimension" },
    "6": { "value": "32px", "type": "dimension" },
    "8": { "value": "48px", "type": "dimension" },
    "10": { "value": "64px", "type": "dimension" },
    "12": { "value": "96px", "type": "dimension" },
    "16": { "value": "128px", "type": "dimension" }
  },
  "radius": {
    "sm": { "value": "6px", "type": "dimension" },
    "md": { "value": "10px", "type": "dimension" },
    "lg": { "value": "14px", "type": "dimension" },
    "xl": { "value": "20px", "type": "dimension" },
    "2xl": { "value": "28px", "type": "dimension" },
    "full": { "value": "9999px", "type": "dimension" }
  },
  "typography": {
    "fontFamily": {
      "sans": { "value": "Inter Display, SF Pro Display, system-ui, sans-serif", "type": "fontFamily" },
      "mono": { "value": "JetBrains Mono, SF Mono, monospace", "type": "fontFamily" }
    },
    "fontSize": {
      "hero": { "value": "84px", "type": "dimension" },
      "title": { "value": "48px", "type": "dimension" },
      "card": { "value": "24px", "type": "dimension" },
      "body": { "value": "18px", "type": "dimension" },
      "small": { "value": "15px", "type": "dimension" },
      "button": { "value": "14px", "type": "dimension" },
      "caption": { "value": "12px", "type": "dimension" }
    }
  },
  "motion": {
    "duration": {
      "fast": { "value": "150ms", "type": "duration" },
      "normal": { "value": "250ms", "type": "duration" },
      "slow": { "value": "400ms", "type": "duration" }
    },
    "easing": { "standard": { "value": "cubic-bezier(0.16, 1, 0.3, 1)", "type": "cubicBezier" } }
  },
  "elevation": {
    "z": {
      "base": { "value": "0", "type": "number" },
      "sticky": { "value": "100", "type": "number" },
      "overlay": { "value": "200", "type": "number" },
      "modal": { "value": "300", "type": "number" },
      "tooltip": { "value": "400", "type": "number" }
    }
  }
}
```

---
**End of Design System Specification**  
*This document serves as the visual source of truth for SOUQ digital products.*
