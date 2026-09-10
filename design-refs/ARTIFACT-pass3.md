# Surface Lab — Pass 3 ARTIFACT

**Company:** Surface Lab (temporary design-research label)  
**Pass:** 3 — distinct site styles (brutalist / soft-luxury / dark-neon)  
**Built:** 2026-09-10 (UTC) / 2026-09-10 morning AT  
**Scope:** Local static gallery only. No NightDeck / Dungeon Dad changes. No Lilly.

## Build gate

- **root:** /workspace/surface-lab
- **slug:** surface-lab
- **owner_agent:** Build Head
- **ready_for_quality:** yes
- **pass:** 3
- **live_url:** https://dev-storm-clockers.github.io/surface-lab/
- **commit:** f053f1c
- **notes:** Pass 3 live smoke PASS on Pages @ f053f1c — gallery 9 + GRIDLOCK / Lumen / VOLT distinct. Prefer STOP. No Lilly. NightDeck/Dungeon Dad untouched. ready_for_quality=yes.

## STOP-GO

**STOP-GO:** Prefer **STOP** after Pass 3 (Done green / Phil keep-going only for Pass 4+). Live Pages smoke PASS @ `f053f1c`.

## Browse

Open locally:

```bash
cd /workspace/surface-lab && python3 -m http.server 8765
# then open http://127.0.0.1:8765/
```

| Path | Role | Style tag |
|------|------|-----------|
| `/workspace/surface-lab/index.html` | Gallery index (9 samples) | — |
| `/workspace/surface-lab/samples/local-services/index.html` | Harbor Line Home Care — local services | Pass 1 |
| `/workspace/surface-lab/samples/creator/index.html` | Nova Rhee · Studio — creator / link-in-bio | Pass 1 |
| `/workspace/surface-lab/samples/shop/index.html` | Kiln & Cotton — small shop | Pass 1 |
| `/workspace/surface-lab/samples/cafe/index.html` | Morrow Roast — cafe / restaurant | Pass 2 |
| `/workspace/surface-lab/samples/saas/index.html` | Ledgerline — SaaS waitlist | Pass 2 |
| `/workspace/surface-lab/samples/event/index.html` | North Pier Sessions — event / meetup | Pass 2 |
| `/workspace/surface-lab/samples/brutalist/index.html` | GRIDLOCK STUDIO — brutalist portfolio | **brutalist** |
| `/workspace/surface-lab/samples/spa/index.html` | Lumen Bathhouse — soft luxury spa | **soft-luxury** |
| `/workspace/surface-lab/samples/neon/index.html` | VOLT ROOM — dark neon venue | **dark-neon** |

Shared:

| Path | Role |
|------|------|
| `/workspace/surface-lab/shared/gallery.css` | Gallery shell + Pass 3 preview tiles |
| `/workspace/surface-lab/shared/card-stack.css` | CSS 3D perspective review stack |
| `/workspace/surface-lab/shared/tilt.js` | Pointer perspective tilt for product cards |

## Pass 3 samples (new)

7. **Brutalist portfolio — GRIDLOCK STUDIO** · style tag: **brutalist**
   - Path: `samples/brutalist/`
   - Palette: paper `#f4f1ea`, pure ink `#0a0a0a`, signal red `#e10600`
   - Type: Archivo Black + IBM Plex Mono
   - Layout: thick rules, hard cell grid, sparse chrome, uppercase display
   - 3D: none (flat ink — labeled)

8. **Soft luxury spa — Lumen Bathhouse** · style tag: **soft-luxury**
   - Path: `samples/spa/`
   - Palette: ivory `#f7f3ee`, sage `#b8c4b0`, blush `#e8d5cc`, stone `#d4cbc0`, accent `#6f7d68`
   - Type: Cormorant Garamond + Outfit
   - Layout: centered airy hero, generous whitespace, soft pill CTAs, ritual cards
   - 3D: none (soft light / whitespace — labeled)

9. **Dark neon venue — VOLT ROOM** · style tag: **dark-neon**
   - Path: `samples/neon/`
   - Palette: near-black `#050508`, magenta `#ff2bd6`, cyan `#2ef0ff`, lime `#b8ff3c`
   - Type: Orbitron + Rajdhani
   - Layout: dark field, neon CTAs, lineup list, ticket tiers
   - 3D: CSS neon glow + perspective ticket card (explicitly **no WebGL**)

## Hard stops checklist (Pass 3)

- [x] Gallery lists prior 6 + 3 new with working links + style tags
- [x] Each new landing matches assigned style (brutalist / soft-luxury / dark-neon), mobile-first
- [x] Visual systems distinct (palette + type + layout) — not recolored clones
- [x] NightDeck / Dungeon Dad untouched
- [x] ARTIFACT.md updated (paths, style tags, pass 3)
- [x] ready_for_quality → yes (flipped after live smoke PASS @ f053f1c)

## Out of scope (held)

Auth, payments, real bookings, CMS, monetization checkout, NightDeck, Dungeon Dad, Lilly, endless taste polish.

## Build notes

- Sole writer Pass 3 under `/workspace/surface-lab` only.
- No git push from this pass unless Phil/CoS requests.
- Design-refs pack refreshed after Pass 3 GO (this file + AC-pass3-styles.md + README).
