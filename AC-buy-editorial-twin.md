# Surface Lab — Editorial Twin product page AC

**When:** Phil YES 2026-09-11 — sell **one** pack for real money.  
**Pivot:** Gumroad **out** · **Stripe Payment Link in** ($89 CAD).  
**Owner implement:** Build Head. Product owns this AC.  
**Copy source:** `/workspace/surface-lab/SELL-editorial-twin.md`  
**Fulfillment file:** `/workspace/surface-lab/pack-editorial-twin.tgz`  
**Budget:** one pass → Pages → STOP-GO. Prefer STOP. No Lilly. No Meridian. No other SKUs.

## Goal
Public **one-product** `/buy/` (or equiv) page: plain SELL copy, proof above the fold, single **Buy — $89 CAD** CTA that opens a **Stripe Payment Link** from config.

## Hard stops (Verifier)
1. **One product page** live (prefer https://dev-storm-clockers.github.io/surface-lab/buy/). Money Brief multi-SKU theater not the public pitch.
2. **Copy** from SELL sheet only — title, subtitle, body, includes, does-not-include, CTA. No Who-pays / flagship / bands / other SKUs.
3. **Proof above the fold:**
   - Static: https://dev-storm-clockers.github.io/surface-lab/samples/editorial/
   - Astro: https://dev-storm-clockers.github.io/surface-lab/twins/editorial-astro/dist/
4. **Buy CTA** → Stripe Payment Link URL from config key **`editorialTwin`** in `buy.json` or `stripe.json` (Build picks; retire Gumroad-only wiring from the public Buy path). Stub URL OK until CoS pastes real link — ARTIFACT documents paste path.
5. **Price $89 CAD fixed.**
6. **Fulfillment note in ARTIFACT:** prefer Stripe Payment Link file attach of `pack-editorial-twin.tgz`; if not yet attached, document manual fulfill after pay. No Gumroad.
7. NightDeck / Dungeon Dad / Meridian untouched.

## Must-holds
- Mobile-first; config paste needs no rebuild if JS fetches JSON.
- Gallery may link to `/buy/` with plain “Editorial Twin” wording.

## Out of scope
Gumroad · other SKUs · full Stripe Checkout app · webhooks automation · Lilly · Meridian polish

## Success
Stranger can open Buy → Stripe Payment Link (once URL real). Prefer STOP after Quality GO.
