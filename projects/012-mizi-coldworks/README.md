# MIZI Coldworks — Day 12

**Niche:** Commercial refrigeration, cold rooms and cold-chain engineering.  
**Fictional base:** Light Industrial Area, Lusaka, Zambia.  
**Tagline:** Protect the good stuff.

> MIZI Coldworks is a fictional portfolio business. Its contacts, proposed location, service promises, policies, case studies and testimonial-style quotes are invented. It is not a real contractor.

## Website pages
- `index.html` — brand, systems overview and fictional project studies.
- `systems.html` — filterable system catalogue.
- `maintenance.html` — sample maintenance framework, fault-response checklist and FAQs.
- `sectors.html` — filterable sector pages for food processing, retail, agriculture, hospitality and specialist storage.
- `field-guide.html` — product-first specification notes, food-safety context, monitoring, FAQs and sample policies.
- `brief.html` — local project-brief generator, geometric volume estimator, copy and TXT download.

## Source package
The complete HTML/CSS/JavaScript/SVG website is in [site-source.tar.br](./site-source.tar.br). It is a Brotli-compressed tar archive. Extract it with:
```bash
brotli -d site-source.tar.br -o site-source.tar
tar -xf site-source.tar
```
A standard ZIP with the website and all project documentation is also attached to the Day 12 run deliverables.

## Preview
No build step or package manager is needed:
```bash
python3 -m http.server 8000
```
Open http://localhost:8000 from the extracted project directory.

## GitHub Pages
All site paths are relative. To publish independently, extract the website contents into the root of a dedicated repository or a `/docs` folder configured as the Pages source. An arbitrary nested project folder is not automatically published by GitHub Pages without a workflow.

## Interactions
Responsive navigation; system and sector filters; scroll reveals with reduced-motion fallback; room-volume calculation; validated project-brief generation; copy-to-clipboard; TXT download; native FAQ disclosures. The form is local-only and sends no data. The volume tool calculates geometric volume only, not cooling load, equipment capacity, cost or energy consumption.

## Fictional brief
MIZI is imagined as a Lusaka-based commercial refrigeration studio serving Lusaka, Kafue, Chilanga and Chongwe, with Copperbelt work by arrangement. Its proposed catalogue includes cold rooms, freezer rooms, blast chilling/freezing, display/preparation refrigeration, controls, monitoring, commissioning, repairs, maintenance and plant upgrades.

Fictional contact placeholders: `hello@mizi.example`, `+260 000 000 000`. The proposed Light Industrial Area location is not a visitor address.

## Assets and limitations
All five SVG illustrations are original artwork. No stock photography, 3D models, paid assets, third-party runtime libraries, remote fonts or CDN dependencies are used; system fonts are used throughout. No third-party attribution is required.

No licences, certifications, customer logos, real projects, warranties, performance results or 24/7 service guarantees are claimed. Healthcare/pharmaceutical cold-chain work is identified as specialist and is not claimed as a MIZI capability. Policy copy is illustrative, not legal advice.