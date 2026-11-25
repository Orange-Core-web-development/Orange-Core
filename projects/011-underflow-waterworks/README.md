# UNDERFLOW Waterworks — Day 11 portfolio website

**Niche:** Borehole drilling, groundwater investigation and complete water systems  
**Fictional base:** Makeni, Lusaka, Zambia  
**Tagline:** Water starts long before the tap.

> This is a fictional portfolio concept. The business, location details, email, phone number, staff, project concepts, testimonials and policies are invented. It is not a real contractor and must not be used to solicit payments or real work.

## Pages
- `index.html` — overview, positioning, services and customer segments.
- `services.html` — filterable catalogue: groundwater siting, drilling, test pumping, pumps, storage, rehabilitation, sampling and agricultural systems.
- `process.html` — five-stage project sequence and site-readiness checklist.
- `projects.html` — three clearly labelled fictional concept studies and illustrative quotes.
- `field-guide.html` — site readiness, WARMA context, water quality, maintenance and illustrative policies.
- `request.html` — accessible project-brief builder with validation, copy and .txt download.

## File structure
```text
011-underflow-waterworks/
├── index.html
├── services.html
├── process.html
├── projects.html
├── field-guide.html
├── request.html
├── styles.css
├── script.js
├── research.md
├── README.md
└── assets/
    ├── brand-mark.svg
    ├── hero-cutaway.svg
    ├── rig-detail.svg
    ├── pump-system.svg
    └── contour-lines.svg
```

## Preview locally
No package manager or build step is needed:
```bash
python3 -m http.server 8000
```
Open http://localhost:8000.

## GitHub Pages
This is a static site and uses only relative local paths. To publish it independently, copy the contents of this folder into the root of a dedicated repository, or into a /docs folder and select /docs as the Pages publishing source. GitHub Pages does not generally publish an arbitrary nested project directory directly without a deployment workflow. Keep relative paths intact.

## Interactions
- Responsive mobile navigation with aria-expanded.
- Scroll reveal effects with prefers-reduced-motion fallback.
- Service catalogue and project concept filters.
- Project brief validation and local summary generation.
- Copy brief and download .txt actions.
- Native details/summary disclosures and visible keyboard focus.

The request form does not submit to a server, send email or store personal data. It generates a local demonstration brief only.

## Assets and licences
All SVG illustrations and the brand mark in assets/ were authored specifically for this fictional portfolio concept. No stock photography, external font files, 3D models, icon libraries, paid assets or remote runtime dependencies are used. CSS uses system font stacks. No third-party attribution is required.

## Fictional business brief
UNDERFLOW Waterworks is imagined as a specialist groundwater and water-systems contractor based in Makeni, Lusaka. The proposed service area is Lusaka Province and selected nearby districts, subject to mobilisation and site review.

**Positioning:** A borehole is one part of a complete water system. UNDERFLOW brings investigation, drilling, pump selection, storage, distribution and records into one clearly scoped project.

**Target customers:** homeowners, residential estates, farms, horticulture operations, schools, clinics, institutions, commercial properties, developers and community projects.

**Catalogue:** groundwater siting; borehole drilling; casing and development; test pumping; submersible and solar pumping; pump controls; tanks and stands; water reticulation; rehabilitation; water sampling coordination; agricultural water planning.

**Contact placeholders:** hello@underflow.example, +260 000 000 000, Makeni, Lusaka. These are deliberately non-operational placeholders.

**Fictional testimonials and case studies:** All examples on projects.html are explicitly labelled as concept studies or illustrative statements. They are not client endorsements or real installations.

## Important real-world limitations
- A geophysical survey cannot guarantee water, drilling depth or yield.
- Borehole drilling and abstraction have regulatory requirements in Zambia. Check current WARMA rules and licensing before any real project.
- Do not assume borehole water is potable. Appropriate sampling and laboratory testing are required before drinking.
- The legal and policy text is a plain-language design example, not legal advice or a binding contract.
- No real licences, professional registrations, project statistics, certifications, warranties or customer reviews are claimed.

See research.md for niche research, competitor observations, sourced facts and source links.

## QA checklist
- [x] Six independent HTML pages created.
- [x] Local navigation and asset paths are relative.
- [x] Service and project filters have functional state.
- [x] Request form validates and generates a local brief.
- [x] Copy and text-download controls are implemented.
- [x] Native disclosures used for accessible guide content.
- [x] Mobile navigation and responsive breakpoints included.
- [x] prefers-reduced-motion fallback included.
- [x] No external runtime dependencies.
- [ ] Manual testing on physical mobile devices.
- [ ] Manual browser console inspection in current Chrome, Firefox and Safari.
- [ ] Real-world deployment and form/backend integration (intentionally not configured).
