---
name: lumen-design
description: Use this skill to generate well-branded interfaces and assets for Lumen, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Tokens:** `colors_and_type.css` — import or copy values from it.
- **Components:** `ui_kits/web_app/` — Sidebar, Topbar, ProjectCard, and screen Views (home, projects, settings, editor).
- **Brand assets:** `assets/logo-lumen.svg`, `assets/mark-lumen.svg`, `assets/logo-lumen-inverse.svg`.
- **Icon system:** Lucide (inline SVG, stroke 1.75, rounded caps). Pattern defined in `ui_kits/web_app/Sidebar.jsx`.
- **Fonts:** Noto Sans variable (sans — shipped in `fonts/`), Instrument Serif (display italic — Google Fonts), JetBrains Mono (mono — Google Fonts).

## Non-negotiables

- Warm cream page backgrounds (`#FBF8F3`), never white page bg.
- Warm neutrals throughout — no cool gray.
- Generously rounded corners (16 px default for cards).
- No pink, no lavender, no purple.
- No emoji.
- Sentence case for all UI copy.
- Humanist, quiet tone — never playful/corporate.
