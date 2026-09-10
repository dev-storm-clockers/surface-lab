# Surface Lab — Pass 2 ARTIFACT

**Company:** Surface Lab (temporary design-research label)  
**Pass:** 2 — expand gallery + stronger 3D + Pass 1 nit fixes  
**Built:** 2026-09-10 (UTC) / 2026-09-10 morning AT  
**Scope:** Local static gallery only. No NightDeck / Dungeon Dad changes. No Lilly.

## Build gate

- **root:** /workspace/surface-lab
- **slug:** surface-lab
- **owner_agent:** Build Head
- **ready_for_quality:** no
- **pass:** 2
- **live_url:** https://dev-storm-clockers.github.io/surface-lab/
- **notes:** Pass 2 local smoke PASS 2026-09-10 — gallery 6 samples (Pass1 + Morrow Roast cafe / Ledgerline SaaS / North Pier Sessions event); stronger 3D (CSS flip+parallax, three.js WebGL, CSS ticket stack); shop Kiln & Cotton + CSS tilt label fixed. Prefer STOP. No Lilly. NightDeck/Dungeon Dad untouched. ready=no until Pages push confirm.

## Browse

Open locally:

```bash
cd /workspace/surface-lab && python3 -m http.server 8765
# then open http://127.0.0.1:8765/
```

| Path | Role |
|------|------|
| `/workspace/surface-lab/index.html` | Gallery index (6 samples + design notes) |
| `/workspace/surface-lab/samples/local-services/index.html` | Harbor Line Home Care — local services |
| `/workspace/surface-lab/samples/creator/index.html` | Nova Rhee · Studio — creator / link-in-bio |
| `/workspace/surface-lab/samples/shop/index.html` | Kiln & Cotton — small shop |
| `/workspace/surface-lab/samples/cafe/index.html` | Morrow Roast — cafe / restaurant |
| `/workspace/surface-lab/samples/saas/index.html` | Ledgerline — SaaS waitlist |
| `/workspace/surface-lab/samples/event/index.html` | North Pier Sessions — event / meetup |

Shared:

| Path | Role |
|------|------|
| `/workspace/surface-lab/shared/gallery.css` | Gallery shell styles |
| `/workspace/surface-lab/shared/card-stack.css` | CSS 3D perspective review stack |
| `/workspace/surface-lab/shared/tilt.js` | Pointer perspective tilt for product cards |

Per-sample assets: `cafe.css` / `cafe.js`, `saas.css` / `saas.js`, `event.css` / `event.js`, `shop.css`.

## Distinct visual systems

### Pass 1 (kept)

1. **Local services — Harbor Line Home Care**
   - Palette: deep navy `#0b1f3a`, warm sand `#f5efe6`, amber CTA `#e8912d`
   - Type: Source Serif 4 + DM Sans
   - Pattern: trust strip, phone CTA, services grid, reviews, after-hours band

2. **Creator — Nova Rhee**
   - Palette: ink violet `#12081c`, blush `#f0a6ca`, soft glow `#c4b5fd`
   - Type: Syne + IBM Plex Mono
   - Pattern: avatar, link-in-bio buttons, featured work tiles

3. **Shop — Kiln & Cotton**
   - Palette: cream `#f3ebe0`, terracotta/espresso, charcoal `#2a1a12`
   - Type: Palatino/serif display + system sans
   - Pattern: product hero, 3 product cards, contact (no cart/payments)
   - **Nit fix:** live page brand now matches gallery/ARTIFACT (**Kiln & Cotton**, was mislabeled Pebble & Wick); technique label corrected to CSS perspective tilt (was false “WebGL”)

### Pass 2 (new)

4. **Cafe — Morrow Roast**
   - Palette: warm olive `#3f4a2e` / `#2a3220`, cream `#f4efe4`, clay `#c4a574`
   - Type: Libre Baskerville + Nunito Sans
   - Pattern: menu highlight, hours, reserve/contact CTA

5. **SaaS waitlist — Ledgerline**
   - Palette: cool slate `#0f1724`, electric teal `#2dd4bf`
   - Type: Space Grotesk + Inter
   - Pattern: product hero, 3 feature cards, email waitlist (UI only)

6. **Event — North Pier Sessions**
   - Palette: night indigo `#0b1026`, coral `#ff6b6b`
   - Type: Bebas Neue + Manrope
   - Pattern: date/venue, agenda strip, RSVP CTA (UI only)

## 3D techniques

| Sample | Technique | Strength | Implementation |
|--------|-----------|----------|----------------|
| Local services | CSS perspective **card stack** | Pass 1 light | `shared/card-stack.css` |
| Creator | **three.js WebGL** orb | Pass 1 (real WebGL) | `three@0.160.0` CDN in sample |
| Shop | CSS perspective **tilt** | Pass 1 light | `shared/tilt.js` + CSS hero (label fixed) |
| Cafe | CSS **flip** menu cards + **parallax** layers | **Stronger** | `cafe.css` / `cafe.js` |
| SaaS | **three.js WebGL** torus-knot mesh | **Stronger** | `saas.js` + CDN import map |
| Event | CSS **3D ticket stack** + **flip** RSVP card | **Stronger** | `event.css` / `event.js` |

Stronger-3D hard stop: cafe + saas + event all qualify (≥2 required).

## Hard stops checklist (Pass 2)

- [x] Gallery lists Pass 1’s 3 + new 3 with working links
- [x] Each new sample distinct mobile-first (cafe / SaaS-waitlist / event)
- [x] ≥2 stronger-3D treatments visible and correctly labeled
- [x] Pass 1 nits fixed (Kiln & Cotton name; WebGL vs CSS labels)
- [x] NightDeck / Dungeon Dad untouched
- [x] ARTIFACT.md updated (paths, techniques, pass 2)
- [ ] ready_for_quality → yes (after smoke / Phil gate)

## Out of scope (held)

Auth, payments, real email backends, CMS, NightDeck, Dungeon Dad, Lilly, endless taste polish.

## Build notes

- Sole writer Pass 2 under `/workspace/surface-lab` only.
- No git push from this pass unless Phil/CoS requests.
