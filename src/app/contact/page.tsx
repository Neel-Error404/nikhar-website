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

                    {/* Map Embed */}
                    <div className="bg-surface rounded-2xl h-full min-h-[400px] border border-border flex relative overflow-hidden group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.257085732296!2d75.76014458316335!3d21.030113880595304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd907abcde12345%3A0xabcdef1234567890!2sShree%20Ganesh%20Heights%2C%20Behind%20Datta%20Bakery!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute inset-0 pointer-events-none border border-border rounded-2xl"></div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
