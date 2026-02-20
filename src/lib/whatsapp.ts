import siteConfig from "@/data/site.config.json";

export function getWhatsAppLink(serviceName?: string, price?: number, date?: string) {
  const phone = siteConfig.whatsappPhone;
  let text = "Hi, I want to book an appointment.";
  
  if (serviceName && price) {
    text = `Hi, I want to book *${serviceName}* (₹${price}). Preferred date/time: ${date || "___"}`;
  }
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getCallLink() {
  return `tel:${siteConfig.phone}`;
}
