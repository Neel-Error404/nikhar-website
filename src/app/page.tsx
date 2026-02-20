import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getWhatsAppLink, getCallLink } from "@/lib/whatsapp";
import servicesData from "@/data/services.json";
import siteConfig from "@/data/site.config.json";
import { MapPin, Phone, Star } from "lucide-react";

const categories = [
  { id: "facials", title: "Facials & Skincare", desc: "Expert treatments for glowing, healthy skin." },
  { id: "hair-makeup", title: "Haircare & Bridal Makeup", desc: "Precision styling, coloring, and flawless makeup." },
  { id: "d-tan", title: "D-Tan", desc: "Effective de-tanning for face and body." },
  { id: "wax", title: "Waxing", desc: "Smooth finish with regular and premium Rica options." },
  { id: "mani-pedi", title: "Mani–Pedi", desc: "Classic and Deluxe hand and foot care." },
  { id: "spa", title: "Spa & Body Polishing", desc: "Relaxing massages and luxurious body treatments." }
];

export default function Home() {
  const featuredServices = servicesData.categories.flatMap(c =>
    c.items.filter(item => (item as any).featured).map(item => ({ ...item, category: c.title }))
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden flex items-center min-h-[70vh]">
        <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-2 to-background -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
          <p className="text-gold tracking-widest uppercase text-sm font-semibold mb-4">
            ⭐ The destination for glowing skin & flawless hair
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-foreground tracking-tight">
            NIKHAR<br />
            <span className="text-gold italic font-normal">Your best look, every day.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            From expert haircuts and signature bridal makeups to deeply relaxing facials and body care. We combine premium hygiene with gentle expertise to bring out your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto bg-gold text-black hover:bg-gold-2 text-base h-12 px-8" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-gold text-gold hover:bg-gold/10 text-base h-12 px-8" asChild>
              <Link href="/services">View Services & Prices</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <Section id="categories" className="bg-surface/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground">Comprehensive care for your hair, skin, and styling needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Card key={cat.title} className="bg-surface border-border hover:border-gold/50 transition-colors group">
              <CardHeader>
                <CardTitle className="font-heading text-xl group-hover:text-gold transition-colors">{cat.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{cat.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/services#${cat.id}`} className="text-sm text-gold font-medium hover:underline inline-flex items-center">
                  View prices <span className="ml-1">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Signature Highlight */}
      <Section className="bg-gold text-black rounded-3xl my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-3xl py-8 px-4 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-black">The NIKHAR Consultation</h2>
          <p className="text-lg text-black/80 mb-8 leading-relaxed">
            Unsure which facial matches your skin type, or looking for the perfect haircut to frame your face? Just tell us your goals. From a quick trim to a full bridal makeover, we ensure the treatment is personalized exactly for you.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black/80 border-none" asChild>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Message us your styling goals</a>
          </Button>
        </div>
      </Section>

      {/* Featured Services */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Services</h2>
          <p className="text-muted-foreground">Our most loved treatments for instant results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.length > 0 ? featuredServices.map((service, i) => (
            <div key={i} className="flex flex-col p-6 rounded-2xl border border-border bg-surface hover:border-gold/30 transition-all">
              <div className="mb-4">
                <span className="text-xs font-medium px-2 py-1 bg-gold/10 text-gold rounded-full mb-3 inline-block">
                  {service.category}
                </span>
                <h3 className="text-xl font-heading font-semibold">{service.name}</h3>
                {(service as any).variantLabel && (
                  <p className="text-sm text-muted-foreground mt-1">{(service as any).variantLabel}</p>
                )}
              </div>
              <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                <p className="text-xl font-semibold">From ₹{service.price}</p>
                <Button size="sm" className="bg-gold text-black hover:bg-gold-2" asChild>
                  <a href={getWhatsAppLink(service.name, service.price)} target="_blank" rel="noopener noreferrer">Book</a>
                </Button>
              </div>
            </div>
          )) : (
            <div className="col-span-1 md:col-span-3 text-center text-muted-foreground py-8">
              Services loading...
            </div>
          )}
        </div>

        {/* Price Reassurance */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-surface-2 border border-border/50">
          <h3 className="text-lg font-semibold text-gold mb-2">Transparent Pricing. No Surprises.</h3>
          <p className="text-muted-foreground text-sm">We believe in honest services and clear costs before we start any treatment.</p>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What our clients say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Very neat work and polite staff. My facial was amazing.",
            "Good service at a fair price.",
            "Waxing was quick and clean."
          ].map((text, i) => (
            <Card key={i} className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex gap-1 text-gold mb-2">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 italic">"{text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Visit {siteConfig.shortName}</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">{siteConfig.address}, {siteConfig.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Call / WhatsApp</h4>
                  <p className="text-muted-foreground">{siteConfig.phone}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-gold text-black hover:bg-gold-2" asChild>
                <a href={getCallLink()}>Call Now</a>
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
          <div className="bg-surface rounded-2xl aspect-video border border-border flex flex-col items-center justify-center p-8 text-center hover:border-gold/30 transition-colors">
            <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Need Directions?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Open Google Maps to see our exact location and get real-time directions to our studio.
            </p>
            <Button size="lg" className="bg-gold text-black hover:bg-gold-2 w-full sm:w-auto" asChild>
              <a href={siteConfig.googleMapsLink} target="_blank" rel="noopener noreferrer">
                Get Directions to Salon
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center py-20 pb-32 md:pb-20">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">Ready to look your best?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Reach out anytime for bookings or enquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gold text-black hover:bg-gold-2 text-base px-8 h-12" asChild>
            <Link href="/contact">Book Your Visit</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 text-base px-8 h-12" asChild>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </Button>
        </div>
      </Section>
    </div>
  );
}
