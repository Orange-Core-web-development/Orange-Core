# CUEHOUSE — Day 10 website

> Creative event production for brands, teams and ideas that deserve a room of their own.

## Fictional business brief
- **Name:** CUEHOUSE Studio
- **Positioning:** Creative event production for brands, teams and ideas that deserve a room of their own.
- **Location:** Lusaka, Zambia (fictional). Service area: Lusaka and selected nationwide projects by quote.
- **Audience:** Brand/marketing leads, communications teams, HR/people teams, corporate leadership, associations, product teams and agencies.
- **Contact:** hello@cuehouse.example · +260 970 000 010 · Plot 00, Arcadia, Lusaka (all fictional placeholder details).
- **Working hours:** Monday–Friday, 09:00–17:00, appointment only (fictional).
- **Voice:** confident, precise, playful, no empty “perfect event” promises.

## Service catalogue (illustrative)
- **Signal / Strategy:** brief discovery, audience, objectives, event format, creative direction, budget framework.
- **Live / Production:** stage, AV, lighting, show-calling, run-of-show and vendor coordination.
- **Launch / Brand activation:** pop-up moments, interactive installations, roadshows and sampling zones.
- **Gather / Conference & team:** registration, programme, speakers, delegate flow, internal events and team experiences.
- **After / Content & close-out:** recap capture, content handover, feedback summary and post-event recommendations.

Pricing is not a market quote. The concept directs complex scopes to a discovery brief rather than presenting fabricated fixed prices.

## Fictional concept work
Three fictional case-study concepts: fintech product launch, people-and-culture retreat, and sustainability pop-up. They are not completed real client events. No real client testimonials or logos are used.

## Policies
- An enquiry is a request for discussion, not a booking or contract.
- A written scope, schedule, budget, inclusions and cancellation terms would be agreed before any deposit or production begins.
- Changes after sign-off may affect cost, delivery times or availability and would be confirmed in writing.
- Venue, vendor, travel, permits, insurance, power, accessibility, safety and contingency needs are reviewed for each event.
- Contact details use the reserved `.example` domain; the front-end form does not transmit or store personal data.

## Pages and assets
Five HTML pages: Home, Services (filterable), Concept Work, Process/FAQ and Brief Builder. Shared `styles.css` and `script.js`; five original SVG assets in `assets/`. The ZIP artifact contains the complete source website and local artwork. The individual website source files are not mirrored into this GitHub project directory in this run.

## Assets & licences
All SVGs are original vector artwork created for this concept. No stock photos, third-party icon pack, paid asset, web font or external runtime dependency. System fonts are used; no attribution is required for the original artwork.

## Preview
Extract the ZIP and run from the project directory:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`. No install/build step. Relative paths are GitHub Pages-compatible.

## QA
- [x] Five static pages, shared navigation and footer.
- [x] Responsive breakpoints, keyboard-visible focus styles and reduced-motion support.
- [x] Services filter, FAQ disclosure and brief builder wired.
- [x] Local links, fragments, asset paths and duplicate IDs checked.
- [x] JavaScript syntax checked with Node.
- [x] Local HTTP smoke requests returned 200 for all HTML, CSS, JS and SVG assets.
- [ ] Manual mobile/desktop testing.
- [ ] Browser console testing in multiple browsers.
- [ ] GitHub Pages live deployment verification.

## Limitations
Fictional brand, location, contact, policies, pricing assumptions and case studies. The form only generates a local text draft; the email action opens a mail client with a fictional recipient and does not submit to a backend. No live deployment.
