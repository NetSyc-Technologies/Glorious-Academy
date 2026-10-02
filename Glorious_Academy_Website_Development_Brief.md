# Glorious Academy — Complete Website Development Brief

**Deliverable:** A complete, responsive academy website with a premium light theme, purposeful motion graphics, polished content pages, and a reliable admissions enquiry workflow.

**Prepared:** 1 October 2026.  
**Audience:** AI coding agent, developer, designer, and client reviewer.  
**Content basis:** The old-site extraction supplied in the conversation, referencing https://www.gloriousacademy.info/. The academy facts below are legacy source material, not independently verified current facts. Design, architecture, page copy, and features marked as recommendations are proposals for the new website.

---

## 1. Instructions to the AI Coding Agent

Build the website described in this document. Deliver a cohesive, production-quality implementation with functional navigation, responsive layouts, reusable components, meaningful motion, real form states, and maintainable content. Treat this brief as the product and design specification. Use an existing repository's conventions when present; for a new project, use the proposed stack in Section 17.

Begin with a short repository assessment and implementation checklist, then implement the design system, shared shell, homepage, inner pages, and enquiry integration. Make reasonable implementation choices and continue through verification. Do not stop after producing a landing page, wireframe, or collection of disconnected UI components.

Preserve content provenance. Never invent faculty credentials, student ranks, testimonials, institutional awards, batch dates, admissions deadlines, social profiles, accreditation, examination rules, or fee guarantees. Pending client content must not block building the layouts: use clearly labelled fixtures only in a development preview, and hide unsupported sections in the public build. Track missing material in a client handoff checklist.

The deliverable is an admissions and information website. Student accounts, paid course access, online exams, payment collection, and an LMS are optional future modules, not baseline requirements. Implement the baseline fully before proposing those extensions. Build and verify locally; deployment and domain changes require a separate launch instruction.

## 2. Product Goals and Audience

The website should help students and parents understand the academy, compare preparation paths, find a centre, explore genuine resources and outcomes, and submit an admission enquiry. Its visual quality should communicate academic seriousness, personal support, and modern teaching.

Primary audiences are students preparing for JEE Main & Advanced, NEET, MHT-CET, and Class 10 or 12 Board examinations; parents comparing coaching options; and existing students seeking resources and updates. Typical visitors will use mid-range Android phones and variable mobile connections.

Primary conversion: **Enquire About Admission**. Secondary actions: **Explore Courses**, **Find a Centre**, **Call the Academy**, and **Browse PYQs**. Use these labels consistently. An enquiry does not constitute admission or payment confirmation.

## 3. Scope and Feature Priorities

| Priority | Include | Completion requirement |
| --- | --- | --- |
| Baseline | Homepage, About, course catalogue, four course families, Results & Alumni, Testimonials, Resources/PYQs, Centres, Admissions, Contact, FAQ, legal routes, 404 | Every page designed and all links functional; unavailable evidence handled gracefully |
| Baseline | Light theme, responsive navigation, mobile action bar, motion system, accessible components | Consistent across all public pages |
| Baseline | Working enquiry backend, validation, rate limiting, notifications, truthful success/failure states | Tested using a configured development destination |
| Baseline | Structured content, SEO metadata, redirect plan, asset register, launch checklist | Editable without changing page components |
| Enhancement | Course comparison, illustrated learning journey, searchable PYQs, filterable student showcase, gallery lightbox | Include in initial implementation when the corresponding source data exists |
| Optional extension | CMS/admin interface, news publishing, downloadable brochure, multilingual content | Activate only with approved content and configured services |
| Future | Payments, scholarships, student login, attendance, LMS, online testing | Separate scope; do not create misleading buttons for unavailable services |

## 4. Creative Direction: “Clear Learning. Confident Futures.”

Create a bright, refined educational brand experience. Use generous whitespace, strong typography, meaningful academic imagery, restrained gradients, thin borders, and carefully composed cards. The website should feel like a credible local academy with modern presentation, rather than a generic SaaS dashboard.

Use a mostly white and warm off-white canvas with deep blue navigation and call-to-action accents, teal supporting accents, and soft sky-blue section backgrounds. Include a custom educational illustration built with SVG/CSS: books, subject symbols, concept cards, a route toward a goal, and subtle orbital lines. Use genuine student and campus photography when available. Geometry, illustration, and typography should make the design feel complete even before a full photography collection is supplied.

Maintain a light theme throughout. Do not add a dark-mode toggle. A compact deep-blue CTA or footer can provide contrast, but large dark sections must not dominate. Avoid excessive glass panels, oversized glowing blobs, constant bouncing icons, copied stock dashboards, irrelevant technology graphics, or repetitive identical card grids.

### 4.1 Proposed design tokens

The palette is provisional until the official logo/brand kit is provided. Preserve adequate contrast when adapting it.

| Token | Value | Application |
| --- | --- | --- |
| Background | `#FFFFFF` | Main canvas |
| Warm surface | `#FAFAF7` | Alternating sections |
| Cool surface | `#F0F6FF` | Hero illustration and highlights |
| Primary | `#1E40AF` | Buttons, links, active states |
| Primary hover | `#1E3A8A` | Hover/pressed states |
| Accent | `#0F766E` | Secondary highlights and learning markers |
| Accent surface | `#ECFDF5` | Supporting chips |
| Heading text | `#111827` | Main headings |
| Body text | `#374151` | Paragraphs |
| Secondary text | `#4B5563` | Metadata |
| Border | `#D8E1EB` | Separators and card outlines |
| Error | `#B91C1C` | Form errors |
| Focus ring | `#1D4ED8` | Visible keyboard focus |
| Card shadow | `0 12px 32px rgba(15,23,42,0.06)` | Elevated surfaces |

Use **Manrope** for headings and **Inter** for body/UI, self-hosted where practical. Use system font fallbacks and font-display swap. At most two font families, and only needed weights. Default body: 16–18px, line-height 1.6–1.75; headings: line-height 1.08–1.2; paragraph measure: approximately 60–70 characters. Hero heading: fluid 38–72px; section heading: fluid 28–44px. Avoid tiny text and heavily tracked paragraph lettering.

Use an 8px spacing rhythm with 4px increments where necessary. Desktop sections: 88–112px vertical padding; mobile: 48–64px. Main container: max-width approximately 1240px, with 20px mobile, 32px tablet, and 40px desktop gutters. Radius: 12px controls, 20px cards, 28px feature panels. Pills are reserved for badges and short filters.

### 4.2 Composition rules

Each viewport should have one clear focal point. Alternate full-width editorial sections, two-column features, comparison layouts, and card showcases. Align headings, descriptions, and CTA rows consistently. Use bento layouts selectively for the teaching approach; standard grids are better for comparable courses. Do not wrap every sentence inside a card.

Use one consistent outline icon family. Decorative icons are hidden from assistive technology; icon-only controls have accessible labels. Keep button heights at least 44px, with comfortable 48–52px primary actions.

## 5. Information Architecture and Routes

| Route | Purpose | Primary CTA |
| --- | --- | --- |
| `/` | Brand introduction and guided course discovery | Enquire About Admission |
| `/about` | Academy approach, director, verified team | Discuss Your Goals |
| `/courses` | Browse and compare course families | View Course |
| `/courses/jee` | JEE Main & Advanced preparation | Enquire About JEE |
| `/courses/neet` | NEET preparation | Enquire About NEET |
| `/courses/mht-cet` | MHT-CET preparation | Enquire About MHT-CET |
| `/courses/boards` | Class 10 & 12 Board preparation | Enquire About Board Coaching |
| `/results` | Verified result cards and Engineering/Medical alumni | Explore Courses |
| `/testimonials` | Approved student feedback and source documents | Speak to the Academy |
| `/resources` | Study resources landing page | Browse PYQs |
| `/resources/pyqs` | Searchable, filterable paper library | View/Download Paper |
| `/centres` | Compare published centre locations | Get Directions |
| `/centres/chandrapur` | Warora Naka centre information | Enquire for This Centre |
| `/centres/bhadrawati` | Bhadrawati centre information | Enquire for This Centre |
| `/admissions` | Course/centre selection and enquiry | Submit Enquiry |
| `/contact` | Direct contact and general enquiry | Send Message |
| `/faq` | Searchable or grouped questions | Contact the Academy |
| `/privacy-policy` | Client-approved privacy text | Contact |
| `/terms` | Client-approved terms | Contact |
| unmatched route | Helpful 404 with course/centre links | Return Home |

Do not create empty news, faculty, gallery, or download pages solely to increase the sitemap. Show a verified gallery within About/Centres; add a dedicated gallery later if there is enough content. Course sub-pages share a template with genuinely different information and visual subject cues.

## 6. Shared Navigation and Site Shell

### Desktop

Use a slim top utility strip for the main telephone number and centre shortcuts. Show an admissions announcement only when its message and dates are approved. Below it, place the logo at left, navigation in the middle, and a strong enquiry CTA at right. Main items: About, Courses, Results, Resources, Centres, Contact. Testimonials and FAQ can live in appropriate dropdowns/footer links.

Courses dropdown: four course families with short descriptions. Resources dropdown: resource overview and PYQs. Use modest panel motion, pointer and keyboard support, click-to-open behavior, Escape-to-close, and clear active states. Menus must work without hover.

Header remains sticky and gains a light border/shadow after approximately 16px scroll. Keep its height stable to prevent layout shifts. Add `scroll-margin-top` for anchor targets. Include a skip-to-content link.

### Mobile

Use a compact logo, clear menu button, and accessible slide-in navigation drawer. Trap focus while open, close on Escape/backdrop/navigation, restore focus to the trigger, and lock background scrolling. Keep course links easy to find.

Use a bottom action bar with **Call** and **Enquire**. Respect safe-area insets and add equivalent page padding. Hide or reposition it while a form is being edited if it obstructs controls. A WhatsApp control is enabled only after the client confirms the number is WhatsApp-enabled. Avoid overlapping floating chat, sticky CTAs, consent notices, and scroll controls.

### Footer

Use an airy multi-column footer with logo/short description, course links, centre information, resources/legal links, and confirmed contacts. Show social icons only for supplied URLs. Use the current year automatically. The legal company name is configurable and needs client confirmation. Never add a NetSyc credit or developer link unless approved for this client project.

## 7. Homepage — Complete Section Specification

### 7.1 Hero: first impression and course discovery

Desktop: approximately 55/45 text-to-visual split, balanced within the main container. Small eyebrow: **JEE • NEET • MHT-CET • Boards**. Proposed headline: **Build Strong Concepts. Prepare for Your Next Step.** Use a short supporting paragraph: “Structured learning, regular practice, and personal guidance for students preparing for competitive and Board examinations.” CTAs: Enquire About Admission and Explore Courses. Beneath them, use three honest capability labels: Concept-focused learning, Regular practice tests, Personal guidance.

Visual: custom educational SVG composition on a soft-blue panel. Combine a book motif, chemistry/physics/math/biology cues, a central learning-path line, and four subject/course labels. If suitable photography is approved, introduce one genuine student/classroom cutout or image tile. No fabricated score cards or imagery implying real ranks. Decorative floating cards may say “Concepts”, “Practice”, and “Guidance”; they must not claim unverified outcomes.

Entrance: stagger headline, paragraph, buttons, and illustration by 80–100ms, with small opacity/vertical transitions. Keep the headline readable immediately. A finite 4–5 second decorative loop can draw SVG lines and gently move two illustration layers, then settle. Include replay only if useful. Hero height is content-driven, not forced to 100vh. Mobile stacks text before visual and reduces illustration complexity.

### 7.2 Compact course selector

Show “What are you preparing for?” with four large selectable course links. Use subject icons, concise descriptions, and target-class hints only if confirmed. This offers an immediate route for parents and students without requiring a quiz. Optional class/goal filters link to the catalogue; never pretend to offer AI recommendations.

### 7.3 Featured course cards

Four cards with distinct academic cues: JEE (geometry/engineering), NEET (biology/molecular), MHT-CET (math/science), Boards (books/foundation). Each card includes title, two-line purpose, available modes drawn from approved data, three support features, and View Course. Entire-card links must not conflict with nested buttons. Use equal visual rhythm without forcing large blank areas.

Hover on a fine pointer: 4px lift, stronger shadow, accent edge, arrow movement. Keyboard focus gives the same actionable emphasis. No pointer tracking required to understand the card. Mobile uses a two-column compact grid when comfortable, otherwise one column; never hides course information in an autoplay carousel.

### 7.4 Why Glorious: editorial bento showcase

Heading: “A structured approach to preparation.” One large feature tile for teaching/concepts, two compact tiles for study materials and mock tests, and a wide tile for mentorship/doubt resolution. Each includes a concise explanation and a small illustration or icon. Use approved descriptions of experienced faculty without inventing credentials.

Animate the main teaching diagram with a brief concept → practice → review sequence once when visible. Use genuine teaching photos for the large tile if available. Do not show “24×7” support until confirmed as a current service.

### 7.5 Learning journey

Present five steps: Understand your goal → Choose a preparation path → Learn concepts → Practise and review → Receive guidance. This is a proposed explanation of the learning approach, not a contractual promise about every batch.

Desktop: a bounded sticky illustration beside stacked step cards. As each card enters the viewport, highlight its marker and corresponding illustration segment. All steps remain readable without JavaScript. No scroll hijacking or forced pin duration. On mobile use a simple vertical timeline with one-time reveals. If the steps column is too short for a useful sticky effect, use a normal grid.

### 7.6 Results and student showcase

Use approved student cards with name, exam, year, result type, exact score/rank and destination only where supplied. Include a featured student story alongside a compact result grid when enough verified material exists. Do not publish the legacy 2 million, selection-ratio, or aggregate counters by default.

If no results are approved, hide this section in production and keep course/teaching content balanced. A development preview may include explicitly labelled fixture cards, never realistic fabricated student results. Link to the Results page when it has publishable entries.

### 7.7 Academy introduction and director

Use a genuine campus/director image if supplied, or a polished typographic academy story with a decorative diagram. Identify Prof. Nitish Kumar using the final approved title. Include the academy approach, its support for academic goals, and Learn About the Academy. A director quote is used only with exact approved wording; otherwise write ordinary descriptive copy without quotation marks.

### 7.8 Testimonials

Use an approved featured quotation and two supporting cards, with links to source documents where appropriate. No automatic sliding. On mobile, show stacked cards or user-controlled scroll snapping with visible controls. Preserve original meaning when transcribing handwritten feedback; use quotes only for accurate approved transcriptions.

### 7.9 Resources/PYQ preview

Use three resource tiles or a small list showing exam, year, subject/session, file type and actual download action. Include a library CTA. Show only resources approved for redistribution/linking. Never replace missing PDFs with empty links or pretend downloads.

### 7.10 Centre showcase

Two cards with authentic centre photos if available, complete addresses, local telephone numbers, Get Directions, and Enquire for This Centre. A simple location illustration is acceptable until photos exist. No map pin positioned by guessed coordinates. Centre selection pre-fills the admissions enquiry.

### 7.11 FAQ preview

Six concise questions about course families, learning modes, centre locations, enquiries, current fees, and how to access resources. Use answers grounded in the supplied content and confirmation status. Add View All FAQs. Accordion controls use `aria-expanded`, support keyboard interaction, and keep state stable during layout animation.

### 7.12 Final admissions CTA

Use a soft-blue or compact deep-blue panel: “Find the preparation path that fits your goals.” Short supporting sentence plus Enquire About Admission and Call the Academy. Avoid fake deadline timers, “only two seats left”, admission guarantees, or unapproved discounts.

## 8. Inner Page Layouts

### 8.1 About

Use breadcrumbs, a clear page introduction, academy story, educational philosophy, teaching approach, director section, team section when actual profiles exist, authentic campus gallery, and admissions CTA. Use large editorial image/text pairs rather than a wall of paragraphs. Team cards require real name, designation, subjects, approved qualifications/experience, and photo. Hide placeholder “Meet Our Team” content from production.

### 8.2 Course catalogue and comparison

Filter by preparation goal and approved learning mode. Persist filters in URL query parameters so results can be shared. Include accessible clear/reset controls and a meaningful no-results state. Show a compact comparison table for two or more selected courses, focusing on audience, subjects, mode, duration, learning support, and fee availability. Do not compare JEE/NEET with vague “best” rankings.

The catalogue works with content alone; it must not require authentication or an enquiry before basic information can be viewed. Preserve selection when users navigate back.

### 8.3 Course-detail template

Every course family page includes:

1. Breadcrumbs, distinctive subject illustration, course title, short audience explanation, enquiry CTA.
2. Overview and approved subject scope: JEE — Physics/Chemistry/Mathematics; NEET — Physics/Chemistry/Biology; MHT-CET and Boards — exact combinations/Board coverage confirmed per offering.
3. Program cards for confirmed learning modes/durations.
4. Included support: study resources, regular practice, tests, and mentorship as applicable to that specific offering.
5. A simple proposed learning process, separated from official batch schedules.
6. Fee information only when approved; otherwise “Contact the academy for current fees and batch availability.”
7. Approved related resources and testimonials.
8. Course-specific FAQs and final enquiry panel.

Desktop can use a small sticky enquiry summary beside long content. Disable stickiness on short pages and mobile. Course/variant selection must pre-fill the enquiry form; selecting a variant never implies purchase. No Buy Now or checkout unless a separate payment module is commissioned.

Examination eligibility, conducting agencies, frequencies, syllabus rules and dates must be obtained from current official sources before publication. The developer should not repeat outdated explanatory text from the legacy extraction as current exam guidance.

### 8.4 Results & Alumni

Use tabs or filters for exam family, year and Engineering/Medical alumni, only where populated. A result card can distinguish Board percentage, entrance percentile, marks, and rank; never label one as another. Student detail drawers/pages show only approved data and attribution. Do not calculate a selection ratio without an agreed denominator and evidence.

Empty state: “Student stories will be added as they are confirmed. Explore our courses or contact the academy.” Hide empty filters. Alumni imagery can be migrated after identity, permission and caption accuracy are checked. Do not infer a college or rank from a blurry image.

### 8.5 Testimonials

Display name, approved photo if supplied, approved quotation/transcription, and score context only when confirmed. Offer accessible PDF viewing/download for permitted handwritten originals. If a long testimonial is truncated, provide Read Full Feedback with an accessible dialog or detail view. Avoid converting general praise into an invented quotation.

### 8.6 Resources and PYQs

Provide exam/year/subject/session filters and keyword search. Each item shows title, exam, year, subject/session, paper/solution distinction, language if known, source/attribution, PDF badge, and file size only when known. View and Download have distinct actions. For third-party resources, use approved links or licensed files; official resource links are preferable when redistribution rights are unclear.

Handle loading, no results, unavailable documents, deleted links and failed fetches. Do not treat a link click as proof of completed download. Keep primary files public if intended to be public; do not introduce a forced signup requirement.

### 8.7 Centres and centre details

Centre index: two balanced centre cards and a location summary. Detail page: address, phone, supplied operating hours, confirmed courses at that centre, genuine gallery, directions, accessibility information if supplied, and enquiry CTA. Do not list every academy course at every centre without confirmation.

Maps can use an address-based external directions link. Load an embedded map only on request/visibility, with an accessible external link fallback. If the intended listing is ambiguous, use the approved address as a search query until the client supplies the correct map listing.

### 8.8 Admissions and Contact

Admissions: reassuring introduction, brief enquiry process, course/centre selection, concise form, contact alternative and grouped FAQs. Contact: phone/email/centre cards plus a general message form. Show the difference between an enquiry and a completed admission.

Admission process copy should say: submit your enquiry → academy discusses current options → confirm admission details directly with the academy. Do not promise a callback deadline without operational approval. Do not request payment, Aadhaar, or uploaded identity documents in the initial enquiry.

### 8.9 FAQ and legal pages

FAQ groups: Courses, Learning Support, Centres, Admissions & Fees, Resources. Enable search only when there are enough questions to justify it. Keep answers short and route-specific links useful.

Legal pages use a narrow readable column, section headings, effective date supplied by the client, and clear contact details. During development they may contain explicitly labelled drafts. Production requires approved policy text appropriate to the actual forms, hosting, analytics and services in use. Do not copy the old policy's encryption, domain, jurisdiction or collection claims.

## 9. Motion Graphics, Scroll Effects and Interaction Specification

Motion must guide attention, explain the learning process, and make interaction feel responsive. Apply one coherent motion system rather than stacking multiple libraries. Default to native scrolling and use Motion for React plus CSS/SVG. An additional animation engine requires a demonstrated need; do not install both Motion and GSAP for duplicate reveals.

| Element | Trigger and behavior | Duration/range | Mobile/reduced-motion behavior |
| --- | --- | --- | --- |
| Hero content | First render; small opacity/vertical entrance | 450–650ms; 12–20px; 80ms stagger | Text visible immediately; instant/static in reduced mode |
| Hero SVG | Visible in viewport; draw path and settle layers | One finite 4–5s sequence | Fewer layers on mobile; static in reduced mode |
| Section heading | First viewport entry | 450ms; 16px rise | No repeated reveal; static in reduced mode |
| Card grid | First viewport entry | 400–500ms; 50–70ms stagger; cap total delay at 300ms | Small stagger or none on mobile |
| Card interaction | Hover/focus | 180–220ms; up to 4px lift | No hover dependency; use border/focus state |
| Button | Hover/focus/press | 120–180ms; arrow moves up to 3px | Normal press/focus; no magnetic pointer movement |
| Illustration parallax | Native scroll, decorative layers only | Maximum approximately 16–24px | Disable on mobile and reduced motion |
| Journey illustration | Visible step changes | 250–350ms highlight update | Vertical timeline; no pinning |
| Header | Scroll threshold | Border/shadow transition, 180ms | Stable size on all screens |
| Accordion | User opens/closes | 180–250ms; controlled height/opacity | Instant in reduced mode |
| Filter results | User changes filter | Short fade, up to 180ms | Preserve focus and content announcement |
| Dialog/lightbox | Explicit user action | 150–220ms | Instant in reduced mode; full keyboard behavior |
| Page change | Route navigation | Optional 120–180ms content fade | No overlay, long exit delay or blocked routing |
| Progress indicator | Scroll on long course/resource pages | Thin subtle header-edge line | Optional; not announced on every update |

Use a restrained easing curve such as `cubic-bezier(0.22, 1, 0.36, 1)`. Prefer transform and opacity. Observe viewport intersection and pause work offscreen or when the document is hidden. Reserve image/illustration sizes before load. Do not attach a separate expensive scroll listener to every component.

Respect `prefers-reduced-motion` globally, including SVG/CSS animations and anchor scrolling. In reduced mode, remove parallax, path drawing, count-up, looping movement and translate animations; show final content immediately. Opacity changes may be instantaneous. Never render essential content invisible until JavaScript runs.

No scroll hijacking, mandatory smooth-scroll library, animated cursor, excessive tilt, background video on mobile, autoplay audio, flashing effects, or forced horizontal-scroll sections. If any decorative motion runs longer than five seconds, provide an accessible pause/stop control. The default design avoids that requirement by settling quickly.

## 10. Reusable Components and States

| Component | Required behavior |
| --- | --- |
| Header / MobileDrawer / Footer | Active route, menus, keyboard support, stable dimensions |
| SectionHeading / Breadcrumbs | Semantic heading levels, consistent spacing, navigation labels |
| Button / TextLink | Primary/secondary/link/loading/disabled; visible focus |
| CourseCard / ProgramCard | Data-driven variants; explicit audience and fee status |
| CourseFilters / CompareTable | Shareable filters, clear reset, usable horizontal overflow on narrow screens |
| FeatureBento / LearningJourney | Distinct layout, decorative graphics separated from readable content |
| ResultCard / AlumniCard | Correct metric type, year/exam context, approved evidence |
| TestimonialCard | Accurate quote, source reference and context |
| ResourceRow | Genuine file/link, source, availability, View/Download |
| CentreCard / CentreContact | Full address, phone, map and pre-filled enquiry actions |
| EnquiryForm | Validation, pending, success, server failure and retry |
| FAQAccordion | Keyboard input, expanded state, semantic controls |
| Gallery / Lightbox | Descriptive alt text, previous/next, Escape, focus restoration |
| StatusNotice / EmptyState | Useful next step, no invented data |
| Dialog / Toast | Proper focus or live-region behavior; important errors remain visible inline |

Implement loading, empty, unavailable, error, hover, focus, pressed, selected and disabled states where relevant. Native links navigate and native buttons perform actions. No visual-only click targets. Keep reusable components configurable; avoid route-specific strings hardcoded in them.

## 11. Content Model and Publishing Rules

Use typed data or a CMS-backed repository. Store content independently from page layout. Every evidence-sensitive record needs `sourceUrl`, `verificationStatus`, `approvedAt`, and an optional internal note. Allowed statuses: `legacy`, `pending`, `approved`, `archived`. Only approved evidence-sensitive records appear publicly. Internal provenance/notes never appear as awkward customer-facing system labels.

| Model | Key fields |
| --- | --- |
| SiteSettings | Brand name, approved legal name, primary phone, confirmed email, canonical domain, social URLs, logo |
| Course | Slug, title, summary, audience, subjects, available modes, support features, centre IDs, SEO |
| ProgramVariant | Course ID, duration, mode, current batch status, approved inclusions, fee status |
| Fee | INR amount, original amount if genuine, tax wording, academic year, effective dates, approval |
| Centre | Slug, name, full address, PIN, phone, approved map URL, operating hours, courses, gallery |
| Faculty | Name, role, subjects, credentials, experience, portrait, approval |
| StudentResult | Name, exam, year, metric type, value, institution if verified, consent/approval reference |
| Testimonial | Name, exact quote, approved transcription, source PDF, score context, consent/approval reference |
| Resource | Exam, year, title, subject/session, type, source, rights status, URL, file size, availability |
| FAQ | Group, question, approved answer, related routes |
| Enquiry | Name, contact, course/variant, centre, class, message, consent flags, source, server timestamp, status |

Keep development fixtures in a separate file and exclude them from the production bundle/output. Use explicit `public` or `draft` visibility for general content as well as verification status for sensitive claims. Missing prices render a real contact CTA; missing faculty/results hide that section. An empty public resources library gets a useful message and contact/course links, not fixture downloads.

## 12. Legacy Content Reference — Not a Current Fee Sheet

### 12.1 Academy and leadership

Legacy organization wording: **Glorious Academy Institute Pvt. Ltd.** Main offerings: JEE Main & Advanced, NEET, MHT-CET, and Class 10/Class 12 Board coaching. Legacy leadership: **Prof. Nitish Kumar**, shown as Managing Director/About and Director/Home. Confirm the final legal wording and title.

The usable brand description is: “Glorious Academy provides academic and competitive-examination preparation through structured learning, study materials, regular practice, testing, doubt resolution and personal guidance.” Subject expertise, practical skills, critical thinking and career support can be discussed without fabricated credentials or success guarantees.

Legacy support items include comprehensive notes/modules, practice sheets, mock tests, revision notes, PYQs, simplified notes, improvement books and career guidance. Weekly practice and weekend tests appear in the old site, but batch-specific schedules and 24×7 service availability need confirmation.

### 12.2 Published centre and contact references

| Item | Extracted value | Use status |
| --- | --- | --- |
| Main phone | +91 7028766674 | Seed as legacy reference; confirm before launch |
| Warora Naka centre | Dr. Ambedkar College Campus, Opposite Agarzari Restaurant, Warora Naka, Chandrapur – 442401 | Seed centre draft; confirm current address/map |
| Warora Naka phone | 7028766674 | Confirm before launch |
| Bhadrawati centre | Indoor Stadium, Old Fish Market, Near Bank of India, Bhadrawati – 442902 | Seed centre draft; confirm current address/map |
| Bhadrawati phone | 9764297221 | Confirm before launch |
| Intended email | info@gloriousacademy.co.in | The visible typo info@gloriusacademy.co.in must not be copied; confirm working mailbox |
| Nagpur centre | Mentioned in FAQ but not listed with a full centre address | Do not publish until client supplies current details |
| Exam info phone | +9190281866 | Incomplete-looking legacy value; exclude until corrected |
| Domain | gloriousacademy.info; other old text references .co.in and .org.in | Final canonical domain remains a client decision |

### 12.3 Legacy program/price inventory

These exact values are retained only so the developer/client can reconcile old content. **They must not appear as current public prices unless the client approves them, confirms the year and tax wording, and confirms the corresponding course still exists.** Treat “self-study” and “online” as distinct legacy labels; do not merge their promises automatically.

| Course | Legacy variant | Listed fee | Displayed offer fee | Legacy advertised inclusions |
| --- | --- | --- | --- | --- |
| NEET | 1-year online | ₹85,000 | ₹72,999 + taxes | 700+ recorded lectures; digital modules; 40,000+ questions; 25 tests |
| NEET | 2-year self-study | ₹1,53,000 | ₹1,30,050 + taxes | 1,400+ recorded lectures; modules; 40,000+ questions; 40 tests; doubt support; mentorship |
| NEET | Offline | ₹1,83,000 | ₹1,53,050 + taxes | 1,400+ classroom lectures; modules; 40,000+ questions; 45 tests; doubt support; mentorship |
| JEE | 1-year online | ₹93,500 | ₹79,466 + taxes | 850+ recorded lectures; up to 20 tests; digital modules; 26,000+ questions; doubt support; mentorship |
| JEE | 2-year self-study | ₹1,72,881 | ₹1,46,949 + taxes | 2,000+ recorded lectures; digital material; 51,000+ questions; 45+ tests; doubt support; mentorship |
| JEE | Offline | ₹1,83,000 | ₹1,53,050 + taxes | 1,400+ classroom lectures; modules; 40,000+ questions; 45 tests; doubt support; mentorship |
| MHT-CET | 1-year online | ₹93,500 | ₹79,466 + taxes | 650+ recorded lectures; up to 20 tests; digital modules; 15,000+ questions; doubt support; mentorship |
| MHT-CET | Offline | ₹1,83,000 | ₹1,53,050 + taxes | 650+ classroom lectures; digital modules; 15,000+ questions; 45 tests; doubt support; mentorship |
| Boards | Class 10 CBSE | ₹41,999 | ₹35,699 + taxes | NCERT syllabus; Board-style tests; answer evaluation approximately every 2–3 weeks |
| Boards | Class 12 CBSE | ₹51,999 | ₹45,699 + taxes | NCERT syllabus; Board-style tests; regular answer-sheet checking |

State Board coaching is mentioned generally but lacks a complete supplied variant/fee sheet. Do not infer its subjects, fees or batches. Original prices and “15.3% off” badges are inconsistent in the old site. When approved discounts are published, compute the percentage from actual prices rather than carrying over the label. Never invent tax rates.

### 12.4 Testimonials and result material

Legacy names/scores: Snigdha Wadhai — 93.60%; Purva Algamwar — 92.00%; Atharva Allewar — 90.00%; Sanchita Sonalwar — 91.00%; Gauri Pattalwar — 94.4%; Sanyukta Alurwar — 95.20%; Purvaja Deogade — 95.00%; Nakul Atalwar — 95.00%; Tanvi Burande — 93.60%; Saksham Chaple — 90.00%.

These are named legacy references, not publish-ready result records. Exam/Board, year, exact score context, quote transcription, photograph permission and publication approval are not supplied in this brief. Preserve names as written until corrected by the client. The old Engineering/Medical alumni sections are image-based; do not invent their missing profiles.

Legacy homepage claims: NEET 1,050+, JEE Advanced 200+, JEE Main 900+, Olympiad 10+, “Trusted by 2 Million+ Students”, and selection ratio above 50%. **Keep all of these unpublished until independently supported and approved.** Do not use them as animated count-up counters by default.

### 12.5 Resources and admissions references

Legacy PYQs: JEE Advanced 2025 and 2023; JEE Main 2025, 2024 and 2023; NEET 2023, 2024 and 2025. Do not assume that missing years, subjects or sessions exist. At least one old JEE Main Physics solution PDF contains Allen branding. Source/rights approval is required before re-hosting third-party solutions.

Legacy FAQ mentions fees in 2–4 installments. Old terms mention registration charges, two passport photographs, an Aadhaar photocopy and post-dated cheques. These are confirmation items for the client's admission policy, not requirements for the website's initial enquiry form. Promotional contact must not be implied by submitting an unrelated web message.

### 12.6 Policies and domain errors

Do not directly migrate the old privacy text. Supplied issues include the misspelled domain `gloriousacadwemny.org.in`, references to Kota jurisdiction, and obsolete “64-bit encryption” wording. Use a client-approved updated policy matching the deployed service. Do not choose a jurisdiction or retention period on the client's behalf.

## 13. Enquiry Workflow, Backend and Privacy

### 13.1 Admissions form fields

Required: student/contact name, mobile number, preferred course, contact permission needed to respond, and acknowledgement of the approved privacy notice. Optional: email, current class, preferred centre, variant, parent/guardian name, and short message. Provide “Help me choose” for course and “No preference” for centre. Do not require a student to know the exact course before enquiring.

Use a visible label for every field, autocomplete hints where appropriate, sensible length limits, mobile-friendly keyboard types, and inline validation. Accept Indian numbers entered with spaces, hyphens or +91 and normalize them server-side. Email is optional but validated when supplied. No Aadhaar or document upload. Since students may be minors, provide an easy parent/guardian contact route and use consent wording approved for the actual audience.

Any promotional marketing checkbox must be separate, optional, specific, and unchecked initially. Analytics/marketing consent behavior must match the actual installed services and approved policy.

### 13.2 Submission sequence

1. Preserve selected course/centre from a URL or card interaction.
2. Validate in the browser for convenience and again on the server for correctness.
3. Apply server-side rate limits, origin checks and a honeypot; add a challenge only if abuse warrants it.
4. Save the enquiry to durable storage with a server timestamp and non-sensitive reference ID.
5. Queue/attempt a notification to the client-configured academy mailbox.
6. Show success only after storage confirms acceptance. If storage fails, show a retry state and direct call alternative.
7. If storage succeeds but email delivery fails, retain success to the user, record the notification failure, and retry operationally. Avoid creating duplicate enquiries on retry/double-click.

Success copy: “Your enquiry has been received. The academy will contact you using the details provided.” Do not promise a response time without approval. Show a reference ID only if the backend actually returns one.

Contact form: name, one usable contact method, message, and appropriate privacy acknowledgement. Keep validation/persistence behavior consistent. Never show a fake success toast from a front-end-only timeout. Development mocks must be clearly identified and cannot ship as live enquiry handling.

### 13.3 Operational requirements

Choose the database/notification adapter in Section 17. Destination addresses and provider credentials come from environment variables. Secrets never enter the browser bundle or source control. Configure a verified notification sender before enabling live mail; an optional acknowledgement must not expose personal data in URLs or include marketing without permission.

Keep enquiry records private, restrict staff access server-side, avoid personal information in public logs or analytics, and expose no public endpoint for listing enquiries. Define retention/deletion behavior with the client. Rate limits must remain effective across multiple runtime instances using a shared store/provider, not a single process variable. Sanitize/escape email rendering and protect any CSV export against formula injection.

## 14. Responsive and Accessibility Requirements

Design mobile first. Verify at 360px, 390px, 768px, 1024px and 1440px, plus 320px reflow and 200% zoom. These are review widths, not mandatory device-specific CSS breakpoints.

| Area | Desktop | Mobile |
| --- | --- | --- |
| Hero | Text and custom visual split | Text, CTA, compact visual stack |
| Navigation | Dropdowns and enquiry CTA | Accessible drawer and bottom action bar |
| Course grid | Four columns or balanced 2×2 | One/two columns depending on available width |
| Bento features | Asymmetric editorial layout | Meaningful stacked order |
| Journey | Sticky visual plus step list | Vertical timeline |
| Comparison | Full semantic table | Scrollable table with visible overflow hint |
| Testimonials | Feature plus supporting cards | Stacked or manual scroll snap |
| Form | Two columns only for related short fields | One column with clear labels |
| Centre cards | Two-column showcase | Stacked address/action cards |

Target WCAG 2.2 AA. Verify actual text/background contrasts, visible focus, touch targets, landmark regions, heading hierarchy, form errors, and keyboard order. Normal text needs at least 4.5:1 contrast; relevant large text and non-text UI need appropriate 3:1 contrast. Avoid color-only status indications. Images have meaningful alt text or empty alt if decorative. Dialogs trap focus and restore it; accordions and dropdowns use semantic controls.

Filtering should announce the result count politely without reading the whole page. Form errors should identify fields and offer correction. Essential content is server-rendered/static and visible with animations or JavaScript disabled. All hover information must also be available on focus/tap. Do not disable zoom.

## 15. Assets and Photography Plan

Request: official logo in SVG/transparent PNG; director portrait; faculty portraits; academy/classroom photos; centre exteriors and interiors; approved student photos; alumni/result evidence; testimonial originals; brochures; licensed PYQs; social URLs; correct map listings.

Maintain an asset manifest with filename, purpose, source, permission/approval, alt text, dimensions and crop guidance. Use subject-appropriate photography. Stock imagery may illustrate learning when licensed, but must not be captioned as the academy's own campus/students. Do not create AI-generated images of real faculty or successful students.

Create decorative academic SVGs, diagrams and subject graphics as code-native assets. Use a typographic placeholder for the brand in development if the logo is missing; do not invent an official crest. Optimize real photos to WebP/AVIF with responsive sizes. Reserve aspect ratios. Load the hero image promptly and lazy-load below-fold assets. Use readable PDF filenames and a resource inventory.

## 16. SEO, Performance and Migration

### SEO

Give each public page a unique title, description, canonical URL, social preview and sensible heading hierarchy. Use local copy naturally for Chandrapur/Bhadrawati and relevant coaching goals. Avoid keyword stuffing or creating unsupported Nagpur landing pages.

Generate sitemap/robots from publishable routes. Keep drafts, fixtures and staging environments out of indexing. Use appropriate organization, breadcrumb and course structured data containing only approved facts. Do not mark up fabricated reviews/ratings or expect FAQ rich results. Final domain/email settings come from one configuration source.

### Redirect plan

Implement permanent redirects on the old domain or at the routing layer handling old paths after the domain strategy is agreed. New-site redirects alone cannot redirect a separate legacy domain that remains outside the developer's control. Check destination routes and avoid loops.

| Old path | New destination |
| --- | --- |
| `/copy-of-about` | `/about` |
| `/neet` | `/courses/neet` |
| `/copy-of-neet` | `/courses/jee` |
| `/copy-of-jee-main-adv` | `/courses/mht-cet` |
| `/copy-of-mht-cet` | `/courses/boards` |
| `/team-4` | `/testimonials` |
| `/alumni` | `/results` |
| `/about-4` | `/resources/pyqs` |
| `/about-5` | `/centres` |
| `/contact-8` | `/contact` |
| `/about-1` | `/terms` |
| `/services-4` | `/privacy-policy` |

The old Services route was not specified precisely in the supplied extraction. Inventory actual existing URLs before configuring additional redirects; do not guess a mapping. Old PDF URLs need an explicit file/link migration strategy where rights allow reuse.

### Performance

Prioritize usable content over decorative motion. Target mobile LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 under suitable real-world conditions; lab review should aim for Lighthouse Performance ≥90 and Accessibility ≥95 without treating a score as proof of full accessibility. Real-world metrics need measurement after launch; do not claim them from a local run.

Use server/static rendering for content, route-based code splitting, optimized images and fonts, minimal client animation islands, and lazy third-party maps/PDF viewers. Avoid hero videos and WebGL. Set an initial design budget of approximately 250KB compressed route JavaScript and 250KB hero imagery, then measure actual output and refine. Document approved exceptions. No unnecessary tracking scripts, autoplay media or large decorative libraries.

## 17. Proposed Technical Architecture

For a new repository, use **Next.js App Router + TypeScript + Tailwind CSS + Motion for React**, one accessible icon set, and a small form/schema validation layer. Use current compatible stable versions and pin the resolved dependency set in the lockfile. Do not guess versions or copy obsolete setup syntax. When an existing repository is supplied, preserve its stack unless it cannot meet the brief.

Use Server Components for content pages and client components only for forms, filtering, dialogs and motion. Use framework metadata, optimized image/font features, and semantic HTML. Keep rendering independent of CMS/provider details through a content repository interface.

**Baseline content:** typed content files checked into the project; no paid CMS is required.  
**Baseline enquiries:** server handler, durable database adapter, and notification adapter. Default recommendation is a relational database such as PostgreSQL where already available. Firebase is an acceptable alternative if the project/client chooses it; use private server writes/security rules and never public enquiry reads. Do not provision third-party accounts implicitly.  
**Optional editing:** integrate an existing client CMS or add an authenticated admin dashboard after the baseline. Backend authorization is mandatory; hiding the admin link is insufficient.

Suggested organization:

- `app/`: page routes, layouts, metadata, redirects/API handlers as appropriate.
- `components/layout/`: header, drawer, footer, mobile actions.
- `components/ui/`: semantic primitives and state components.
- `components/sections/`: homepage and reusable editorial sections.
- `components/courses/`, `components/resources/`, `components/enquiry/`: domain features.
- `content/`: approved records and content status definitions.
- `content/fixtures/`: development-only fixtures, explicitly excluded from production.
- `lib/`: validation, content repository, database/mail adapters, rate limiting and SEO helpers.
- `public/`: approved imagery, decorative SVGs and distributable resources.
- `tests/`: meaningful integration/end-to-end coverage for important user flows.
- `docs/`: asset inventory, content checklist, migration plan and deployment notes.

Configuration examples: public site URL, brand/contact settings, database connection, notification provider credentials, notification destination, anti-abuse provider when used. List variable names in an example environment file with dummy values; never include real credentials.

Primary technical references checked for this brief:

- Next.js App Router: https://nextjs.org/docs/app
- Next.js metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Next.js components/image/font references: https://nextjs.org/docs/app/api-reference/components
- Tailwind responsive design: https://tailwindcss.com/docs/responsive-design
- Tailwind theme variables: https://tailwindcss.com/docs/theme
- Motion accessibility: https://motion.dev/docs/react-accessibility
- Motion reduced-motion hook: https://motion.dev/docs/react-use-reduced-motion

## 18. Content Tone and Proposed Copy

Use clear, respectful language suitable for students and parents. Explain concrete support instead of inflated claims. Keep paragraphs short and headings useful. Avoid guaranteed selections, “India's No. 1”, “100% results”, and unsupported superiority.

| Location | Proposed copy |
| --- | --- |
| Hero eyebrow | JEE • NEET • MHT-CET • Boards |
| Hero headline | Build Strong Concepts. Prepare for Your Next Step. |
| Course section | Choose Your Preparation Path |
| Teaching section | A Structured Approach to Preparation |
| Journey | From Understanding to Confident Practice |
| Resources | Practise with Purpose |
| Centres | Find Your Nearest Glorious Academy Centre |
| Final CTA | Find the Preparation Path That Fits Your Goals |
| Fee fallback | Contact the academy for current fees and batch availability. |
| Admissions CTA | Enquire About Admission |

These are proposed interface/marketing lines for review, not direct quotations from the old site. Expand page copy from approved source content and avoid repeating the same promotional paragraph on every route.

## 19. Implementation Sequence

1. **Audit and model:** inspect any repository, inventory assets/content, establish approval flags, route map, environment needs and missing information.
2. **Design foundation:** implement tokens, typography, layout, buttons, cards, accessible menus, form primitives and motion/reduced-motion defaults.
3. **Homepage:** compose the full section sequence with the custom academic hero and distinct editorial layouts; review mobile and desktop before applying patterns everywhere.
4. **Inner pages:** build shared course templates, catalogue/comparison, About, results/testimonials, centres, resource library, FAQ and legal layouts.
5. **Interactions:** implement filters, enquiry pre-fill, manual showcases, lightbox, journey scroll states and finite motion graphics.
6. **Backend:** wire durable enquiry storage, real notification destinations, validation, abuse protection and accurate submission states. If credentials are unavailable, complete the adapters and tests; clearly report that live enquiries are not ready and keep production submission disabled until configured.
7. **Content migration:** import approved text/assets, reconcile fees/contacts, transcribe feedback accurately, approve resource distribution and implement redirect inventory.
8. **Verification:** run build/type/lint checks, meaningful flow tests, accessibility review, responsive screenshots and performance checks.
9. **Handoff:** provide source, setup instructions, content-editing guide, environment example, verification results and launch checklist. Publish only under a subsequent launch instruction.

## 20. Acceptance Criteria

### Visual and motion

- [ ] Every route belongs to one coherent light-theme design system.
- [ ] Homepage includes a custom educational hero, course discovery, teaching showcase, learning journey, centres, FAQ and enquiry CTA.
- [ ] Approved result/testimonial/resource content appears only when available; absent sections do not leave broken layout gaps.
- [ ] Inner pages have intentional layouts rather than cloned generic cards.
- [ ] Motion values follow the specification, remain smooth and stop offscreen.
- [ ] Reduced-motion mode presents all content without parallax, loops or delayed reveals.
- [ ] Mobile layout has no accidental horizontal overflow or sticky-control collisions.

### Functional and content

- [ ] All header/footer links, dropdowns, phone links, directions and course CTAs work.
- [ ] Course/centre selection correctly pre-fills enquiries and survives appropriate back navigation.
- [ ] PYQ filters/reset/search work; download links lead to approved existing documents.
- [ ] Forms validate both sides, persist real submissions, prevent duplicate clicks, and handle failure honestly.
- [ ] No fabricated profiles, ranks, claims, deadlines, social links or prices are published.
- [ ] Legacy fees and questionable statistics are unpublished unless explicitly approved.
- [ ] Policy pages and privacy/marketing controls match actual deployed behavior.

### Accessibility and engineering

- [ ] Keyboard-only users can navigate menus, filters, forms, accordions and dialogs.
- [ ] Focus remains visible and returns correctly after dialogs/drawers close.
- [ ] Labels, errors, alt text, heading hierarchy and actual color contrasts are checked.
- [ ] Build, type checking and relevant lint checks pass.
- [ ] Integration tests cover enquiry acceptance/failure and notification failure after storage success.
- [ ] Flow tests cover navigation, course-to-enquiry prefill and PYQ filtering/download links.
- [ ] Manual review includes mobile, desktop, zoom, reduced motion and slow loading.
- [ ] Browser console has no unresolved errors; secrets and enquiries are never public.
- [ ] SEO metadata, canonical settings, sitemap and applicable redirect mappings are validated.
- [ ] Any performance or live-service limitations are documented accurately.

## 21. Client Information Needed Before Launch

Build the design and integrations while collecting these items. Missing information should not stall the entire project, but it must be resolved or the affected feature withheld before launch.

- Official logo, colors and approved academy/legal name.
- Final domain and operational email address.
- Confirmed main/centre numbers, WhatsApp status, addresses and map listings.
- Director title, portrait and approved message; genuine faculty profiles.
- Current academic-year course variants, subjects, modes, centre availability, schedules and fees/tax wording.
- Approved student results with exam/year/metric context and publication permissions.
- Approved testimonial text, scans, photographs and score context.
- Resource files/links with permission to distribute third-party material.
- Current admissions requirements, installments/refunds if relevant, and privacy/terms text.
- Notification recipient mailbox, backend deployment target and provider credentials supplied securely.
- Actual social links, support hours and any callback commitment.
- Decision about an optional CMS, analytics and consent controls.

## 22. Final Developer Handoff

Provide the implemented project, dependency lockfile, setup/build instructions, environment-variable example, content/asset inventories, migration table, tests/check results and a short list of launch dependencies. Explain where ordinary content can be edited and how draft/approved records are published.

The completed experience should be bright, professional, calm and visually memorable: a distinctive academic hero, polished course and centre discovery, genuine student showcases, restrained scroll storytelling, accessible interaction, and dependable enquiries. Its quality must come from coherent design and real functionality rather than unsupported claims or decorative complexity.
