# Seseragi Theme — Project Instructions

### Project Overview
Seseragi is a minimalist, visually calm web theme. The name means "the sound of flowing water." It prioritizes readability, whitespace, and typographic serenity over decoration.

### Design Philosophy
- **Visual comfort first** — generous line height, restrained color, soft backgrounds
- **Flat with subtle depth** — gradient surface via `gradient-surface`, not shadows or borders
- **Typography-driven** — Lora (serif body/titles) + Lato (UI elements only)
- **Composable, not contextual** — classes describe roles, not locations

### CSS Architecture Rules
- Minimize `div` usage; prefer semantic elements (`section`, `article`, `header`, `nav`, `main`, `footer`)
- Use `div` only for non-semantic containers (e.g. gradient wrappers, layout shims)
- Avoid context-only selectors like `header h1` — prefer composable classes like `.logo`
- Selector pattern for layout + component pairs: `.cards .card`, not `section > section`
- All design tokens live in `:root` CSS custom properties — never hardcode colors or sizes

### Layout System
Three stackable content section types inside `.content.margin-set-content`:

| Pattern | Class | Layout |
|---|---|---|
| Card grid | `.cards` + `.card` | 3-col grid → 2-col → 1-col responsive |
| Article | `article.margin-set-readable` | Single centered column, drop cap support |
| Flow | `.flow-wrap` | Sticky left + scrolling right, collapses on mobile |

### Component Conventions
- **Cards**: `.cards` owns the grid; `.card` owns the component. The element type (`section`, `article`, etc.) carries semantic meaning independently.
- **Drop cap**: `.drop-cap` floats left; add `.with-circle` for the purple border variant
- **Panel nav**: Animated height via `grid-template-rows: 0fr → 1fr`; toggled by `.open` class
- **Sticky header**: `.pin` / `.pin-to-top` with `position: sticky; top: 0; z-index: 100`

### Files
| File | Purpose |
|---|---|
| `minimal.css` | All styles — single stylesheet for the theme |
| `seseragi-m-home.html` | Card grid layout demo |
| `seseragi-m-article.html` | Article layout with drop cap |
| `seseragi-m-flow.html` | Flow layout (text + text) |
| `seseragi-m-flow-media.html` | Flow layout (image + text) |

### Color Palette (CSS vars)
- Background: `--bg-color` `#eee`
- Accent: `--seseragi-purple` `#6D4F91`
- Link/tagline: `--seseragi-blue` `#3377AA`
- Text: `--seseragi-text-color` `#000`

### What to Preserve
- The hamburger/panel nav JS pattern — self-contained IIFE, no dependencies
- Google Fonts preconnect links
- `--header-height` must stay in sync with the actual computed header height if header padding changes
- Footer copyright comment format: `&copy;<!-- date range -->year name theme`