import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getWhatsAppLink } from "@/lib/whatsapp";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
    title: "Services & Prices",
    description: "Explore our wide range of salon services including facials, spa, waxing, and more.",
};

export default function ServicesPage() {
    const { categories } = servicesData;

    return (
        <div className="flex flex-col min-h-screen pb-20">
            <Section className="pt-8 pb-10 md:pt-12 md:pb-12 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Services & Price List</h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose by category — or message us and we'll recommend the best option for your skin/hair goal.
                </p>
            </Section>

            {/* Sticky Category Navigation */}
            <div className="sticky top-16 md:top-20 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-sm transition-all">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start md:justify-center overflow-x-auto gap-3 snap-x scrollbar-hide pb-2 md:pb-0">
                    {categories.map((cat) => (
                        <Button key={cat.id} variant="outline" className="border-border hover:border-gold hover:bg-gold/10 text-foreground whitespace-nowrap snap-center shrink-0 rounded-full transition-all duration-300" asChild>
                            <a href={`#${cat.id}`}>{cat.title}</a>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-16 mt-8">
                {categories.map((category) => (
                    <section key={category.id} id={category.id} className="scroll-mt-36 group">
                        <div className="mb-6 border-b border-border/40 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-2">
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gold">{category.title}</h2>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {category.items.map((item, i) => (
                                <div key={i} className="group/item flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-transparent hover:border-gold/30 bg-surface/50 hover:bg-surface hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 gap-4">
                                    <div className="transition-transform duration-300 group-hover/item:translate-x-1">
                                        <h3 className="text-lg font-semibold text-foreground/90 group-hover/item:text-gold transition-colors">{item.name}</h3>
                                        {(item as any).variantLabel && (
                                            <p className="text-sm text-muted-foreground mt-0.5">{(item as any).variantLabel}</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-6 justify-between sm:justify-end shrink-0 w-full sm:w-auto mt-2 sm:mt-0 opacity-90 group-hover/item:opacity-100 transition-opacity">
                                        <div className="flex flex-col items-start sm:items-end">
                                            <span className="text-xl font-medium whitespace-nowrap">₹{item.price}</span>
                                        </div>
                                        <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black whitespace-nowrap shrink-0 transition-all rounded-full" asChild>
                                            <a href={getWhatsAppLink(item.name, item.price)} target="_blank" rel="noopener noreferrer">Book this</a>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <Section className="mt-24 text-center bg-surface-2 rounded-3xl py-16">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Not sure what to choose?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Send us your concern (tan, pigmentation, dull skin, hair fall, dryness) and we'll recommend the best option.
                </p>
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-gold text-black hover:bg-gold-2" asChild>
                        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
