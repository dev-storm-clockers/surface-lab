# VERIFY — surface-lab

- **lock_ref:** /workspace/surface-lab/LOCK.md
- **artifact_ref:** /workspace/surface-lab/ARTIFACT.md (when Build freezes)
- **ac_ref:** /workspace/surface-lab/AC-pass1-design-research.md
- **done_bar:** |
  Hard stops (fail if any miss):
  1. Gallery index loads and links to all 3 samples
  2. Each sample is a distinct mobile-first landing (local services / creator / small shop)
  3. At least two samples (or gallery+samples set) show visible light-3D from allowed list (CSS 3D/perspective card stack; subtle WebGL/three.js hero; faux-3D layered scroll)
  4. No NightDeck or Dungeon Dad files/URLs changed
  5. ARTIFACT.md lists paths + techniques + Phil review checklist

  Must-holds: original fictional brands only; Pages or local browseable; Surface Lab spelling
- **browser_required:** yes
- **evidence_owner:** Verifier
- **evidence_paths:** /tmp/verify-this/surface-lab-pass1/
- **pass_n_result:** PASS
- **fail_list:** (none)
- **quality_head_decision:** STOP-GO
- **notes:** |
  Pass 1 Quality Verifier (2026-09-10 ~00:06–00:15 AT). Live Pages https://dev-storm-clockers.github.io/surface-lab/ tip bac7dd6 (sample tree from bbee8f5). Mobile viewport 390×844.

  HS1 PASS — gallery a11y + screenshot; links to local-services, creator, shop all HTTP 200.
  HS2 PASS — Harbor Line (services/navy-sand-amber), Nova Rhee (creator/violet-blush), shop (cream-terracotta product hero + 3 cards). Distinct systems at mobile.
  HS3 PASS — Harbor Line CSS perspective card stack visible (stack-3d matrix3d); shop shared/tilt.js data-tilt → matrix3d on pointermove. Creator ships three.js orb (unpkg three@0.160.0); WebGL context failed in this verifier Chrome (llvmpipe BindToCurrentSequence) — ≥2 already met via services+shop.
  HS4 PASS — live nightdeck + dungeon-dad roots/play HTTP 200; surface-lab shipped assets have no ND/DD URL refs (disclaimer text only). Did not modify ND/DD checkouts (pre-existing local VERIFY/ARTIFACT dirt from prior lanes).
  HS5 PASS — ARTIFACT paths + techniques table + Phil review checklist present.

  Must-holds PASS — fictional brands; Surface Lab spelling on gallery/samples; Pages browseable.

  Observation (not fail): gallery + ARTIFACT label shop as “Kiln & Cotton”; live shop brand/title is “Pebble & Wick”. Shop hero label reads “SUBTLE WEBGL HERO” while implemented light-3D on cards is CSS tilt (ARTIFACT). No Lilly. quality_head_decision left pending.
