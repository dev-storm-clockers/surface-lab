# Surface Lab — FULL RUN LOG (Passes 1→4)

**Audience:** Product / Build  
**Company:** Surface Lab (temporary design-research label)  
**Dates:** 2026-09-09 night lock → 2026-09-10 Passes 1–4 STOP-GO  
**Live gallery (authoritative):** https://dev-storm-clockers.github.io/surface-lab/  
**Design-refs path:** `/workspace/surface-lab/design-refs/` · also https://dev-storm-clockers.github.io/surface-lab/design-refs/  
**Harness target (proposed / live-server):** https://surface-lab.secdevsolutions.help/ — may still be publishing; Pages authoritative  
**Hard rule:** NightDeck / Dungeon Dad untouched all passes. No Lilly unless Phil yes via CoS→Harness.

---

## Chronology (factual)

### 2026-09-09 (night, America/Halifax)
- Phil locks temporary company **Surface Lab** for page design research.
- Public-tool overnight shortlist paused.
- Scope: static sample landings + light 3D + gallery; Pages-first.

### Pass 1 — 2026-09-10
- **Build:** 3 landings + gallery + light 3D.
  - `samples/local-services/` — Harbor Line Home Care
  - `samples/creator/` — Nova Rhee · Studio
  - `samples/shop/` — Kiln & Cotton
- **Pages commit:** `bbee8f5`
- **ARTIFACT flip:** `bac7dd6` (ready_for_quality=yes after Pages smoke)
- **STOP-GO:** Prefer morning STOP-GO; Phil agrees Pass 1 as team design references.
- **Design-refs fold:** `e754239` — Pass 1 pack saved under `design-refs/`.

### Pass 2 — 2026-09-10
- **Phil:** keep going.
- **Build:** expand gallery + stronger 3D + Pass 1 nit fixes (false WebGL label on shop fixed).
  - `samples/cafe/` — Morrow Roast
  - `samples/saas/` — Ledgerline
  - `samples/event/` — North Pier Sessions
- **Pages commit:** `9da8f7a`
- **ARTIFACT flip:** `fd7c480` (ready_for_quality=yes)
- **STOP-GO:** Prefer STOP; Phil keep-going → Pass 3.
- **Design-refs fold:** `cfd02c8` — Pass 2 into team reference pack.

### Pass 3 — 2026-09-10
- **Phil:** keep going — distinct site styles not already in gallery.
- **Build:** 3 style landings (max contrast).
  - `samples/brutalist/` — GRIDLOCK STUDIO · **brutalist**
  - `samples/spa/` — Lumen Bathhouse · **soft-luxury**
  - `samples/neon/` — VOLT ROOM · **dark-neon**
- **Pages commit:** `f053f1c`
- **ARTIFACT flip:** `964c0fd` (ready_for_quality=yes after live smoke)
- **STOP-GO:** Prefer STOP after Pass 3; live smoke PASS @ `f053f1c`.
- **Design-refs fold:** `2a34288` — Pass 3 into team reference pack (AC-pass3 + ARTIFACT-pass3 + README).

### Pass 4 — 2026-09-10
- **Phil:** keep going — 3 more styles not already covered.
- **Build:** 3 style landings.
  - `samples/editorial/` — Northbound Review · **editorial**
  - `samples/kids/` — Little Harbor Day · **kids-bright**
  - `samples/scandi/` — Fjord Form · **scandi-furniture**
- **Pages commit:** `453e6ca`
- **ARTIFACT flip:** `ba10093` (ready_for_quality=yes after live smoke PASS @ 453e6ca)
- **Verifier / Quality:** Done bar green; quality_head_decision STOP-GO ~08:00 AT 2026-09-10.
- **STOP-GO:** Prefer **STOP**. No Pass 5 unless Phil asks. No Lilly.
- **Design-refs fold (this pack):** AC-pass4-styles.md + ARTIFACT-pass4.md + README (Pass 1–4) + FULL-RUN-LOG.md.

---

## Live commits reference

| Milestone | Commit | Notes |
|-----------|--------|--------|
| Pass 1 Pages | `bbee8f5` | First live gallery |
| Pass 1 design-refs | `e754239` | Phil-agreed refs |
| Pass 2 Pages | `9da8f7a` | Cafe / SaaS / event |
| Pass 2 design-refs | `cfd02c8` | Fold Pass 2 |
| Pass 3 Pages | `f053f1c` | Brutalist / spa / neon |
| Pass 3 design-refs | `2a34288` | Fold Pass 3 |
| Pass 4 Pages | `453e6ca` | Editorial / kids / scandi |
| Pass 4 ARTIFACT | `ba10093` | ready_for_quality=yes |

---

## Catalog (12 samples)

| Pass | Path | Brand | Style tag |
|------|------|-------|-----------|
| 1 | `samples/local-services/` | Harbor Line Home Care | local services |
| 1 | `samples/creator/` | Nova Rhee · Studio | creator |
| 1 | `samples/shop/` | Kiln & Cotton | shop |
| 2 | `samples/cafe/` | Morrow Roast | cafe |
| 2 | `samples/saas/` | Ledgerline | saas / waitlist |
| 2 | `samples/event/` | North Pier Sessions | event |
| 3 | `samples/brutalist/` | GRIDLOCK STUDIO | **brutalist** |
| 3 | `samples/spa/` | Lumen Bathhouse | **soft-luxury** |
| 3 | `samples/neon/` | VOLT ROOM | **dark-neon** |
| 4 | `samples/editorial/` | Northbound Review | **editorial** |
| 4 | `samples/kids/` | Little Harbor Day | **kids-bright** |
| 4 | `samples/scandi/` | Fjord Form | **scandi-furniture** |

---

## Next steps (A → B → money)

Ordered sequence after Pass 4 STOP:

1. **A — Astro twin**  
   Twin of editorial landing (Northbound Review / `samples/editorial/`) as Astro vs static comparison.  
   - **Product-owned:** AC / brief stub — Product writes before Build starts.  
   - **Build:** implements after Product AC.

2. **B — Money / storefront brief**  
   Template-pack monetization / storefront path.  
   - **Product-owned:** money brief stub (Market Realist if needed).  
   - Do not block on endless taste passes.

3. **Harness TLS**  
   https://surface-lab.secdevsolutions.help/ remains proposed/live-server; publish/confirm via Harness when Phil yes. Pages stay authoritative until then.

---

## Product-owned stubs (leave for Product)

### Stub: Astro twin AC
- **Owner:** Product  
- **Status:** not written  
- **Intent:** Compare Astro build of editorial sample vs current static `samples/editorial/`; define Done bar (parity, DX, deploy path).  
- **Build waits on:** Product AC.

### Stub: Money / storefront brief
- **Owner:** Product  
- **Status:** not written  
- **Intent:** Template-pack SKU / storefront framing; pricing and delivery still open.  
- **Build waits on:** Product brief (not a Build invent).

---

## Process that worked
- Phil lock → thin AC → Build Pages → Verifier → Quality STOP-GO (prefer one pass then STOP).
- Style-contrast briefs beat “more of the same.”
- Design-refs fold after STOP-GO / Phil agree — not before.
- Pages-first; Harness packet ≠ Lilly.

## Avoid next time
- False WebGL / technique labels (caught Pass 2).
- Endless taste polish without Phil keep-going.
- Direct Lilly from non-Harness agents.
- Touching NightDeck / Dungeon Dad from Surface Lab passes.
