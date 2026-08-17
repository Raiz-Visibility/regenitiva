# Regenitiva — Third-Party Service Audit (pre-launch)

**Purpose:** a complete list of every third-party service the website connects to, for the person
maintaining the Privacy Policy. Verified against the compiled site (`dist/`), August 2026.

Format: **Service → Purpose → Data transmitted**

---

## Services the site connects to

1. **Google Fonts** (`fonts.googleapis.com`, `fonts.gstatic.com`)
   → **Purpose:** serves the site's web fonts (Archivo and Roboto).
   → **Data transmitted:** when a visitor loads any page, their browser requests the font stylesheet
   and font files directly from Google. Google receives standard request metadata — the visitor's
   **IP address, user-agent (browser/OS), and referring page**. No form data or account data.

2. **Web3Forms** (`api.web3forms.com`)
   → **Purpose:** delivers contact-form and consultation-request submissions to Regenitiva's inbox.
   → **Data transmitted:** **only when a visitor submits a form** — the fields they enter (**name,
   email, phone, practice type, and message**), plus standard request metadata (IP/user-agent).
   Web3Forms processes the submission and forwards it to the destination email. Present on the
   contact page and every service/protocol page (the sidebar consultation form).

3. **Google Maps** (`maps.google.com`) — embedded on the Contact page
   → **Purpose:** displays a map of the business location (1860 Wilma Rudolph Blvd, Clarksville, TN)
   via an embedded iframe.
   → **Data transmitted:** when a visitor loads the Contact page, the map iframe loads directly from
   Google, which receives the visitor's **IP address, user-agent, and referring page**, and Google
   Maps embeds may set cookies. (Added Aug 2026 — not present in the original audit.)
   → **Privacy Policy action:** should be disclosed alongside Google Fonts.

4. **Cloudflare** (hosting + DNS — infrastructure)
   → **Purpose:** hosts and serves the website (Cloudflare Pages) and provides DNS.
   → **Data transmitted:** as the host/CDN, Cloudflare processes **every** request to the site —
   visitor **IP address, request headers, and traffic metadata**. This is infrastructure-level, not
   a page-embedded widget, but it is included here for completeness.

---

## Confirmed NOT present (checked and absent)

The site embeds **no** widgets, trackers, or third-party scripts beyond the three above. Specifically
confirmed absent:

- ❌ YouTube / Vimeo / any video embeds
- ✅ Google Maps — NOW PRESENT on the Contact page (see item 3 above); update the Privacy Policy.
- ❌ Calendly / any scheduling platform
- ❌ HubSpot / any CRM widget
- ❌ Chat widgets (Intercom, Drift, etc.)
- ❌ Review widgets
- ❌ Payment providers
- ❌ Social media embeds (Facebook, X/Twitter, LinkedIn, Instagram)
- ❌ reCAPTCHA / Cloudflare Turnstile / any CAPTCHA
- ❌ Google Analytics / Google Tag Manager / any analytics or advertising pixel
- ❌ No advertising or analytics cookies are set

---

## Note for the Privacy Policy maintainer

The current Privacy Policy (`/privacy`) **already discloses Google Fonts and Web3Forms**, including
that Google Fonts receives IP/request data and that Web3Forms processes form submissions.

**Possible addition to consider:** the Privacy Policy does not currently name **Cloudflare** as the
hosting/DNS provider that processes request data. If the maintainer wants full transparency about
infrastructure-level processing, a short line naming the hosting provider could be added. (Not
required, but disclosed here so it's a documented decision.)

No other disclosures appear necessary, since no additional third-party services are in use.
