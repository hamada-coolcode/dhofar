# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static tourism website for Dhofar, Oman featuring landmarks across categories (Khareef, Deserts, Coasts, Ruins). Built with Vue 3 and Tailwind CSS (via DaisyUI), requiring no build step. **Fully offline-compatible** - all libraries are stored locally in `vendor/` for `file://` protocol support.

## Development

This is a pure static site - no build commands, bundlers, or tests. **Works offline** - open HTML files directly in a browser:

```bash
# Open directly via file:// protocol (fully supported)
# Or serve with any static server if preferred
python3 -m http.server 8000
# or
npx serve .
```

## Architecture

### Pages
- `index.html` - Landing page with video carousel and category links
- `pages/khareef.html`, `pages/deserts.html`, `pages/coasts.html`, `pages/ruins.html` - Category pages with place galleries

### Component Structure
```
js/vue/components/
  Sidebar.js, Navbar.js, Footer.js    - Layout components
  Carousel.js, ViewSections.js             - Landing page sections
  Gallery.js, Card.js                 - Place listing (Gallery has place data)
  ContentOverview.js                   - Category grid for index page
  Settings.js                          - Language/theme modal
  Sections/PlaceCategorySection.js     - Video hero section for categories
```

### Key Patterns

**i18n**: All translatable strings use object syntax `{ en: "...", ar: "..." }`:
```js
title: { en: "Khareef", ar: "الخريف" }
```

**Language injection**: Components use `inject: ["language"]` and compute `currentLang`:
```js
computed: {
  currentLang() {
    return this.language?.value || this.language || "en";
  }
}
```

**Theme**: Controlled via `data-theme` attribute on `<html>` (values: `light`, `dark`) and stored in localStorage as `accent`.

**RTL**: Set via `dir="rtl"` on `<html>` when Arabic is selected. CSS switches fonts via `[dir="rtl"]` selector.

**Place data**: Currently hardcoded in `js/vue/components/Gallery.js` in `allPlaces` array. Each place has: `id`, `category`, `name`, `state`, `rating`, `image`, `description`, `location` (Google Maps embed URL), `gallery`.

### Styling
- Custom CSS in `css/general.css` with CSS variables for theming
- DaisyUI for component styling (themes via `data-theme`)
- Tailwind CSS utilities
- Custom fonts in `fonts/` (Impact, Pacifico, Poppins, Tajawal, Ruqaa)

### Libraries (Local - vendor/)
All libraries are stored locally for offline/file:// compatibility:
- Vue 3: `vendor/vue.global.prod.js` (160K)
- Tailwind CSS + DaisyUI: `vendor/tailwindcss.browser.js` (254K), `vendor/daisyui.css` (947K)
- Lucide icons: `vendor/lucide.min.js` (389K)
- TypeIt (typing effect): `vendor/typeit.umd.min.js` (12K)
