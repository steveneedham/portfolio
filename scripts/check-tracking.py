#!/usr/bin/env python3
"""Fail if any public-facing HTML page is missing GA4 or PostHog tracking.

Usage: python3 scripts/check-tracking.py
Run from anywhere; paths are resolved relative to the repo root (this
script's grandparent directory).
"""

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

GA4_MEASUREMENT_ID = "G-K5VW97BT8W"
POSTHOG_PROJECT_KEY = "phc_rshqFPsvRswuFx5GRpkifRgNwG8X7nA7fSbLnQPgUT3W"

# Directories that hold design-system source files, old handoff-package
# exports, or drafts — never the live, linked pages a visitor reaches.
# See PR #22 for how this was established (grepped every page for
# inbound links; nothing on the live site points into these).
EXCLUDED_DIR_PARTS = {
    "export",
    "files",
    "github-update-package",
    "LinkedIn post draft concept",
    "community-mobility-hubs-stub",
}

# Specific root-level files that are pre-bundle design-system source or
# internal bundler previews, not deployed pages.
EXCLUDED_FILENAMES = {
    "homepage-source-updated.html",
    "Icon Preview - Standalone.html",
}


def is_excluded(html_path: Path) -> bool:
    rel = html_path.relative_to(REPO_ROOT)
    if set(rel.parts[:-1]) & EXCLUDED_DIR_PARTS:
        return True
    if rel.name in EXCLUDED_FILENAMES:
        return True
    if rel.suffix == ".html" and rel.name.endswith(".dc.html"):
        return True
    return False


def check_file(html_path: Path) -> list[str]:
    text = html_path.read_text(encoding="utf-8", errors="replace")
    missing = []
    if not (re.search(r"gtag\(", text) and GA4_MEASUREMENT_ID in text):
        missing.append("GA4")
    if not (re.search(r"posthog\.init\(", text) and POSTHOG_PROJECT_KEY in text):
        missing.append("PostHog")
    return missing


def main() -> int:
    all_html = sorted(REPO_ROOT.rglob("*.html"))
    checked = [p for p in all_html if not is_excluded(p)]

    failures: dict[str, list[str]] = {}
    for path in checked:
        missing = check_file(path)
        if missing:
            failures[str(path.relative_to(REPO_ROOT))] = missing

    print(f"Checked {len(checked)} public-facing page(s) "
          f"({len(all_html) - len(checked)} excluded as non-public).")

    if not failures:
        print("All pages have GA4 and PostHog tracking.")
        return 0

    print(f"\n{len(failures)} page(s) missing tracking:")
    for rel_path, missing in failures.items():
        print(f"  - {rel_path}: missing {', '.join(missing)}")
    print(
        "\nIf this is a new page that should stay untracked (e.g. a design-system\n"
        "source file or internal preview, not something visitors reach), add it to\n"
        "EXCLUDED_DIR_PARTS / EXCLUDED_FILENAMES in scripts/check-tracking.py instead\n"
        "of ignoring this failure."
    )
    return 1


if __name__ == "__main__":
    sys.exit(main())
