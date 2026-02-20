import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about NIKHAR Makeup Studio & Beauty Academy.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12 pb-24">
            <Section className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">About NIKHAR</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your reliable neighborhood spot in Bhusawal for beautiful styling, expert makeup, and honest beauty care.
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <div className="bg-surface border border-border p-8 md:p-12 rounded-3xl">
                        <h2 className="text-2xl font-heading font-bold text-gold mb-4">Our Story</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We opened NIKHAR because we believe looking your best shouldn't be a hassle or an intimidating experience. Our salon was created to be a comfortable space where you can sit back and let our experienced team take care of the rest. Whether you just need a quick trim or you are getting ready for your wedding day with our bridal makeup services, we treat every single visit with the exact same level of care.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-gold mb-4 mt-12">The Hygiene Promise</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We take your safety very seriously. Our team makes sure every tool is thoroughly sanitized and fresh towels are ready for every single client. You'll always know exactly what you are paying for before we begin, and we'll only recommend services that actually fit your skin and hair goals. No pushy sales, just straightforward and reliable service.
                        </p>
                    </div>

                    <div className="bg-gold text-black p-8 md:p-12 rounded-3xl mt-12">
                        <h2 className="text-2xl font-heading font-bold mb-4">Beauty Academy</h2>
                        <p className="text-black/80 leading-relaxed mb-8">
                            Are you passionate about beauty and makeup? NIKHAR Academy offers professional training courses
                            designed to turn your passion into a career. Learn advanced techniques from experienced artists
                            in a real studio environment.
                        </p>
                        <Button size="lg" className="bg-black text-white hover:bg-black/80 border-none" asChild>
                            <a href={getWhatsAppLink("Academy Enquiry")} target="_blank" rel="noopener noreferrer">Enquire About Courses</a>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
