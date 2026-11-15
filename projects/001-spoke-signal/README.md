# Spoke & Signal — Day 01

**Niche:** Mobile bicycle repair and servicing  
**Concept location:** Bristol, England, UK  
**Project type:** Fictional portfolio concept  
**Stack:** HTML, CSS, vanilla JavaScript, original SVG artwork  
**External dependencies:** None

## Fictional business brief

Spoke & Signal is a premium, appointment-based mobile bicycle workshop concept for riders who would rather spend their time riding than transporting a bike to a shop. It serves home, workplace and selected community locations across Bristol, with nearby areas considered by appointment.

The concept is positioned around calm, careful mechanical work, transparent service tiers and clear communication. It is designed for commuters, road and gravel riders, families, folding-bike owners and small workplace fleets.

All business details in this project are invented for demonstration. The sample prices are illustrative, not a real offer. Customer stories are explicitly labelled as fictional. The business does not claim real accreditation, insurance, trading history or customer reviews.

## Pages

- \`index.html\` — brand introduction, service overview, service area and FAQs
- \`services.html\` — service packages, common repairs and pricing notes
- \`approach.html\` — process, supported bike types and service boundaries
- \`contact.html\` — interactive request builder with local copy/print actions

## Preview locally

Open \`index.html\` directly in a modern browser, or run a simple static server from this folder:

\`\`\`bash
python3 -m http.server 8000
\`\`\`

Then visit \`http://localhost:8000\`.

No package installation or build step is required. The project uses relative links and assets, so it can be published as a GitHub Pages project site from this folder (or copied into a repository's Pages publishing root).

## Interactions

- Responsive navigation menu with keyboard support
- Native expandable FAQ disclosures
- Scroll-in reveal effects that respect reduced-motion preferences
- Request builder that generates a copyable/printable enquiry summary locally
- No data is submitted to a server; no tracking or third-party scripts are included

## Asset and licence notes

- \`assets/img/workshop-illustration.svg\` and \`assets/img/favicon.svg\` are original vector artwork authored for this concept.
- No external photographs, fonts, icon packs, models, libraries or stock assets are used.
- No third-party licence or attribution is required for the original artwork in this project.

## QA checklist

- [x] Multi-page navigation uses relative paths.
- [x] Layout includes mobile breakpoints and a collapsible navigation menu.
- [x] Form validation and local request-summary generation are implemented.
- [x] FAQ uses native accessible \`details/summary\` elements.
- [x] No third-party network dependency or build system.
- [x] GitHub Pages-compatible relative asset paths.
- [ ] Browser/device testing on physical iOS and Android devices.
- [ ] Cross-browser manual testing and console inspection after deployment.
