# NIKHAR Design System (Theme + Components)
*Modern Luxe Dark theme aligned to the NIKHAR logo.*

---

## 1) Theme tokens
Use CSS variables so the whole site can be re-themed easily.

```css
:root {
  --bg: #0B0B0B;
  --surface: #141414;
  --surface-2: #1B1B1B;
  --text: #F5F5F5;
  --muted: #CFCFCF;

  --gold: #FFC02D;
  --gold-2: #D8AA53;
  --gold-muted: #B28229;
  --border: rgba(255,192,45,0.22);

  --radius: 16px;
}
```

---

## 2) Typography scale
- H1: 44–56px (desktop), 32–40px (mobile)
- H2: 28–36px
- H3: 20–24px
- Body: 16–18px
- Small: 13–14px

**Fonts**
- Heading: Playfair Display (fallback serif)
- Body: Inter (fallback system-ui)

---

## 3) Spacing & layout
- Container max-width: 1120–1200px
- Section padding: 72px desktop, 48px mobile
- Grid gaps: 16–24px

---

## 4) Button styles
**Primary (Gold)**
- Background: `--gold`
- Text: `--bg`
- Hover: slight glow, +2% brightness
- Focus: visible outline

**Secondary (Outline)**
- Border: `--gold`
- Text: `--gold`
- Hover: background `rgba(255,192,45,0.12)`

**Tertiary (Ghost)**
- Text: `--muted`
- Hover: subtle background

---

## 5) Cards & dividers
- Card background: `--surface`
- Border: `1px solid var(--border)`
- Rounded corners: `--radius`
- Divider lines: thin gold line at 20–30% opacity

---

## 6) Animation guidelines
- Only: fade-in, slide-up (8–16px), 200–350ms
- Avoid: heavy parallax, long delays, aggressive motion

---

## 7) Components (minimum library)
- Header (sticky) + CTA
- Mobile bottom bar (WhatsApp/Call/Book)
- Hero
- Category grid cards
- Service list rows
- Featured service cards
- Testimonial cards
- Map section
- Footer
- Form inputs (accessible)
