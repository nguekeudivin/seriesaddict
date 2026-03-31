# Design System: High-End Financial Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Sovereign Architect."** 

In the world of high-stakes financial services, trust is not built through flashy animations or "get rich quick" aesthetics; it is built through structural permanence, intentional negative space, and authoritative clarity. This system moves away from the "SaaS-template" look by utilizing editorial layouts—where the relationship between content and white space is as important as the content itself. 

By leveraging the structural logic of a premium financial journal (inspired by the clarity of Image 2) and the atmospheric depth of a luxury private bank (referencing the tonal richness of Image 4), we create a high-converting environment that feels like a destination, not a sales pitch.

---

## 2. Colors
Our palette is rooted in stability and growth. We avoid "pure" blacks and vibrant neons in favor of "ink" tones and organic accents.

### Palette Strategy
- **Primary & Neutral Base:** We use `primary_container` (#131b2e) for deep, authoritative sections and `surface` (#f7f9fb) for light, airy readability.
- **The Trust Accent:** `tertiary_container` (#4c9174) serves as a muted emerald, signaling growth without the "fluorescent" aggression of standard fintech greens.
- **Surface Hierarchy & Nesting:** Depth is achieved by nesting `surface_container_lowest` (#ffffff) cards inside `surface_container` (#eceef0) sections. This creates "paper-on-table" tangibility.

### Core Implementation Rules
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning or card containment. Boundaries must be defined solely through color shifts (e.g., a `surface_container_low` section sitting against a `surface` background).
- **The "Glass & Gradient" Rule:** To mirror the premium feel of Image 4, use subtle background gradients transitioning from `primary` (#000000) to `primary_container` (#131b2e) in hero sections. For floating elements, use a backdrop-blur (12px–20px) with 80% opacity on surface colors to create a "frosted glass" effect.

---

## 3. Typography
Typography is our primary tool for authority. We contrast a wide-set, modern sans-serif for impact with a highly legible, utilitarian sans-serif for data.

- **Display & Headlines (Manrope):** These should be used with tight letter-spacing (-0.02em) and generous line-height to create an "editorial" feel. `display-lg` (3.5rem) is reserved for the "The Sovereign Architect" hero statements.
- **Body & Labels (Inter):** Inter provides the execution-focused clarity required for financial services. Use `body-lg` (1rem) for most sales copy to ensure it feels accessible and transparent.
- **Hierarchy as Identity:** By using large `display-md` headers next to small, capitalized `label-md` "kicker" text, we create a high-contrast visual rhythm that feels custom and expensive.

---

## 4. Elevation & Depth
In this design system, elevation is a product of light and tone, not just shadows.

- **The Layering Principle:** Stack surfaces from lowest to highest to guide the eye. For example, a pricing card should use `surface_container_lowest` (#ffffff) to appear as the most prominent, "closest" element to the user against a `surface_container` (#eceef0) background.
- **Ambient Shadows:** When a "floating" effect is required (as seen in the pricing cards of Image 2), use shadows with a 40px–60px blur at only 4%–6% opacity. The shadow color should be a tinted version of `on_surface` (#191c1e) to mimic natural light.
- **The "Ghost Border" Fallback:** If a container lacks sufficient contrast, use a 1px border with the `outline_variant` token at **15% opacity**. This provides a "suggestion" of a boundary without the clutter of a hard line.

---

## 5. Components

### Primary CTA Buttons
- **Style:** Large padding (`spacing.3` vertical, `spacing.8` horizontal) with a `DEFAULT` (0.25rem) or `md` (0.375rem) corner radius.
- **Visual:** Use a subtle vertical gradient from `primary` to `primary_container`. For "Growth" CTAs, use the `tertiary` emerald tones.
- **State:** On hover, increase the surface brightness slightly—do not use aggressive color shifts.

### Pricing Cards
- **Structure:** Avoid dividers. Use `spacing.10` to separate the price, features, and button.
- **Trust Indicator:** Highlight the "Most Popular" or "Best Value" card by using a `surface_container_highest` background or a very subtle `tertiary` glow effect.

### Process Timeline
- **Execution-Focused:** Use the `spacing` scale to create an asymmetrical timeline where the "step" indicator (e.g., 01, 02) is in `headline-lg` Manrope, while the description is in `body-md` Inter.
- **Connectivity:** Use a `ghost border` (low-opacity `outline_variant`) to connect steps vertically.

### Input Fields
- **Design:** Minimalist. No background fill—only a bottom border (Ghost Border style) that becomes `primary` on focus. This mimics high-end physical stationery.

---

## 6. Do's and Don'ts

### Do
- **Use Intentional Asymmetry:** Align text to a grid, but allow images or secondary "proof" elements to bleed off-center or overlap containers (referencing the sophisticated layering in Image 2).
- **Prioritize Breathing Room:** When in doubt, increase spacing. Use `spacing.20` or `spacing.24` between major content sections to allow the user's mind to rest.
- **Use Sophisticated Textures:** Incorporate a subtle noise grain or a very soft mesh gradient in the `primary_container` backgrounds to add "soul" to the dark sections.

### Don't
- **Don't Use Pure Black (#000) for Text:** It is too harsh. Always use `on_surface` or `on_background` for a softer, more premium reading experience.
- **Don't Use "Hype" Elements:** Avoid countdown timers, "flash" sales, or vibrating notification toasts. These destroy the "Trust-First" architecture.
- **Don't Use Divider Lines:** Lines create visual "stutter." Use the spacing scale (`spacing.6` or higher) to define content groups.
- **Don't Over-Round:** Keep corner radii to `sm` or `md`. Excessive rounding (like `full`) feels "bubbly" and consumer-grade, rather than professional and stable.