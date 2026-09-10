# Surface Lab — Pass 4 ARTIFACT

**Company:** Surface Lab (temporary design-research label)  
**Pass:** 4 — more styles (editorial / kids-bright / scandi-furniture)  
**Built:** 2026-09-10 (UTC) / 2026-09-10 morning AT  
**Scope:** Local static gallery only. No NightDeck / Dungeon Dad changes. No Lilly.

## Build gate

- **root:** /workspace/surface-lab
- **slug:** surface-lab
- **owner_agent:** Build Head
- **ready_for_quality:** yes
- **pass:** 4
- **live_url:** https://dev-storm-clockers.github.io/surface-lab/
- **commit:** 453e6ca
- **notes:** Pass 4 live smoke PASS on Pages @ 453e6ca — gallery 12 + Northbound Review / Little Harbor Day / Fjord Form. Prefer STOP. No Pass 5 unless Phil asks. Harness live target https://surface-lab.secdevsolutions.help/ (proposed / may still be publishing — Pages authoritative). No Lilly. NightDeck/Dungeon Dad untouched. ready_for_quality=yes.

## STOP-GO

**STOP-GO:** Prefer **STOP** after Pass 4 (Done green / no Pass 5 unless Phil asks). Live Pages smoke PASS @ `453e6ca`. Quality Head STOP-GO 2026-09-10 ~08:00 AT.

## Browse

Open locally:

```bash
cd /workspace/surface-lab && python3 -m http.server 8765
# then open http://127.0.0.1:8765/
```

| Path | Role | Style tag |
|------|------|-----------|
| `/workspace/surface-lab/index.html` | Gallery index (12 samples) | — |
| `/workspace/surface-lab/samples/local-services/index.html` | Harbor Line Home Care — local services | Pass 1 |
| `/workspace/surface-lab/samples/creator/index.html` | Nova Rhee · Studio — creator / link-in-bio | Pass 1 |
| `/workspace/surface-lab/samples/shop/index.html` | Kiln & Cotton — small shop | Pass 1 |
| `/workspace/surface-lab/samples/cafe/index.html` | Morrow Roast — cafe / restaurant | Pass 2 |
| `/workspace/surface-lab/samples/saas/index.html` | Ledgerline — SaaS waitlist | Pass 2 |
| `/workspace/surface-lab/samples/event/index.html` | North Pier Sessions — event / meetup | Pass 2 |
| `/workspace/surface-lab/samples/brutalist/index.html` | GRIDLOCK STUDIO — brutalist portfolio | **brutalist** |
| `/workspace/surface-lab/samples/spa/index.html` | Lumen Bathhouse — soft luxury spa | **soft-luxury** |
| `/workspace/surface-lab/samples/neon/index.html` | VOLT ROOM — dark neon venue | **dark-neon** |
| `/workspace/surface-lab/samples/editorial/index.html` | Northbound Review — editorial magazine | **editorial** |
| `/workspace/surface-lab/samples/kids/index.html` | Little Harbor Day — kids daycare | **kids-bright** |
| `/workspace/surface-lab/samples/scandi/index.html` | Fjord Form — Scandinavian furniture | **scandi-furniture** |

Shared:

| Path | Role |
|------|------|
| `/workspace/surface-lab/shared/gallery.css` | Gallery shell + Pass 3–4 preview tiles |
| `/workspace/surface-lab/shared/card-stack.css` | CSS 3D perspective review stack |
| `/workspace/surface-lab/shared/tilt.js` | Pointer perspective tilt for product cards |

## Pass 4 samples (new)

10. **Editorial magazine — Northbound Review** · style tag: **editorial**
    - Path: `samples/editorial/`
    - Palette: warm paper `#f6f1e7`, ink `#1c1915`, brick accent `#8b3a2a`
    - Type: Newsreader + Libre Franklin
    - Layout: masthead/issue, serif cover headline, two-column story, pull-quote, TOC
    - 3D: none (print column rhythm — labeled)

11. **Kids-bright daycare — Little Harbor Day** · style tag: **kids-bright**
    - Path: `samples/kids/`
    - Palette: cream `#fff8ef`, sun `#ffb703`, coral `#ff6b6b`, sky `#4cc9f0`, mint `#7bdcb5`, lilac `#c77dff`
    - Type: Fredoka + Nunito
    - Layout: playful blobs, rounded room cards, trust list, enroll card CTA
    - 3D: none (playful rounded shapes — labeled)

12. **Scandinavian furniture — Fjord Form** · style tag: **scandi-furniture**
    - Path: `samples/scandi/`
    - Palette: pale wood `#f3efe8`, ash/birch/oak swatches, sage accent `#5c6b5a`
    - Type: Instrument Serif + DM Sans
    - Layout: product-led collection, materials list, quiet atelier visit — no payments
    - 3D: CSS perspective product card tilt (no WebGL — labeled)

## Hard stops checklist (Pass 4)

- [x] Gallery lists prior 9 + 3 new with working links + style tags (editorial / kids-bright / scandi-furniture)
- [x] Each new landing matches assigned style, mobile-first
- [x] Visual systems distinct (palette + type + layout) — not recolored clones
- [x] NightDeck / Dungeon Dad untouched
- [x] ARTIFACT.md updated (paths, style tags, pass 4)
- [x] ready_for_quality → yes (flipped after live smoke PASS @ 453e6ca)

## Out of scope (held)

Auth, payments, real bookings, CMS, monetization checkout, NightDeck, Dungeon Dad, Lilly, endless taste polish.

## Build notes

- Sole writer Pass 4 under `/workspace/surface-lab` only.
- No git push from this pack refresh unless Phil/CoS requests.
- Design-refs pack refreshed after Pass 4 STOP-GO (this file + AC-pass4-styles.md + README + FULL-RUN-LOG.md).
- Next (A→B→money): Astro twin (editorial) then money/storefront brief — Product-owned AC before Build.
