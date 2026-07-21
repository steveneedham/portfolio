---
name: steven-needham-design
description: Use this skill to generate well-branded interfaces and assets for Steven Needham's ops-and-systems personal brand (field operations leadership + micromobility systems work in Columbus, Ohio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, and UI kit components for prototyping.
user-invocable: true
---

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
Never produce generic AI-style infographics. Every visual should resemble an editorial publication, policy brief, or design journal with restrained typography, minimal iconography, generous whitespace, and timeless composition.
Every artifact should feel worthy of being printed, framed, or cited. Design for longevity, not engagement. Avoid trends, decorative effects, or visual clutter. Favor clarity, restraint, and enduring quality.

# Steven Needham — Ops & Systems Design System

Personal brand system for Steven Needham: a field-operations leader turned systems builder in Columbus, Ohio micromobility. The brand voice: *"I build environments — at work and in life — where people feel safe, seen, and able to move forward."* Ten-plus years running people-heavy operations, now building the dashboards, playbooks, and automation that make those operations legible.

## Sources

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
- **Casing**: sentence case throughout body copy; UPPERCASE only for small mono labels (eyebrows, nav is lowercase — only eyebrow/track-label are uppercase+tracked).
- **Numbers**: always specific and hedged where uncertain ("roughly 90", "ten-plus years", "20,000+ rides") — precision paired with honest approximation, never rounded to a cleaner "impressive" number.
- **Emoji**: never used.
- **Vibe**: quietly confident, systems-minded, civic-service oriented. Reads like a careful engineer/operator, not a marketer.

## Visual foundations

- **Colors**: dark ink surface (`#14171C`) is home base — panels one step lighter (`#1B1F27`), hairline dividers (`#282E38`). Two accent lines run the whole brand: **amber** (`#E8A33D`) = Ops & Leadership, **teal** (`#4FD1C5`) = Systems & Tools — a deliberate two-track color-coding system, not decorative. Text is warm off-white (`#EDEAE2`), never pure white. A secondary light "paper" surface (`#faf9f6` bg, `#1f2428` ink, `#0e7c66` accent) appears only on project detail sub-pages.
- **Type**: three families, each with one job. **Fraunces** (serif, optical-size variable, italic accent) for every heading/wordmark — italic is used mid-sentence for emphasis words, colored amber. **Inter** for all body copy. **JetBrains Mono** for everything structural/meta: eyebrows, nav links, tag chips, footnotes, contact links — the mono voice is what gives the brand its "systems" feel.
- **Spacing**: generous — hero gets 8rem top padding, page gutters clamp between 1.5rem and 6–8rem depending on viewport. Timeline stops are separated by a consistent 2.6rem rhythm with hairline dividers between them, never cards.
- **Backgrounds**: flat color, no gradients on content surfaces. The only gradient is a 2px vertical rail beside each timeline track, fading from the dim accent to the full accent color — a "signal strengthening" effect. No patterns, no textures, no illustrations. One muted (~30% opacity) looping background video sits behind the hero, scrimmed with the ink surface color so hero text stays legible.
- **Animation**: exactly one motion pattern in the whole brand — IntersectionObserver-triggered scroll reveal: `opacity 0→1` + `translateY(14px→0)`, `0.6s ease`, once per element, respecting `prefers-reduced-motion`. No hover bounces, no spring easing.
- **Hover states**: links brighten from muted to full text color, or muted to amber (contact links); nav links go muted→text over 0.2s. No color darkening, no scale/shrink.
- **Press states**: none defined in source (no buttons exist — everything is a link).
- **Borders**: 1px hairlines in `--panel-line`, used for dividers and tag outlines only — never a border used to imply a card.
- **Shadows**: none on the dark surface. The one exception is the light "paper" surface's embedded-project frame: `0 6px 18px rgba(0,0,0,.06)` with a 12px radius — the single soft, warm-toned card in the brand.
- **Corner radii**: near-zero everywhere on the dark surface (tag chips get a bare 3px). The light surface's project-embed frame is the only 12px-radius element.
- **Cards**: there are no card containers on the dark surface — content sits directly on the ink background, separated by hairlines and whitespace, not boxes. Treat any urge to add a bordered/shadowed card on the dark surface as off-brand.
- **Transparency/blur**: the fixed nav uses `backdrop-filter: blur(10px)` over `rgba(20,23,28,0.72)` — the only blur usage in the brand, reserved for the persistent nav bar.
- **Imagery color vibe**: real documentary photography, mostly golden-hour/dusk — warm low sun, long shadows, orange scooters against green grass or lit stone architecture. A few blue-hour/autumn-night shots contrast that warmth. Candid, unstyled, on-location — never studio or stock-looking.
- **Layout rules**: nav is fixed/sticky top across the whole page; everything else scrolls in a single long-form column with a two-column split only for the timeline section.

## Iconography

The brand's original core marks: **colored dots** (9–11px circles) for the timeline legend keys and stop markers, and a single unicode arrow (`→`) at the end of "View project" links. An expanded set of hairline-stroke, amber/teal-node icons was later built in this same idiom for social links (Linktree, Bluesky, GitHub, Instagram, LinkedIn, Facebook, TikTok, YouTube, WhatsApp, Threads) and functional glyphs (pin, external-link, map-layer, document-download, bike, scooter). No emoji, anywhere. New icons should keep the hairline-weight, single-accent-dot aesthetic — never an icon-font or filled/flat-illustration style.

## Assets

Wordmark is "Steven Needham" set in Fraunces, paired with an original logo mark: a hairline route with an amber node, a teal node, and a larger hollow hub node in between (`assets/logo.svg`), echoing the homepage timeline's dot motif and the ops/sys accent duo. `assets/photos/` holds real field photography: a headshot, and Columbus mobility documentation — scooters lined at a lit campus arch (dusk), a scooter at riverside sunset, a festival deployment field of scooters, a downtown bike-share dock with the LeVeque skyline, a group community bike ride, and a field operator loading a fleet-servicing trailer beside a Spin van. A looping background video plays behind the hero.

## Fonts

Fraunces, Inter, and JetBrains Mono, loaded live from Google Fonts (`tokens/fonts.css`).

## Components

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
```
