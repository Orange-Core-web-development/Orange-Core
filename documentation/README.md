# Repository Documentation

This folder contains repository-wide standards and workflows.

## Project structure and styling

Every directory in `projects/` is an independent multi-page website. Keep shared foundations small and project-specific visual identities strong.

Use:
- shared CSS for resets, tokens, accessibility helpers and genuinely reusable components;
- page-specific CSS for distinct page layouts and visual treatments;
- inline CSS for isolated, one-off section treatments when it improves clarity and keeps the design self-contained.

Avoid turning every page into the same template. Keep CSS readable and document unusual inline treatments.

## Dependency policy

The root package contains optional shared dependencies to avoid repeated installs in this zero-budget workspace. Projects import only the packages they need. Keep package versions and the lockfile in sync; do not add a dependency simply because it is available.

Use native browser APIs and CSS where they are the better, lighter choice. Check vanilla JavaScript entry points before using framework-oriented packages.

## 3D model and asset licensing

Before adding an external model, image, animation, font or sound:
1. Record the original creator and source page.
2. Record the exact licence shown for that individual asset.
3. Check commercial-use, modification, redistribution and attribution conditions.
4. Keep the licence or attribution text with the downloaded asset.
5. Prefer CC0 or similarly permissive assets for portfolio demonstrations.
6. Optimise GLB/glTF geometry and textures; use lazy loading and a non-WebGL fallback.

A free download is not automatically free for commercial use. Platform-wide claims do not replace the licence attached to an individual asset.

## Accessibility and performance

- Respect `prefers-reduced-motion`; provide a meaningful reduced-motion experience.
- Keep keyboard focus visible and controls operable without a pointer.
- Do not autoplay sound. Audio must be opt-in.
- Provide text alternatives for canvas/WebGL content.
- Lazy-load large images and 3D models.
- Keep mobile GPU, memory and network limits in mind.
- Never make essential content available only through animation.

## Active development

APEX MOTORS is the first flagship project. Run `npm run dev:apex` for its Vite development server and `npm run build:apex` to create its production build.
