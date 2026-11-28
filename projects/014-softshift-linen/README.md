# SOFTSHIFT Linen Co. — Day 14 website

**Niche:** Managed commercial laundry, linen rotation and laundry operations support  
**Location:** Chinika Industrial Area, Lusaka, Zambia (fictional)  
**Service area:** Lusaka, Kafue, Chilanga and Chongwe; other routes only by written arrangement  
**Positioning:** Linen in motion. Standards in place.

> **Portfolio disclaimer:** SOFTSHIFT Linen Co. is a fictional business concept. Its name, location, service area, contacts, service capability and operating details are illustrative. It is not a real supplier. Contact details use the reserved .example domain and a placeholder telephone number.

## Pages

- index.html — home, positioning, services and process overview
- services.html — filterable service catalogue
- sectors.html — hospitality, healthcare/care, food service and workwear
- operations.html — five-stage operating model and records
- field-guide.html — handling principles, textile care, sample policies and FAQs
- request.html — local linen-volume estimator and project-brief generator

## Run locally

No package manager, build step, server API or external library is required.

    python3 -m http.server 8000

Open http://localhost:8000.

## GitHub Pages

The website is a self-contained static site and uses relative paths. To deploy it independently, place the contents of the source package in a repository root or a /docs directory and select that publishing source in repository settings. If kept under projects/014-softshift-linen/, it is reachable only if the repository's Pages configuration publishes the repository root; it is not automatically a separate deployment.

## Interactions

- Responsive mobile navigation.
- Service filters on services.html.
- Weekly linen-volume estimator on request.html.
- Required-field validation and local project-brief generation.
- Copy-to-clipboard and TXT download.
- Native FAQ and policy disclosures.
- Scroll reveal with reduced-motion fallback.

The project brief is generated entirely in the browser. It is not transmitted, emailed, stored or submitted to a server. Clipboard access may require HTTPS or localhost; if unavailable, the interface selects the generated text for manual copying.

## Service and compliance boundaries

The concept does not claim sterile processing, surgical textile reprocessing, medical-device processing, infection-control certification, Zambian regulatory approval, current licences, insurance, a real fleet or verified customer references. Any real healthcare engagement would require a facility-led scope and confirmation of applicable local requirements. Sample policies are illustrative outlines, not legal terms or a binding contract.

## Asset notes

All SVG files in assets/ are original vector illustrations created for this project. No third-party images, paid assets, external font files, 3D models or JavaScript libraries are used. See ASSET-LICENSES.md.

## Research

See research.md for niche research, source links, competitor observations and the distinction between sourced findings and design assumptions.

## Source package status

The complete six-page website source and local assets are included in the Day 14 ZIP delivered with this run. This repository update commits the research and project documentation; the individual HTML/CSS/JS and SVG source files are not mirrored into GitHub in this commit.