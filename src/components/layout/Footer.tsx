import Link from "next/link";
import siteConfig from "@/data/site.config.json";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-surface/50 mt-12 md:mt-24 pb-16 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-4 text-gold">{siteConfig.shortName}</h3>
                        <p className="text-muted-foreground mb-4 max-w-xs">{siteConfig.businessName}</p>
                        <p className="text-muted-foreground">{siteConfig.address}</p>
                        <p className="text-muted-foreground">{siteConfig.city}, {siteConfig.state}</p>
                    </div>

                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-muted-foreground hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-gold transition-colors">Services & Prices</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Contact</h3>
                        <p className="text-muted-foreground mb-2">
                            <span className="text-foreground font-medium">Phone / WhatsApp:</span> {siteConfig.phone}
                        </p>
                        <p className="text-muted-foreground">
                            <span className="text-foreground font-medium">Hours:</span> 10:00 AM – 8:30 PM
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
