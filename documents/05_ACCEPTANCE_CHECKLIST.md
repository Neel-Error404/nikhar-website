# Acceptance Checklist (QA)
Use this list to confirm the site is production-ready.

---

## UX / Conversion
- [ ] Sticky **Book Appointment** in header
- [ ] Mobile bottom bar: WhatsApp | Call | Book
- [ ] “Book this” button on every service row
- [ ] WhatsApp messages prefilled with service + price
- [ ] Contact page has all actions above the fold

---

## Content correctness
- [ ] Prices match the ₹-1 version exactly
- [ ] Phone number correct everywhere
- [ ] Address correct everywhere
- [ ] Hours filled in

---

## Responsive
- [ ] 360px: no overflow, buttons usable
- [ ] 768px: grids reflow cleanly
- [ ] 1024px+: premium spacing, not cramped

---

## Accessibility
- [ ] Keyboard navigation works
- [ ] Visible focus rings
- [ ] Proper heading hierarchy
- [ ] Forms have labels + errors

---

## SEO / Local
- [ ] Titles + descriptions per page
- [ ] OpenGraph + favicon
- [ ] LocalBusiness JSON-LD present
- [ ] sitemap + robots.txt
- [ ] Google Map embed works

---

## Performance
- [ ] Lighthouse Performance 90+
- [ ] Images optimized (no huge JPGs)
- [ ] No layout shift in hero

---

## Deployment
- [ ] Vercel build passes
- [ ] 404 page present
- [ ] No console errors in production
