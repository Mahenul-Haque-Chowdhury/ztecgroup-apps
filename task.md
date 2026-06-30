# ZTEC Premium Frontend Overhaul - Task Tracker

Bolder premium redesign across all 5 apps. Corporate is built first as the reference
design (approval gate), then the system is propagated to the 4 sub-apps.

**Guardrails:** keep dark theme + per-app accent colors · don't break SEO
(home FAQ visible text must stay identical to `packages/content/faq.ts` schema;
keep keyword-bearing H1/H2) · verify each app with `tsc --noEmit` + `next build`.

---

## Phase A - Corporate (reference design) 🟡 AWAITING APPROVAL

### Foundation
- [x] Fonts: replaced Inter `@import` with `next/font` pairing (Syne display + DM Sans body) in `layout.tsx` + `fonts.css`
- [x] Design tokens in `theme.css` (display headings use Syne, larger radii `--radius-2xl/3xl`)
- [x] Premium utility classes in `global.css` (`.display-2xl/xl/lg`, `.feature-tile`, `.premium-card`, `.text-gradient`, `.eyebrow`, `.icon-chip`, `.measure`, dividers)

### Shared components (`apps/corporate/src/app/components/`)
- [x] `Section.tsx` + `SectionHeading.tsx`
- [x] `FeatureGrid.tsx` + `FeatureTile.tsx` (icon-chip tiles)
- [x] `StatStrip.tsx`
- [x] `Faq.tsx` (premium accordion, driven by `siteFaqs`)
- [x] `Stepper.tsx` (numbered steps)

### Pages (`apps/corporate/src/app/pages/`)
- [x] `Home.tsx` - bigger Syne hero, condensed subhead, premium `Faq`, `StatStrip`, refined headers/CTA
- [x] `About.tsx`
- [x] `Contact.tsx`
- [x] `Portfolio.tsx`
- [x] `Resources.tsx`
- [x] `ServicesHub.tsx`
- [ ] `LegalDocumentLayout.tsx` (deferred - low priority)

### Gate
- [x] `tsc` + `build` clean · SEO guardrails verified (FAQPage + visible FAQ match, title intact)
- [ ] **User approval of corporate before propagating** ← YOU ARE HERE

---

## Phase B - Propagate to sub-apps (after approval)

### communication
- [ ] Copy tokens/utilities (keep accent) + components
- [ ] Rework `ServiceDetail.tsx` (Scan2Call spotlight, condensed capabilities → FeatureGrid)
- [ ] FAQ section → `Faq` component · Navbar/Footer polish · build

### contentstudio
- [ ] Copy tokens/utilities + components
- [ ] Rework `ServiceDetail.tsx` (condense 12 capability descriptions)
- [ ] FAQ → `Faq` · Navbar/Footer polish · build

### hospitality
- [ ] Copy tokens/utilities + components
- [ ] Rework `ServiceDetail.tsx` (investor/homeowner text walls → Stepper/tiles)
- [ ] FAQ → `Faq` · Navbar/Footer polish · build

### software
- [ ] Copy tokens/utilities + components
- [ ] Rework `ServiceDetail.tsx` (14+ capabilities → FeatureGrid, tech stack)
- [ ] FAQ → `Faq` · Navbar/Footer polish · build

---

## Final
- [ ] All 5 apps `tsc` + `build` clean
- [ ] SEO intact (FAQPage/Organization JSON-LD, titles, sitemaps)
- [ ] Commit + push
