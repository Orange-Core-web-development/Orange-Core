# 002 — Fieldnote Roasters

**Day:** 02 of the 30-day website challenge  
**Niche:** Independent specialty coffee roasting, DTC coffee sales and café wholesale  
**Concept market:** Cape Town, South Africa  
**Project type:** Fictional business / portfolio demonstration  
**Stack:** Semantic HTML, custom CSS, vanilla JavaScript and original SVG artwork  
**External dependencies:** None

## The concept

Fieldnote Roasters is a fictional Cape Town micro-roastery for curious home brewers and small hospitality teams. Its brand idea is that every coffee has a somewhere: a place, a process, a person and a story worth exploring.

The site combines a retail coffee catalogue, coffee finder, local sample bag, brew journal, wholesale proposition and enquiry builders. The visual identity uses warm paper, espresso ink, orange, cobalt, lime and lilac.

All business names, contact details, address, products, origins as offered by the fictional brand, flavour notes, prices, opening hours, testimonials (none are presented as real) and service promises are invented demonstration content. No real business or producer relationship is represented.

## Pages

- index.html — brand story, featured coffees, origin illustration, coffee finder, club concept and wholesale callout.
- coffees.html — four product cards, profile filters, sample prices and local sample bag.
- brew.html — coffee-to-water ratio calculator, brew method shortcuts, grind notes and water guidance.
- wholesale.html — café, office and event service concepts, wholesale enquiry builder and FAQs.
- contact.html — fictional contact details, locally generated contact note and clear demo policies.

## Interactions

- Responsive mobile navigation with aria-expanded state.
- Product filters for espresso, filter and decaf.
- Add-to-bag buttons, persistent local demo bag, remove controls and illustrative total.
- Copyable sample order note; no payment or checkout.
- Coffee finder based on brew method and flavour preference.
- Brew ratio calculator with filter, plunger, AeroPress and espresso starting ratios.
- Wholesale and contact forms with native validation and local text generation/copy only.
- Native details/summary FAQs.
- Reduced-motion CSS and visible focus states.

## Run locally

Open index.html in a browser or run a static server from this folder:

    python3 -m http.server 8000

Visit http://localhost:8000.

No npm install or build command is required. All pages, CSS, JavaScript and SVG assets are local and use relative paths.

## Asset and licence register

- assets/fieldnote-mark.svg — original logo/fav icon drawn for this project.
- assets/coffee-bag.svg — original coffee pouch illustration drawn for this project.
- assets/origin-notes.svg — original abstract origin-map illustration drawn for this project.
- No stock photos, downloaded fonts, third-party icons, 3D models, music or JavaScript libraries are used.
- No third-party attribution is required for the original vector artwork.

## Demo and privacy boundaries

The sample bag uses browser localStorage on the visitor's own device. It is a visual shopping demonstration and does not create a real order. The wholesale and contact forms only generate copyable text in the browser. They do not send, transmit or save form data to a server. The .example email is reserved for examples.

## QA checklist

- [x] Five independent pages and relative navigation.
- [x] Original local SVG assets.
- [x] Responsive breakpoints for desktop, tablet and mobile.
- [x] Reduced-motion preference support.
- [x] Product filtering and add/remove bag interactions.
- [x] Coffee finder and brew-ratio calculator.
- [x] Local enquiry-note builders with native validation.
- [x] Fictional details and demo-only policies disclosed.
- [x] No external dependency or package install required.
- [ ] Physical iOS/Android visual testing.
- [ ] Cross-browser manual test and browser-console inspection.
- [ ] GitHub Pages publication test.

## Deployment

Publish this folder as the GitHub Pages project root or copy its contents into a dedicated static-site repository. Because all internal paths are relative, the project can live below a repository subpath. A live URL is not claimed until Pages is enabled and tested.
