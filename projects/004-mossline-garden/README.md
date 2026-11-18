# 004 — MOSS / LINE Garden Studio

**Day:** 04 of the 30-day website challenge  
**Niche:** Landscape design, garden installation and seasonal care  
**Concept market:** Lusaka, Zambia  
**Business status:** Entirely fictional portfolio demonstration  
**Stack:** Semantic HTML, custom CSS, vanilla JavaScript and original SVG artwork  
**External runtime dependencies:** None

## Fictional business brief

**Name:** MOSS / LINE Garden Studio  
**Positioning:** A design-led garden studio that helps homeowners and small commercial properties plan, build and care for considered outdoor spaces.  
**Concept base:** Kabulonga, Lusaka, Zambia (fictional).  
**Concept service area:** Lusaka and nearby neighbourhoods; larger or out-of-area projects would require a separate feasibility discussion.  
**Email:** hello@mossline.example (reserved example domain; not a live mailbox).  
**Phone:** +260 000 000 000 (invented demonstration number; not a live contact).  
**Operating status:** Not a real business and not accepting enquiries or work.

### Brand promise

“Gardens with a point of view.” The brand combines spatial planning, planting composition and useful aftercare. Its visual language uses forest green, limestone, sage and clay, with original architectural/botanical illustrations.

### Intended customers

- Homeowners and townhouse residents.
- Owners of courtyards and compact gardens.
- Boutique hospitality businesses.
- Office and commercial property managers.
- Property developers planning shared outdoor spaces.

### Service catalogue

1. **Landscape design:** discovery, site notes, spatial layout, mood direction, planting palette, material notes, phasing and indicative scope.
2. **Garden installation:** site preparation, planting coordination, bed and edge work, paths and selected outdoor details.
3. **Seasonal garden care:** pruning, mulch and soil-cover review, plant-health observations, irrigation observation and seasonal task planning.
4. **Specialist coordination:** irrigation, lighting or structural elements can be referred to or coordinated with suitably competent specialists; this fictional studio makes no claim to hold those qualifications itself.

### Illustrative concept fees

- Discovery: from ZMW 1,200.
- Concept design pack: from ZMW 4,800.
- Installation: site-scoped estimate.

These are invented sample prices used to demonstrate transparent pricing presentation. They are not market research, a quotation or an offer from a real provider.

### Fictional concept studies

- **The Shaded Courtyard:** a compact residential garden imagined around a shaded sitting area, layered screening and a clear indoor-outdoor path.
- **Arrival Garden:** a boutique guesthouse entrance concept using a legible arrival sequence, low planting and warm evening light.
- **Room to Gather:** a family garden study balancing play space, a flexible outdoor table and resilient planting edges.

All three are illustrative concept studies. They are not built projects, client work, testimonials or evidence of completed installations.

## Pages

- index.html — studio positioning, services, fictional concept studies and CTA.
- services.html — design, installation, care, illustrative fees and FAQs.
- plant-library.html — filterable planting-role library with design considerations.
- process.html — four-stage project journey and interactive broad-season guide.
- contact.html — fictional business details and local project-brief builder.

## Interactions

- Responsive mobile navigation with aria-expanded state and Escape-key close.
- Plant-role filter buttons with aria-pressed state and live result count.
- Season selector that updates months, guidance and task prompts.
- Project-brief form with native validation.
- Generated project note and copy-to-clipboard action.
- Native details/summary FAQs.
- Visible focus states, skip link and reduced-motion CSS.

The contact form generates text locally in the browser. It does not transmit, email, store or submit data to a server.

## File structure

    004-mossline-garden/
    ├── index.html
    ├── services.html
    ├── plant-library.html
    ├── process.html
    ├── contact.html
    ├── css/
    │   └── site.css
    ├── js/
    │   └── site.js
    ├── assets/
    │   ├── mossline-mark.svg
    │   ├── hero-courtyard.svg
    │   ├── planting-plan.svg
    │   └── leaf-study.svg
    ├── research.md
    └── README.md

## Assets and licences

All four SVGs are original vector artwork created for this portfolio project. No stock photographs, external icon packs, downloaded 3D models, external fonts or third-party JavaScript libraries are used. No third-party attribution is required for these original assets.

The website uses system font stacks so the design does not require a remote font service. The artwork is conceptual illustration, not a construction drawing, planting specification or as-built project record.

## Preview locally

Open index.html directly, or run a local static server from this folder:

    python3 -m http.server 8000

Then visit http://localhost:8000.

No npm install, bundler or build step is required. Internal page and asset paths are relative so the project can be hosted below a repository subpath.

## Demo policies and limitations

- The business identity, base, service area, contact details, sample prices and concept projects are fictional.
- No actual booking, quotation, payment, email or enquiry endpoint is connected.
- The project brief remains in the visitor's browser memory while the page is open; it is not sent or saved to a server.
- Planting-role descriptions are educational design prompts, not species recommendations. A real planting schedule requires site assessment and local horticultural verification.
- Seasonal guidance is broad and based on the public Zambia Tourism climate summary. Actual rainfall, soil moisture and site conditions vary.
- Irrigation, electrical lighting, structural elements, drainage alterations and other specialist work require appropriate technical assessment and qualified providers.
- Sample prices are not live prices or market averages.
- There are no real customer testimonials, certifications, warranties or completed project claims.

## QA checklist

- [x] Five independent HTML pages created.
- [x] Shared relative navigation and local asset paths.
- [x] Original SVG illustrations and favicon.
- [x] Responsive desktop, tablet and mobile breakpoints authored.
- [x] Mobile navigation has accessible state and Escape-key close.
- [x] Plant filters update visibility and announce result count.
- [x] Seasonal guide updates content without navigation.
- [x] Project brief uses native validation and local copy action.
- [x] Reduced-motion rules and visible focus styles included.
- [x] No external runtime libraries or required network assets.
- [ ] Manual physical-device testing on iOS and Android.
- [ ] Cross-browser manual interaction and browser-console testing.
- [ ] Live GitHub Pages publication test.

## Deployment

Publish this directory as a static site root or copy its contents into a dedicated static-site repository. Keep the directory structure intact. All internal links are relative and no build output is required. A live deployment is not claimed until Pages is enabled and tested.
