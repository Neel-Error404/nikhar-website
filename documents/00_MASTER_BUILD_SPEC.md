# NIKHAR Website — End-to-End Build Spec
*For: NIKHAR Makeup Studio & Beauty Academy (Bhusawal)*  
*Goal: Premium, modern-luxe salon site with fast booking (WhatsApp/Call/Form) and clean services + pricing.*

> **Status inputs you already have**
- Logo (black + gold)
- Pricing + copy pack (Home/Services/Contact) in Markdown: `nikhar_website_content.md`

---

## 1) Outcomes (what “done” means)
**Business outcomes**
- Visitors can **book in <30 seconds** via WhatsApp/Call.
- Visitors can **browse services + prices clearly** and book a specific service.
- Strong **trust signals** (hygiene, reviews, location, map).
- Optional: If academy is active, capture **course enquiries**.

**Product outcomes**
- Mobile-first, premium look aligned with logo.
- Fast load time, clean animations, accessible UX.
- Maintainable: services/prices editable via one data file.

---

## 2) Recommended tech stack (Vercel-ready)
- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS** (theme tokens via CSS variables)
- Component kit: **shadcn/ui** (minimal, clean)
- Animations: **Framer Motion** (subtle fade/slide only)
- Forms: **React Hook Form + Zod**
- Images: `next/image` + WebP/AVIF
- SEO: metadata + OpenGraph + `LocalBusiness` JSON-LD
- Deployment: **Vercel**

---

## 3) Information architecture (routes)
### MVP routes (ship first)
- `/` Home  
- `/services` Services & Prices  
- `/about` About  
- `/contact` Contact & Appointments  

### High-ROI add-ons (Phase 2)
- `/gallery` Results / Gallery  
- `/reviews` Reviews (or embed section on Home)  
- `/academy` Courses & Enquiry *(only if academy is active)*  
- `/policies` Cancellation / hygiene / general policies  

---

## 4) Core user flows
### Flow A — “Book now”
Home → **Book Appointment** → choose:
- WhatsApp (prefilled)
- Call
- Request Appointment form

**Mobile must-have:** sticky bottom bar: WhatsApp | Call | Book

### Flow B — “Compare services/prices”
Home → Services → Category → Service row → **Book this**  
WhatsApp message prefilled: “Hi, I want to book *{service}* (₹{price}). Preferred date/time: __”

### Flow C — “Trust before booking”
Home → Reviews/Results → About → Contact/Book

### Flow D — Academy enquiry (if applicable)
Home/About → Academy → Course → Enquiry form/WhatsApp

---

## 5) Visual theme (aligned to logo)
### Palette (from logo)
- Background: #0B0B0B
- Surface: #141414
- Surface 2: #1B1B1B
- Text: #F5F5F5
- Muted text: #CFCFCF
- Gold primary: #FFC02D
- Gold secondary: #D8AA53
- Gold muted: #B28229
- Border: rgba(255,192,45,0.22)

### Typography
- Headings: **Playfair Display** *(or Cormorant Garamond)*  
- Body: **Inter** *(or Manrope)*  
- Numbers/prices: Inter (for clarity)

### UI style rules
- Minimal luxe: whitespace, thin gold dividers, geometric outlines.
- Buttons: gold outline + gold fill hover (subtle).
- Cards: dark surfaces with faint gold border.
- Animations: only small fade/slide; avoid heavy parallax.

---

## 6) Page templates (section-by-section)
### Home `/`
1. **Hero**: headline + 2 CTAs + trust line  
2. **Category Grid**: 6 cards (Facials, D-Tan, Bleach, Wax, Mani–Pedi, Spa)  
3. **Signature Highlight**: “NIKHAR Glow Rituals” + CTA  
4. **Featured Services**: 3 cards + starting price  
5. **Testimonials**: grid/slider  
6. **Location**: address + map + quick actions  
7. **Final CTA band**: Book/WhatsApp

### Services `/services`
- Hero + anchor nav
- Sections for each category
- Each service row: Name | Price | “Book this” button
- “Not sure?” consultation CTA section

### About `/about`
- Brand story + hygiene promise + (optional) team
- If academy is active: “Training & Certification” section + CTA

### Contact `/contact`
- WhatsApp/Call buttons at top
- Address + hours + map + directions
- Booking form (simple)
- Short policies

---

## 7) Data model (make updates easy)
### `data/services.json`
Store services in one place; render both Services page and featured items on Home.

**Schema**
- categories[]: { id, title, description, items[] }
- item: { id, name, price, variantLabel?, duration?, note?, featured? }

> Prices should match your current “₹-1” pricing.

---

## 8) Integrations & SEO (must do)
- WhatsApp deep links (prefilled messages)
- Click-to-call
- Google Map embed + “Get directions”
- SEO metadata per page (title/description)
- OpenGraph image + favicon
- JSON-LD: `LocalBusiness` with phone + address + geo
- Sitemap + robots.txt

Optional:
- Analytics (Plausible/GA)
- Google Reviews embed

---

## 9) Performance & quality bar (acceptance)
- Lighthouse targets: **Performance 90+**, Accessibility 90+, Best Practices 90+, SEO 90+
- All pages responsive: 360px → 1440px
- Keyboard navigable, visible focus states
- Images optimized, lazy-loaded
- No layout shift in hero (use fixed aspect ratios)

---

## 10) Required inputs from you (to finish perfectly)
Fill these in once, then the coding agent can build without back-and-forth:
1. Working hours (exact)
2. Booking preference (WhatsApp only vs WhatsApp + form)
3. Academy status (active yes/no) + course list (if yes)
4. Gallery photos (20–40) + 5–10 testimonials
5. Social handles (Instagram/Facebook)

---

## 11) Delivery checklist (what the agent must output)
- Vercel-deployed URL
- Git repo with clean commits
- Admin-free update path (edit `services.json` + copy MD)
- Documentation: how to update prices, phone, address, hours
