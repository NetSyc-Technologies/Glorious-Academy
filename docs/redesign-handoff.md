# Glorious Academy — redesign handoff (2 October 2026)

## Design and supplied assets
- New ivory, deep-blue and orange homepage, shared navigation/footer and inner-page treatments.
- Official `public/images/galogo.png` is used by the shared Brand component and page icons.
- `public/images/galogo_animated.mp4` is shown in a keyboard-accessible native modal with playback controls.
- `public/images/nitish_kumar.png` is used in the founder feature, hero attribution and About page.
- Existing classroom and centre photographs are reused; confirm these represent the academy before public launch.
- Pointer-reactive 3D cards, a floating science graphic, hero photo parallax, scroll reveals, and a swipe/keyboard-scrollable gallery. The motion button pauses ambient animation; system reduced-motion settings are respected.

## Functionality
- Course tabs support arrow, Home and End keys; enquiry links preselect the course.
- Mobile navigation traps focus and closes with Escape, restoring focus.
- The logo film uses native dialog focus handling and locks background scrolling.
- Admissions/contact submissions save reference-numbered records in the existing local JSON adapter. Tests clean up only records they create.
- The former question-paper downloads generated text summaries. They were replaced with actual JEE Advanced PDF links and clearly labelled official portals. Search and exam/year filters remain available.
- Notification adapter now reports `sent: false` honestly. Email delivery requires an implemented transport and credentials; environment variables alone are insufficient.

## Verification
- Production build and TypeScript passed.
- Repository ESLint passed with existing warnings (unused imports and older unoptimized image elements).
- All seven existing API tests passed: homepage, valid enquiry, persistence, spam rejection, invalid phone, contact submission and private enquiry listing.
- Browser checks: desktop and 390px mobile; no horizontal overflow or broken images; logo video playback; course click/keyboard selection; gallery controls; pause/play motion; FAQ; mobile Escape; NEET preselection; empty-form validation; no browser console errors.

## Official resource sources
Verified on 2 October 2026:
- https://jeeadv.ac.in/archive.html — English Papers 1 and 2 for 2023, 2024 and 2025.
- https://www.cbse.gov.in/cbsenew/question-paper.html — CBSE paper archive.
- https://www.nta.ac.in/quiz — official CBT practice interface.
- https://www.nta.ac.in/ — NEET examination notices and resources.
- https://cetcell.mahacet.org/ — CET official notices, syllabus and candidate services.

## Local operation
The machine’s `npm` launcher points at a missing npm-cli.js. The installed dependencies work directly:

    node node_modules/next/dist/bin/next dev
    node node_modules/next/dist/bin/next build
    node node_modules/typescript/bin/tsc --noEmit
    node node_modules/eslint/bin/eslint.js
    node tests/test_api.mjs

The existing dev server is available at http://localhost:3000. No deployment was performed.
For production, replace local JSON storage with a persistent database or a persistent server volume; do not rely on an ephemeral serverless filesystem.

Final resource checks: search, exam/year combinations, zero-result state and reset passed; six PDF destinations were verified against the JEE Advanced official archive. Changed implementation files pass ESLint without warnings.
