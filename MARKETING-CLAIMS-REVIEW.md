# Regenitiva — Marketing Copy Compliance Review

**Purpose:** Flag PRP / regenerative-medicine wording that may overstate clinical efficacy, so
compliance/content review (and legal counsel) can decide whether to keep, soften, or revise it.

**Status:** DECISIONS APPLIED (August 2026). Section 3 of the client-facing review PDF was walked
through item by item and the approved wording has been applied to the site. See
[Decision Log](#decision-log) at the end of this document for what was kept, softened, or revised.
The flag tables below are preserved as the original pre-change record.

**Reviewed:** All public pages discussing PRP, regenerative treatments, injuries, recovery, healing,
and treatment effectiveness. Date of review: August 2026.

---

## Summary

**The site is already fairly conservative.** None of the hardest-line phrases appear anywhere:

- ❌ "eliminates pain" — not present
- ❌ "permanent relief" — not present
- ❌ "guaranteed results" — not present
- ❌ "proven to cure" / "cure" — not present
- ❌ "works for everyone" — not present
- ❌ "regenerates cartilage" — not present (cartilage is only mentioned as something steroids can
  *weaken*, not something PRP regenerates)

**Compliant hedging is already in place** and should be preserved:

- FAQ (homepage): "candid about what the research supports and what it doesn't"
- Outcome Tracking service page: "we don't market unverified statistics as claims"
- Growth & Marketing service page: "no unverified outcome claims and no overselling"
- Protocol page "On Outcomes" section: notes a formal outcomes study is in progress

**Where the flags concentrate:** almost entirely the `/protocol` page, with one mild instance on
the homepage. The 10 service pages are business-focused (practice development, compliance,
billing, etc.) and contain no clinical-efficacy claims.

**Important context:** Much of the flagged `/protocol` language comes directly from the client's
own answers in the discovery questionnaire ("What Makes PRP Different," and the patient/practice
benefit lists). These are the client's own words — compliance should weigh them accordingly.

---

## 🔴 Tissue-repair / mechanism-of-action claims (highest priority)

These imply PRP actively repairs or heals tissue at a biological level.

| File | Line | Exact wording | Concern |
|------|------|---------------|---------|
| `src/pages/protocol.astro` | 19 | "…stimulate the body's **natural repair process at the cellular level**. It **addresses the underlying injury**, not just the symptom." | States a biological repair mechanism as fact |
| `src/pages/protocol.astro` | 19 | "…steroid injections…**don't repair damaged tissue**…" | By contrast, implies PRP *does* repair damaged tissue |
| `src/pages/protocol.astro` | 43 | "…supports **actual tissue repair** rather than only reducing pain" | Direct tissue-repair efficacy claim |
| `src/pages/protocol.astro` | 16 | "…it works with the body's own **healing response**…" | "Healing" mechanism language (milder) |
| `src/pages/protocol.astro` | 40 | "…no long **wait to heal**" | Implies healing outcome (milder) |

## 🟠 Surgery-avoidance framing ("Avoid surgery" category)

The site never says "avoid surgery" literally, but positions PRP as a surgery alternative.

| File | Line | Exact wording | Concern |
|------|------|---------------|---------|
| `src/pages/protocol.astro` | 25 | "PRP offers a **non-surgical alternative** — no incisions, no anesthesia risk, no lengthy post-op recovery." | Frames PRP as an alternative to surgery |
| `src/pages/protocol.astro` | 41 | "…an in-office injection **instead of an operating room**" | Surgery-avoidance framing |
| `src/pages/protocol.astro` | 52 | "…refer into **without sending patients to surgery**" | Surgery-avoidance framing |
| `src/pages/protocol.astro` | 54 | "…in-office, **non-surgical care**" | Surgery-avoidance framing |
| `src/components/home/Protocol.astro` | 16 | "…patients…**not ready for surgery**…referred out or told to wait" | Mild surgery framing (homepage) |

## 🟡 Recovery / outcome-timing claims

| File | Line | Exact wording | Concern |
|------|------|---------------|---------|
| `src/pages/protocol.astro` | 25 | "…most patients **resume normal activity within a day or two**" | Specific recovery-time expectation |
| `src/pages/protocol.astro` | 44 | "…avoids the **tissue weakening** of repeated steroid use and the risks of surgery" | Comparative safety/outcome claim |

---

## Blog

The 12 blog posts were scanned for the strongest claim terms (cure, permanent, guarantee,
eliminates, heals, regenerates cartilage) and came back clean. **Note:** the blog has since been
removed from the site entirely, so this is moot going forward.

---

## Testimonials, Case Studies & Success Stories

**Finding: none currently exist on the site — nothing to flag.**

A full review found no patient testimonials, physician testimonials, case studies, or success
stories on any page, and none of the high-risk phrasings ("PRP cured my condition," "my cartilage
grew back," "I avoided surgery because of this treatment," "my pain disappeared permanently,"
"this treatment works better than surgery").

These were removed over the course of the build:

- The homepage patient story ("surgical candidate… left pain-free") was removed.
- An invented physician testimonial on the Practice Development page was removed.
- The blog (which contained an invented "— Physiatrist, California practice" quote) was deleted.
- The two real clients (California Premier Pain Clinics; Pure Health and Wellness) are **not**
  named or quoted anywhere on the site.

**Protective language already in place:** the Terms of Service "No Guarantees" clause states that
"any examples, projections, case studies, or descriptions of potential results are illustrative
only and may not reflect the results of any particular practice or patient."

**Guidance if testimonials or case studies are added later:**

1. Obtain a signed written release from the patient or physician before publishing.
2. Avoid the high-risk phrasings above (cure, permanent, cartilage regrowth, surgery superiority).
3. Place an "individual results vary; results are not typical" disclaimer adjacent to the testimonial.
4. Do not surround an individual testimonial with copy that implies it represents typical results.
5. For patient stories specifically, confirm HIPAA-compliant authorization for use of their information.

## Financial & Practice-Growth Claims (provider-facing)

**Summary: the site is very conservative — no specific dollar figures, ROI guarantees, or volume
promises appear anywhere.** None of the high-risk phrasings are present: no "add $X per month,"
"generate N new patients per month," "build a six-figure PRP program," "guaranteed ROI," "double
your revenue," "make $X per procedure," or "add $X in annual revenue."

For reference, the client's brand guide already prohibits this: "no projected revenue figures, no
invented success rates, no 'up to' claims," and revenue/ROI/profit "may never appear in a hero
headline, a page title, a meta title, a nav label, or an email subject line." The live copy adheres
to that rule.

**Flagged (all low-severity — qualitative, no numbers or guarantees):**

| File | Line | Exact wording | Concern |
|------|------|---------------|---------|
| `src/pages/protocol.astro` | 58 | "…a staged treatment model — PRP protocols often involve a series rather than one-and-done, **supporting patient volume and revenue per case**" | Ties treatment to increased patient volume and revenue |
| `src/components/home/FAQ.astro` | 13 | "We put a specific figure and a **projected return** in front of you during the assessment" | References a "projected return" (ROI-adjacent); delivered privately during assessment, not a published numeric promise |
| `src/pages/services/growth-marketing.astro` | 11 | "A regenerative program only **pays off** if the right patients find it…" | Mild financial framing; self-hedged by "not inflated claims" in the same sentence |

**Guidance:** keep financial language qualitative and hedged; never publish specific revenue, ROI,
or patient-volume figures without substantiation; keep revenue/ROI out of headlines and titles (per
the brand guide); any business-case numbers should stay in the private assessment conversation, not
public marketing copy.

## Earnings Examples & Case Studies (practice-development results)

**Finding: the site presents no practice-development results, earnings examples, case studies,
projections, or client outcomes.** There is therefore nothing that requires an
actual-vs-illustrative-vs-projection-vs-hypothetical distinction, and nothing implies that prior
client results are guaranteed or typical for every Regenitiva partner.

- No dollar figures, statistics, success rates, track-record numbers, or named client outcomes
  appear anywhere (see the Financial & Practice-Growth section above).
- The two real clients are not named or quoted, and no results are attributed to them.

**Protective language already in place:** the Terms of Service "No Guarantees" clause states that
"any examples, projections, case studies, or descriptions of potential results are illustrative
only and may not reflect the results of any particular practice or patient" — exactly the
distinction and disclaimer this item calls for, should any results be added later.

**Guidance if earnings examples or case studies are added later:**

1. Label each clearly as one of: actual historical result, illustrative example, projection, or
   hypothetical scenario.
2. Never present a prior client's result as guaranteed or typical for every partner.
3. Place a "results not typical; individual results vary" disclaimer adjacent to any figure or example.
4. Only publish numbers Regenitiva can source and substantiate (per the brand guide).
5. For actual client results, obtain written permission before publishing.

## Final Sitewide Compliance Search (step 14)

A final full-source search was run for the old contact details, "physicians retain," and the claim
words: guarantee, cure, heal, regenerate, repair, 100%, no risk.

**Confirmed removed — zero matches (earlier fixes held):**

- `vincesurra@regenitiva.com` — none (now `vince@regenitiva.com` sitewide)
- `805-896-7983` — none (now `931-300-2226` sitewide)
- "physicians retain" — none (now "Healthcare providers retain sole responsibility and authority…")

**No issue found:**

- `100%` — appears only in CSS layout (width/height/gradients), never as a claim.
- `guarantee` — appears only in **protective** legal disclaimers (Privacy: "cannot guarantee
  absolute security"; Terms: "do not constitute a promise or guarantee," and the "No Guarantees"
  section). Intentional — should stay.
- `cure` and `regenerate` — no matches (no "cure" or "regenerates cartilage" language exists; the
  brand term "regenerative medicine" is descriptive, not a claim).

**New flag (not previously captured):**

| File | Line | Exact wording | Concern |
|------|------|---------------|---------|
| `src/pages/protocol.astro` | 27 | "…there's **no risk of rejection**…" | Safety claim. Medically this refers to autologous (own-blood) treatment not causing immune rejection, which is defensible — but the "no risk" phrasing should be reviewed. |

**Line-number correction:** the step-8 flags on `/protocol` are unchanged in wording, but their line
numbers shifted **+5** after the treatment disclaimer was added in step 9. Current `/protocol`
locations: healing response (21), tissue-repair mechanism (24), non-surgical alternative + recovery
timing (30), "no long wait to heal" (45), "operating room" (46), "actual tissue repair" (48), "tissue
weakening" (49), "without sending patients to surgery" (57), "non-surgical care" (59). The homepage
`src/components/home/Protocol.astro:16` ("not ready for surgery") is unchanged.

**Note on unpublished files:** the `design-system-guide/` folder (original design mockups) still
contains historical contact info and draft copy, but it is **not part of the published site** —
Astro builds only `src/pages/`, so nothing in that folder is served to visitors.

## Decision Log

Section 3 of the client-facing review PDF (`RegenitivaWebsiteComplianceReview_1.pdf`) was worked
through item by item. Item 1 was decided by the client; items 2–3 were client-approved softenings;
items 4–16 were applied using the recommended fix at the client's direction. Line numbers are
pre-change.

| # | § | Original wording | Decision | New wording |
|---|---|---|---|---|
| 1 | 3.1 | "stimulate the body's natural repair process at the cellular level. It addresses the underlying injury, not just the symptom." (`protocol.astro:24`) | **Keep as-is** | unchanged |
| 2 | 3.1 | "…but they don't repair damaged tissue —" (`protocol.astro:24`) | **Soften** | clause removed; sentence now "Steroid injections reduce inflammation and mask pain, and repeated use can weaken cartilage, tendons, and ligaments over time." |
| 3 | 3.1 | "Treats the injury… supports actual tissue repair rather than only reducing pain" (`protocol.astro:48`) | **Soften** | "Targets the injury, not just the symptom — intended to support the body's own repair process rather than only reduce pain" |
| 4 | 3.1 | "it works with the body's own healing response instead of overriding it" (`protocol.astro:21`) | **Soften** | "it is intended to work with the body's own healing response rather than override it" |
| 5 | 3.1 | "A faster path back to normal activity — no surgical recovery, no long wait to heal" (`protocol.astro:45`) | **Soften** | "An alternative path back to normal activity — no surgical recovery period, though individual recovery times vary" |
| 6 | 3.2 | "PRP offers a non-surgical alternative — no incisions, no anesthesia risk, no lengthy post-op recovery." (`protocol.astro:30`) | **Revise** | "PRP is a non-surgical option — no incisions and no general anesthesia." Added: "Whether PRP is appropriate in place of surgery is a determination for the treating physician." |
| 7 | 3.2 | "an in-office injection instead of an operating room" (`protocol.astro:46`) | **Soften** | "Non-surgical and minimally invasive — delivered as an in-office injection" |
| 8 | 3.2 | "…can refer into without sending patients to surgery" (`protocol.astro:57`) | **Soften** | trailing clause removed |
| 9 | 3.2 | "A lower liability profile than surgical referral — autologous, in-office, non-surgical care" (`protocol.astro:59`) | **Revise** | "An office-based care model — autologous, in-office, and non-surgical" |
| 10 | 3.2 | "…not ready for surgery…referred out or told to wait" (`home/Protocol.astro:16`) | **Keep as-is** | unchanged — describes a gap in care, does not claim PRP substitutes for surgery |
| 11 | 3.3 | "most patients resume normal activity within a day or two" (`protocol.astro:30`) | **Soften** | "recovery time varies from patient to patient" |
| 12 | 3.3 | "Fewer downstream complications — avoids the tissue weakening of repeated steroid use and the risks of surgery" (`protocol.astro:49`) | **Revise** | "No corticosteroid exposure and no surgical incision" |
| 13 | 3.4 | "there's no foreign material and no risk of rejection — with a minimal side-effect profile compared to…" (`protocol.astro:27`) | **Revise** | "no foreign material is introduced and immune rejection is not a concern. As with any injection, side effects are possible and should be discussed with the treating provider." |
| 14 | 3.5 | "…a series rather than one-and-done, supporting patient volume and revenue per case" (`protocol.astro:58`) | **Soften** | "…a series of treatments rather than a single visit, with the plan determined clinically for each patient" |
| 15 | 3.5 | "a specific figure and a projected return" (`FAQ.astro:13`) | **Soften** | "a specific figure and a business-case analysis" |
| 16 | 3.5 | "A regenerative program only pays off if…" (`growth-marketing.astro:11`) | **Soften** | "A regenerative program only works if…" |

### Two comparative claims removed that the review had not flagged

While applying items 9 and 13, two additional comparative claims were found in the same sentences
and removed along with them. Both should be confirmed by compliance:

1. **"A lower liability profile than surgical referral"** (`protocol.astro:59`) — a comparative
   legal/risk claim, arguably stronger than the "non-surgical care" phrase the review flagged in
   the same bullet.
2. **"with a minimal side-effect profile compared to injected corticosteroids or synthetic
   alternatives"** (`protocol.astro:27`) — an unsubstantiated comparative safety claim sitting
   directly beside the flagged "no risk of rejection" phrase.

### Still open — not part of Section 3

- **`protocol.astro:7` meta description:** "…built for **consistent outcomes** and defensible
  documentation." An outcomes claim in the field that renders in search results and social shares.
  Not flagged in the review PDF and left unchanged; recommend adding it to the next review pass.
- **`protocol.astro:47`:** "Uses their own biology — no synthetic drugs or foreign material, so the
  side-effect profile is low." The "side-effect profile is low" clause is a safety claim that was
  not flagged. Left unchanged.

### Preserved protective language

Unchanged and still in place: the treatment disclaimer callout at `protocol.astro:17` ("not medical
advice… not appropriate for every patient… results vary from person to person… determined by the
treating healthcare provider"), the "On Outcomes" section, the Terms of Service "No Guarantees"
clause, and the hedging noted in the Summary above.
