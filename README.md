# GitHub update package — Steven Needham portfolio

Prepared from this session's design-system work. This project can't push to GitHub directly — apply these by hand (or hand this folder to whoever manages the repo).

## For `steveneedham/portfolio` (the live site)

- **`homepage-source-updated.html`** — your real homepage's pre-bundle source (`<x-dc>` template), extracted from the live bundle, with one addition: a `SignalStrip` "new/trending" line now renders under the nav (2 example items — a LinkedIn post and PantryMap traffic, edit `signalItems` to your real content). This is the file to re-bundle and redeploy as `index.html`.
  - Everything else already matched the deployed site 1:1 (hero video single-source, meta row, per-track stop links, 10-icon footer social row) — no other changes needed there.
- **`assets/icons/`** — full icon set including the new `311-agent.svg` (headset + scooter wheels, red/teal). Same folder your `SignalStrip`/footer icons already reference.
- **`assets/logo.svg`** — confirmed to match your real extracted mark (`icon-square-dark.svg`/`lockup-horizontal-dark.svg`) node-for-node; included for reference, no change needed on the live site.

## For this design-system project

Already committed here — nothing to hand-apply:
- `components/core/SignalStrip.jsx` (+ `.d.ts`/`.prompt.md`)
- `components/timeline/StopCard.jsx` — new `trending` prop (pulsing dot + "↑ trending" label)
- `templates/` — 404/Error Page, Resume/CV, Case Study, Editorial Report, Story Slides, Portfolio Page (all updated)
- `assets/icons/311-agent.svg`, `guidelines/icons.html` (icon/logo specimen), `guidelines/analytics.html` (gtag standard)

## To apply the homepage change

1. Take `homepage-source-updated.html`.
2. Re-bundle it the same way the current `index.html` was produced (your existing bundler/export step).
3. Replace `steveneedham/portfolio/index.html` with the new bundle output.
4. Commit + push.
