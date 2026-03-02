---
trigger: always_on
---

## 🧠 Prompt: Pixsols Creative — Studio Website

**Project:** Build a complete, production-ready website for **Pixsols Creative**, a creative studio. Must be fully optimized for **Cloudflare Pages** deployment (static export, no server-side runtime).

---

### 🛠️ Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Framework | **Next.js 14** (Static Export `output: 'export'`) | Cloudflare Pages compatible |
| Styling | **Tailwind CSS v3** | Utility-first, zero runtime CSS |
| Animations | **Framer Motion** | Smooth, GPU-accelerated |
| Smooth Scroll | **Lenis** | Buttery native-feel scroll |
| Icons | **Lucide React** | Lightweight, tree-shakeable |
| Fonts | **Geist Sans** (body) + **Syne** (headings) via `next/font` | Zero layout shift |
| Images | **Next.js `<Image>`** with `unoptimized: true` | Static export compatible |
| Deployment | **Cloudflare Pages** | Fast global CDN, free tier |

> ❌ No particles, no canvas effects, no heavy WebGL — pure CSS + Framer Motion only.

---

### ⚙️ Cloudflare Pages Config

```js
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}
```

- All pages must be **statically renderable** — no `getServerSideProps`, no API routes
- Use `next/link` for all internal navigation
- Contact links use `mailto:` and `wa.me/` — no backend form needed

---

### 🎨 Design System

| Token | Value |
|---|---|
| Background | `#000000` (true AMOLED black) |
| Surface | `#0A0A0A` / `#111111` |
| Accent | `#EEFF00` (neon yellow) |
| Text Primary | `#FFFFFF` |
| Text Muted | `#666666` |
| Border | `#1A1A1A` |
| Glow | `0 0 24px rgba(238,255,0,0.3)` |

**Typography feel:** Big, confident headlines. Clean body text. Studio energy — not a SaaS template.

**Do NOT:** Use gradients everywhere, add glassy blur cards on every element, or copy the generic "dark mode startup" aesthetic. Think: **editorial design meets street-level studio**.

---

### 📄 Pages & Sections

---

#### `/` — Home Page

**1. Navbar**
- Logo (text-based: `Pixsols` in white + `Creative` in neon yellow)
- Links: Services, Templates, Contact
- Mobile: Hamburger → full-screen overlay menu with staggered link reveal (Framer Motion)
- Sticky, with background that transitions from transparent → `#000000` on scroll

**2. Hero Section**
- Full viewport height
- Large headline with **word-by-word stagger animation** on load using Framer Motion `variants` + `staggerChildren`
- Subheadline fades in after
- Two CTA buttons: `Explore Work` (neon yellow filled) + `Get in Touch` (ghost/outline)
- Background: Pure black with a **subtle CSS-only radial glow** in neon yellow behind the headline (no JS, just `radial-gradient` in a `::before` pseudo-element)
- A thin animated **marquee strip** below the hero: scrolling text `Video Editing · Artwork · Websites · Reels · Thumbnails · Cards ·` — CSS animation only, no library

**3. Services Section**
- Section heading animated on scroll (`whileInView`)
- Three cards, one per service:

  **Card 1 — Media Works**
  > Video Editing, Shorts & Reels, Devotional Content, Podcast Production, Video Thumbnails

  **Card 2 — Artwork**
  > Wedding Cards, Birthday Cards, Anniversary Cards, Custom Event Designs

  **Card 3 — Websites**
  > Static Websites, Portfolio Sites, Website Templates, Custom Builds from Scratch

- Each card:
  - Icon (Lucide or custom SVG)
  - Title + service bullet list
  - Neon yellow left-border accent
  - On hover: border glows, slight Y-translate up, background lightens to `#111`
  - Staggered entrance animation (`whileInView` + `staggerChildren`)

**4. Templates Teaser Strip**
- Heading: "Ready-Made Templates"
- Horizontal scroll row showing 3–4 template thumbnail cards (blurred/preview style)
- Each card lifts on hover
- `View All Templates →` CTA button linking to `/templates`

**5. Contact Section**
- Clean, minimal — two contact items side by side (stacks on mobile):
  - 📱 WhatsApp: clicking opens `https://wa.me/<number>`
  - 📧 Email: clicking opens `mailto:<email>`
- Both links styled as large pill buttons with neon yellow border, glow on hover
- Section has a subtle animated **neon yellow horizontal rule** that draws in on scroll (Framer Motion `pathLength` or `scaleX` on a `div`)

**6. Footer**
- Studio name + tagline
- Nav links
- Copyright line

---

#### `/templates` — Templates Showcase

**Grid Layout:**
- Responsive: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- Each template card shows:
  - Thumbnail image
  - Template name
  - Category badge (e.g., `Portfolio`, `Business`, `Landing Page`)
  - `Preview` button (neon yellow)
- Cards animate in with stagger on page load

**Template Preview — Interactive Modal:**

- Clicking `Preview` opens a **full-screen modal overlay** (Framer Motion `AnimatePresence` scale + fade)
- Inside the modal:
  - An **`<iframe>`** pointing to the template URL or local static file
  - `scrolling="yes"` + `overflow: auto` — user can scroll/interact with the template naturally
  - **Desktop:** Modal takes up ~90vw × 90vh, centered, with close button top-right
  - **Mobile:** Modal slides up as a **bottom sheet** (translate Y animation), takes full screen height, touch-scroll works natively inside iframe
- Outside click or close button dismisses it
- Body scroll is locked while modal is open (`overflow: hidden` on `<body>`)
- Templates stored as paths in a `templates.ts` config file — easy to add new ones

```ts
// lib/templates.ts
export const templates = [
  {
    id: 'portfolio-01',
    name: 'Portfolio One',
    category: 'Portfolio',
    thumbnail: '/templates/portfolio-01/thumb.jpg',
    previewUrl: '/templates/portfolio-01/index.html',
  },
  // ...
]
```

---

### ✨ Animation Guidelines

| Element | Animation | Trigger |
|---|---|---|
| Hero headline | Word stagger, `y: 40 → 0`, `opacity: 0 → 1` | On mount |
| Section headings | `y: 30 → 0`, `opacity` | `whileInView` |
| Service cards | Staggered `y: 50 → 0` | `whileInView` |
| Navbar background | `backgroundColor` spring on scroll | Scroll listener |
| Mobile nav menu | Full-screen overlay, links stagger in | Toggle |
| Template modal | `scale: 0.95 → 1` + `opacity` | `AnimatePresence` |
| Mobile bottom sheet | `y: 100% → 0` spring | `AnimatePresence` |
| CTA buttons | `scale: 1.03` on hover, glow pulse | `whileHover` |
| Marquee strip | CSS `@keyframes` scroll | CSS only |
| Contact rule | `scaleX: 0 → 1` | `whileInView` |

> All `whileInView` animations use `once: true` to avoid re-triggering. Use `will-change: transform` sparingly — only on elements that animate on scroll.

---

### 📱 Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `< 640px` | Single column, hamburger nav, bottom-sheet template preview |
| `640–1024px` | 2-col services/templates, slide-in nav |
| `> 1024px` | 3-col grid, full modal preview, full navbar |

- Minimum tap target size: **44×44px**
- No hover-only interactions — every hover state has a tap equivalent

---

### 📁 Suggested Project Structure

```
/app
  layout.tsx
  page.tsx                  ← Home
  /templates
    page.tsx                ← Templates showcase
/components
  Navbar.tsx
  Hero.tsx
  ServicesSection.tsx
  TemplatesTeaser.tsx
  ContactSection.tsx
  Footer.tsx
  TemplateCard.tsx
  TemplateModal.tsx         ← iframe modal + bottom sheet
/lib
  templates.ts              ← Template data config
/public
  /templates
    /portfolio-01
      index.html
      thumb.jpg
```

---

### ✅ Performance Checklist

- [ ] `output: 'export'` in `next.config.js`
- [ ] All images use `<Image unoptimized />` or are pre-optimized `.webp`
- [ ] Fonts loaded via `next/font` — no Google Fonts CDN calls
- [ ] No `useEffect` polling, no unnecessary re-renders
- [ ] Framer Motion imported per-component, not globally
- [ ] Lenis initialized once in root layout
- [ ] No particles, no canvas, no WebGL
- [ ] Cloudflare Pages build command: `next build`, output dir: `out`

---