# 003 — Kitewire Solar & Storage

**Day:** 03 of the 30-day website challenge  
**Niche:** Solar PV, battery storage and installation services  
**Concept market:** Lusaka, Zambia  
**Project type:** Fictional business / portfolio demonstration  
**Stack:** Semantic HTML, custom CSS, vanilla JavaScript and original SVG artwork  
**External dependencies:** None

## The concept

Kitewire Solar & Storage is a fictional solar and battery planning business for homes, small businesses and productive-use sites. The brand idea is that good energy systems begin with a clear picture of what must keep running.

The website uses a technical/editorial identity: midnight ink, warm sand, solar yellow, clay and muted blue. Its diagrams and typography aim to make the system feel understandable without pretending a web page can replace an engineering assessment.

All business details, service promises, service area, phone, email, operating model and project content are invented. No real licence, technical staff, customer, installation, warranty, product stock or performance claim is represented.

## Pages

- index.html — brand story, residential/business/productive-use pathways, process and CTA.
- systems.html — home continuity, business continuity, productive-use systems and component roles.
- process.html — discovery, site/load review, design, installation/handover and regulatory trust checks.
- estimator.html — adjustable appliance load planner and illustrative backup planning assumptions.
- contact.html — fictional contact details, concept service area and local project brief builder.

## Interactions

- Responsive mobile navigation with aria-expanded state and Escape-key close.
- Scroll reveal using Intersection Observer, with a reduced-motion fallback.
- Appliance load planner with editable quantities and daily hours.
- Daily energy, connected-load, illustrative battery planning and inverter conversation figures.
- Copyable local load snapshot.
- Contact brief with native validation and locally generated copyable text.
- Native details/summary FAQs.
- Visible focus states and skip link.

## Run locally

Open index.html in a browser or run a static server from this directory:

    python3 -m http.server 8000

Visit http://localhost:8000.

No npm install or build command is required. All pages, styles, scripts and SVG artwork are local and use relative paths.

## Asset and licence register

- assets/img/kitewire-mark.svg — original logo mark.
- assets/img/hero-roof.svg — original solar roof illustration.
- assets/img/system-flow.svg — original conceptual energy-flow diagram, not an electrical wiring plan.
- assets/img/battery-stack.svg — original inverter/battery illustration, not to scale.
- No third-party images, fonts, icons, 3D models or JavaScript libraries are used.
- No third-party attribution is required for the original artwork.

## Demo and safety boundaries

The business, contact details, service area and every service promise are fictional. The .example email domain is reserved for examples; the phone number is invented. The site does not represent a licensed solar installer or a real provider.

The load planner is a conversation starter only. Its wattages are illustrative and its assumptions are disclosed in the tool and research report. It is not a system design, bill-savings calculator, quote or engineering recommendation.

The contact form validates and creates copyable text in the visitor's browser. It does not transmit or store form data. No booking, payment, quote, monitoring or service API is connected.

A real solar installation must be assessed by appropriately authorised and competent professionals. Current ERB requirements, applicable standards, equipment conformity, ZESCO interconnection/net-metering requirements and site conditions must be checked for the actual project.

## QA checklist

- [x] Five independent pages and relative navigation.
- [x] Original local SVG assets and favicon.
- [x] Responsive breakpoints and mobile navigation.
- [x] Reduced-motion preference support.
- [x] Keyboard focus styles and skip link.
- [x] Appliance load planner and copyable result.
- [x] Contact brief validation and local copy action.
- [x] Fictional details and safety limitations disclosed.
- [x] No external dependency or package install required.
- [ ] Physical iOS/Android visual testing.
- [ ] Cross-browser manual test and browser-console inspection.
- [ ] GitHub Pages publication test.

## Deployment

Publish this folder as the GitHub Pages project root or copy its contents into a dedicated static-site repository. All internal paths are relative, so the project can live below a repository subpath. A live URL is not claimed until Pages is enabled and tested.
