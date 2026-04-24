# Lumen web app — UI kit

A click-thru recreation of the Lumen web app. Navigate via the sidebar; click any project card to enter the editor view.

## Components

- **Sidebar.jsx** — workspace nav, upgrade callout, user chip
- **Topbar.jsx** — page title + breadcrumbs, search with ⌘ K, new-project CTA
- **ProjectCard.jsx** — thumb + meta + collaborators + status chip
- **Views.jsx** — HomeView, ProjectsView, SettingsView, EditorView

## Screens

- **Home** — greeting, stats, recent projects grid
- **Projects** — full grid with filter tabs
- **Settings** — workspace / profile / notifications / billing tabs with toggles and form fields
- **Editor** — 3-pane layout: layers, canvas, inspector with color/radius/shadow

All colors, radii, fonts, and motion tokens come from `../../colors_and_type.css`.
