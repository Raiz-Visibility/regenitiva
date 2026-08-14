# Regenitiva — Content Truth Sheet

Source: client answers in the "Regenitiva — Outstanding Questions" form (Aug 2026) and the
Brand Discovery Questionnaire (Jun 2026). Use this as the source of truth when writing or
generating any page copy (including the service pages). If a claim isn't supported here,
don't put it on the site.

---

## 🚫 Golden rules (do not violate)

1. **Never mention Dr. Francis "Frank" Lagattuta** — no name, likeness, credentials, photo, or
   founder story. He no longer sees patients. The providers currently use the protocols/policies.
2. **"AAAHC-aligned," never "AAAHC-accredited."** Policies and protocols are aligned so each
   clinic *can choose* to pursue AAAHC accreditation. The company is not accredited.
3. **No unverified outcome statistics as marketing claims.** An outcomes study is *in progress*;
   there is no published data yet. (The client mentioned an informal "~80% relief in 80% of
   patients" observation — treat as internal only, do NOT feature it as a hard stat.)
4. **Promise less on CTAs.** The first call is an introductory conversation to discuss a
   *possible* practice assessment — not a deliverable the physician receives back.
5. **Never use these words:** fraud, overpriced, unnecessary, money-focused.
   **Words the client likes:** innovative, patient-focused, open-minded, "continue to research."

---

## ✅ Confirmed facts

**PRP / the protocol**
- One **consistent, standardized protocol** — NOT different protocols per body part. Consistency +
  ultrasound guidance is the differentiator.
- **Ultrasound-guided**: injection placed exactly at the injury site, not by surface landmarks.
- PRP is **regenerative (not palliative)**, **autologous** (patient's own blood, low side-effect
  profile, no rejection), **non-surgical / in-office** (under an hour, ~1–2 day return to activity),
  and **precision-driven**.
- Differs from off-the-shelf kits by being a standardized, documented, ultrasound-guided protocol
  with validated outcome measures — not a bedside kit and a technique in one person's head.

**Training** (this corrects the old "remote" copy — training is IN PERSON)
- Delivered **in person** by **board-certified physicians in pain medicine and/or musculoskeletal
  ultrasound**.
- **Whole team** is trained: providers plus front- and back-office staff. Timing is individualized
  to the practice.
- **First cases are proctored live** ("Yes").
- Ongoing support: Regenitiva stays involved for future training as the program grows.

**Process & timeline**
- After a form submit / inquiry: contacted **within 48 hours**, or the practice can book a call.
- First call = introductory conversation about a *possible* practice assessment. **Vince takes the call.**
- Assessment reviews: current staffing, insurance coverage, location/space, and local demographics
  to gauge whether PRP is a good fit; plus a review of the physical space for compatibility.
- **Timeline: 3–6 months** from first contact to treating patients.
- Practice needs: a **procedure room** meeting some specific requirements, plus some special
  equipment for PRP.

**Clients** (2 current — get written permission before naming/quoting publicly)
- California Premier Pain Clinics
- Pure Health and Wellness

**Contact**
- Front-facing contact: **Vincent Surra, CEO** — 931-300-2226 · vince@regenitiva.com
  (This is the single correct email used site-wide.)

---

## 🧩 The 10 services (for building the service pages)

From the Brand Discovery Questionnaire. Signature offering = **Practice Operations & Compliance**.

1. **Regenerative Medicine Practice Development** — help physicians launch/expand regen-med within
   their existing practice. *(page exists — needs the corrections below)*
2. **Management Services Organization (MSO)** — comprehensive operational management for regen-med clinics.
3. **Practice Operations & Compliance** — AAAHC-aligned policies, procedures, compliance programs,
   audits, quality management. *(signature offering)*
4. **Clinical Program Implementation** — workflow design, clinical protocols, staff onboarding,
   competency training, operational standardization.
5. **Practice Growth & Marketing** — business development, physician branding, referral development,
   patient acquisition.
6. **Outcome Tracking & Data Analytics** — outcomes research, quality dashboards, KPI reporting,
   performance improvement.
7. **Credentialing & Provider Support** — provider onboarding, privileging, licensing support,
   operational readiness.
8. **Revenue Optimization** — lien management strategy, operational efficiency, pricing guidance.
9. **Multi-Clinic Management** — enterprise systems for organizations running multiple locations.
10. **Strategic Consulting** — executive leadership, practice transformation, expansion planning.

Ideal customer: physicians — physiatrists, sports medicine, and pain doctors — who treat
musculoskeletal / car-accident (PI) patients and want to add a profitable, compliant regenerative
service line without building it themselves.

---

## 🔧 Corrections still needed on existing pages

- **Legal pages need attorney review:** `/privacy` and `/terms` are standard templates, not
  legal advice — have counsel review before launch.
- **Web3Forms:** contact + application forms both wired to key `3376c1de…bcab0` → confirm the
  destination inbox is correct, or split to a second key if desired.

---

## ✔️ Already applied (Aug 2026)

- Blog REMOVED entirely (posts, routes, layout, BlogCard, lib/blog, content collection, and the
  About author "Posts by" section). Was previously just unlinked+noindexed; now fully deleted.
- Dr. Lagattuta confirmed absent from the live site.
- Vince Surra added as CEO with real bio + headshot (team data, About pages, homepage About block).
- Homepage Training corrected to in-person + live proctoring.
- Homepage Protocol corrected to one consistent, ultrasound-guided protocol.
- Homepage FAQ timeline → 3–6 months. Contact confirmation → within 48 hours.
- Homepage patient story removed (client: "not needed at this time").
- All 10 service pages built (via cowork) and reviewed against this brief — on-brief and accurate.
- ServiceLayout "From the Blog" sidebar card removed (kept blog fully hidden).
- Both forms wired to Web3Forms with subject lines + honeypot; application form submits inline.
- Built /protocol, /services (overview), /privacy, /terms. Repointed /compliance
  links → /services/operations-compliance and /who-we-work-with → /services. Zero broken internal
  links across all 38 pages.
- Business location corrected to 1860 Wilma Rudolph Blvd 128V, Clarksville, TN 37040 (hours CST
  are correct — Central Time). Governing law in Terms set to Tennessee.
- Service Areas page unlinked from nav/footer/homepage and force-noindexed (file kept), same
  treatment as the blog — hidden at launch.
- Sitemap added (@astrojs/sitemap) with site=https://regenitiva.com; includes all public pages.
  Generates /sitemap-index.xml. Site stays fully noindexed (robots Disallow + noindex meta) pending
  client review.
- Service Areas page REMOVED entirely (no location pages being built). Homepage Training section now
  states availability throughout the U.S. instead of listing state links.
- /tokens internal design-system page removed.

## 🖼️ Third-party asset licensing (audited Aug 2026)

- **Photography** (`hero-physician.png`, `service-hero.webp`, `protocol-image.webp`,
  `who-we-work-with-photo.webp`): AI-generated — no third-party stock license required.
  Used as generic imagery only (not presented as real named people).
- **Fonts:** Archivo (SIL OFL) + Roboto (Apache 2.0), via Google Fonts — cleared for commercial use.
- **Icons:** all hand-coded inline SVG, no icon library — original.
- **Logos/brand marks:** client's own assets. **Vince headshot:** client-provided.
- **Template:** Astro starter + @astrojs/sitemap (MIT). **Videos:** none.
- All third-party assets confirmed properly licensed. IP clause ("owned by or licensed to
  Regenitiva") stands unchanged.

## 🚀 Launch flip (do these together when client approves indexing)

1. Canonical domain confirmed: https://www.regenitiva.com (set in astro.config.mjs).
2. Update `public/robots.txt` from `Disallow: /` to allow crawling + add `Sitemap:` line.
3. Set `PUBLIC_NOINDEX=false` in the production build environment (Cloudflare Pages env var) to
   drop the noindex meta so all public pages become indexable.
