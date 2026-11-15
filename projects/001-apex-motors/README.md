# 001 — APEX MOTORS

A fictional premium performance-automotive marque and interactive digital showroom. The vehicle, brand and performance data are concept content, not a real manufacturer or production vehicle.

## Experience scope
APEX is intended to feel like a complete automotive brand platform, not a short landing page. The first milestone establishes brand identity, 3D showroom and deeper product storytelling. Further passes can add more models, journal, configurator options and responsive interaction polish.

## Current pages
- `index.html` — brand introduction, philosophy, engineering mindset, design language and concept specifications.
- `vehicle.html` — A-01 model detail, live 3D viewer, paint selection, exterior design breakdown, cockpit concept, engineering notes and fictional technical data.

## 3D model
The viewer loads an unbranded CC0 generic mid-engine supercar GLB from Innerscene through Three.js GLTFLoader. Source, direct file and licence are recorded in `assets/models/ASSET-REGISTER.md`. The viewer displays loading progress and a source-file fallback if the external host is unavailable.

## Stack
Semantic HTML, project-specific CSS and vanilla JavaScript; Three.js + GLTFLoader; GSAP entrance motion; Lenis desktop smooth scrolling with reduced-motion and small-screen guardrails; Vite.

## Styling
Keep APEX independent. Shared foundations live in `css/site.css`; page-specific stylesheets are welcome. Inline CSS is encouraged for genuinely bespoke editorial sections.

## Run
```bash
npm run dev:apex
npm run build:apex
```
All specifications and performance figures are fictional concept data.
