# Orange Core

Orange Core is a creative web studio portfolio containing six independent, multi-page flagship concept websites and a set of experimental web experiences.

## Creative direction

- Build ambitious, memorable digital experiences rather than generic templates.
- Use semantic HTML, modern CSS and vanilla JavaScript; no React, Next.js or application framework.
- Each project owns its identity, page structure, visual system, styles and scripts.
- Shared root dependencies are available where useful, but each project should import only what it needs.
- Page-specific CSS is encouraged. Use component stylesheets for reusable systems, page stylesheets for distinct page identities, and inline styles for genuinely one-off section treatments.
- Keep the experience responsive, accessible, fast and usable with reduced motion.

## Flagship concepts

1. **APEX MOTORS** — cinematic automotive showroom and 3D vehicle configurator.
2. **VELOCITY SUPPLY** — premium cycling e-commerce storefront demonstration.
3. **ATELIER ESTATES** — immersive architecture and property experience.
4. **NOIRÉ** — expressive restaurant and hospitality brand.
5. **NEXORA** — fictional AI business intelligence product and dashboard.
6. **ETHERBOUND** — experimental interactive 3D story world.

These are fictional portfolio concepts. Any checkout, analytics, AI, booking or enquiry flows are demonstrations unless explicitly connected to real services.

## Repository map

- `projects/` — independent flagship websites.
- `portfolio/` — Orange Core's own portfolio website.
- `library-catalogue/` — notes on available libraries and browser APIs.
- `documentation/` — shared standards, asset records and workflows.

## Dependencies

The root package provides a shared catalogue of optional libraries. Import only what a project actually uses. Do not load every library on every page. Check each library's current licence and compatibility before client work.

## Local development

Use the root npm scripts for the active project. The first build target is APEX MOTORS:

```bash
npm run dev:apex
npm run build:apex
```

See each project's README for its brief, pages, interactions and asset provenance.
