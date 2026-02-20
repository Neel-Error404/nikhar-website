# Vercel Deployment & DevOps Notes
This is the exact checklist the coding agent should follow.

---

## Local setup
- Node.js 20+
- `pnpm` recommended (or npm/yarn)

Commands:
- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm start`

---

## Environment variables (if any)
If you use a form backend (email/Sheets), store keys in Vercel env vars:
- `CONTACT_EMAIL` (optional)
- `RESEND_API_KEY` (optional)
- `GOOGLE_SHEETS_WEBHOOK` (optional)

If you do NOT need backend emailing, keep forms as:
- client-side validation + WhatsApp fallback

---

## Vercel steps
1. Push repo to GitHub
2. Import project into Vercel
3. Set framework preset = Next.js
4. Add env vars (if applicable)
5. Deploy
6. Add custom domain (optional)
7. Enable analytics (optional)
8. Run Lighthouse

---

## SEO essentials
- sitemap
- robots.txt
- Per-page metadata: title/description
- OpenGraph image
- JSON-LD LocalBusiness schema

---

## Performance essentials
- Use `next/image` for all images
- Compress gallery images, serve WebP/AVIF
- Lazy-load offscreen images
- Avoid huge JS bundles
