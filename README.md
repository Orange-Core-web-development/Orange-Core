# Orange Core

Orange Core is a collection of independent, multi-page website projects built primarily with **HTML, CSS and vanilla JavaScript**.

## Principles

- $0 starting budget: prefer free, open-source tools and assets.
- No React, Next.js, Vue or other application frameworks in the core stack.
- Each website in `projects/` is an independent project with its own pages, styles, scripts, assets and dependencies.
- Keep dependencies local to the project that needs them. Do not install every catalogue entry at the repository root.
- Verify package versions, maintenance, browser support and commercial-use licences before adoption.
- Optimise for mobile devices, accessibility and performance.

## Repository map

- `portfolio/` — the Orange Core portfolio website.
- `projects/` — independent website experiments and client-style demonstrations.
- `library-catalogue/` — research and usage notes for candidate libraries and native browser APIs.
- `documentation/` — repository-wide standards and workflows.

## Library catalogue target

The initial research target is 110 entries across 11 categories. This is a catalogue target, **not** a plan to install 110 packages. Native browser APIs are documented separately and do not require npm installation.

## Working agreement

Research and document first; install only when a project has a clear need. For npm-based projects, commit the project's `package.json` and lockfile so installations are reproducible.

See the README files in each top-level directory for more information.
