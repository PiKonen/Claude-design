# [Your Brand] Design System

A design system for [Your Brand]'s web and product surfaces. This repository contains design tokens, component specifications, and usage guidance.

## What's in here

- `tokens/tokens.json` — the source of truth for colors, typography, spacing, radii, shadows, motion, and breakpoints
- `examples/` — real pages and flows built with the system (landing page, settings screen, sign-up form)
- `components/` — specifications and, where implemented, React source for each component

## Brand principles

[Replace with 2–4 short principles. A couple of examples to help you think about it:]

- **Clarity over decoration.** We favor legibility and obvious affordances over visual flourish.
- **Calm by default, emphatic when it matters.** Most surfaces are neutral; color is reserved for actions and state.
- **Generous whitespace.** Density is a tool, not a default.

## Design language at a glance

### Color
Our palette is built around a primary brand color, a supporting secondary, a neutral ramp for surfaces and text, and four semantic colors (success, warning, danger, info). We use `color.text.*` tokens for all text — never raw neutral values — so contrast stays predictable.

### Typography
We use a single sans-serif family across the product. Headings are weight 600–700 with tight line-height; body is weight 400 at 1.5 line-height. Monospace is used only for code and numeric tabular data.

### Spacing
Spacing follows a 4px base scale (`spacing.1` = 4px). Layout compositions should stick to `spacing.4` / `spacing.6` / `spacing.8` for rhythm.

### Radius
Most surfaces use `radius.md` (8px). Pills and fully-rounded elements use `radius.pill`.

## Components

### Button
Primary action affordance. Variants: `primary`, `secondary`, `ghost`, `danger`. Sizes: `sm`, `md`, `lg`. Uses `radius.md`, `fontWeight.medium`, and transitions on hover/focus at `motion.duration.fast`. Focus state is a visible ring using `color.border.focus`. Disabled state drops opacity and removes pointer events.

### Card
Contained content surface. Uses `color.surface.card`, `radius.lg`, `shadow.sm` at rest and `shadow.md` on hover where interactive. Internal padding is `spacing.6`. Cards can have an optional header, body, and footer region.

### Navigation / Header
Top-of-page navigation. Sits at `zIndex.sticky`, uses `color.surface.background` with a bottom border of `color.border.subtle`. Height is 64px on desktop, 56px on mobile. Includes a logo slot, primary nav links, and a right-aligned action slot (sign-in, avatar, etc).

### Footer
Bottom-of-page structural element. Multi-column on desktop (typically 3–4 columns), single column stacked on mobile. Background is `color.neutral.50` or `color.surface.elevated`; text uses `color.text.secondary`. Includes brand mark, nav link groups, and legal/social row.

### Badge / Tag
Small inline labels for status or categorization. Uses `radius.pill`, `typography.textStyle.caption`, and semantic color tokens (`color.semantic.success.bg` + `color.semantic.success.fg`, etc). Two sizes: `sm` (20px tall) and `md` (24px tall).

### Form input
Text input, textarea, and select share a shell. Border is `color.border.default` at rest, `color.border.focus` on focus with a 2px ring. Height is 40px for `md`, 32px for `sm`. Invalid state uses `color.semantic.danger.border` and shows a helper message below. Labels sit above the input at `typography.textStyle.bodySm`, weight 500.

## How to use these tokens

### In CSS
Compile `tokens.json` to CSS custom properties (use [Style Dictionary](https://styledictionary.com/) or a similar tool):

```css
:root {
  --color-brand-primary-500: #___;
  --color-text-primary: #___;
  --spacing-4: 1rem;
  --radius-md: 0.5rem;
}
```

### In React
Either consume the CSS variables directly, or import the JSON and pass to a theme provider:

```jsx
import tokens from './tokens/tokens.json';

<button style={{
  background: tokens.color.brand.primary['500'],
  borderRadius: tokens.radius.md,
  padding: `${tokens.spacing['2']} ${tokens.spacing['4']}`,
}}>
  Click me
</button>
```

### In Figma
Tokens here map 1:1 to Figma Variables. When updating a token, update both sides (or export from Figma Tokens Studio to keep them in sync automatically).

## Updating the system

1. Propose changes in a PR with before/after screenshots and a rationale
2. If a token value changes, update `tokens.json` and any affected examples
3. Tag a release (semver: breaking token rename = major, new token = minor, value tweak = patch)

## For Claude Design

This repo is structured to be read by Claude Design. The `examples/` directory is the most important part for extraction — it shows the system in real use, which is far more informative than tokens alone.
