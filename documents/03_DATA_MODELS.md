# Data Models
Use data files so content changes don’t require UI code edits.

---

## services.json schema (suggested)
```json
{
  "categories": [
    {
      "id": "facials",
      "title": "Facials",
      "description": "From quick glow to premium tightening — pick based on your skin concern.",
      "items": [
        { "id": "fruit-facial", "name": "Fruit Facial", "price": 299, "featured": false }
      ]
    }
  ]
}
```

---

## WhatsApp booking link format
Base:
`https://wa.me/<PHONE>?text=<ENCODED_MESSAGE>`

Message template:
`Hi, I want to book {{service}} (₹{{price}}). Preferred date/time: {{slot}}`

---

## site.config.json (suggested)
Store business essentials in one file:
- phone, whatsappPhone
- address, city
- hours
- social links
- map link/embed URL
