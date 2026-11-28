# FOLDLINE Packaging Studio — Day 15 website

**Niche:** Branded paper packaging, labels and short-run print production  
**Location:** Rhodes Park, Lusaka, Zambia (fictional)  
**Service area:** Lusaka and selected regional destinations by written arrangement  
**Positioning:** Packaging with a point of view. Production with a plan.

> **Portfolio disclaimer:** FOLDLINE Packaging Studio is a fictional business concept. Its name, location, service area, contacts, products, scenarios and policies are illustrative. It is not a real supplier. Contact details use the reserved `.example` domain and a placeholder telephone number.

## Pages
- `index.html` — brand introduction, packaging capabilities, sector pathways and illustrative concept work.
- `packaging.html` — filterable catalogue of boxes, labels, bags, sleeves, inserts and display formats.
- `sectors.html` — food and beverage, beauty, agriculture, retail/e-commerce, hospitality and manufacturing.
- `materials.html` — paperboard, corrugated board, label stocks, print and finish considerations.
- `work.html` — three explicitly fictional packaging concept studies; not real client work or testimonials.
- `process.html` — brief, structure, artwork, proof, production and dispatch workflow; artwork checklist and FAQs.
- `quote.html` — interactive packaging brief builder with live spec summary, copy and TXT download.

## Run locally
No package manager, build step, server API or external JavaScript library is required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages
This is a self-contained static site and uses relative paths. To deploy it independently, place the website files and `assets/` directory in a repository root or a `/docs` directory, then choose that publishing source in repository settings. If kept under `projects/015-foldline-packaging/`, it is part of the portfolio source tree; it is not automatically a separate Pages deployment.

## Interactions
- Responsive mobile navigation and packaging-format filters.
- Project brief form with required-field validation and live summary preview.
- Copy-to-clipboard with a manual-copy fallback and downloadable TXT brief.
- Native FAQ disclosures, scroll reveal and reduced-motion fallback.

The brief generator runs entirely in the browser. It does not send, store or email the entered information. The form is a portfolio demonstration, not a live quote submission system.

## Commercial and compliance boundaries
The concept does not claim food-contact approval, a ZABS certification, FSC chain-of-custody certification, compostability, universal recyclability, a real factory, machinery, suppliers, staff, insurance, client references or guaranteed lead times. Food label content and claims must be confirmed by the product owner against applicable Zambian requirements and standards. The site is not legal, regulatory or packaging-engineering advice.

No prices are displayed because actual cost depends on dimensions, substrate, print route, quantity, tooling, finish, proofing and delivery.

## Research and assets
See `research.md` for the niche report and source links. All five SVG illustrations are original vector artwork. No third-party photos, stock assets, paid assets, remote fonts, 3D models or JavaScript libraries are used. See `ASSET-LICENSES.md`.
