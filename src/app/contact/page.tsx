import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import siteConfig from "@/data/site.config.json";
import { getWhatsAppLink, getCallLink } from "@/lib/whatsapp";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pb-24">
            <Section className="pt-12 md:pt-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Contact & Appointments</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Call or WhatsApp us to book your glow-up. Walk-ins are always welcome, but scheduling ahead guarantees your spot.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] border-none" asChild>
                            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Now
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10" asChild>
                            <a href={getCallLink()}>
                                <Phone className="w-5 h-5 mr-2" />
                                Call Us
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Card className="bg-surface border-border">
                            <CardContent className="p-6 md:p-8 space-y-8">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-xl mb-1 text-foreground">Phone / WhatsApp</h3>
                                        <p className="text-muted-foreground text-lg">{siteConfig.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-xl mb-1 text-foreground">Address</h3>
                                        <p className="text-muted-foreground text-lg">{siteConfig.address}</p>
                                        <p className="text-muted-foreground text-lg">{siteConfig.city}, {siteConfig.state}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-xl mb-1 text-foreground">Working Hours</h3>
                                        <p className="text-muted-foreground text-lg">10:00 AM – 8:30 PM (Daily)</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="bg-surface-2 p-6 rounded-2xl border border-border/50 text-sm">
                            <h4 className="font-semibold text-gold mb-3 text-lg">Our Salon Policies</h4>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                                <li>Please try to arrive on time to ensure prompt service.</li>
                                <li>If you need to reschedule or cancel, just drop us a quick WhatsApp message.</li>
                                <li>For specific skin or hair goals, we offer a free consultation before starting your treatment.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Directions CTA */}
                    <div className="bg-surface rounded-2xl border border-border flex flex-col items-center justify-center p-8 md:p-12 text-center h-full min-h-[300px] hover:border-gold/50 transition-colors">
                        <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-heading font-bold mb-4">Find Your Way</h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Click below to view our exact location on Google Maps and get real-time directions to the studio.
                        </p>
                        <Button size="lg" className="bg-gold text-black hover:bg-gold-2 w-full sm:w-auto" asChild>
                            <a href={siteConfig.googleMapsLink} target="_blank" rel="noopener noreferrer">
                                Get Directions to Salon
                            </a>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
