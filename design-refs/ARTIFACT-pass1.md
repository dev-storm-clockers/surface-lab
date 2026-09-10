# Surface Lab — Pass 1 ARTIFACT

**Company:** Surface Lab (temporary design-research label)  
**Pass:** 1 — page design research + light 3D  
**Built:** 2026-09-10 (UTC) / 2026-09-09 evening AT  
**Scope:** Local static gallery only. No NightDeck / Dungeon Dad changes.

## Build gate

- **root:** /workspace/surface-lab
- **slug:** surface-lab
- **owner_agent:** Build Head
- **ready_for_quality:** yes
- **pass:** 1
- **live_url:** https://dev-storm-clockers.github.io/surface-lab/
- **notes:** CoS local green + Build live HTTP smoke PASS on Pages `bbee8f5`. Prefer morning STOP-GO. NightDeck/Dungeon Dad untouched. No Lilly from Build.


## Browse

Open locally (any static server or `file://`):

| Path | Role |
|------|------|
| `/workspace/surface-lab/index.html` | Gallery index (3 samples + design notes) |
| `/workspace/surface-lab/samples/local-services/index.html` | Harbor Line Home Care — local services |
| `/workspace/surface-lab/samples/creator/index.html` | Nova Rhee · Studio — creator / link-in-bio |
| `/workspace/surface-lab/samples/shop/index.html` | Kiln & Cotton — small shop |

Shared:

| Path | Role |
|------|------|
| `/workspace/surface-lab/shared/gallery.css` | Gallery shell styles |
| `/workspace/surface-lab/shared/card-stack.css` | CSS 3D perspective review stack |
| `/workspace/surface-lab/shared/tilt.js` | Pointer perspective tilt for product cards |

Quick local serve:

```bash
cd /workspace/surface-lab && python3 -m http.server 8765
# then open http://127.0.0.1:8765/
```

## Distinct visual systems

1. **Local services — Harbor Line Home Care**
   - Palette: deep navy `#0b1f3a`, warm sand `#f5efe6`, amber CTA `#e8912d`
   - Type: Source Serif 4 (display) + DM Sans (UI)
   - Pattern: trust strip, phone CTA, services grid, reviews, after-hours band

2. **Creator — Nova Rhee**
   - Palette: ink violet `#12081c`, blush `#f0a6ca`, soft glow `#c4b5fd`
   - Type: Syne (display) + IBM Plex Mono (meta)
   - Pattern: avatar, link-in-bio buttons, featured work tiles

3. **Shop — Kiln & Cotton**
   - Palette: cream `#f3ebe0`, terracotta `#c46b3a`, charcoal `#2a1a12`
   - Type: Fraunces (display) + Outfit (UI)
   - Pattern: product hero, 3 product cards, contact (no cart/payments)

## Light 3D techniques (AC: ≥2)

| Sample | Technique | Implementation |
|--------|-----------|----------------|
| Local services | CSS perspective **card stack** | `shared/card-stack.css` — stacked review cards with `perspective` / `translateZ` / `rotateY`; fans on hover/focus |
| Creator | **three.js** CDN hero orb | `three@0.160.0` ES module from unpkg — flat-shaded icosahedron + wireframe; low `powerPreference`, capped DPR, skips on `prefers-reduced-motion` |
| Shop | CSS perspective **tilt cards** | `shared/tilt.js` + `data-tilt` on product cards — pointer-driven `rotateX/Y` |

## Hard stops checklist

- [x] Gallery index loads and links to all 3 samples
- [x] Each sample is distinct mobile-first landing (services / creator / shop)
- [x] At least two light-3D treatments (all three samples include one)
- [x] No NightDeck or Dungeon Dad files/URLs touched
- [x] ARTIFACT.md lists paths + techniques + Phil review checklist

## Phil review checklist

- [ ] Visual systems feel distinct (not palette clones)
- [ ] Phone CTAs / contact paths read clearly on mobile width
- [ ] 3D is visible but not heavy on phone (reduced-motion respected)
- [ ] Copy/brands stay fictional — OK to promote to team design-reference?
- [ ] Prefer GitHub Pages under `dev-storm-clockers` after approval?

## Optional: GitHub Pages (do not force)

If `gh` is authenticated with a studio PAT that can push to `dev-storm-clockers`:

1. Create or choose a repo (e.g. `dev-storm-clockers/surface-lab`).
2. Copy this tree (or subtree) to the repo root or `/docs`.
3. Enable Pages: Settings → Pages → Deploy from branch `main` / `/` (or `/docs`).
4. Or: `gh repo create dev-storm-clockers/surface-lab --public --source=. --remote=origin` from a cleaned copy, then push and enable Pages.

If credentials are missing, keep browsing via local static server — Pass 1 success does not require deploy.

## Out of scope (held)

Auth, payments, CMS, NightDeck, Dungeon Dad, public-tool overnight shortlist, stacked Codex jobs.

## Build notes

- Cleared parallel-agent stubs under `samples/services/`, unused `creator.css` / `creator-parallax.js`, empty `shop.css` so the tree matches AC paths only.
- `gh` authenticated as `dev-storm-clockers` on this box; Pages deploy optional — see above.
