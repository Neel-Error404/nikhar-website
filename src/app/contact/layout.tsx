import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us & Booking",
    description: "Book your appointment at NIKHAR. Get directions, contact via WhatsApp or Call.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
