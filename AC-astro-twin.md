# Surface Lab — Astro vs static twin AC

**When:** After Pass 4 STOP-GO (done).  
**Pick:** Twin one Pass 4 landing — editorial (`samples/editorial/` · Northbound Review).  
**Owner implement:** Build Head. Product owns this AC.  
**Budget:** prefer one pass then STOP. Pages or sibling path OK. Lilly only if Phil yes via CoS→Harness.

## Goal
Prove **static HTML ↔ Astro** twin of the same editorial landing so the studio can reuse both flavors (Template Scout #1). Include a short twin-diff checklist for the library.

## Hard stops (Verifier)
1. **Static source of truth:** Existing `samples/editorial/` remains intact and linked from the gallery.
2. **Astro twin:** An Astro (Vite) project renders the same editorial content/layout intent (Northbound Review) — not a blank starter.
3. **Side-by-side:** Gallery or twin index links **both** static and Astro URLs (or paths) with clear labels.
4. **Parity must-holds:** Mobile-first; same fictional brand; no NightDeck/Dungeon Dad changes.
5. **ARTIFACT.md** notes: how to run Astro locally, build output path, and what differs from static.

## Must-holds (non-blocking if thin)
- **Twin Diff Kit:** README or `TWIN-DIFF.md` checklist (static vs Astro: structure, assets, how to edit copy).
- **Content migration:** 5–10 line playbook static → Astro content/collections (or “no collections yet” explicit).
- **SEO/OG parity:** title/description/OG basics match static editorial (or documented intentional deltas).
- Prefer no full-gallery Astro migration; twin **one** page only.
- Packet to Harness when ready; TLS only with Phil yes.

## Out of scope (this pass)
Workers twin · storefront/checkout · Neon waitlist · daycare/scandi Astro stubs · twin CI · env/secrets matrix · a11y budget deep-dive · payments · monetization checkout · more landing styles

## Success
Browseable static + Astro editorial twin + twin-diff notes; ready for money brief next.
