# 001 — APEX MOTORS

A fictional premium performance-automotive brand and interactive showroom. This is a portfolio concept, not a real manufacturer or vehicle.

## Experience goals

- Cinematic editorial homepage with a distinctive motorsport identity.
- Interactive Three.js concept vehicle with pointer rotation.
- Vehicle detail/configurator page with live paint selection.
- Responsive layouts and reduced-motion support.
- Real multi-page navigation rather than a single-page landing page.

## Pages

- `index.html` — brand introduction, philosophy, design feature and concept specifications.
- `vehicle.html` — interactive A-01 concept presentation, colour controls and fictional technical data.

## Stack

- Semantic HTML, CSS and vanilla JavaScript.
- Three.js for the interactive 3D concept vehicle.
- GSAP for entrance motion.
- Lenis for desktop smooth scrolling, disabled for reduced-motion and small-screen contexts.
- Vite for local development and production bundling.

## Styling architecture

- `css/site.css` contains the shared APEX design system and responsive foundations.
- Future pages may add page-specific stylesheets.
- Inline CSS is welcome for isolated art-directed sections; avoid forcing unique compositions into generic shared classes.

## 3D asset strategy

The initial A-01 is a procedural Three.js study built from geometry primitives, so the experience works without an external model download. It is a temporary original placeholder, not a finished production vehicle model.

Before replacing it with a downloadable model:
- Prefer GLB/glTF.
- Check the exact model's licence and creator page.
- Record attribution and licence evidence in `assets/models/ASSET-REGISTER.md`.
- Optimise geometry and textures, test mobile performance, and retain a static fallback.

## Run

From the repository root:

```bash
npm run dev:apex
npm run build:apex
```

All vehicle specifications are fictional demonstration data.
