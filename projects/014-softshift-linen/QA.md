# Quality assurance — Day 14

## Automated / static checks

- [x] Six independent HTML pages are present.
- [x] All navigation destinations point to included pages.
- [x] All local SVG and CSS/JS references point to included files.
- [x] All SVG files are well-formed XML.
- [x] JavaScript parses successfully with Node.js syntax checking.
- [x] No duplicate HTML IDs detected within any page.
- [x] No empty internal href attributes detected.
- [x] All in-page anchor targets exist.
- [x] ZIP archive integrity verified.
- [x] Paths are relative and GitHub Pages compatible.
- [x] Responsive breakpoints and reduced-motion fallback are included.
- [x] Form controls have labels and brief output uses a live status region.

## Functional smoke tests

- [x] Local HTTP server returned 200 for all six pages, stylesheet, script and SVG assets.
- [x] Service filter buttons are wired to filter the catalogue.
- [x] Occupancy / room / kg assumptions recalculate the planning estimate.
- [x] Project form uses native required-field validation.
- [x] Project brief generation is local-only; copy and TXT download controls are implemented.
- [x] Reset clears the form and generated brief.
- [x] Mobile navigation toggles and closes after navigation.

## Manual checks still recommended

- [ ] Test on physical iOS and Android devices at narrow widths.
- [ ] Inspect the browser console in current Chrome, Firefox and Safari.
- [ ] Keyboard-test every filter, navigation item, form control and disclosure.
- [ ] Confirm clipboard behaviour on HTTPS in the target browser.
- [ ] Review content with a real laundry operator and local legal/compliance adviser before any commercial use.

## Limitations

No browser automation or physical-device testing was available in this build environment. No real backend, booking, payment, email submission, live route tracking or production data is connected. The business and all contacts are fictional. The site is a static portfolio concept, not an operational laundry service.