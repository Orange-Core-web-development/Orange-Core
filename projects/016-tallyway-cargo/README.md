# TALLYWAY Cargo & Trade — Day 16

**Niche:** Freight forwarding, customs coordination and cross-border logistics.  
**Fictional base:** Lusaka, Zambia (concept location only).  
**Tagline:** Every hand-off, accounted for.

> TALLYWAY is a fictional portfolio business. Its name, location, service area, contact details, policies and concept case studies are invented. It is not a real freight operator, carrier, customs clearing agent, warehouse or insurer.

## Website pages
- `index.html` — positioning, capabilities, route overview and fictional concept files.
- `services.html` — filterable planning, movement and support catalogue.
- `corridors.html` — illustrative Zambia-linked corridor families and route-readiness checklist.
- `sectors.html` — mining/project cargo, agriculture, retail, manufacturing, institutional and construction pathways.
- `process.html` — five-stage operating model, sample policies and FAQs.
- `trade-desk.html` — import/export document prompts, local readiness checklist, Incoterms orientation and official reference links.
- `brief.html` — local shipment brief generator and geometric package-volume calculator, with copy and TXT download.

## Preview
No build step, package manager or server dependency is required:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## GitHub Pages
All links and assets use relative paths. To publish independently, copy the website contents into the root of a GitHub repository or a `/docs` directory configured as the Pages source. GitHub Pages does not publish an arbitrary nested project folder by default without a workflow.

## Interactions
Responsive mobile navigation; active-page state; service and sector filters; scroll reveal with reduced-motion fallback; local route and document checklists; shipment brief validation; package volume calculation from centimetre dimensions and quantity; copy-to-clipboard; TXT download; native FAQ disclosures.

The form and checklists run in the browser only. No data is sent, saved or stored. The volume calculation is geometric CBM only; it does not determine loadability, freight price, customs value, duties, taxes, insurance, route, permits or transit time.

## Fictional business brief
TALLYWAY is imagined as a compact Lusaka-based freight coordination and planning desk serving Zambia-linked regional and port-connected commercial movements. The concept covers shipment scoping, road/air/ocean coordination, document readiness, coordination with an appointed licensed customs agent, project cargo planning, storage/consolidation through partners and milestone reporting.

Fictional contact placeholders: `hello@tallyway.example`, `+260 000 000 000`. The proposed Lusaka base is not a real visitor address.

## Important scope boundary
TALLYWAY does **not** claim a customs clearing-agent licence, bonded warehouse, fleet, carrier contract, insurance product, border office, live GPS feed or completed shipment history. ZRA's current process requires clearing agents to be licensed and appointed by the importer/exporter for the relevant work. The concept therefore describes document readiness and coordination only; actual customs declarations must be handled by an appropriately licensed and appointed agent or an authorised self-clearer.

## Source package
The complete runnable HTML/CSS/JavaScript/SVG source package is delivered as `day16-tallyway-cargo.zip` in the Day 16 conversation deliverables. It contains seven HTML pages, shared CSS and JavaScript, five original SVG assets, research, QA and asset notes. The repository directory contains the research and project documentation plus the original SVG artwork; the ZIP is the convenient complete source bundle.

## Asset notes
All five SVG assets are original artwork created for this concept. No stock photography, 3D models, paid assets, external fonts, CDN scripts or third-party runtime libraries are used. See `ASSET-LICENSES.md`.
