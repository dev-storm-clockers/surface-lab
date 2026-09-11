# Surface Lab — Editorial Twin product page AC

**When:** Phil YES 2026-09-11 — sell **one** pack for real money. Money Brief theater stays dead.  
**Owner implement:** Build Head. Product owns this AC.  
**Copy source:** `/workspace/surface-lab/SELL-editorial-twin.md` (use that text only).  
**Fulfillment:** `/workspace/surface-lab/pack-editorial-twin.tgz` (CoS/Phil upload to Gumroad — not a Build deliverable beyond noting path).  
**Budget:** one pass → Pages → STOP-GO. Prefer STOP. No Lilly. No Meridian polish. No other SKUs.

## Goal
Ship **one public product page** for Editorial Twin at **$89 CAD fixed** with plain buyer copy, proof links above the fold, and a single Buy CTA wired to Gumroad (`editorialTwin` only).

## Hard stops (Verifier)
1. **One product page** live under Surface Lab Pages — either replace `/money-brief/` content **or** new `/buy/` (Build picks; if `/buy/`, redirect or de-emphasize old money-brief so multi-SKU theater isn’t the public pitch).
2. **Copy** matches SELL sheet: title, subtitle, body, includes, does-not-include, CTA “Buy — $89 CAD”. **No** Who-pays / flagship / bands / education-upsell / process ladder / other SKUs / Diff Kit / Token Pack / Pack Pro.
3. **Proof above the fold:**
   - Static: https://dev-storm-clockers.github.io/surface-lab/samples/editorial/
   - Astro: https://dev-storm-clockers.github.io/surface-lab/twins/editorial-astro/dist/
4. **Single Buy CTA** → Gumroad URL from config key **`editorialTwin` only** (reuse/extend `gumroad.json` or sibling config). Stub URL OK until CoS pastes real product URL — ARTIFACT documents paste path.
5. **Price shown as $89 CAD** (fixed — not a band).
6. **NightDeck / Dungeon Dad / Meridian** untouched. ARTIFACT notes page URL + config path + pack tarball path.

## Must-holds
- Mobile-first; Surface Lab visual language OK (no new style pass).
- Gallery can link to the buy page with plain “Editorial Twin” wording.
- When real Gumroad URL lands: paste into config only — no rebuild required if wired like current gumroad.js pattern.

## Out of scope
Other SKUs · commercial license page · Money Brief rewrite in old voice · Stripe · Lilly · Meridian · zip hosting on Pages

## Success
Public page a stranger can buy from (once Gumroad URL is real). Prefer STOP after Quality GO.
