<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: La Meseta de los Santos
description: Documentary page about La Meseta de los Santos, Santander, Colombia.
---

# Design System: La Meseta de los Santos

## 1. Overview

**Creative North Star: "El Cuaderno de Campo"**

A field naturalist's notebook opened on a limestone outcrop: careful, unhurried, precise. Every mark earns its place. The page is the land — beige bahareque walls, the weight of exposed wood beams, moss climbing stone. The reader should feel they've picked up a well-worn research document, not loaded a website.

The system draws from three print traditions: The New Yorker's typographic hierarchy and asymmetric editorial grid (primary reference), National Geographic's 1990s commitment to documentary photography and cartographic precision, and Revista Semana's long-form Colombian journalism in special editions — serious, sourceable, unadorned. What binds them: every element communicates; nothing decorates.

This is NOT a tourism site. It is not warm-and-inviting. It is not trying to sell anyone on visiting. It documents a place with the same rigor you'd bring to a geological survey or a cultural ethnography. The warmth comes from the land itself (the colors, the photographs, the data), not from the interface asking you to feel something.

**Key Characteristics:**
- Bahareque-beige dominant surface with moss-green accent reserved for emphasis
- Serif-forward typographic hierarchy: heavy display weight for headlines, generous reading measure for body
- Asymmetric editorial grid inspired by The New Yorker Books & Culture layout
- Scroll-driven cinematographic motion with physical weight
- Ruled line dividers (not decorative borders), clear section breaks
- Infographic elements integrated into the reading flow, not isolated in cards
- Bibliographic apparatus treated as first-class content, not footnotes hidden at the bottom
- QR code as bridge between print and digital

## 2. Colors

The palette is extracted from the physical architecture and vegetation of La Meseta de los Santos. Not "earth tones because documentary" — these specific materials, this specific place.

**The Bahareque Rule.** The dominant surface is the color of whitewashed bahareque walls: warm beige, imperfect, aged lime. Not paper-white, not corporate-cream. The warmth of a wall that has stood for decades under Santander sunlight.

### Primary
- **Verde Páramo** [to be resolved during implementation]: Dark moss green drawn from the páramo vegetation above the canyon. The only saturated voice on the page. Used at ≤10% — section accents, active states, QR code frame, key interactive elements. Its rarity is the point.

### Secondary
- **Ocre Tierra** [to be resolved during implementation]: The ochre of exposed earth on mountain trails and clay paths. For secondary emphasis: infographic elements, pull quotes, bibliographic markers.
- **Gris Caliza** [to be resolved during implementation]: Limestone gray from the Chicamocha canyon walls. The structural neutral: dividers, metadata text, secondary labels, ruled lines.

### Neutral
- **Cal Vieja** [to be resolved during implementation]: The bahareque beige. Primary surface color in light mode. Not white. Not cream. The color of an old whitewashed wall in afternoon light.
- **Madera Expuesta** [to be resolved during implementation]: Dark warm brown-gray for primary text. The color of aged wood beams in bahareque construction.
- **Sombra de Cañón** [to be resolved during implementation]: The deepest neutral, near-black with warm undertone. For dark mode surfaces and high-contrast text.

**The Material-Truth Rule.** Every color in the system corresponds to a physical material found in or around La Meseta de los Santos. If you can't point to the thing it came from, it doesn't belong.

### Color Strategy
Restrained. Tinted neutrals (beige, gray, warm darks) carry 90%+ of the surface. Verde Páramo is the sole accent, used with the discipline of a single ink color on a printed broadsheet. Ocre Tierra and Gris Caliza are structural, not decorative.

### Theme
Light and dark modes, both mandatory. Light mode: Cal Vieja surfaces, Madera Expuesta text. Dark mode: Sombra de Cañón surfaces, light Cal Vieja text. The physical scene that forces the answer: a student researching under a desk lamp at 11pm switches to dark mode; a tourist checking the page on their phone under bright Santander sunlight uses light mode. Both are first-class.

## 3. Typography

**Display Font:** [to be chosen at implementation — serif, not from the reflex-reject list. Direction: the weight and authority of a museum caption plate or geological survey header. Not magazine-pretty, not editorial-delicate. Dense, confident, slightly compressed.]

**Body Font:** [to be chosen at implementation — sans-serif for readability at body sizes. Humanist or slightly warm, but not trendy. The feel of a well-typeset scientific paper, not a blog post.]

**Character:** The pairing should feel like opening a monograph from a university press: the serif headlines carry institutional weight, the sans body is invisible in service of reading. Not flashy. Not designed-looking. The typography of someone who reads for a living.

### Hierarchy
- **Display** (heavy, large, tight leading): Hero section, major section openers. The weight of a chapter title in a hardcover.
- **Headline** (medium-heavy, stepped down): Section headlines within the page.
- **Title** (medium): Infographic titles, pull quote attributions, sub-section labels.
- **Body** (regular, 16-18px, generous leading, max 65-75ch): Long-form reading. The primary experience.
- **Label** (medium-small, possibly sparse uppercase tracking): Bibliographic citations, photo credits, metadata. Small and precise.

**The Lectura Rule.** Body text is where the user spends 80% of their time. It must be immaculate: proper measure (65-75ch), generous line-height (1.6-1.7), adequate paragraph spacing. No compromises for layout.

### Scale
Modular scale with ≥1.25 ratio between steps. Fluid `clamp()` for display and headline sizes. Light-on-dark text (in dark mode) gets +0.05 line-height adjustment.

## 4. Elevation

Predominantly flat. Depth comes from content layering (photographs over beige surfaces, infographics breaking the text column) rather than shadows. The system mimics printed material: ink on paper has no elevation.

**The Print Rule.** Shadows are prohibited except on the QR code element (which represents a physical object bridging digital and print) and on photographs (which represent physical prints laid on a surface). Everything else lies flat on the page.

Tonal layering handles surface distinction: Cal Vieja → slightly warmer/cooler variant for inset regions, ruled lines for separation. Dark mode uses Sombra de Cañón → slightly lighter variant.

## 5. Components

[Omitted — no components exist yet. Will be populated on the first scan-mode run after implementation.]

## 6. Do's and Don'ts

### Do
- **Do** let photographs bleed to the edge of their containers. Documentary photography needs room.
- **Do** use ruled horizontal lines (`1px solid`) as primary section dividers, inspired by The New Yorker's column structure.
- **Do** treat bibliographic sources as visible, styled content — not hidden footnotes. They are evidence of rigor.
- **Do** respect `prefers-reduced-motion`: all scroll-driven and parallax animations must degrade to static presentation.
- **Do** verify WCAG AA contrast in both light and dark modes for every text/background combination.
- **Do** design mobile as a single-column reading experience that feels like holding a printed report.
- **Do** use the asymmetric grid for desktop — not centered stacks, not symmetric columns.
- **Do** integrate infographics into the reading flow, not in isolated cards.

### Don't
- **Don't** use blue-purple gradients, or any color not derived from the physical materials of La Meseta.
- **Don't** use Inter, Poppins, or any sans-serif from the generic startup toolkit. Not for body, not for labels, not anywhere.
- **Don't** use generic cards with icon + title + repeated text. If content needs grouping, use ruled sections or indentation.
- **Don't** add fade-in animations that serve no narrative purpose. Every animation must have a cinematographic reason.
- **Don't** create anything resembling a tourism site with stock photos of smiling people and "Book now!" CTAs.
- **Don't** produce a layout that looks like a 2008 Colombian government page with unstyled HTML tables and gray backgrounds.
- **Don't** build a WordPress-style blog with sidebars, category lists, and ad banner spaces.
- **Don't** use `border-left` or `border-right` > 1px as colored accent stripes on cards, lists, or alerts.
- **Don't** use `background-clip: text` with gradient backgrounds. Ever.
- **Don't** default to glassmorphism, blurs, or glass cards.
- **Don't** use nested cards. Or cards at all, unless no other affordance works.
- **Don't** use em dashes in copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** create anything that passes the AI slop test: if someone could look at this and say "AI made this" without hesitation, it has failed.
- **Don't** repeat tiny uppercase tracked labels above every section heading. A single strong kicker can be voice; repeating it as section grammar is AI scaffolding.
