# Surface Lab — Pass 4 ARTIFACT

**Company:** Surface Lab (temporary design-research label)  
**Pass:** 4 — more styles (editorial / kids-bright / scandi-furniture) — build complete, awaiting quality  
**Built:** 2026-09-10 (UTC) / 2026-09-10 morning AT  
**Scope:** Local static gallery only. No NightDeck / Dungeon Dad changes. No Lilly.

## Build gate

- **root:** /workspace/surface-lab
- **slug:** surface-lab
- **owner_agent:** Build Head
- **ready_for_quality:** no
- **pass:** 4
- **live_url:** https://dev-storm-clockers.github.io/surface-lab/
- **notes:** Pass 4 local smoke PASS (HTTP) — gallery 12 + Northbound Review / Little Harbor Day / Fjord Form. Pages push pending; ready stays no until live re-smoke. Prefer STOP. Harness live target https://surface-lab.secdevsolutions.help/. No Lilly from Build. NightDeck/Dungeon Dad untouched.

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

## Distinct visual systems

### Pass 1 (kept)

1. **Local services — Harbor Line Home Care**
   - Palette: deep navy `#0b1f3a`, warm sand `#f5efe6`, amber CTA `#e8912d`
   - Type: Source Serif 4 + DM Sans

2. **Creator — Nova Rhee**
   - Palette: ink violet `#12081c`, blush `#f0a6ca`, soft glow `#c4b5fd`
   - Type: Syne + IBM Plex Mono

3. **Shop — Kiln & Cotton**
   - Palette: cream `#f3ebe0`, terracotta/espresso, charcoal `#2a1a12`
   - Type: Palatino/serif display + system sans

### Pass 2 (kept)

4. **Cafe — Morrow Roast**
   - Palette: warm olive `#3f4a2e` / `#2a3220`, cream `#f4efe4`, clay `#c4a574`
   - Type: Libre Baskerville + Nunito Sans

5. **SaaS waitlist — Ledgerline**
   - Palette: cool slate `#0f1724`, electric teal `#2dd4bf`
   - Type: Space Grotesk + Inter

6. **Event — North Pier Sessions**
   - Palette: night indigo `#0b1026`, coral `#ff6b6b`
   - Type: Bebas Neue + Manrope

### Pass 3 (kept)

7. **Brutalist portfolio — GRIDLOCK STUDIO** · style tag: **brutalist**
   - Palette: paper `#f4f1ea`, pure ink `#0a0a0a`, signal red `#e10600`
   - Type: Archivo Black + IBM Plex Mono
   - Layout: thick rules, hard cell grid, sparse chrome, uppercase display
   - 3D: none (flat ink — labeled)

8. **Soft luxury spa — Lumen Bathhouse** · style tag: **soft-luxury**
   - Palette: ivory `#f7f3ee`, sage `#b8c4b0`, blush `#e8d5cc`, stone `#d4cbc0`, accent `#6f7d68`
   - Type: Cormorant Garamond + Outfit
   - Layout: centered airy hero, generous whitespace, soft pill CTAs, ritual cards
   - 3D: none (soft light / whitespace — labeled)

9. **Dark neon venue — VOLT ROOM** · style tag: **dark-neon**
   - Palette: near-black `#050508`, magenta `#ff2bd6`, cyan `#2ef0ff`, lime `#b8ff3c`
   - Type: Orbitron + Rajdhani
   - Layout: dark field, neon CTAs, lineup list, ticket tiers
   - 3D: CSS neon glow + perspective ticket card (explicitly **no WebGL**)

### Pass 4 (new)

10. **Editorial magazine — Northbound Review** · style tag: **editorial**
    - Palette: warm paper `#f6f1e7`, ink `#1c1915`, brick accent `#8b3a2a`
    - Type: Newsreader + Libre Franklin
    - Layout: masthead/issue, serif cover headline, two-column story, pull-quote, TOC
    - 3D: none (print column rhythm — labeled)

11. **Kids-bright daycare — Little Harbor Day** · style tag: **kids-bright**
    - Palette: cream `#fff8ef`, sun `#ffb703`, coral `#ff6b6b`, sky `#4cc9f0`, mint `#7bdcb5`, lilac `#c77dff`
    - Type: Fredoka + Nunito
    - Layout: playful blobs, rounded room cards, trust list, enroll card CTA
    - 3D: none (playful rounded shapes — labeled)

12. **Scandinavian furniture — Fjord Form** · style tag: **scandi-furniture**
    - Palette: pale wood `#f3efe8`, ash/birch/oak swatches, sage accent `#5c6b5a`
    - Type: Instrument Serif + DM Sans
    - Layout: product-led collection, materials list, quiet atelier visit — no payments
    - 3D: CSS perspective product card tilt (no WebGL — labeled)

## 3D techniques (all passes)

| Sample | Technique | Label accuracy |
|--------|-----------|----------------|
| Local services | CSS perspective card stack | OK |
| Creator | three.js WebGL orb | OK |
| Shop | CSS perspective tilt | OK |
| Cafe | CSS flip + parallax | OK |
| SaaS | three.js WebGL mesh | OK |
| Event | CSS ticket stack + flip | OK |
| Brutalist | none | labeled flat ink |
| Spa | none | labeled soft light |
| Neon | CSS glow + layered ticket | labeled no WebGL |
| Editorial | none | labeled print column rhythm |
| Kids | none | labeled playful shapes |
| Scandi | CSS product card tilt | labeled no WebGL |

## Hard stops checklist (Pass 4)

- [x] Gallery lists prior 9 + 3 new with working links + style tags (editorial / kids-bright / scandi-furniture)
- [x] Each new landing matches assigned style, mobile-first
- [x] Visual systems distinct (palette + type + layout) — not recolored clones
- [x] NightDeck / Dungeon Dad untouched
- [x] ARTIFACT.md updated (paths, style tags, pass 4)
- [ ] ready_for_quality remains **no** until Verifier/Build smoke

## Out of scope (held)

Auth, payments, real bookings, CMS, monetization checkout, NightDeck, Dungeon Dad, Lilly, endless taste polish.

## Build notes

- Sole writer Pass 4 under `/workspace/surface-lab` only.
- No git push from this pass unless Phil/CoS requests.
- Design-refs refresh optional / non-blocking — skipped for this pass Done.
