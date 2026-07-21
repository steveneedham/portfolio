# Steven Needham — Ops & Systems Design System

Personal brand system for Steven Needham: a field-operations leader turned systems builder in Columbus, Ohio micromobility. The brand voice: *"I build environments — at work and in life — where people feel safe, seen, and able to move forward."* Ten-plus years running people-heavy operations, now building the dashboards, playbooks, and automation that make those operations legible.

## Sources

Everything here was read directly from two GitHub repos (browse them for deeper context — more project detail pages, the live pantry-map app, and any future updates):

- **[steveneedham/portfolio](https://github.com/steveneedham/portfolio)** — the current site: single self-contained HTML homepage plus `projects/` detail pages (e.g. Columbus PantryMap).
- **[steveneedham/community-mobility-hubs](https://github.com/steveneedham/community-mobility-hubs)** — the original civic-tech project this site grew out of; its `files/index.html` is an earlier version of the same homepage design and confirms the token values used here.

Both repos are plain HTML/CSS/vanilla-JS, no component framework — so the "components" in this system are an intentional standard set sized to a personal-portfolio brand (see **Intentional additions** below), not a lifted inventory.

## Products / surfaces

One product: **the personal portfolio website** (steveneedham.github.io/portfolio), which has two surface treatments:
1. **Dark primary surface** — homepage: hero, the two-column "Ops & Leadership" / "Systems & Tools" parallel timeline, about, footer.
2. **Light "paper" surface** — project detail sub-pages (e.g. `projects/columbus-pantry-map.html`), a lighter, warmer palette for embedding external project demos.

## Content fundamentals

- **Voice**: first-person-about-self in third person on the homepage ("Steven spent the past several years…") but first-person in the hero mission line ("I build environments…"). Calm, declarative, non-hype. No exclamation points, no forced enthusiasm.
- **Sentence shape**: long, precise, resume-adjacent sentences packed with concrete specifics (headcounts, timeframes, numbers) rather than adjectives — e.g. "Analyzed roughly six months and 20,000+ rides of fleet data to identify chronic underperforming vehicles."
- **Structure**: every accomplishment follows title → one dense sentence of what/how → 1–4 mono tag chips naming the skill/domain. No bullet lists, no bold claims section.
- **Casing**: sentence case throughout body copy; UPPERCASE only for small mono labels (eyebrows, nav is NOT uppercase — check: nav links are lowercase actually, only eyebrow/track-label are uppercase+tracked).
- **Numbers**: always specific and hedged where uncertain ("roughly 90", "ten-plus years", "20,000+ rides") — precision paired with honest approximation, never rounded to a cleaner "impressive" number.
- **Emoji**: never used.
- **Vibe**: quietly confident, systems-minded, civic-service oriented. Reads like a careful engineer/operator, not a marketer.

## Visual foundations

- **Colors**: dark ink surface (`#14171C`) is home base — panels one step lighter (`#1B1F27`), hairline dividers (`#282E38`). Two accent lines run the whole brand: **amber** (`#E8A33D`) = Ops & Leadership, **teal** (`#4FD1C5`) = Systems & Tools — a deliberate two-track color-coding system, not decorative. Text is warm off-white (`#EDEAE2`), never pure white. A secondary light "paper" surface (`#faf9f6` bg, `#1f2428` ink, `#0e7c66` accent) appears only on project detail sub-pages.
- **Type**: three families, each with one job. **Fraunces** (serif, optical-size variable, italic accent) for every heading/wordmark — italic is used mid-sentence for emphasis words, colored amber. **Inter** for all body copy. **JetBrains Mono** for everything structural/meta: eyebrows, nav links, tag chips, footnotes, contact links — the mono voice is what gives the brand its "systems" feel.
- **Spacing**: generous — hero gets 8rem top padding, page gutters clamp between 1.5rem and 6–8rem depending on viewport. Timeline stops are separated by a consistent 2.6rem rhythm with hairline dividers between them, never cards.
- **Backgrounds**: flat color, no gradients on content surfaces. The only gradient is a 2px vertical rail beside each timeline track, fading from the dim accent to the full accent color — a "signal strengthening" effect. No patterns, no textures, no illustrations. One muted (~30% opacity) looping background video sits behind the hero (`assets/urban_.mp4`, an urban street/mobility clip), scrimmed with the ink surface color so hero text stays legible.
- **Animation**: exactly one motion pattern in the whole brand — IntersectionObserver-triggered scroll reveal: `opacity 0→1` + `translateY(14px→0)`, `0.6s ease`, once per element, respecting `prefers-reduced-motion`. No hover bounces, no spring easing.
- **Hover states**: links brighten from muted to full text color, or muted to amber (contact links); nav links go muted→text over 0.2s. No color darkening, no scale/shrink.
- **Press states**: none defined in source (no buttons exist — everything is a link).
- **Borders**: 1px hairlines in `--panel-line`, used for dividers and tag outlines only — never a border used to imply a card.
- **Shadows**: none on the dark surface. The one exception is the light "paper" surface's embedded-project frame: `0 6px 18px rgba(0,0,0,.06)` with a 12px radius — the single soft, warm-toned card in the brand.
- **Corner radii**: near-zero everywhere on the dark surface (tag chips get a bare 3px). The light surface's project-embed frame is the only 12px-radius element.
- **Cards**: there are no card containers on the dark surface — content sits directly on the ink background, separated by hairlines and whitespace, not boxes. Treat any urge to add a bordered/shadowed card on the dark surface as off-brand.
- **Transparency/blur**: the fixed nav uses `backdrop-filter: blur(10px)` over `rgba(20,23,28,0.72)` — the only blur usage in the brand, reserved for the persistent nav bar.
- **Imagery color vibe**: real user-supplied documentary photography, mostly golden-hour/dusk — warm low sun, long shadows, orange scooters against green grass or lit stone architecture. A few blue-hour/autumn-night shots contrast that warmth. Candid, unstyled, on-location — never studio or stock-looking.
- **Layout rules**: nav is fixed/sticky top across the whole page; everything else scrolls in a single long-form column with a two-column split only for the timeline section.

## Iconography

No icon system, icon font, or SVG icon set exists in either source repo. The brand marks things with:
- **Colored dots** (9–11px circles) for the timeline legend keys and stop markers — pure CSS, no glyphs.
- **A single unicode arrow** (`→`) at the end of "View project" links.
- No emoji, anywhere.

If a future need calls for actual icons (e.g. a settings gear, a search glyph), the closest fit is a thin-stroke set like **Lucide** (CDN) to match the brand's hairline-weight aesthetic — flagged here as a substitution, not sourced from the brand.

## Assets

No logo exists in either source repo — the wordmark is always literally "Steven Needham" set in Fraunces. **Do not invent a logo mark.** `assets/photos/` now holds real, user-supplied field photography: a headshot, and Columbus mobility documentation — scooters lined at a lit campus arch (dusk), a scooter at riverside sunset, a festival deployment field of scooters, a downtown bike-share dock with the LeVeque skyline, a group community bike ride, and a wide shot of a field operator loading a fleet-servicing trailer beside a Spin van. These are used across the About section and the Brand → Real Photography specimen card. `assets/videos/mobility-clip.mp4` (user-supplied) plays as the hero background video, with `assets/urban_.mp4` (an earlier upload) as fallback. Two other user-supplied images were intentionally **not** used: an AI-generated illustration prominently bearing Spin's logo/uniform in an illustrated (not photographic) style — out of place next to real documentary photography — and an AI-stylized "postcard" graphic of Huntington Park.

## Fonts

Fraunces, Inter, and JetBrains Mono are loaded live from Google Fonts (`tokens/fonts.css`) — the same CDN the source site itself links to, so no substitution was needed. Note this uses a CDN `@import`, not literal `@font-face` rules, so the design-system compiler's font indexer won't list these three families even though they render correctly in every card/kit. For a fully offline copy (and for the compiler to index the fonts), download the woff2 files from fonts.google.com and swap the `@import` for local `@font-face` rules under `assets/fonts/`.

## Components

Standard set, sized to a personal-portfolio brand (the source repos define no reusable component library, so per the design-system authoring rules this is an intentional, from-scratch set — not a lifted inventory):

- **`components/core/`** — `NavBar`, `Tag`, `LinkButton`, `SectionHeading`, `Footer`
- **`components/timeline/`** — `StopCard`, `TrackLegend`

### Intentional additions
- `LinkButton` — the source has no `<button>` elements anywhere, only styled links; this component wraps that pattern (3 accent variants: ops/sys/paper) so it's reusable rather than hand-rolled per screen.
- `SectionHeading` — the eyebrow+headline pairing repeats identically for About/Contact/project sections in source; factored out for consistency.

## Index

```
styles.css              → root stylesheet (imports only)
tokens/                  colors.css, typography.css, spacing.css, fonts.css
components/core/         NavBar, Tag, LinkButton, SectionHeading, Footer (+ core.card.html)
components/timeline/     StopCard, TrackLegend (+ timeline.card.html)
guidelines/              10 foundation specimen cards — Colors, Type, Spacing, Brand
ui_kits/portfolio/        Home.jsx, ProjectDetail.jsx, index.html, README.md
thumbnail.html            project tile for the homepage
SKILL.md                  portable skill definition for Claude Code
```

## Caveats — please help iterate

- **Fonts are linked live from Google Fonts** rather than self-hosted — fine for prototyping, but flag if you want offline woff2 files bundled instead.
- **Component inventory is my best judgment**, not a lifted design-system spec (none exists in source) — tell me if `LinkButton`/`SectionHeading` should be split differently, or if there are more UI patterns from later site iterations to fold in.
- **Photography is now real**, supplied by you: headshot, campus arch at dusk, riverside sunset, festival fleet field, downtown bike-share skyline, group rides, fleet-servicing trailer shots — see `assets/photos/` and the Brand → Real Photography specimen card. Two AI-generated/illustrated images and several phone-UI screenshots were deliberately left out (not real brand photography).
- **New: an original logo mark**, designed for this system since none existed in source — a hairline route with an amber node, a teal node, and a larger hollow hub node in between (`assets/logo.svg`), echoing the homepage timeline's dot motif and the ops/sys accent duo. Now used in `NavBar` and the project thumbnail. Not a real-world mark Steven already uses — treat as a proposal and swap it out if he has (or wants) something different.
