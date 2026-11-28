# TALLYWAY — QA checklist

**Run date:** 28 November 2026  
**Website type:** Multi-page static HTML/CSS/vanilla JavaScript  
**Pages:** 7

## Automated / local checks
- [x] Seven HTML pages exist: index, services, corridors, sectors, process, trade desk and brief.
- [x] Local CSS, JS, favicon and SVG references resolve within the project folder.
- [x] Navigation targets are relative and suitable for a standalone GitHub Pages root or /docs folder.
- [x] No duplicate IDs found in the HTML pages.
- [x] All SVG assets parse as XML.
- [x] JavaScript passes Node syntax validation.
- [x] Internal href targets resolve to local files or valid in-page IDs.
- [x] ZIP archive integrity verified.
- [x] prefers-reduced-motion handling included.
- [x] Mobile navigation uses a real button with aria-expanded and aria-controls.
- [x] Filters update visible cards and aria-pressed state.
- [x] Shipment brief validates required fields and calculates package CBM locally.
- [x] Copy and TXT download actions are implemented with graceful clipboard fallback.
- [x] Forms/checklists do not submit data to a backend.
- [x] Local HTTP smoke test: all seven pages, CSS, JS and five SVG assets returned HTTP 200.

## Manual checks still recommended
- [ ] Test on physical iOS and Android devices.
- [ ] Inspect browser console in current Chrome, Firefox and Safari.
- [ ] Test keyboard-only navigation and screen-reader announcements.
- [ ] Confirm external ZRA/COMESA/ICC/Trade.gov links remain current.
- [ ] Verify colour contrast with an automated accessibility tool.
- [ ] Test GitHub Pages after publication at the actual repository URL.

## Known limitations
No backend, live shipment tracking, carrier API, email delivery, payment, account login or persistent storage. The CBM calculator is geometric only and does not determine container fit, loadability, volumetric weight rules, freight cost, customs value or duty. The route map is schematic and not to scale; no transit time, distance or current border status is asserted. Contact information, location, business, service claims, policies and case studies are fictional. No customs clearing-agent licence, bonded warehouse, carrier assets or insurance cover is claimed.
