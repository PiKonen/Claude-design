# Lumen Design System

> *Smooth corners, soft colors, ethereal feeling.*

Lumen is a (fictional) creative tool — a quiet studio for thinking in color, shape, and light. This design system captures its warm, friendly, rounded aesthetic for prototyping against the brand.

---

## Sources

- **Starter template** — [`PiKonen/Claude-design`](https://github.com/PiKonen/Claude-design) provided the tokens-schema skeleton (`tokens.json`) and folder conventions. All brand values were placeholders (`#___`); this system fills them in with an original palette and voice.
- **Brand direction** — defined inline with the user: warm amber/honey primary, sage accent, warm cream neutrals, humanist sans, generously rounded corners, soft ethereal gradients. No pink or lavender.
- No codebase, Figma, or screenshots were provided. Everything here is an original interpretation of the brief.

---

## Index

| File / folder | What's in it |
| --- | --- |
| `colors_and_type.css` | All tokens as CSS variables (colors, type, spacing, radii, shadows, motion) + semantic type presets (`.type-h1`, `.type-body`, …) |
| `assets/` | Logo lockup, mark, inverse logo |
| `fonts/` | (Empty — fonts are loaded via Google Fonts CDN; see Fonts note below) |
| `preview/` | Design-system preview cards rendered in the Design System tab |
| `ui_kits/web_app/` | Full click-thru web-app recreation (sidebar / topbar / project grid / settings / editor) |
| `SKILL.md` | Agent Skill definition — drop the folder into `.claude/skills/` to invoke as `lumen-design` |

---

## Brand principles

1. **Quiet by default, warm when it matters.** Most of the canvas is cream and whitespace; color earns its place.
2. **Smooth corners, soft light.** Generous radii (16 px default) and warm-tinted shadows. Nothing sharp, nothing glassy.
3. **Humanist, not industrial.** Rounded stroke icons, humanist sans, serif italic accents. Technical only where necessary (mono for code).
4. **Ethereal, not cute.** The mood is morning light filtering through curtains — not playful, not childish.

---

## Content Fundamentals

**Voice:** quiet, confident, a little poetic. We write like a thoughtful studio assistant, not a sales deck.

**Person:** second-person (*you*, *your*) when speaking to the user. First-person plural (*we*) only for the company itself (shipped posts, about page). Never first-person singular.

**Casing:**
- **Sentence case** for every UI string, heading, and button label. No Title Case.
- Proper nouns and product names keep their capitalization (*Lumen*, *Atelier*).
- Uppercase is reserved for small captions (11 px, +0.08em tracking) and `<abbr>`-style tags.

**Tone examples** (these pairings should feel right):
- ✅ "Good morning, Mari. You left *Morning Moodboard* open yesterday."
- ✅ "Tune how Lumen feels for you and your team."
- ✅ "A Monday-morning summary of what your team shipped."
- ❌ "Welcome back! Ready to crush some pixels? 🚀"
- ❌ "Workspace Configuration Settings"
- ❌ "OOPS! Something went wrong."

**Editorial device:** italic serif pull-quotes and stat numerals act as the brand's "grace notes" — used sparingly, never for UI chrome. See the big `128` in HomeView, the page titles, and hero strings.

**No emoji.** Not in product copy, not in marketing. Icons handle all glyph duties.

**Numbers:** numerals with a thin non-breaking space before units (`4.2 GB`, not `4.2GB`). Percentages keep their sign (`▲ 14%`).

**Errors:** name the thing, offer a way forward, don't apologize theatrically.
- ✅ "Letters, numbers, and dashes only."
- ❌ "Oops! That's not a valid slug. Please try again."

---

## Visual Foundations

### Color
- **Primary:** warm honey/amber — `--brand-500 #D89535`. Feels like late-afternoon sun through amber glass.
- **Secondary:** sage green — `--accent-500 #638356`. Calm, organic counterpoint.
- **Neutrals:** warm cream → warm charcoal. Every neutral carries a slight yellow/red cast (`#FBF8F3` → `#1B1814`). **Never use a cool gray** (`#f5f5f5`, `#1a1a1a`) — it breaks the warmth immediately.
- **Semantic:** success (sage), warning (amber), danger (terracotta), info (dusty blue) — always as bg + border + fg triads.
- **No pink, no lavender, no purple.** Hard rule from the brief.

### Typography
- **UI + body:** **Noto Sans** (variable, `wdth` + `wght` axes). Loaded locally from `fonts/`. Humanist, friendly, wide language coverage — the official Lumen brand typeface.
- **Display accent:** Instrument Serif Italic. Used for page titles, hero numerals, and pull-quotes. Never for paragraphs, never for buttons.
- **Mono:** JetBrains Mono, small and quiet — code blocks, kbd chips, token names.
- Headings lean **semibold (600)**, not bold. Letter-spacing is tight (`-0.02em`) on display, relaxed on captions.

### Spacing
4px base scale. Layouts breathe on 16 / 24 / 32. Sidebar is 240 px; topbar is 64 px. Content gutters are 28–32 px. Don't cram.

### Radii
- Default card/surface: **16 px** (`--radius-lg`).
- Buttons & inputs: **10 px** (`--radius-md`).
- Pill badges, toggles: fully rounded (`9999px`).
- Avatars: 50%.
- Lumen leans aggressively rounded. If a corner feels sharp, it probably is — bump it up.

### Shadows
Warm-tinted (`rgba(74, 47, 15, …)`), never pure black. Five levels (`xs → xl`) plus a `--shadow-glow` focus halo in the brand color. Default resting state is `xs` on the faintest cards; hover lifts to `md`.

### Borders
1 px, subtle (`--border-subtle` = `#EBE4D6`). A card almost always has both a shadow and a border — the border anchors the shape, the shadow gives lift.

### Backgrounds
- Page bg is **cream** (`#FBF8F3`), not white. White is reserved for cards and dialogs — it creates a soft contrast ladder.
- Hero regions use **radial gradients** from cream → honey → deeper amber, sometimes blended with a sage accent at the far corner (see `preview/brand-gradient.html`). Never linear gradients from blue → purple. Never glassy/frosted blur.
- No repeating patterns or textures in UI. Imagery slots (project thumbs) use soft gradient fills as placeholders.

### Imagery
Warm, naturally lit photography with generous negative space — if Lumen showed photos, they'd be morning-light still-lifes, ceramics, linen, ceramics, plants. Not stock photos of people in offices.

### Motion
- Default easing is `--ease-soft` (`cubic-bezier(0.32, 0.72, 0.2, 1)`) — gentle, with a tiny settle. Use this for entrances, lifts, and transforms.
- Durations: `fast 140ms` (hover, small state flips), `normal 240ms` (panels, menus), `slow 420ms` (page transitions, hero reveals).
- **No bounces, no overshoots.** Lumen motion feels like a curtain drifting, not a toy springing.
- Hover states prefer a slight **translateY(-2px) + shadow lift** over color changes.

### Interaction states
- **Hover:** subtle bg shift toward the next-lighter neutral, or lift-with-shadow on interactive cards.
- **Press:** no scale change. Use a darker bg or 1-step darker brand color instead. Lumen never "shrinks" on tap.
- **Focus:** visible ring using `--shadow-glow` (amber halo). Never invisible.
- **Disabled:** `opacity: 0.4`, no pointer events.

### Transparency & blur
Used *rarely*. The only scripted use is the modal overlay (`rgba(27, 24, 20, 0.45)` — warm black tint). No frosted glass chrome, no translucent sidebars.

### Layout
- Fixed sidebar + topbar; content scrolls.
- Cards sit on the cream page, white-on-cream. Inside a card, sunken regions revert to cream.
- Max content width ~1240 px; never truly full-bleed except for the editor canvas.

---

## Iconography

- **Icon system:** [Lucide](https://lucide.dev). Loaded as inline SVG (see `ui_kits/web_app/Sidebar.jsx` for the pattern). Stroke 1.75, rounded caps, rounded joins — matches the warm/friendly feel.
  - **Substitution note:** Lumen has no proprietary icon set. Lucide was picked as the closest CDN match to the rounded-stroke aesthetic the brief implied. If the user supplies a real Lumen icon set, swap it in at `assets/icons/` and update the `Icon` component.
- **Emoji:** never. Not in product, not in marketing.
- **Unicode glyphs as icons:** only `⌘ ⇧ ⌥ ⌃` in kbd chips and `▾ ▲ ▼` for disclosure / delta arrows. Nothing else.
- **Logo:** `assets/logo-lumen.svg` (horizontal lockup), `assets/mark-lumen.svg` (mark only), `assets/logo-lumen-inverse.svg` (for dark hero regions). The mark is a stacked-circle "soft aperture" — concentric warm rings reading as a sunrise / camera iris.

---

## Fonts

| Role | Family | Source |
| --- | --- | --- |
| UI / body sans | **Noto Sans** (variable, `wdth` + `wght`) | Shipped locally in `fonts/` |
| Display serif | **Instrument Serif** | Google Fonts CDN |
| Mono | **JetBrains Mono** | Google Fonts CDN |

Noto Sans is the official Lumen typeface; both upright and italic variable files live in `fonts/` and load via `@font-face` in `colors_and_type.css`.

---

## Using the system

```html
<link rel="stylesheet" href="colors_and_type.css">
<div class="card-box">
  <h2 class="type-h2">Soft light, carefully shaped.</h2>
  <p class="type-body">Body copy uses Inter Tight at 16 / 1.5.</p>
</div>
```

Or reference tokens directly:

```css
.my-button {
  background: var(--brand-500);
  color: var(--fg-on-brand);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  transition: all var(--duration-fast) var(--ease-soft);
}
```
