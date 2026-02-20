# Coding Agent Prompt — Build the NIKHAR Website End-to-End
You are a senior frontend engineer + UI/UX implementer. Build a production-ready salon website aligned to a black+gold luxury theme.

## Read first (inputs already provided)
1) Logo file available in project assets (black+gold).  
2) Content pack exists in Markdown: `nikhar_website_content.md` (Home/Services/Contact copy).  
3) Services/prices should be sourced from `data/services.json` (₹-1 pricing).  
4) Deploy to Vercel.

## Core requirements (must implement)
### Pages (App Router)
- `/` Home
- `/services` Services & prices (category anchors + rows)
- `/about` About
- `/contact` Contact & appointments

### UX must-haves
- Sticky header with **Book Appointment** CTA
- Mobile sticky bottom bar: **WhatsApp | Call | Book**
- On services page, every service row has **Book this** → WhatsApp deep link with prefilled message:
  “Hi, I want to book {service} (₹{price}). Preferred date/time: __”
- Contact page: WhatsApp/Call/Map visible immediately (no scrolling required)

### Theme / UI
- Modern luxe dark theme:
  - Background #0B0B0B, surfaces #141414/#1B1B1B
  - Accent gold #FFC02D, secondary gold #D8AA53
- Typography: Playfair Display (headings) + Inter (body)
- Use Tailwind with CSS variables for theme tokens
- Subtle animations only (Framer Motion fade/slide)

### Data-driven content
- Store services/prices in `data/services.json`
- Store business info (phone/address/hours/social) in `data/site.config.json`
- Render services from JSON (do not hardcode in JSX)

### SEO / Local SEO
- Per-page metadata (title, description)
- OpenGraph + favicon
- JSON-LD `LocalBusiness` schema using site config
- sitemap + robots.txt

### Performance & quality
- Use `next/image` for images; optimize sizes
- Lighthouse Performance >= 90 on Home
- Accessibility: keyboard nav, focus states, proper heading hierarchy

## Tech stack to use
- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui
- React Hook Form + Zod for forms
- Framer Motion for subtle animations
- Deployed on Vercel

## Booking implementation
- WhatsApp link uses E.164 phone from `site.config.json` (no '+'):
  `https://wa.me/{whatsappPhone}?text={encodedMessage}`
- “Call” uses `tel:` link
- “Get directions” uses `googleMapsLink` from site config

## Form behavior (simple but robust)
- Contact/appointment form validates client-side (name, phone, service interest, preferred time)
- On submit: show success message + provide WhatsApp fallback button
- Add spam honeypot field (hidden)

## Project structure (suggested)
- `app/` routes
- `components/` UI components
- `data/services.json`
- `data/site.config.json`
- `lib/whatsapp.ts` (helper to build links)
- `public/` images (logo, og image)
- `content/nikhar_website_content.md`

## Deliverables
1) Working site deployed on Vercel
2) Clean repo with README explaining how to update prices/hours/phone
3) No console errors; responsive; accessible; fast

## Do NOT do
- Do not use heavy animations
- Do not hardcode pricing in UI
- Do not add unnecessary pages unless requested

## After build
- Provide a quick checklist confirming:
  - All CTA flows work (WhatsApp/call/book)
  - Prices match JSON
  - SEO + schema present
  - Lighthouse summary
