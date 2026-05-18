# Product

## Register

brand

## Users

Tourists, students, and curious general public arriving via shared link. They browse from desktop (home research, deep reading) and mobile (en route or quick reference). They don't search for the site; someone recommends it. First impression determines whether they stay.

## Product Purpose

Documentary page about La Meseta de los Santos, Santander, Colombia. Presents infographics, place photography, geographic and historical information, bibliographic sources, and a QR code for sharing access. Exists so that visitors learn something they didn't know and develop genuine interest in the place. This is not a tourism site or a travel guide; it is a document.

## Brand Personality

Contemplative, earthy, rigorous.

Academic and documentary voice. No hype, no generic tourism tone. The text informs with precision and lets the place speak for itself. Every word earns its presence.

## Visual Reference

The New Yorker Books & Culture page (primary). Editorial layout with asymmetric grid, dominant serif, simple divider rules, clear typographic hierarchy. Adapt palette and tone to Colombian documentary/academic context, not New York journalism.

National Geographic 1990s print edition. Commitment to documentary photography and cartographic precision.

Revista Semana special print edition. Long-form Colombian journalism, documentary photography, no unnecessary decoration.

## Anti-references

- Blue-purple gradients, generic cards with icon + title + repeated text.
- Inter, Poppins, or any generic startup sans-serif.
- Unnecessary fade-in animations that communicate nothing.
- Colombian tourism sites with stock photos of smiling people and "Book now!" CTAs.
- Colombian government pages with unstyled HTML tables and 2008-era gray backgrounds.
- WordPress-style travel blogs with category sidebars and ad banners.
- Anything that passes the AI slop test: if someone could look at the interface and say "AI made this" without hesitation, it has failed.

## Design Principles

1. **The land speaks first.** Content about the Meseta leads; design serves it, never competes.
2. **Weight, not speed.** Every transition, every scroll beat has physical gravity. Nothing floats in without reason. Animations are cinematographic: scroll-driven, subtle parallax, weighted transitions.
3. **Rigor earns trust.** Bibliographic sources, careful typography, and structured information signal that this is research, not marketing.
4. **Place, not promotion.** This is not a tourism campaign. It is a document about a place. The difference matters in every design decision.
5. **Editorial, not decorative.** Every visual element (dividers, spacing, type scale) carries information. Nothing is ornamental.

## Accessibility & Inclusion

WCAG AA baseline. Cinematographic animations by default (scroll-driven, weighted section transitions, subtle hero parallax). `prefers-reduced-motion` respected for those who need it: animations disable and content remains intact. Light and dark themes with verified contrast in both modes.

## Technical Constraints

- React 19 + Vite
- pnpm as mandatory package manager (never npm or yarn)
